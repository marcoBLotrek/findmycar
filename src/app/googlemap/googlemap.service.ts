export class GooglemapService {
    vehicles  = [ 
        {
        license : 'a1',
        description : 'Pandino',
        street: 'via luigi galvani 15, Pistoia',
        longitude : 10.932637,
        latitude : 43.932985
         
        }, 
        {
          license : 'a2',
          description : 'Motorino',
          street: 'via della torre 1, Pistoia',
          longitude : 11, 
          latitude : 10
        }
        ];
    getVehicle() {
        return this.vehicles;
    }
}