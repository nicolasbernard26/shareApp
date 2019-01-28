import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.page.html',
    styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

    private user: User = new User(null, null, null, null, null);

    constructor() { }

    ngOnInit() {
    }

}
