import { Component, ElementRef, AfterViewInit } from '@angular/core';
declare const gapi: any;



@Component({
    selector: 'app-login-google',
    templateUrl:'logwithgoogle.component.html'
})
export class LogwithgoogleComponent implements AfterViewInit {

    private clientId: string = '362713178429-1mt6as1mi70vlbq06aa9bffm0hc93160.apps.googleusercontent.com';
     logged: boolean;

    private scope = [
        'profile',
        'email',
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/contacts.readonly',
        'https://www.googleapis.com/auth/admin.directory.user.readonly'
    ].join(' ');

    public auth2: any;
    public googleInit() {
        let that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: that.clientId,
                cookiepolicy: 'single_host_origin',
                scope: that.scope
            });

            that.attachSignin(that.element.nativeElement.firstChild);
        });
        this.logged = true;
    }
    public attachSignin(element) {
        let that = this;
        this.auth2.attachClickHandler(element, {},
            function (googleUser) {

                let profile = googleUser.getBasicProfile();
                console.log('Token || ' + googleUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
                
                //API to Save  Data


            }, function (error) {
                console.log(JSON.stringify(error, undefined, 2));
            });
    }

    constructor(private element: ElementRef) {
        console.log('ElementRef: ', this.element);
    }

    ngAfterViewInit() {
        this.googleInit();
       
    }

    Singout(event) {

        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }


}