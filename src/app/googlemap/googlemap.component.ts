import { Component, OnInit, Input } from '@angular/core';
import { GooglemapService} from './googlemap.service'
@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
 
  title: string = 'My first AGM project';
  lat: number = 43.933306;
  lng: number = 10.932308;
  zoom: number = 20;
  vehicles = [];
  constructor(service: GooglemapService) { 
    this.vehicles= service.getVehicle();
  }

  ngOnInit() {
    /*calcRoute();*/
  }
  setPoint(ltg,lng){
   
   this.lat=ltg;

   this.lng=lng;
  console.log(this.lat);
  }

  function calcRoute() {
    var start = new google.maps.LatLng(37.334818, -121.884886);
    //var end = new google.maps.LatLng(38.334818, -181.884886);
    var end = new google.maps.LatLng(37.441883, -122.143019);
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(start);
    bounds.extend(end);
    map.fitBounds(bounds);
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(map);
        } else {
            alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
        }
    });
}


}