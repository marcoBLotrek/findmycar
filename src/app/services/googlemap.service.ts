import { Injectable } from "@angular/core";

//@Injectable
export class GooglemapService {
    vehicles  = [ 
        {
            id:1,
            license : 'a1',
            description : 'Pandino',
            street: 'via luigi galvani 15, Pistoia',
            longitude : 10.932637,
            latitude : 43.932985
         
        }, 
        {
            id:2,
            license : 'a2',
            description : 'Motorino',
            street: 'via della torre 1, Pistoia',
            longitude : 10.919013, 
            latitude : 43.933675
        }
        ];
    getVehicle() {
        return this.vehicles;
    }
    changeLatlng(id,pos) {
        console.log('id:'+id);
        console.log('latitude:'+pos.lat);
        console.log('longitude:'+pos.lng);
        let index = this.searchIndex(id);
        this.vehicles[index].latitude=pos.lat;
        this.vehicles[index].longitude=pos.lng;
        
    }
   searchIndex(id)
    {  
      
        let dim = this.vehicles.length; 
        for (var i = 0; i < dim; i++) {
            
            if (this.vehicles[i].id==id) {
             return i;
            }
        }
    }
}
