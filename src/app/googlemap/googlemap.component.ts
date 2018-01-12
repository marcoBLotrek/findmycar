import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { GooglemapService} from '../services/googlemap.service'

declare var google: any;

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})

export class GooglemapComponent implements OnInit {


  @ViewChild('map') map;
  public latitude: number;
  public longitude: number;
  public zoom: number;
  public num=0;
  public marker =[];
  public destination=[];
  public pointToTrace;
  public myservice;
  vehicles = [];
  public directionsService;
  public directionsDisplay;

  constructor(service: GooglemapService) { 
    this.myservice=service;
    this.vehicles= service.getVehicle();
    this.directionsService=new google.maps.DirectionsService();
    this.directionsDisplay=new google.maps.DirectionsRenderer();
  }
  
  ngOnInit() {
    
    this.destination[1]=new google.maps.LatLng(43.9320643,10.932747);
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 10, lng: 20},
      zoom: 15,
      rotateControl:true
    });
    
    this.setCurrentPosition();
  }

  private setCurrentPosition() {
 
   if (navigator.geolocation) {
     
      navigator.geolocation.getCurrentPosition((position)=> {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(pos);
        
        this.map.setCenter(pos);
        this.num=this.num+1;
        this.destination[1]=pos;
        this.traceRoute();
        //this.setPoint(pos.lat,pos.lng);
      });
    } else {
      alert(' Geo Localizzazione non supportata ');
    }
  }

  /*private changePos(id,pos)
  {
    this.myservice.changePos(id);
  }*/
  private traceRoute()
  {
   
      var a=this.pointToTrace;
      if (a>1)
      {
        
        console.log(this.destination[a]);
        var request= {
          origin:this.destination[1],
          destination:this.destination[a],
          travelMode:"DRIVING"
        };
        console.log(request);
        this.directionsDisplay.setMap(this.map);
        this.directionsService.route(request,(result,status)=>{
          console.log(result,status);
          if (status === google.maps.DirectionsStatus.OK) {
            this.directionsDisplay.setDirections(result);
        }
          
        })
    }
  }
  private setPoint(ltg,lng){
    this.num=this.num+1;
    var a=this.num;
    var myLatlng = new google.maps.LatLng(ltg,lng);
    this.marker[a] = new google.maps.Marker({
        position: myLatlng
      });
    this.destination[a]=new google.maps.LatLng(ltg,lng); 
    this.marker[a].setMap(this.map);
    if (a>1)
    {
      google.maps.event.addDomListener(this.marker[a], 'click', ()=> {
        this.pointToTrace=a;
        this.traceRoute();
       });
    }
 
  }

}