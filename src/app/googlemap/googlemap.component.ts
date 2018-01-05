import { Component, OnInit, Input } from '@angular/core';
import { GooglemapService} from './googlemap.service'
@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
 
  public map;
  public latitude: number;
  public longitude: number;
  public zoom: number;
  
  vehicles = [];
  constructor(service: GooglemapService) { 
    this.vehicles= service.getVehicle();
  }
  
  ngOnInit() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
    console.log(this.map);
    this.setCurrentPosition();
  }
  private setCurrentPosition() {
    console.log(this.map);
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(pos);
        
        this.map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }
  private setPoint(ltg,lng){
   
   this.latitude2=ltg;

   this.longitude2=lng;
  }

}