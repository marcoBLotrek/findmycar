import { Injectable } from "@angular/core";

//@Injectable
export class GooglemapService {
    vehicles  = [];
    setLocalstorage()
    {
        localStorage.setItem("dati", JSON.stringify(this.vehicles));
    }
    getLocalstorage()
    {
        this.vehicles=JSON.parse(localStorage.getItem("dati"));
        //localStorage.setItem("dati", JSON.stringify(this.vehicles));
    }
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
    insertVehicle(license,description,street,pos)
    {
     let id=this.searchMaxid();
         if (id>0) id++;
     this.vehicles.push({
                            id: id,
                            license: license,
                            description:description,
                            street:street,
                            longitude:pos.lng,
                            latitude:pos.lat
                        }); 
      this.setLocalstorage();                  
    }
    searchMaxid()
    {
      let maxId=0;
      let dim = this.vehicles.length; 
        if (dim>0){
        for (var i = 0; i < dim; i++) {
            
            if (this.vehicles[i].id>maxId) {
             maxId=this.vehicles[i].id;
            }
        } 
       } 
        return maxId;
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
