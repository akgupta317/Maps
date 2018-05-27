import { Component, Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()


export class AppService {

    constructor(private _http: Http) { }

    getLatandLong(name: string, location: string,JobId:number) {

        return this._http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ name + location+'&key=AIzaSyDUurT5m8MBU_F4snfDS2Hn0ljOP0Ke-VA')
                   .map((res: Response) => res.json());
    }

}