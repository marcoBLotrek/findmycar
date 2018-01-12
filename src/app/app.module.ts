import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GooglemapService} from './services/googlemap.service';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes }   from '@angular/router';
import { FormsModule } from '@angular/forms';

//import { GooglemapService } from './googlemap/googlemap.service';
import { SetpositionComponent } from './setposition/setposition.component';
const routes: Routes = [ {
    path:'',
    pathMatch:'full',
    component: GooglemapComponent
 },
 {
    path:'login',
    component: LoginComponent
 },
 {
  path:'setposition',
  component: SetpositionComponent
}
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GooglemapComponent,
    LoginComponent,
    SetpositionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_W0qvHg9HG7quDxXvkjmeDwMXy8gS-5U',
      libraries: ["places"]
    }),
    RouterModule.forRoot(routes) 
  ],
  providers: [GooglemapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
