import {Injectable} from '@angular/core'
import { Vehicle } from '../interfaces/vehicle';
@Injectable()
export class VehicleService {
    vehicle : Array<Vehicle> = [ {
        license : 'a1',
        description : 'Pandino',
        longitude : '10.932637',
        latitude : '43.932985'
         
   }, 
   {
    license : 'a2',
    description : 'Motorino',
    longitude : '10.919095', 
    latitude : '43.933475'
      
   
   }
]
    getVehicle() {
       return this.vehicle;
    }
    deleteVehicle(vehicle) {
        let index= this.vehicle.indexOf(vehicle);
        if (index>=0)
        {
            this.vehicle.splice(index,1);
        } 
       
    }
}
