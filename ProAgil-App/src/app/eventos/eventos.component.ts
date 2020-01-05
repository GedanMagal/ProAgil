import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {


  _filtroLista = '';
  eventosFiltrados: any = [];
  get filtroLista(): string {
    return this._filtroLista;
  }

  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }


  eventos: any = [];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;
  textButton = '';




  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
    this.alterTextButton();
  }

  getEventos() {
    this.eventos = this.http.get('http://localhost:5000/api/values').subscribe(
      resp => {
        this.eventos = resp;
        console.log(resp);
      },
      err => {
        console.log(err);
      }
    );
  }

  alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }

  alterTextButton() {
    if (!this.mostrarImagem) {
      this.textButton = 'Mostrar Imagem';
    } else {
      this.textButton = 'Ocultar Imagem';
    }
  }

  // filtrarEventos(filtrarPor: string){
  //   filtrarPor = filtrarPor.toLocaleLowerCase();
  //   return this.eventos.filter(
  //     evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
  //   );
  // }

  filtrarEventos(filtrarPor: string) {
    filtrarPor = filtrarPor.toLocaleLowerCase()
    return this.eventos.filter(
      evento => {
        return evento.tema.toLocaleLowerCase().includes(filtrarPor);
      }
    )

  }

}