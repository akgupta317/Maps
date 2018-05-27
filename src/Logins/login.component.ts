import { Component, OnInit, ViewChild  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../Logins/login.service';


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    providers: [LoginService]
})


export class LoginComponent implements OnInit   {

    isauthenticateresponse: any[];
    isauthenticateuser: boolean = false;
    contact: number = 0;
    pass: string = "";



    constructor(private _loginservice: LoginService) {
    }

    AuthenticateUser(contactnumber: number, password: string): boolean {

        this._loginservice.authenticatuser(contactnumber, password)
            .subscribe(data => {
                this.isauthenticateresponse = data
            });
        return this.isauthenticateresponse["isauthenticate"];

    }

    ClickButton(contact, pass) {

        this.isauthenticateuser = this.AuthenticateUser(this.contact, this.pass);

  
    }


    ngOnInit() {
        console.log("start");
    }


}

