import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import * as L from "leaflet";
import { Icon, icon, Marker } from "leaflet";
import { GeocoderResponse } from 'src/app/models/geocoder-response.model';
import { environment } from 'src/environments/environment';
import { QueryService } from '../query.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {


  //Map Declaration
  private search!: L.Map;

  constructor(private http: HttpClient, private router: Router) { }



  ngAfterViewInit(): void {




    //Map
    this.search = L.map('search', {
      center: [37.78863, 14.83377],
      zoom: 14,
      zoomControl: false
    });



    //Layer
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.search);

    //Setting Icon
    L.Marker.prototype.options.icon = L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    var markers = L.layerGroup().addTo(this.search);
    var router = this.router


    //markers
    this.http.get<object[]>("https://projectingschool.altervista.org/funcs/search.php").subscribe((results) => {

      for (let i = 0; i < results.length; i++) {

        var popup = document.createElement("div");

          var button = document.createElement("button");
        button.innerHTML = "Guidami";
        button.classList.add("guidami");

        button.onclick = function () {
          router.navigate(['/plan']);

        };



        var POI = L.marker([results[i]["latitudine"], results[i]["longitudine"]]).bindPopup(popup).addTo(this.search);

        POI.setPopupContent("<h3>" + results[i]["nome"] + "</h3><p><div class='spacer'>" + results[i]["descrizione"] + "</div></p>" + "Questo punto è " + results[i]["stato"]
          + "<br>");
          popup.classList.add("popup");

        popup.appendChild(button);

      }


    })

  }

  onSubmit(form: NgForm) {
    const url = `https://maps.google.com/maps/api/geocode/json?address=${form.value.place}&sensor=false&key=AIzaSyBx2XbGAwSA0jkEY0wd92beLSBN5K2nTNQ`;
    return this.http.get<GeocoderResponse>(url).subscribe((response) =>{

        var latitude:any = response.results[0].geometry.location.lat;
        var longitude:any = response.results[0].geometry.location.lng;
        console.log(response.results[0].geometry.location.lat);
        this.search.flyTo([latitude,longitude])

    });



  }

}



