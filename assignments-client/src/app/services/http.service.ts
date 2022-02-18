import { Injectable } from "@angular/core";
import { observable, Observable, Observer } from "rxjs";
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

export enum HttpMethod {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
  Options = "OPTION",
  Head = "HEAD",
  Patch = "PATCH"
}

export enum DataType {
  Date = "date",
  Arrhythmia = "arrh",
  Physician = "phys"
}

export enum AblationType {
  Time = "time",
  Session = "session"
}

@Injectable({
  providedIn: "root"
})
export class HttpService {
  public static serviceUrl = environment.baseUrl;

  constructor(private m_http: HttpClient,private m_router:Router) {  }

  public execute<T>(
    url: string,
    postData: any = null,
    method: HttpMethod = HttpMethod.Get,
    headers: any = { 'Content-Type': 'application/json', 'Accept': 'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  }

  ): Observable<T> {
    return new Observable((observer: Observer<T> )=> {
    //let met = HttpMethod[method];
      this.m_http.request<T>(method,HttpService.serviceUrl+url,{body:postData,observe:'response',headers:headers}).subscribe(
        
         (event: HttpEvent<T>) => {
         
          switch (event.type) {
            case HttpEventType.Sent:
              break;
            case HttpEventType.ResponseHeader:
           
              break;
            case HttpEventType.DownloadProgress:
              break;
            case HttpEventType.Response:
            const code = event.status;
            if (code == 401){
            //  this.m_token.updateBioTokenSubject(null);
              this.m_router.navigate(['/login']);
            }
            const keys = event.headers.keys();
           // let token = !!event.headers ? event.headers.get('bwAccessToken'):null;
            // if (!!token){
            //   this.m_token.updateBioTokenSubject(token);
            // }
            observer.next(event.body as T);
          }
        }
        ,
        err => {
          observer.error(err);
        }
      );
    });
  }
}


