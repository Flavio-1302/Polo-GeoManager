import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import * as L from "leaflet";
import { Icon, icon, Marker } from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {
  private plan!: L.Map;

  private defaultIcon: Icon = icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png"
  });



  constructor() { }

  ngAfterViewInit(): void {

    //Marker


    //Map
    this.plan = L.map('plan', {
      center: [37.78863, 14.83377],
      zoom: 14,
      zoomControl: false

    });

    var onMapClick = (e) => {
    };

    this.plan.on('click', onMapClick);


    //Layer
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.plan);

    //Routing Machine
    var routing = L.Routing.control({
      geocoder: (L as any).Control.Geocoder.nominatim(),
      routeWhileDragging: false
    }).addTo(this.plan);

routing.setPosition("topleft")

    var searchPoint = (e) => {
      //var route = e.route;

          //for(let i =0;i<route.coordinates.length;i++){}

          //37.852252, 14.822273
        };

        routing.on('routeselected', searchPoint);

  }


}




