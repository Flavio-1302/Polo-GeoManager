import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import * as L from "leaflet";
import { Icon, icon, Marker } from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent {

  public redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  public blueIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  private suggest!: L.Map;





  constructor() { }



  ngAfterViewInit(): void {

    //Marker


    //Map
    this.suggest = L.map('suggest', {
      center: [37.78863, 14.83377],
      zoom: 14,
      zoomControl: false

    });

    var onMapClick = (e) => {
    };

    this.suggest.on('click', onMapClick);



    //Layer
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.suggest);

  //   //Routing Machine
  //   var routing = L.Routing.control({
  //     geocoder: (L as any).Control.Geocoder.nominatim(),
  //     routeWhileDragging: true,

  //       }).addTo(this.suggest);


  //       var searchPoint = (e) => {
  //         //var route = e.route;

  //         //for(let i =0;i<route.coordinates.length;i++){}

  //         //37.852252, 14.822273
  //         var marker = L.marker([37.852252, 14.822273]).addTo(this.suggest);
  //       };

  //       routing.on('routeselected', searchPoint);

   }



    onSubmit(form:NgForm){


      var control = L.Routing.control({
        waypoints: [
          L.latLng(37.858653, 14.818497),
          L.latLng(37.74692, 14.864373),
        ],
      }).addTo(this.suggest);

      var Cascata = L.marker([37.852252, 14.822273], {icon: this.blueIcon}).addTo(this.suggest);
      Cascata.bindPopup(
        "Near you: <br>" +
        "Cascata delle balze"
      );
      var marker = L.marker([37.858651, 14.818454], {icon: this.redIcon}).addTo(this.suggest);
      var marker = L.marker([37.785297, 14.828796], {icon: this.blueIcon}).addTo(this.suggest);
      var marker = L.marker([37.784146, 14.830062], {icon: this.blueIcon}).addTo(this.suggest);
      var marker = L.marker([37.783163, 14.833667], {icon: this.blueIcon}).addTo(this.suggest);
      var marker = L.marker([37.804973, 14.801331], {icon: this.blueIcon}).addTo(this.suggest);
      var marker = L.marker([37.745667, 14.871025], {icon: this.blueIcon}).addTo(this.suggest);
      var marker = L.marker([37.746929, 14.86433], {icon: this.redIcon}).addTo(this.suggest);


      control.hide()


    }
   }






