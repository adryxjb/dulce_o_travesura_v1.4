import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "apiComponent",
  templateUrl: "./api.component.html",
  styleUrls: ["./api.component.css"]
})
export class ApiComponent {
  public titulo: string;

  constructor(private _http: HttpClient) {
    this.titulo = "Dulce o Travesura";
    this._http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("Petición finalizada");
      }
    );
  }

  OnInit() {}
}
