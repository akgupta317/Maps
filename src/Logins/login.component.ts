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
    email: string="username";
    password: string = "SamplePasswords";
    userdata: UserContext;




    constructor(private _loginservice: LoginService) {
    }

    AuthenticateUser(contactnumber: string, password: string): boolean {

        this._loginservice.authenticatuser(contactnumber, password)
            .subscribe(data => {
                this.isauthenticateresponse = data
                    , this.userdata.firstname = data.fisrtName
                    , this.userdata.lastname = data.lastname
                    , this.userdata.id = data.id
            });
        return this.isauthenticateresponse["isauthenticate"];

    }


    ngOnInit() {
        console.log(" login start");
    }

    login(): void {
        this.isauthenticateuser = this.AuthenticateUser(btoa(this.email), btoa(this.password));
    }



}

interface UserContext {

    firstname: string;
    lastname: string;
    id: number;


}

