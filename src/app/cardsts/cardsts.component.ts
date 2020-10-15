import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardsts',
  templateUrl: './cardsts.component.html',
  styleUrls: ['./cardsts.component.css']
})
export class CardstsComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    const API = "https://rickandmortyapi.com/api/character";
    this.obtenerInfo(API)
  }

  prevDisabled=false
  nextDisabled = false
  personajes=[]
  prev=undefined
  next= undefined

  // Obtener resultado de API
  public obtenerInfo (api:string) {
    return fetch(api)
      .then((response) => response.json())
      .then((json) => {
        this.llenarDatos(json) 
        this.paginacion(json.info);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };

  llenarDatos (data){
    this.personajes = data.results
  };

// Paginacion
  paginacion (info){
    this.prevDisabled = !info.prev;
    this.nextDisabled = !info.next;
    this.prev=info.prev
    this.next=info.next
  }
}
