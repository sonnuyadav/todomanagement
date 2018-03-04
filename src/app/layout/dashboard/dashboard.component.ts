import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {ConstantService} from '../constant.services';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor(private cons :ConstantService) {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'Add new company',
                
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Add New Attachment',
              
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Compose new mail',
                
            }
        );


    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
