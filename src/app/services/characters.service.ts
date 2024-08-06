import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError, map, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  private API_URL = `https://rickandmortyapi.com/api`;
  requestHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
  }

  getCharacters(data: any = null) {
    this.requestHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    let api = `${this.API_URL}/character`;

    let params = new HttpParams();

    if (data) {
      data.forEach((element: any) => {
        console.log("element", element)
        params = params.append(element.params, element.value); 
      })
    }

    console.log("==>", params)
    return this.http.get(
      api,
      { observe: 'response', params }
    ).pipe(
      map(
        (result: any) => {
          return result.body;
        }),
      catchError((error: any) => throwError(() => new Error(error.message)))
    );
  }

  // getCharacters() {
  //   this.requestHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  //   let api = `${this.API_URL}/character`;

  //   return this.http.get(
  //     api,
  //     { observe: 'response' }
  //   ).pipe(
  //     map(
  //       (result: any) => {
  //         return result.body;
  //       }),
  //     catchError((error: any) => throwError(() => new Error(error.message)))
  //   );
  // }

}