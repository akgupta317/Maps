import { Component, Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()


export class LoginService {

    constructor(private _http: Http) { }

    authenticatuser(contactnumber: number, password: string) {


        var headers = new Headers();

        headers.append('Api-User-Agent', 'Example/1.0');

        var apiUrl: string = 'https://Apiaddress';


        return this._http.get(apiUrl, { headers: headers })
                         .map((res: Response) => res.json());
    }

}