import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hot-reload-example';
  response!: string;

  constructor(private appService: AppService) {
  }

  sendReq() {
    this.appService.getHello().subscribe({
      next:(response) => {
        this.response = response.data;
      }
    })
  }
}
