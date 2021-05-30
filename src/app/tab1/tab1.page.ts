import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  titulo = 'Vídeos App';

  listaVideos: IFilme[] =  [
    {
      nome: 'Sem Remorso (2021)',
      lancamento: '30/04/2021',
      duracao: '1h 50m',
      classificacao: 73,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg',
      generos: ['Ação', 'Aventura', 'Thriller', 'Guerra']
    },
    {
      nome: 'Vanquish (2021)',
      lancamento: '16/04/2021',
      duracao: '1h 36m',
      classificacao: 62,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1jkNM1NHyHsxiBBuOlOeqgmidM0.jpg',
      generos: ['Ação', 'Crime', 'Thriller']
    },
    {
      nome: 'Rogai Por Nós (2021)',
      lancamento: '02/04/2021',
      duracao: '1h 39m',
      classificacao: 56,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zduyzcjyahZtP4fGZE6789h04IM.jpg',
      generos: ['Terror']
    },
    {
      nome: '',
      lancamento: '',
      duracao: '',
      classificacao: 0,
      cartaz: '',
      generos: []
    },
    {
      nome: '',
      lancamento: '',
      duracao: '',
      classificacao: 0,
      cartaz: '',
      generos: []
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'SIM, favoritar!',
          handler: () => {
            this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'medium',
    });
    toast.present();
  }
}
