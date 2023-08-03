import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  rootUrl!: string;
  constructor(private httpClient: HttpClient) {
    this.rootUrl = environment.apiUrl;
  }

  getHello(){
    return this.httpClient.get<{data:string} >(this.rootUrl+'/hello');
  }
}
