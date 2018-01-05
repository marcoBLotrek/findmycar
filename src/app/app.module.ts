import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {VehicleService} from './services/vehicle.service';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes }   from '@angular/router';
import { GooglemapService } from './googlemap/googlemap.service';
const routes: Routes = [ {
    path:'',
    pathMatch:'full',
    component: GooglemapComponent
 },
 {
    path:'login',
    component: LoginComponent
 }
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GooglemapComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_W0qvHg9HG7quDxXvkjmeDwMXy8gS-5U'
    }),
    RouterModule.forRoot(routes) 
  ],
  providers: [GooglemapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
