import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpService } from 'src/app/_services';
import { User } from 'src/app/_models/user.model';
import { Url } from 'src/app/_constants/url';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private user: User = new User(undefined, undefined, undefined, undefined, undefined);
    
    constructor(
        public menu: MenuController,
        public HttpService: HttpService
    ) {
        this.menu.enable(true, 'menu');
    }

    ngOnInit() {
        this.HttpService.get<User>(Url.user).subscribe(
            data => {
                this.user = data;
            }, error => {
                if (error.status !== 200) {
                    console.log(error);
                }
                console.log(error);
            });
    }
}
