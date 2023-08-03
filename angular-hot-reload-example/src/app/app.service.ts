import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {
  }

  getHello(){
    return this.httpClient.get<{data:string} >('/api/hello');
  }
}
