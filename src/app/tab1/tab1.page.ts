import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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
      generos: ['Ação', 'Aventura', 'Thriller', 'Guerra'],
      pagina: '/sem-remorso'
    },
    {
      nome: 'Vanquish (2021)',
      lancamento: '16/04/2021',
      duracao: '1h 36m',
      classificacao: 62,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1jkNM1NHyHsxiBBuOlOeqgmidM0.jpg',
      generos: ['Ação', 'Crime', 'Thriller'],
      pagina: '/vanquish'
    },
    {
      nome: 'Rogai por Nós (2021)',
      lancamento: '02/04/2021',
      duracao: '1h 39m',
      classificacao: 56,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zduyzcjyahZtP4fGZE6789h04IM.jpg',
      generos: ['Terror'],
      pagina: '/rogai-por-nos'
    },
    {
      nome: 'Infiltrado (2021)',
      lancamento: '27/05/2021',
      duracao: '1h 59m',
      classificacao: 79,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dAtAp4IeT6EYGhewfnNNhalobme.jpg',
      generos: ['Ação', 'Crime'],
      pagina: ''
    },
    {
      nome: 'Cruella (2021)',
      lancamento: '28/05/2021',
      duracao: '2h 14m',
      classificacao: 88,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ljPHd7WiPVKmuXi1hgQUpZQslbC.jpg',
      generos: ['Comédia', 'Crime'],
      pagina: ''
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosSevice: DadosService,
    public route: Router ) {}

    exibirFilme(filme: IFilme) {
      this.dadosSevice.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }

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
