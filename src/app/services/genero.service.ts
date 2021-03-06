import { IListaGenero } from './../models/IGenero.model';
import { IListaFilmes } from './../models/IFilmeAPI.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-BR';

  url = '';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=2ac3c9384b37ab537d918463171c2088';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGeneros(filme: boolean): Observable<IListaGenero>{
    if(filme){
      this.url = `${this.apiURL}genre/movie/list${this.key}&language=${this.lingua}`;
    } else{
      this.url = `${this.apiURL}genre/tv/list${this.key}&language=${this.lingua}`;
    }

    return this.http.get<IListaGenero>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API!',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
