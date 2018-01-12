import { Component, OnInit, Input } from '@angular/core';
import { GooglemapService} from '../services/googlemap.service'
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-setposition',
  templateUrl: './setposition.component.html',
  styleUrls: ['./setposition.component.css']
})
export class SetpositionComponent implements OnInit {
  vehicles = [];
  public indexVehicle;
  public myservice;
  public targa:string;
  public descrizione:string;
  public via:string;

  constructor(service: GooglemapService) {
    this.myservice=service;
    this.vehicles= service.getVehicle();
   }
   
  ngOnInit() {
   
  }
  recPosition(id)
  {
    if (navigator.geolocation) {
     
      navigator.geolocation.getCurrentPosition((position)=> {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.myservice.changeLatlng(id,pos);
      });
      
    } 
    else {
      alert(' Geo Localizzazione non supportata ');
    }
  }
  onSubmit(){
      console.log(this.via);
      console.log("Form Submitted!");
     

      if (navigator.geolocation) {
     
        navigator.geolocation.getCurrentPosition((position)=> {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.myservice.insertVehicle(this.targa,this.descrizione,this.via,pos);
        });
        
      } 
      else {
        alert(' Geo Localizzazione non supportata ');
      }
  }

}
