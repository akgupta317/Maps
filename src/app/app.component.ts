import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../app/app.service';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [AppService]
})


export class AppComponent implements OnInit {

    // var decalretion
    title: string = 'my near place';
    locationData = {};
    locationArray: any[];
    Cordinates: maker[] =
        [
            { "name": "mumbai", "lat": 19.0760, "lng": 72.8777, drgabble: true },
            { "name": "kalyan", "lat": 19.2403, "lng": 73.1305, drgabble: true }

        ];
    public searchControl: FormControl;
    SalaryRange: any[] =
        [
            { "Range": "<3Lac", "value": 3 },
            { "Range": "<5Lac", "value": 5 },
            { "Range": "<7Lac", "value": 7 },
            { "Range": "<9Lac", "value": 9 },
            { "Range": "<11Lac", "value": 11 },
            { "Range": "<13Lac", "value": 13 },
            { "Range": "<15Lac", "value": 15 },
            { "Range": ">15Lac", "value": 16 }
        ];

    @ViewChild("search")
    public searchElementRef: ElementRef;
    AllOffers: any[];

    i: number = 0;
    streetViewControl: boolean = false;
    // marker_icon: string = "../assets/bank_location-512.png";   //Ico Url 
    previous: number = 0;
    maxzoom: number = 10;
    minzoom: number = 2;
    indialat: number = 19.0760;
    indialog: number = 72.8777;
    zoom: number = 4;
    maptype: string = "hybrid";
    xxx: any[] =
        [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "color": "#8080ff"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#8080ff"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ];
    flage: boolean;
    filterdata: maker[] = [];

    constructor(private _appservice: AppService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {

        this.LoadData();
        this.flage = true;
        this.locationArray = [];



    }

    callservice(counter: number, flage1: boolean): void {



        if (flage1 && counter < this.AllOffers.length) {
            this._appservice.getLatandLong(this.AllOffers[counter].Company, this.AllOffers[counter].JobLocation, this.AllOffers[counter].JobID)
                .subscribe(data => {
                    this.locationData = { "locationdata": data, "JobId": this.AllOffers[counter].JobID};
                    //this.locationData.data = data;
                    //this.locationData.JobId = this.AllOffers[counter].JobID;
                    this.locationArray.push(this.locationData)
                    flage1 = true;
                    console.log("in call");
                    console.log(counter);
                    counter++;
                    this.callservice(counter, flage1);
                });
            if (counter >= this.AllOffers.length - 1) {
                this.setCordinates(this.locationArray);

            }

        }
    }

    setCordinates(CoOrdinates: any[]) {

        this.locationArray = CoOrdinates;
       // console.log(this.locationArray);
        this.Cordinates = [];
        for (var i = 0; i < this.locationArray.length; i++) {
            if (this.locationArray[i].locationdata.results.length > 0) {
                this.Cordinates.push({ "name": this.locationArray[i].locationdata.results["0"].formatted_address, "lat": this.locationArray[i].locationdata.results["0"].geometry.location.lat, "lng": this.locationArray[i].locationdata.results["0"].geometry.location.lng, "drgabble": true })
            }
        }

        this.filterdata = this.Cordinates;
    }

    markerDragEnd(Cordinate: maker, $enevt: any): void {
        console.log(this.locationData);
        console.log(this.i);

    }


    ngOnInit() {

        this.callservice(this.i, this.flage);
        //create search FormControl
        this.searchControl = new FormControl();

        //set current position
        this.setCurrentPosition();

        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    //set latitude, longitude and zoom
                    this.indialat = place.geometry.location.lat();
                    this.indialog = place.geometry.location.lng();
                    this.zoom = 12;
                });
            });
        });
    }

    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.indialat = position.coords.latitude;
                this.indialog = position.coords.longitude;
                this.zoom = 12;
            });
        }
    }

    private LoadData() {
        this.AllOffers = [
            {
                "Jobtitle": "Senior .Net Developer",
                "Company": "EPAM Systems India Private Limited",
                "ExperienceRequired": "6-11 yrs",
                "JobLocation": "Hyderabad",
                "SkillsRequired": "Entity Framework, Javascript, Ajax, JQuery, ASP.Net, Bootstrap, C#, Rest...",
                "JobDescription": null,
                "JobID": "070218000484",
                "Salary": "  Not disclosed ",
                "PostedOn": null,
                "PostedBy": "  Ashwin Nallamreddy  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Senior-Net-Developer-EPAM-Systems-India-Private-Limited-Hyderabad-6-to-11-years-070218000484?src=nfl&sid=15188823769570&xp=1&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Asp.net Software Developer (0 - 3 Year)",
                "Company": "Initech Solutions",
                "ExperienceRequired": "0-3 yrs",
                "JobLocation": "Coimbatore",
                "SkillsRequired": "ASP.Net, .Net, Software Development, Web Technologies, MS SQL Server, MVC...",
                "JobDescription": null,
                "JobID": "150218003292",
                "Salary": "    50,000 - 3,00,000 P.A.  ",
                "PostedOn": null,
                "PostedBy": "  Mohanraj  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Asp-net-Software-Developer-0-3-Year-Initech-Solutions-Coimbatore-0-to-3-years-150218003292?src=nfl&sid=15188823769570&xp=2&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Developer",
                "Company": "Metacube Software Pvt. Ltd",
                "ExperienceRequired": "3-5 yrs",
                "JobLocation": "Jaipur",
                "SkillsRequired": "Software Engineering, Web Technologies, Asp .Net, .Net, .net developer, Dot...",
                "JobDescription": null,
                "JobID": "171215004738",
                "Salary": "  Not disclosed ",
                "PostedOn": "Today",
                "PostedBy": "  Tanu Priya  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Developer-Metacube-Software-Pvt-Ltd-Jaipur-3-to-5-years-171215004738?src=jobsearchDesk&sid=15188823769570&xp=3&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Asp .Net Developer_mumbai_1 to 4 Years,",
                "Company": "Trigent Software Limited",
                "ExperienceRequired": "1-4 yrs",
                "JobLocation": "Mumbai",
                "SkillsRequired": "asp.net, c#, sql server, vb.net, .net, ms access, excel, macros, VBA",
                "JobDescription": null,
                "JobID": "170218000729",
                "Salary": "  Not disclosed ",
                "PostedOn": "Today",
                "PostedBy": "  Nadiya  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Asp-Net-Developer-mumbai-1-to-4-Years-Trigent-Software-Limited-Mumbai-1-to-4-years-170218000729?src=jobsearchDesk&sid=15188823769570&xp=4&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Developer_urgent Hiring",
                "Company": "Aapna infotheek private limited",
                "ExperienceRequired": "2-6 yrs",
                "JobLocation": "Delhi",
                "SkillsRequired": "ASP.Net, C#, LINQ, SQL Server, Entity Framework, Windows Forms, MVC, Ajax...",
                "JobDescription": null,
                "JobID": "050218004741",
                "Salary": "    3,00,000 - 8,00,000 P.A.  ",
                "PostedOn": "Today",
                "PostedBy": "  Sanghamitra Roy  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Developer-urgent-Hiring-Aapna-infotheek-private-limited-Delhi-2-to-6-years-050218004741?src=jobsearchDesk&sid=15188823769570&xp=5&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net MVC Angular JS/ 2/ 4 Developer",
                "Company": "IRIS SOFTWARE PVT LTD",
                "ExperienceRequired": "3-8 yrs",
                "JobLocation": "Noida",
                "SkillsRequired": "Angular2, Angular 2, Angular 4, Angular4, .Net, Asp.net",
                "JobDescription": null,
                "JobID": "280817008097",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Suniti  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-MVC-Angular-JS-2-4-Developer-IRIS-SOFTWARE-PVT-LTD-Noida-3-to-8-years-280817008097?src=jobsearchDesk&sid=15188823769570&xp=6&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Senior .Net Developer",
                "Company": "EDIFICE TECH SOLUTIONS",
                "ExperienceRequired": "5-9 yrs",
                "JobLocation": "Hyderabad(Jubilee Hills+1)",
                "SkillsRequired": "WCF, JQuery, CSS, .NET Framework, DHTML, ASP.Net, C#, Javascript...",
                "JobDescription": null,
                "JobID": "170218004211",
                "Salary": "  Not disclosed ",
                "PostedOn": "Few Hours Ago",
                "PostedBy": "  Ambika S  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Senior-Net-Developer-EDIFICE-TECH-SOLUTIONS-Hyderabad-Jubilee-Hills-1-5-to-9-years-170218004211?src=jobsearchDesk&sid=15188823769570&xp=7&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Development",
                "Company": "ATOS INDIA PRIVATE LIMITED",
                "ExperienceRequired": "3-5 yrs",
                "JobLocation": "Vadodara",
                "SkillsRequired": "Entity Framework, WCF, NHibernate, MVC, CSS, .NET Framework, ASP.Net...",
                "JobDescription": null,
                "JobID": "160218901379",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  HR  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Development-ATOS-INDIA-PRIVATE-LIMITED-Vadodara-3-to-5-years-160218901379?src=jobsearchDesk&sid=15188823769570&xp=8&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Senior .NET Software/web Developer",
                "Company": "Focus Management Consultants Pvt Ltd.",
                "ExperienceRequired": "4-9 yrs",
                "JobLocation": "Mumbai",
                "SkillsRequired": "CSS, WCF, MVC, HTML, Javascript, ASP.Net, C#, SQL Server, JSON, XML",
                "JobDescription": null,
                "JobID": "170218002649",
                "Salary": "  Not disclosed ",
                "PostedOn": "Today",
                "PostedBy": "  Neelesh Boloor  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Senior-NET-Software-web-Developer-Focus-Management-Consultants-Pvt-Ltd-Mumbai-4-to-9-years-170218002649?src=jobsearchDesk&sid=15188823769570&xp=9&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Senior .Net Technical Lead/architect - Asp/mvc",
                "Company": "LeadSquared",
                "ExperienceRequired": "6-11 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": ".Net, ASP, MVC, WCF / REST API, MySQL, Redis, HTML, CSS...",
                "JobDescription": null,
                "JobID": "160218900467",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Sridharan G V  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Senior-Net-Technical-Lead-architect-Asp-mvc-LeadSquared-Bengaluru-6-to-11-years-160218900467?src=jobsearchDesk&sid=15188823769570&xp=10&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Sr.c# .Net Developer with MVC for Product Based Client @ Mumbai",
                "Company": "Dynpro India Pvt. Ltd.",
                "ExperienceRequired": "10-16 yrs",
                "JobLocation": "Mumbai",
                "SkillsRequired": "mvc, .net, client handling",
                "JobDescription": null,
                "JobID": "170218001830",
                "Salary": "    7,00,000 - 16,00,000 P.A. not constrain for Good profile  ",
                "PostedOn": "Today",
                "PostedBy": "  Hameem  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Sr-c-Net-Developer-with-MVC-for-Product-Based-Client-Mumbai-Dynpro-India-Pvt-Ltd-Mumbai-10-to-16-years-170218001830?src=jobsearchDesk&sid=15188823769570&xp=11&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Application Support Engineer - .net/iis",
                "Company": "Careator Technologies",
                "ExperienceRequired": "2-4 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "hardware networking, sql, windows services, .net, computer hardware...",
                "JobDescription": null,
                "JobID": "160218900098",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  HR  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Application-Support-Engineer-net-iis-Careator-Technologies-Bengaluru-2-to-4-years-160218900098?src=jobsearchDesk&sid=15188823769570&xp=12&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Hurry up .NET Developer",
                "Company": "Forret India Private Limited",
                "ExperienceRequired": "3-7 yrs",
                "JobLocation": "Ahmedabad",
                "SkillsRequired": "ASP.Net MVC, MS SQL Server, ADO.Net, WCF, C#.Net, JQuery, Javascript, Ajax,...",
                "JobDescription": null,
                "JobID": "170218001244",
                "Salary": "  Not disclosed ",
                "PostedOn": "Today",
                "PostedBy": "  Pooja Bhatt  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Hurry-up-NET-Developer-Forret-India-Private-Limited-Ahmedabad-3-to-7-years-170218001244?src=jobsearchDesk&sid=15188823769570&xp=13&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Freshers Java, .Net & Testing Jobs in Hyderabad",
                "Company": "Mail Job IT Services",
                "ExperienceRequired": "0-0 yrs",
                "JobLocation": "Hyderabad",
                "SkillsRequired": ".Net, Java, Asp Net, MCA, bca, Java Developer, ASP.NET Developer, Testing...",
                "JobDescription": null,
                "JobID": "170218000625",
                "Salary": "    1,75,000 - 3,00,000 P.A.  ",
                "PostedOn": "Today",
                "PostedBy": "  Srinivas  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Freshers-Java-Net-Testing-Jobs-in-Hyderabad-Mail-IT-Services-Hyderabad-0-to-0-years-170218000625?src=jobsearchDesk&sid=15188823769570&xp=14&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".NET + SSIS Developer",
                "Company": "Vichara Technologies",
                "ExperienceRequired": "4-8 yrs",
                "JobLocation": "Gurgaon",
                "SkillsRequired": "C#, SQL, ASP.NET, SSIS, telerik, silverlight, Jquery, Devexpress, azure...",
                "JobDescription": null,
                "JobID": "281216003085",
                "Salary": "    6,00,000 - 12,00,000 P.A.  ",
                "PostedOn": "Today",
                "PostedBy": "  Veena Grover  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-NET-SSIS-Developer-Vichara-Technologies-Gurgaon-4-to-8-years-281216003085?src=jobsearchDesk&sid=15188823769570&xp=15&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Web Developer (temporary)",
                "Company": "InfoWave Knowledgeware Pvt Ltd",
                "ExperienceRequired": "4-6 yrs",
                "JobLocation": "Pune(MIDC)",
                "SkillsRequired": "Javascript, Ajax, JQuery, MVC, MS SQL Server, ADO.Net, C#, JSON, Html5, Web...",
                "JobDescription": null,
                "JobID": "221217000848",
                "Salary": "    2,50,000 - 6,00,000 P.A.  ",
                "PostedOn": "Few Hours Ago",
                "PostedBy": "  Sasikala  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Web-Developer-temporary-InfoWave-Knowledgeware-Pvt-Ltd-Pune-MIDC-4-to-6-years-221217000848?src=jobsearchDesk&sid=15188823769570&xp=16&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net MVC Developer",
                "Company": "Malay Infotech Pvt Ltd",
                "ExperienceRequired": "1-5 yrs",
                "JobLocation": "Ahmedabad(Vastrapur)",
                "SkillsRequired": "telerik controls, linq, mvc, asp.net, c#, javascript, jquery, vb.net...",
                "JobDescription": null,
                "JobID": "170218004077",
                "Salary": "  Not disclosed ",
                "PostedOn": "Few Hours Ago",
                "PostedBy": "  JAGRUTI VALANI PATEL  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-MVC-Developer-Malay-Infotech-Pvt-Ltd-Ahmedabad-Vastrapur-1-to-5-years-170218004077?src=jobsearchDesk&sid=15188823769570&xp=17&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Full Stack .NET Developer",
                "Company": "VS Online Services Pvt Ltd",
                "ExperienceRequired": "1-3 yrs",
                "JobLocation": "Chennai(Vadapalani)",
                "SkillsRequired": "Javascript, HTML, MVC, C#, WPF, MySQL, Html5, .Net, Web Technologies, SQL",
                "JobDescription": null,
                "JobID": "090218003171",
                "Salary": "    1,75,000 - 3,00,000 P.A.  ",
                "PostedOn": "Few Hours Ago",
                "PostedBy": "  Sivakumar Anirudhan  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Full-Stack-NET-Developer-VS-Online-Services-Pvt-Ltd-Chennai-Vadapalani-1-to-3-years-090218003171?src=jobsearchDesk&sid=15188823769570&xp=18&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Exciting Job Opportunity for .Net Developers.",
                "Company": "eBusiness Guru",
                "ExperienceRequired": "1-6 yrs",
                "JobLocation": "Ahmedabad(Makarba)",
                "SkillsRequired": "asp.net, wcf services, mvc, c#, ms sql server, vb.net, Angular JS, LinQ",
                "JobDescription": null,
                "JobID": "160218004427",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Sakshi W  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Exciting-Opportunity-for-Net-Developers-eBusiness-Guru-Ahmedabad-Makarba-1-to-6-years-160218004427?src=jobsearchDesk&sid=15188823769570&xp=19&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Hiring:: Technical Architect- .NET at Compunnel, Noida",
                "Company": "Compunnel Technology India Private Limited",
                "ExperienceRequired": "10-15 yrs",
                "JobLocation": "Noida",
                "SkillsRequired": ".net, asp.net, dot net, mvc5, entity framework, project lead...",
                "JobDescription": null,
                "JobID": "310717002980",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Jitendra Singh (HR)  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Hiring-Technical-Architect-NET-at-Compunnel-Noida-Compunnel-Technology-India-Private-Limited-Noida-10-to-15-years-310717002980?src=jobsearchDesk&sid=15188823769570&xp=20&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Looking for Technical Project Lead (.net)",
                "Company": "ISHIR",
                "ExperienceRequired": "7-12 yrs",
                "JobLocation": "Noida",
                "SkillsRequired": "technical project manager , technical manager ,  project manager, technical...",
                "JobDescription": null,
                "JobID": "180817005342",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Rishabh Gupta  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Looking-for-Technical-Project-Lead-net-ISHIR-Noida-7-to-12-years-180817005342?src=jobsearchDesk&sid=15188823769570&xp=21&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Urgent Hiring for Junior .Net Developer / Freshers at Varologic Techno",
                "Company": "Varologic Technologies Pvt. Ltd.",
                "ExperienceRequired": "0-3 yrs",
                "JobLocation": "Ahmedabad(Prahlad Nagar)",
                "SkillsRequired": "mvc, .net framework, asp.net, c#.net, visual studio, .Net, Dotnet, Dot net,...",
                "JobDescription": null,
                "JobID": "160218008450",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Ms. Mansi Vora  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Urgent-Hiring-for-Junior-Net-Developer-Freshers-at-Varologic-Techno-Varologic-Technologies-Pvt-Ltd-Ahmedabad-Prahlad-Nagar-0-to-3-years-160218008450?src=jobsearchDesk&sid=15188823769570&xp=22&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Nichepro is Looking for TECH Leads Willing to work on BOTH .NET & JAVA",
                "Company": "Nichepro Technologies Pvt.Ltd.",
                "ExperienceRequired": "8-13 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "java, c++, ood, c#, vb.net, .net, web services, tdd...",
                "JobDescription": null,
                "JobID": "160218007951",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Divya  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Nichepro-is-Looking-for-TECH-Leads-Willing-to-work-on-BOTH-NET-JAVA-Nichepro-Technologies-Pvt-Ltd-Bengaluru-8-to-13-years-160218007951?src=jobsearchDesk&sid=15188823769570&xp=23&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Immediate Opening for .net MVC - Gurgaon",
                "Company": "GSR Business Services Private Limited.",
                "ExperienceRequired": "3-8 yrs",
                "JobLocation": "Gurgaon",
                "SkillsRequired": "Javascript, HTML, JQuery, MVC, Java, .Net, Oracle, SQL, PL, PLSQL",
                "JobDescription": null,
                "JobID": "160218007160",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Sushma  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Immediate-Opening-for-net-MVC-Gurgaon-GSR-Business-Services-Private-Limited-Gurgaon-3-to-8-years-160218007160?src=jobsearchDesk&sid=15188823769570&xp=24&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net ( Asp.net) Developer",
                "Company": "Empirical Edge Inc",
                "ExperienceRequired": "1-6 yrs",
                "JobLocation": "Ahmedabad",
                "SkillsRequired": "WCF, ASP.Net, LINQ, Silverlight, JQuery, WPF, MVC, Javascript, Ajax, C#.Net...",
                "JobDescription": null,
                "JobID": "160218006756",
                "Salary": "    2,00,000 - 7,00,000 P.A. Also Bonus based on performance  ",
                "PostedOn": "1 day ago",
                "PostedBy": "    ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Asp-net-Developer-Empirical-Edge-Inc-Ahmedabad-1-to-6-years-160218006756?src=jobsearchDesk&sid=15188823769570&xp=25&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Senior .Net Developer Opportunity with MNC in Kochi/cochin",
                "Company": "Symbiosis Network Pvt. Ltd.",
                "ExperienceRequired": "6-11 yrs",
                "JobLocation": "Kochi",
                "SkillsRequired": "Asp Net, .Net, web api",
                "JobDescription": null,
                "JobID": "160218005501",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Keerthana  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Senior-Net-Developer-Opportunity-with-MNC-in-Kochi-cochin-Symbiosis-Network-Pvt-Ltd-Kochi-6-to-11-years-160218005501?src=jobsearchDesk&sid=15188823769570&xp=26&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Exclusive Women Drive on 24th Feb for .NET Professionals @ Mastek",
                "Company": "Mastek Ltd",
                "ExperienceRequired": "5-10 yrs",
                "JobLocation": "Mumbai(Ghansoli)",
                "SkillsRequired": ".NET, MVC",
                "JobDescription": null,
                "JobID": "160218004832",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Kirti Palankar  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Exclusive-Women-Drive-on-24th-Feb-for-NET-Professionals-Mastek-Mastek-Ltd-Mumbai-Ghansoli-5-to-10-years-160218004832?src=jobsearchDesk&sid=15188823769570&xp=27&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Synapseindia : Jr. Software Engineer (.net) Node JS",
                "Company": "SynapseIndia Outsourcing Pvt. Ltd.",
                "ExperienceRequired": "1-3 yrs",
                "JobLocation": "Noida(NSEZ)",
                "SkillsRequired": "Node.Js",
                "JobDescription": null,
                "JobID": "160218003343",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Recruitment team  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Synapseindia-Jr-Software-Engineer-net-Node-JS-SynapseIndia-Outsourcing-Pvt-Ltd-Noida-NSEZ-1-to-3-years-160218003343?src=jobsearchDesk&sid=15188823769570&xp=28&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Excellent Opening for .NET Developers - Chennai Location",
                "Company": "HTC Global Services (India) Pvt. Ltd.",
                "ExperienceRequired": "3-6 yrs",
                "JobLocation": "Chennai",
                "SkillsRequired": "asp.net, c#",
                "JobDescription": null,
                "JobID": "160218003330",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Madhumitha Sampath  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Excellent-Opening-for-NET-Developers-Chennai-Location-HTC-Global-Services-India-Pvt-Ltd-Chennai-3-to-6-years-160218003330?src=jobsearchDesk&sid=15188823769570&xp=29&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".NET Trainee (freshers) for a US Based Product Company@ Chennai",
                "Company": "Maitri Technology Solutions Pvt Ltd",
                "ExperienceRequired": "0-1 yrs",
                "JobLocation": "Chennai(Thiyagaraya Nagar)",
                "SkillsRequired": "B.Tech",
                "JobDescription": null,
                "JobID": "160218003094",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  HR  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-NET-Trainee-freshers-for-a-US-Based-Product-Company-Chennai-Maitri-Technology-Solutions-Pvt-Ltd-Chennai-Thiyagaraya-Nagar-0-to-1-years-160218003094?src=jobsearchDesk&sid=15188823769570&xp=30&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Senior .Net Developer",
                "Company": "Previstar Pvt Ltd",
                "ExperienceRequired": "8-10 yrs",
                "JobLocation": "Kolkata",
                "SkillsRequired": ".net developer, dot net developer, asp.net, c#, LINQ, Entity Framework, mvc...",
                "JobDescription": null,
                "JobID": "160218001932",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "    ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Senior-Net-Developer-Previstar-Pvt-Ltd-Kolkata-8-to-10-years-160218001932?src=jobsearchDesk&sid=15188823769570&xp=31&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Senior Software Engineer - .NET - SQL",
                "Company": "RapidValue - Startup",
                "ExperienceRequired": "4-7 yrs",
                "JobLocation": "Kochi",
                "SkillsRequired": "use cases, software engineering, .NET MVC framework, Web API, C# / VB.net...",
                "JobDescription": null,
                "JobID": "150218900874",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  HR  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Senior-Software-Engineer-NET-SQL-RapidValue-Startup-Kochi-4-to-7-years-150218900874?src=jobsearchDesk&sid=15188823769570&xp=32&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Senior .Net Developer / Team Lead",
                "Company": "Dharani Info Technologies Pvt Ltd",
                "ExperienceRequired": "3-5 yrs",
                "JobLocation": "Guntur",
                "SkillsRequired": "asp.net mvc, .net, web services, linq, asp.net with c#, jquery, ajax...",
                "JobDescription": null,
                "JobID": "091117005051",
                "Salary": "    2,25,000 - 7,25,000 P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  HR Team  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Senior-Net-Developer-Team-Lead-Dharani-Info-Technologies-Pvt-Ltd-Guntur-3-to-5-years-091117005051?src=jobsearchDesk&sid=15188823769570&xp=33&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Senior Software Engineer-java,hadoop/power Shell/.net/ VB Script",
                "Company": "American Express Services India Pvt. Ltd.",
                "ExperienceRequired": "7-12 yrs",
                "JobLocation": "Gurgaon",
                "SkillsRequired": "vb script, .net, hadoop, software development, Powershell",
                "JobDescription": null,
                "JobID": "090218005773",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  hr manager  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Senior-Software-Engineer-java-hadoop-power-Shell-net-VB-Script-American-Express-Services-India-Pvt-Ltd-Gurgaon-7-to-12-years-090218005773?src=jobsearchDesk&sid=15188823769570&xp=34&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Opportunity for \".net Technical Architects\" - Suyati Tech, Kochi.",
                "Company": "Suyati Technologies Pvt Ltd",
                "ExperienceRequired": "9-12 yrs",
                "JobLocation": "Kochi",
                "SkillsRequired": "ASP.Net MVC, MVC Architecture, OOPS, Design Patterns, jQuery...",
                "JobDescription": null,
                "JobID": "031117004494",
                "Salary": "    9,00,000 - 16,00,000 P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Kapil Das P K  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Opportunity-for-net-Technical-Architects-Suyati-Tech-Kochi-Suyati-Technologies-Pvt-Ltd-Kochi-9-to-12-years-031117004494?src=jobsearchDesk&sid=15188823769570&xp=35&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Senior .Net Developer with Oneadvanced - Vadodara",
                "Company": "Advanced Business & Healthcare Solutions India  Pvt Ltd",
                "ExperienceRequired": "6-10 yrs",
                "JobLocation": "Vadodara",
                "SkillsRequired": "javascript, entity framework, ajax, css, mvc, jquery, infragistics, html...",
                "JobDescription": null,
                "JobID": "030218004131",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Nikita Joshi  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Senior-Net-Developer-with-Oneadvanced-Vadodara-Advanced-Business-Healthcare-Solutions-India-Pvt-Ltd-Vadodara-6-to-10-years-030218004131?src=jobsearchDesk&sid=15188823769570&xp=36&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Sitecore .NET Technical Consultant - Noida [ An US MNC",
                "Company": "Ablehunt Consulting",
                "ExperienceRequired": "6-11 yrs",
                "JobLocation": "Delhi NCR, Noida",
                "SkillsRequired": "sitecore developer, sitecore, sitecore 8.0, dms, sitecore commerce...",
                "JobDescription": null,
                "JobID": "181217007792",
                "Salary": "    7,00,000 - 17,00,000 P.A.  ",
                "PostedOn": "Today",
                "PostedBy": "  Pramod Singh  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Sitecore-NET-Technical-Consultant-Noida-An-US-MNC-Ablehunt-Consulting-Delhi-NCR-Noida-6-to-11-years-181217007792?src=jobsearchDesk&sid=15188823769570&xp=37&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Opening for ASP .Net Developer in Leading Fitness Industry(dwarka)",
                "Company": "Inwove Consultancy Private Limited",
                "ExperienceRequired": "1-4 yrs",
                "JobLocation": "Delhi(Sector-16 Dwarka+3)",
                "SkillsRequired": ".Net, ASP.Net",
                "JobDescription": null,
                "JobID": "170218004543",
                "Salary": "  Not disclosed ",
                "PostedOn": "Few Hours Ago",
                "PostedBy": "  Umesh Singh  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Opening-for-ASP-Net-Developer-in-Leading-Fitness-Industry-dwarka-Inwove-Consultancy-Private-Limited-Delhi-Sector-16-Dwarka-3-1-to-4-years-170218004543?src=jobsearchDesk&sid=15188823769570&xp=38&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Manager Technology ( .Net Framework & Asp.net )",
                "Company": "Srijan Spectrums Pvt Ltd",
                "ExperienceRequired": "8-12 yrs",
                "JobLocation": "Gurgaon",
                "SkillsRequired": "solution architecture, .net framework, application architecture, enterprise...",
                "JobDescription": null,
                "JobID": "120218003765",
                "Salary": "    10,00,000 - 16,00,000 P.A.  ",
                "PostedOn": "Today",
                "PostedBy": "  Akanksha  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Manager-Technology-Net-Framework-Asp-net-Srijan-Spectrums-Pvt-Ltd-Gurgaon-8-to-12-years-120218003765?src=jobsearchDesk&sid=15188823769570&xp=39&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Asp/.net Developer - C#/sql Server",
                "Company": "Premium",
                "ExperienceRequired": "2-5 yrs",
                "JobLocation": "Noida",
                "SkillsRequired": "LINQ, WCF, ASP.Net, C#, SQL Server, Ajax, Javascript, JQuery, ASP, XML",
                "JobDescription": null,
                "JobID": "160218900054",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Vinny  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Asp-net-Developer-C-sql-Server-Noida-2-to-5-years-160218900054?src=jobsearchDesk&sid=15188823769570&xp=40&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Urgent Requirement- .Net Developer with US Based Startup Company",
                "Company": "Careernet Technologies Pvt Ltd",
                "ExperienceRequired": "4-8 yrs",
                "JobLocation": "Hyderabad",
                "SkillsRequired": "mvc, jquery, angularjs, asp.net, bootstrap, css, html5",
                "JobDescription": null,
                "JobID": "160218000294",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Sandhya  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Urgent-Requirement-Net-Developer-with-US-Based-Startup-Company-Careernet-Technologies-Pvt-Ltd-Hyderabad-4-to-8-years-160218000294?src=jobsearchDesk&sid=15188823769570&xp=41&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "SQL Developer with .net and Power BI, Mumbai",
                "Company": "Technogen India Private Limited",
                "ExperienceRequired": "2-5 yrs",
                "JobLocation": "Mumbai",
                "SkillsRequired": "sql server, power bi, ssis, ssrs, integration services, stored procedures...",
                "JobDescription": null,
                "JobID": "150218001117",
                "Salary": "    2,50,000 - 5,00,000 P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Talent Acquisition Team  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-SQL-Developer-with-net-and-Power-BI-Mumbai-Technogen-India-Private-Limited-Mumbai-2-to-5-years-150218001117?src=jobsearchDesk&sid=15188823769570&xp=42&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Product Developer - .net/ C#/ WCF",
                "Company": "Premium",
                "ExperienceRequired": "4-9 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "Entity Framework, WCF, Ajax, MS SQL Server, ASP.Net, ASP, Javascript, C#...",
                "JobDescription": null,
                "JobID": "160218901178",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  HR  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Product-Developer-net-C-WCF-Bengaluru-4-to-9-years-160218901178?src=jobsearchDesk&sid=15188823769570&xp=43&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Architect/technical Lead - Design Patterns",
                "Company": "Premium",
                "ExperienceRequired": "10-15 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "ASP.Net MVC, Entity Framework, Javascript, .Net, Design Patterns, SVN, GIT,...",
                "JobDescription": null,
                "JobID": "160218900630",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  HR  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Architect-technical-Lead-Design-Patterns-Bengaluru-10-to-15-years-160218900630?src=jobsearchDesk&sid=15188823769570&xp=44&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Developer - C#/asp/sql Server",
                "Company": "Premium",
                "ExperienceRequired": "4-6 yrs",
                "JobLocation": "Hyderabad",
                "SkillsRequired": "ASP.Net Ajax, VS.NET, WCF, MVC, ADO, C#, VB.NET, MS SQL Server, Javascript,...",
                "JobDescription": null,
                "JobID": "160218900511",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Sania  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Developer-C-asp-sql-Server-Hyderabad-4-to-6-years-160218900511?src=jobsearchDesk&sid=15188823769570&xp=45&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Developer - Azure/paas",
                "Company": "Premium",
                "ExperienceRequired": "5-10 yrs",
                "JobLocation": "Hyderabad",
                "SkillsRequired": "CSS, WCF, ASP.Net MVC, HTML, Javascript, C#, SQL Server, Web Development...",
                "JobDescription": null,
                "JobID": "160218900508",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Sania  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Developer-Azure-paas-Hyderabad-5-to-10-years-160218900508?src=jobsearchDesk&sid=15188823769570&xp=46&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Software Development Engineer - .net/c#/c++",
                "Company": "Premium",
                "ExperienceRequired": "2-4 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "c, sql server, c++, visual studio, image processing, .net, visual basic...",
                "JobDescription": null,
                "JobID": "160218900486",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Veena Karan  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Software-Development-Engineer-net-c-c-Bengaluru-2-to-4-years-160218900486?src=jobsearchDesk&sid=15188823769570&xp=47&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Manager IT - Microsoft Technologies - .net/asp/c#",
                "Company": "Premium",
                "ExperienceRequired": "10-14 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "C#, ASP, .Net, Microsoft Technologies, Training, Career Development...",
                "JobDescription": null,
                "JobID": "160218900363",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "    ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Manager-IT-Microsoft-Technologies-net-asp-c-Bengaluru-10-to-14-years-160218900363?src=jobsearchDesk&sid=15188823769570&xp=48&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Developer - Asp/mvc",
                "Company": "Premium",
                "ExperienceRequired": "1-4 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "ASP.Net, MVC, ASP, .Net",
                "JobDescription": null,
                "JobID": "160218900250",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "    ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Developer-Asp-mvc-Bengaluru-1-to-4-years-160218900250?src=jobsearchDesk&sid=15188823769570&xp=49&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Dot Net Developer/ Senior Developer -c#/asp/.net",
                "Company": "Premium",
                "ExperienceRequired": "5-10 yrs",
                "JobLocation": "Chennai",
                "SkillsRequired": "JQuery, LINQ, Javascript, Entity Framework, WCF, CSS, Ajax, HTML, ASP.Net...",
                "JobDescription": null,
                "JobID": "160218900233",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "    ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Dot-Net-Developer-Senior-Developer-c-asp-net-Chennai-5-to-10-years-160218900233?src=jobsearchDesk&sid=15188823769570&xp=50&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Java Developer - Node.js/j2eeapplication Support Engineer - .net/iis",
                "Company": "Careator Technologies",
                "ExperienceRequired": "4-8 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "Javascript, Java, Angularjs, Node.Js, UI Development, Apache Camel, Maven...",
                "JobDescription": null,
                "JobID": "160218900097",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  HR  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Java-Developer-Node-js-j2eeapplication-Support-Engineer-net-iis-Careator-Technologies-Bengaluru-4-to-8-years-160218900097?src=jobsearchDesk&sid=15188823769570&xp=51&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Junior .Net Developer_chennai_permanant Role",
                "Company": "INFINIMINDS Private Limited",
                "ExperienceRequired": "2-3 yrs",
                "JobLocation": "Chennai",
                "SkillsRequired": "Asp.net, C#, SQL Server, Java script, Jquery.",
                "JobDescription": null,
                "JobID": "220118005079",
                "Salary": "    1,50,000 - 3,50,000 P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Syed  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Junior-Net-Developer-chennai-permanant-Role-INFINIMINDS-Private-Limited-Chennai-2-to-3-years-220118005079?src=jobsearchDesk&sid=15188823769570&xp=52&px=1",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Sitecore Developer - Mvc/asp/.net",
                "Company": "Premium",
                "ExperienceRequired": "4-8 yrs",
                "JobLocation": "Mumbai",
                "SkillsRequired": "ASP.Net MVC, SQL Server, LINQ, WCF, Entity Framework, C#, C#.Net, Sitecore,...",
                "JobDescription": null,
                "JobID": "160218900083",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Anitha  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Sitecore-Developer-Mvc-asp-net-Mumbai-4-to-8-years-160218900083?src=jobsearchDesk&sid=15188823775584&xp=1&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Openings for .Net Trainee in Lycatech",
                "Company": "LYCATECH SERVICES PVT LTD",
                "ExperienceRequired": "0-0 yrs",
                "JobLocation": "Chennai",
                "SkillsRequired": "C#, ASP.Net, .Net, B.Tech, Communication Skills, Trainee, Engineering...",
                "JobDescription": null,
                "JobID": "290118000897",
                "Salary": "    2,00,000 P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Nagarajan  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Openings-for-Net-Trainee-in-Lycatech-LYCATECH-SERVICES-PVT-LTD-Chennai-0-to-0-years-290118000897?src=jobsearchDesk&sid=15188823775584&xp=2&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Backend Developer - .Net",
                "Company": "Premium",
                "ExperienceRequired": "3-6 yrs",
                "JobLocation": "Pune",
                "SkillsRequired": "WCF, ASP.Net MVC, Javascript, JQuery, SQL Server, Azure, .Net...",
                "JobDescription": null,
                "JobID": "160218900055",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "    ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Backend-Developer-Net-Pune-3-to-6-years-160218900055?src=jobsearchDesk&sid=15188823775584&xp=3&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".net with MVC and Angular JS Developer",
                "Company": "Mindteck (India) Ltd",
                "ExperienceRequired": "4-9 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "MVC, ASP . NET, Angular JS, Jquery, Asp.Net, AngularJS",
                "JobDescription": null,
                "JobID": "150218900786",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  HR  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-net-with-MVC-and-Angular-JS-Developer-Mindteck-India-Ltd-Bengaluru-4-to-9-years-150218900786?src=jobsearchDesk&sid=15188823775584&xp=4&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Build & Release Engineer - C#/.net",
                "Company": "Premium",
                "ExperienceRequired": "6-11 yrs",
                "JobLocation": "Pune",
                "SkillsRequired": "C#, TFS, Build, Release Engineering, .Net, C#.Net",
                "JobDescription": null,
                "JobID": "160218900053",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Suneeta Singh  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Build-Release-Engineer-C-net-Pune-6-to-11-years-160218900053?src=jobsearchDesk&sid=15188823775584&xp=5&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net (with Angular) Developer/lead",
                "Company": "FIS Global Business Solutions India Pvt. Ltd.",
                "ExperienceRequired": "5-10 yrs",
                "JobLocation": "Mohali",
                "SkillsRequired": "ASP.Net, C#, MVC, SQL Server, .Net, Web Technologies, angular",
                "JobDescription": null,
                "JobID": "120218001629",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Navodita Bhargava  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-with-Angular-Developer-lead-FIS-Global-Business-Solutions-India-Pvt-Ltd-Mohali-5-to-10-years-120218001629?src=jobsearchDesk&sid=15188823775584&xp=6&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Software Development Engineer - .net/cloud",
                "Company": "Premium",
                "ExperienceRequired": "3-8 yrs",
                "JobLocation": "Pune",
                "SkillsRequired": "IT Project Management, .Net, Software Product Development, C#, Javascript...",
                "JobDescription": null,
                "JobID": "160218900052",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Suneeta Singh  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Software-Development-Engineer-net-cloud-Pune-3-to-8-years-160218900052?src=jobsearchDesk&sid=15188823775584&xp=7&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Developer(with Angular)",
                "Company": "FIS Global Business Solutions India Pvt. Ltd.",
                "ExperienceRequired": "2-7 yrs",
                "JobLocation": "Mohali",
                "SkillsRequired": "c#, asp.net, sql server, .net, angular",
                "JobDescription": null,
                "JobID": "050118002114",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Navodita Bhargava  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Developer-with-Angular-FIS-Global-Business-Solutions-India-Pvt-Ltd-Mohali-2-to-7-years-050118002114?src=jobsearchDesk&sid=15188823775584&xp=8&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".net/cloud Technical Expert - Asp/vb",
                "Company": "Premium",
                "ExperienceRequired": "8-13 yrs",
                "JobLocation": "Pune",
                "SkillsRequired": "ASP.Net, VB.NET, ASP, VB, .Net, Software Product Development...",
                "JobDescription": null,
                "JobID": "160218900051",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Suneeta Singh  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-net-cloud-Technical-Expert-Asp-vb-Pune-8-to-13-years-160218900051?src=jobsearchDesk&sid=15188823775584&xp=9&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Developer with Angular JS",
                "Company": "Tech Mahindra Ltd.",
                "ExperienceRequired": "4-9 yrs",
                "JobLocation": "Mumbai, Bengaluru",
                "SkillsRequired": "Javascript, LINQ, Windows Communication Foundation, JQuery, WCF, CSS, HTML,...",
                "JobDescription": null,
                "JobID": "010218005952",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Murali Krishhna M  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Developer-with-Angular-JS-Tech-Mahindra-Ltd-Mumbai-Bengaluru-4-to-9-years-010218005952?src=jobsearchDesk&sid=15188823775584&xp=10&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Software Developer - Asp/.net/sql Server",
                "Company": "Premium",
                "ExperienceRequired": "2-4 yrs",
                "JobLocation": "Maharashtra",
                "SkillsRequired": "SQL Server, ASP.Net, SSRS, ASP, .Net, Software Development, Unit Testing...",
                "JobDescription": null,
                "JobID": "160218900034",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Mr Nitesh N Amin  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Software-Developer-Asp-net-sql-Server-Maharashtra-2-to-4-years-160218900034?src=jobsearchDesk&sid=15188823775584&xp=11&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Web Developer - .net/ C#/ ASP",
                "Company": "Premium",
                "ExperienceRequired": "2-5 yrs",
                "JobLocation": "Mysore",
                "SkillsRequired": "Entity Framework, LINQ, ASP.Net, MVC, SQL Server, C#, Ajax, JQuery, TFS...",
                "JobDescription": null,
                "JobID": "160218900033",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  HR  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Web-Developer-net-C-ASP-Mysore-2-to-5-years-160218900033?src=jobsearchDesk&sid=15188823775584&xp=12&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Azure Consultant Opening in Hyderabad / Immediate Interviews",
                "Company": "Momento USA",
                "ExperienceRequired": "5-8 yrs",
                "JobLocation": "Hyderabad(Gachibowli)",
                "SkillsRequired": ".NET Framework, C#, ASP.Net, Microsoft Azure, Object Oriented Programming...",
                "JobDescription": null,
                "JobID": "160218008836",
                "Salary": "    3,00,000 - 8,00,000 P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Shiraaz Ali  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Azure-Consultant-Opening-in-Hyderabad-Immediate-Interviews-Momento-USA-Hyderabad-Gachibowli-5-to-8-years-160218008836?src=jobsearchDesk&sid=15188823775584&xp=13&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Urgent Openings For .NET Developer",
                "Company": "Talentlogic Info Services Pvt. Ltd",
                "ExperienceRequired": "0-4 yrs",
                "JobLocation": "Hyderabad",
                "SkillsRequired": "LINQ, Entity Framework, WCF, MVP, MVC, CSS, Ajax, .NET Framework, C#...",
                "JobDescription": null,
                "JobID": "160218008613",
                "Salary": "    1,00,000 - 5,50,000 P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Sarah  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Urgent-Openings-For-NET-Developer-Talentlogic-Info-Services-Pvt-Ltd-Hyderabad-0-to-4-years-160218008613?src=jobsearchDesk&sid=15188823775584&xp=14&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Job Opportunity for App. Support Analyst - .Net or Java Background",
                "Company": "ABC Consultants Pvt Ltd",
                "ExperienceRequired": "6-11 yrs",
                "JobLocation": "Pune",
                "SkillsRequired": "Java, C#, .Net, Angular, Application Support, l2 support, implementation...",
                "JobDescription": null,
                "JobID": "160218006091",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Pravin Pai  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Opportunity-for-App-Support-Analyst-Net-or-Java-Background-ABC-Consultants-Pvt-Ltd-Pune-6-to-11-years-160218006091?src=jobsearchDesk&sid=15188823775584&xp=15&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Hiring for .Net Developers -- Product Based Company -- Bangalore",
                "Company": "Cambio Consulting India Pvt Ltd",
                "ExperienceRequired": "7-12 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "ASP.NET, C#, MVC, SQL Server, K2, Workflow Engine, JQuery, Bootstrap...",
                "JobDescription": null,
                "JobID": "160218005307",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Chetri Swapna  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Hiring-for-Net-Developers-Product-Based-Company-Bangalore-Cambio-Consulting-India-Pvt-Ltd-Bengaluru-7-to-12-years-160218005307?src=jobsearchDesk&sid=15188823775584&xp=16&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Job | Automation Engineer(selenium with C# .net)",
                "Company": "Allegis Services India Pvt. Ltd.",
                "ExperienceRequired": "4-8 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "Selenium, Coded UI, Whitebox, C#, .NET",
                "JobDescription": null,
                "JobID": "160218004753",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Vishu Nagaraj  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Automation-Engineer-selenium-with-C-net-Allegis-Services-India-Pvt-Ltd-Bengaluru-4-to-8-years-160218004753?src=jobsearchDesk&sid=15188823775584&xp=17&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Urgent Opening for \"java or .net\"- Architect/analyst/ Designer at SLK",
                "Company": "Orcapod Consulting Services Private Limited",
                "ExperienceRequired": "6-11 yrs",
                "JobLocation": "Bengaluru(Yelahanka+1)",
                "SkillsRequired": ".Net, Java, Spring, hibernate, ejb, Web Services, Websphere",
                "JobDescription": null,
                "JobID": "160218004360",
                "Salary": "    8,00,000 - 18,00,000 P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Rishi Kandukuri  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Urgent-Opening-for-java-or-net-Architect-analyst-Designer-at-SLK-Orcapod-Consulting-Services-Private-Limited-Bengaluru-Yelahanka-1-6-to-11-years-160218004360?src=jobsearchDesk&sid=15188823775584&xp=18&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".net Production Support",
                "Company": "ILABZ TECHNOLOGY LLP",
                "ExperienceRequired": "3-8 yrs",
                "JobLocation": "Delhi NCR, Pune",
                "SkillsRequired": "Production Support",
                "JobDescription": null,
                "JobID": "160218002885",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Puja  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-net-Production-Support-ILABZ-TECHNOLOGY-LLP-Delhi-NCR-Pune-3-to-8-years-160218002885?src=jobsearchDesk&sid=15188823775584&xp=19&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Walk-in on 17-feb for .NET Developer Through Arise Global",
                "Company": "Arise Global Services Private Limited",
                "ExperienceRequired": "3-5 yrs",
                "JobLocation": "Hyderabad(Gachibowli)",
                "SkillsRequired": "asp.net, ado.net, mvc, vb.net, jquery, ajax",
                "JobDescription": null,
                "JobID": "160218001316",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Gottipamula Santosh  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Walk-in-on-17-feb-for-NET-Developer-Through-Arise-Global-Arise-Global-Services-Private-Limited-Hyderabad-Gachibowli-3-to-5-years-160218001316?src=jobsearchDesk&sid=15188823775584&xp=20&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Immediate Opening 4 Software Developer /.net/ SAL UPTO 8 Lpa",
                "Company": "Rivera Manpower Services",
                "ExperienceRequired": "3-5 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "asp.net, c#, javascript, wcf, ms sql server, css, silverlight, html, jquery...",
                "JobDescription": null,
                "JobID": "160218000819",
                "Salary": "    5,00,000 - 8,00,000 P.A. Night Shift Allowance + BOTH W...  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  NEHA  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Immediate-Opening-4-Software-Developer-net-SAL-UPTO-8-Lpa-Rivera-Manpower-Services-Bengaluru-3-to-5-years-160218000819?src=jobsearchDesk&sid=15188823775584&xp=21&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "USA Opportunity for Java/j2ee/.net Developer with Valid H1B Visa",
                "Company": "Confidential",
                "ExperienceRequired": "6-11 yrs",
                "JobLocation": "United States (U.S)",
                "SkillsRequired": "j2se, java, j2ee, jdbc, xml, eclipse, xsl, html, web services, .net...",
                "JobDescription": null,
                "JobID": "050218002183",
                "Salary": "    95,000 - 1,00,000 &amp; above P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Shalini Jhaj  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-USA-Opportunity-for-Java-j2ee-net-Developer-with-Valid-H1B-Visa-Confidential-United-States-U-S-6-to-11-years-050218002183?src=jobsearchDesk&sid=15188823775584&xp=22&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Opportunity .NET + WPF - with MNC - Pune (hadapsar)",
                "Company": "Eyeglobal Solutions Private Limited",
                "ExperienceRequired": "4-9 yrs",
                "JobLocation": "Pune",
                "SkillsRequired": "C#, WPF, .Net",
                "JobDescription": null,
                "JobID": "050118008077",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Bhaskar TK  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Opportunity-NET-WPF-with-MNC-Pune-hadapsar-Eyeglobal-Solutions-Private-Limited-Pune-4-to-9-years-050118008077?src=jobsearchDesk&sid=15188823775584&xp=23&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Developer",
                "Company": "Kindlebit Solutions Pvt. Ltd",
                "ExperienceRequired": "1-4 yrs",
                "JobLocation": "Chandigarh",
                "SkillsRequired": "Javascript, HTML, CSS, Entity Framework, LINQ, JQuery, MVC, Html5, C#, Java...",
                "JobDescription": null,
                "JobID": "160218002757",
                "Salary": "    1,25,000 - 5,00,000 P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Kanwar  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Developer-Kindlebit-Solutions-Pvt-Ltd-Chandigarh-1-to-4-years-160218002757?src=jobsearchDesk&sid=15188823775584&xp=24&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Software Developer- .net, Sql, Oracle (manufacturing Execution System)",
                "Company": "Yokogawa India Limited",
                "ExperienceRequired": "2-5 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "Windows Forms, C#, .Net, SQL Development, Visual Studio, C#.Net, Oracle PL,...",
                "JobDescription": null,
                "JobID": "261017001802",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "    ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Software-Developer-net-Sql-Oracle-manufacturing-Execution-System-Yokogawa-India-Limited-Bengaluru-2-to-5-years-261017001802?src=jobsearchDesk&sid=15188823775584&xp=25&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Dot Not ( .net) Developer - Contract - Gurgaon",
                "Company": "Fly On IT India Pvt. Ltd",
                "ExperienceRequired": "3-7 yrs",
                "JobLocation": "Delhi",
                "SkillsRequired": "c# and .net , c# and dot net, uwp, wpf, vb.net, sql, sql server...",
                "JobDescription": null,
                "JobID": "211117003405",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  rohin jain  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Dot-Not-net-Developer-Contract-Gurgaon-Fly-On-IT-India-Pvt-Ltd-Delhi-3-to-7-years-211117003405?src=jobsearchDesk&sid=15188823775584&xp=26&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Software Senior Engineer (C#, ASP MVC .net)",
                "Company": "Dell International Services India  Private Limited",
                "ExperienceRequired": "5-9 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "HTML, Javascript, CSS, JQuery, MVC, .NET Framework, ASP, C#...",
                "JobDescription": null,
                "JobID": "160218901554",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  HR  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Software-Senior-Engineer-C-ASP-MVC-net-Dell-International-Services-India-Private-Limited-Bengaluru-5-to-9-years-160218901554?src=jobsearchDesk&sid=15188823775584&xp=27&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Developers@chennai /bangalore/coimbatore, Interview on 25th Feb",
                "Company": "CBSI India Pvt. Ltd.",
                "ExperienceRequired": "3-8 yrs",
                "JobLocation": "Chennai, Bengaluru, Coimbatore",
                "SkillsRequired": "&quot ; .net&quot ; , &quot ; asp.net&quot ; ...",
                "JobDescription": null,
                "JobID": "160218008520",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Rajashekar  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Developers-chennai-bangalore-coimbatore-Interview-on-25th-Feb-CBSI-India-Pvt-Ltd-Chennai-Bengaluru-Coimbatore-3-to-8-years-160218008520?src=jobsearchDesk&sid=15188823775584&xp=28&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Dot Net/.net Developer Openings for Chennai/coimbatore/bangalore",
                "Company": "CBSI India Pvt. Ltd.",
                "ExperienceRequired": "3-8 yrs",
                "JobLocation": "Bengaluru, Chennai",
                "SkillsRequired": ".Net, LINQ, Dot Net Developer, ASP.Net MVC, C# .Net, .Net developer",
                "JobDescription": null,
                "JobID": "160218007875",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Janapala Dimple Poojitha  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Dot-Net-net-Developer-Openings-for-Chennai-coimbatore-bangalore-CBSI-India-Pvt-Ltd-Bengaluru-Chennai-3-to-8-years-160218007875?src=jobsearchDesk&sid=15188823775584&xp=29&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Microsoft .Net Developer",
                "Company": "Glomark Software Services Private Limited",
                "ExperienceRequired": "4-6 yrs",
                "JobLocation": "Hyderabad(Madhapur)",
                "SkillsRequired": "C#, ASP.Net, Javascript, .Net, dot net, c #",
                "JobDescription": null,
                "JobID": "160218005235",
                "Salary": "    2,00,000 - 6,00,000 P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Ram Tummala  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Microsoft-Net-Developer-Glomark-Software-Services-Private-Limited-Hyderabad-Madhapur-4-to-6-years-160218005235?src=jobsearchDesk&sid=15188823775584&xp=30&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Lead Software Engineer ",
                "Company": "ESK Technologies Private Limited",
                "ExperienceRequired": "10-13 yrs",
                "JobLocation": "Hyderabad",
                "SkillsRequired": "ASP.Net, MVC, .NET Framework, C#, C#.Net, Web Services, XML, SQL Queries...",
                "JobDescription": null,
                "JobID": "160218004450",
                "Salary": "    10,00,000 - 15,00,000 P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Santosh Kumar  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Lead-Software-Engineer-Hyd-ESK-Technologies-Private-Limited-Hyderabad-10-to-13-years-160218004450?src=jobsearchDesk&sid=15188823775584&xp=31&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Hiring for .NET Developer for Hyderabad Location",
                "Company": "Empover I-Tech Pvt Ltd",
                "ExperienceRequired": "3-5 yrs",
                "JobLocation": "Hyderabad(Madhapur)",
                "SkillsRequired": "asp.net, .net, mvc, c#, net, jquery, angular js / node js, wpf, WCF",
                "JobDescription": null,
                "JobID": "160218002925",
                "Salary": "    1,75,000 - 4,50,000 P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Veerabhadra  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Hiring-for-NET-Developer-for-Hyderabad-Location-Empover-I-Tech-Pvt-Ltd-Hyderabad-Madhapur-3-to-5-years-160218002925?src=jobsearchDesk&sid=15188823775584&xp=32&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Technical Project Manager - Mangalore",
                "Company": "Global E-SoftSys Pvt. Ltd.",
                "ExperienceRequired": "7-12 yrs",
                "JobLocation": "Mangalore",
                "SkillsRequired": "project management, .net, ASP.Net, MVC, technical manager, project manager,...",
                "JobDescription": null,
                "JobID": "160218002468",
                "Salary": "    8,00,000 - 15,00,000 P.A.  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Shilpa  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Technical-Project-Manager-Mangalore-Global-E-SoftSys-Pvt-Ltd-Mangalore-7-to-12-years-160218002468?src=jobsearchDesk&sid=15188823775584&xp=33&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Opportunity for IOS and .Net Developer @ Patient Bond Mohali.",
                "Company": "Patient Bond",
                "ExperienceRequired": "0-1 yrs",
                "JobLocation": "Chandigarh, Mohali",
                "SkillsRequired": "asp.net, .net, c#, mvc, javascript, jquery, dot net, software developer...",
                "JobDescription": null,
                "JobID": "140617007645",
                "Salary": "    2,25,000 - 5,00,000 P.A. Best in the Industry  ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Rajeev Goel  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Opportunity-for-IOS-and-Net-Developer-Patient-Bond-Mohali-Patient-Bond-Chandigarh-Mohali-0-to-1-years-140617007645?src=jobsearchDesk&sid=15188823775584&xp=34&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "ASP .Net Developer in C# - Min 3 yrs Exp",
                "Company": "AppMix Technologies Pvt Ltd",
                "ExperienceRequired": "3-7 yrs",
                "JobLocation": "Mumbai, Mumbai Suburbs",
                "SkillsRequired": ".Net, dot net, c#, .net developer, MS Sql, MySQL, ASP.NET Developer...",
                "JobDescription": null,
                "JobID": "070218006527",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Pooja Pujari  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-ASP-Net-Developer-in-C-Min-3-yrs-Exp-AppMix-Technologies-Pvt-Ltd-Mumbai-Mumbai-Suburbs-3-to-7-years-070218006527?src=jobsearchDesk&sid=15188823775584&xp=35&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Software Engineering .Net",
                "Company": "JPMorgan Chase",
                "ExperienceRequired": "5-10 yrs",
                "JobLocation": "Mumbai",
                "SkillsRequired": "sql, wcf, business intelligence, mvc, investment banking, risk management...",
                "JobDescription": null,
                "JobID": "140218901268",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  HR  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Software-Engineering-Net-JPMorgan-Chase-Mumbai-5-to-10-years-140218901268?src=jobsearchDesk&sid=15188823775584&xp=36&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Developer for Ityx: German IT MNC",
                "Company": "ITyX India Pvt. Ltd.",
                "ExperienceRequired": "2-7 yrs",
                "JobLocation": "Pune(Viman Nagar)",
                "SkillsRequired": "html, .net framework, c#.net, .net, angular, javascript, asp.net developer,...",
                "JobDescription": null,
                "JobID": "131117002546",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Sneha Shukla  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Developer-for-Ityx-German-IT-MNC-ITyX-India-Pvt-Ltd-Pune-Viman-Nagar-2-to-7-years-131117002546?src=jobsearchDesk&sid=15188823775584&xp=37&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Walk-in for .Net Developers(1-3 Yrs). Get your Offer in 24 hrs.",
                "Company": "Optimus Information India Pvt. Ltd.",
                "ExperienceRequired": "1-3 yrs",
                "JobLocation": "Noida(Sector-62 Noida)",
                "SkillsRequired": "ASP.Net, C#, MVVM, SQL Server, WPF, MVC, Javascript, VB.NET, CSS, HTML",
                "JobDescription": null,
                "JobID": "130218001690",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Anchal Sharma  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Walk-in-for-Net-Developers-1-3-Yrs-Get-your-Offer-in-24-hrs-Optimus-Information-India-Pvt-Ltd-Noida-Sector-62-Noida-1-to-3-years-130218001690?src=jobsearchDesk&sid=15188823775584&xp=38&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Job Opportunity for .Net Developer  Hyderabad",
                "Company": "Ecentric Solutions Pvt. Ltd.",
                "ExperienceRequired": "4-8 yrs",
                "JobLocation": "Hyderabad",
                "SkillsRequired": ".Net, asp.net, MVC, angular, Angular JS, Azure, SQL, C#, webAPI, web API...",
                "JobDescription": null,
                "JobID": "110118006700",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  Sandeep  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Opportunity-for-Net-Developer-Hyderabad-Ecentric-Solutions-Pvt-Ltd-Hyderabad-4-to-8-years-110118006700?src=jobsearchDesk&sid=15188823775584&xp=39&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Looking for .Net / Java / Php Developers, 3 Yrs+, Bangalore",
                "Company": "Input Zero Technologies Pvt. Ltd.",
                "ExperienceRequired": "3-8 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "dot net, asp.net, java, c#, C, Angularjs, Javascript",
                "JobDescription": null,
                "JobID": "150218007399",
                "Salary": "  Not disclosed ",
                "PostedOn": "2 days ago",
                "PostedBy": "  Nutan Mehta  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Looking-for-Net-Java-Php-Developers-3-Yrs-Bangalore-Input-Zero-Technologies-Pvt-Ltd-Bengaluru-3-to-8-years-150218007399?src=jobsearchDesk&sid=15188823775584&xp=40&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Great Opportunity for .Net WPF Developers - Bangalore Location",
                "Company": "Scientific Games India Pvt Ltd",
                "ExperienceRequired": "1-4 yrs",
                "JobLocation": "Bengaluru",
                "SkillsRequired": "c#, WPF, .NET, .net developer",
                "JobDescription": null,
                "JobID": "220118006458",
                "Salary": "  Not disclosed ",
                "PostedOn": "2 days ago",
                "PostedBy": "  Nitin Kumar  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Great-Opportunity-for-Net-WPF-Developers-Bangalore-Location-Scientific-Games-India-Pvt-Ltd-Bengaluru-1-to-4-years-220118006458?src=jobsearchDesk&sid=15188823775584&xp=41&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".NET Developer - WPF and XAML",
                "Company": "Priya Softweb Solutions Private Limited",
                "ExperienceRequired": "3-6 yrs",
                "JobLocation": "Ahmedabad",
                "SkillsRequired": "WCF, XAML, MVVM, ASP.Net, Entity Framework, C#, WPF, MS SQL Server, Ajax...",
                "JobDescription": null,
                "JobID": "210917002815",
                "Salary": "  Not disclosed ",
                "PostedOn": "2 days ago",
                "PostedBy": "  Priya Softweb  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-NET-Developer-WPF-and-XAML-Priya-Softweb-Solutions-Private-Limited-Ahmedabad-3-to-6-years-210917002815?src=jobsearchDesk&sid=15188823775584&xp=42&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Senior .Net Developer - AngularJS",
                "Company": "Kadbit Solutions Pvt. Ltd",
                "ExperienceRequired": "4-7 yrs",
                "JobLocation": "Hyderabad",
                "SkillsRequired": "Javascript, Kendo Ui, ASP.Net MVC, C#, MVC Architecture, Angularjs, Html5...",
                "JobDescription": null,
                "JobID": "150218901237",
                "Salary": "  Not disclosed ",
                "PostedOn": "2 days ago",
                "PostedBy": "  HR  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Senior-Net-Developer-AngularJS-Kadbit-Solutions-Pvt-Ltd-Hyderabad-4-to-7-years-150218901237?src=jobsearchDesk&sid=15188823775584&xp=43&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".Net Developer",
                "Company": "Atharva Infotech Pvt Ltd",
                "ExperienceRequired": "1-3 yrs",
                "JobLocation": "Mumbai",
                "SkillsRequired": "Javascript, JQuery, Ajax, HTML, XML, C#, .Net, Object Oriented Design...",
                "JobDescription": null,
                "JobID": "150218900848",
                "Salary": "  Not disclosed ",
                "PostedOn": "2 days ago",
                "PostedBy": "  HR  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Net-Developer-Atharva-Infotech-Pvt-Ltd-Mumbai-1-to-3-years-150218900848?src=jobsearchDesk&sid=15188823775584&xp=44&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Hiring for Sr. Software Engineer in .net Technologies",
                "Company": "Fareportal India Pvt Ltd.",
                "ExperienceRequired": "4-9 yrs",
                "JobLocation": "Gurgaon",
                "SkillsRequired": "asp.net mvc, wcf, c#, .net, mvc, oops, web api, unit testing...",
                "JobDescription": null,
                "JobID": "150218008785",
                "Salary": "  Not disclosed ",
                "PostedOn": "2 days ago",
                "PostedBy": "  Avinash Thapa  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Hiring-for-Sr-Software-Engineer-in-net-Technologies-Fareportal-India-Pvt-Ltd-Gurgaon-4-to-9-years-150218008785?src=jobsearchDesk&sid=15188823775584&xp=45&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": ".net Developer Urgent Opening",
                "Company": "Collective S Software Pvt Ltd",
                "ExperienceRequired": "3-5 yrs",
                "JobLocation": "Mumbai, Mumbai Suburbs",
                "SkillsRequired": "sql server developer, sql programmer, sql developer, asp.net developer...",
                "JobDescription": null,
                "JobID": "150218008551",
                "Salary": "    5,50,000 - 8,00,000 P.A.  ",
                "PostedOn": "2 days ago",
                "PostedBy": "  Umesh N  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-net-Developer-Urgent-Opening-Collective-S-Software-Pvt-Ltd-Mumbai-Mumbai-Suburbs-3-to-5-years-150218008551?src=jobsearchDesk&sid=15188823775584&xp=46&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Off Campus Drive || .Net Trainee || Binary Semantics || Gurgaon",
                "Company": "Binary Semantics Limited",
                "ExperienceRequired": "0-1 yrs",
                "JobLocation": "Gurgaon",
                "SkillsRequired": "javascript, html, ms sql server, .net",
                "JobDescription": null,
                "JobID": "150218008391",
                "Salary": "    1,00,000 - 1,50,000 P.A.  ",
                "PostedOn": "2 days ago",
                "PostedBy": "  Charvi Bhartiya  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Off-Campus-Drive-Net-Trainee-Binary-Semantics-Gurgaon-Binary-Semantics-Limited-Gurgaon-0-to-1-years-150218008391?src=jobsearchDesk&sid=15188823775584&xp=47&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Opportunities for .Net Developers with Suyati Technologies, Kochi",
                "Company": "Suyati Technologies Pvt Ltd",
                "ExperienceRequired": "1-3 yrs",
                "JobLocation": "Kochi",
                "SkillsRequired": "ASP.Net MVC, jQuery, OOPS",
                "JobDescription": null,
                "JobID": "150218007106",
                "Salary": "    1,00,000 - 5,00,000 P.A.  ",
                "PostedOn": "2 days ago",
                "PostedBy": "  Kapil Das P K  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Opportunities-for-Net-Developers-with-Suyati-Technologies-Kochi-Suyati-Technologies-Pvt-Ltd-Kochi-1-to-3-years-150218007106?src=jobsearchDesk&sid=15188823775584&xp=48&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Urgently Required Software Developer (.net) - Delhi",
                "Company": "Alankit limited",
                "ExperienceRequired": "1-3 yrs",
                "JobLocation": "Delhi",
                "SkillsRequired": "MVC, ASP.Net, SQL Server, C#, Javascript, JQuery, VB.NET, JSON, .Net, OOPS,...",
                "JobDescription": null,
                "JobID": "150218006806",
                "Salary": "    3,00,000 - 4,00,000 P.A. As per company standards  ",
                "PostedOn": "2 days ago",
                "PostedBy": "  Usha  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Urgently-Required-Software-Developer-net-Delhi-Alankit-limited-Delhi-1-to-3-years-150218006806?src=jobsearchDesk&sid=15188823775584&xp=49&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            },
            {
                "Jobtitle": "Urgent - Allscripts, Baroda is Hiring for C# and .Net for Testing",
                "Company": "Allscripts (India) LLP",
                "ExperienceRequired": "2-3 yrs",
                "JobLocation": "Vadodara",
                "SkillsRequired": "ms sql, .net, object oriented programming, automation testing, WBT",
                "JobDescription": null,
                "JobID": "160218007869",
                "Salary": "  Not disclosed ",
                "PostedOn": "1 day ago",
                "PostedBy": "  HR Team  ",
                "Vacancies": null,
                "Role": null,
                "Qualification": null,
                "JobURL": "https://www.naukri.com/job-listings-Urgent-Allscripts-Baroda-is-Hiring-for-C-and-Net-for-Testing-Allscripts-India-LLP-Vadodara-2-to-3-years-160218007869?src=jobsearchDesk&sid=15188823775584&xp=50&px=2",
                "MaximumSalary": 0,
                "Urgency": null,
                "HostingPortal": null,
                "ClosureDate": null
            }
        ];

    }

    onChange(value) {
        //find list of jobs having package in that range
        for (var i = 0; i < this.AllOffers.length; i++) {
            var salary = this.AllOffers[i].Salary;
            var number=salary.search("-");
        }
        //match with master
        //delete unwanted from master data of marker 
    }
}

interface maker {
    name?: string;
    lat: number;
    lng: number;
    drgabble: boolean;
    keyskill?: string;

}

interface companydata {
    name: string;
    location: string;

}