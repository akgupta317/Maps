import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'
import { LoginComponent } from '../Logins/login.component'
import { LogwithgoogleComponent } from '../googlelogin/logwithgoogle.component'







import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        AgmJsMarkerClustererModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDUurT5m8MBU_F4snfDS2Hn0ljOP0Ke-VA',
            libraries: ["places"]
        })
    ],
    providers: [],
    declarations: [AppComponent, LogwithgoogleComponent, LoginComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
