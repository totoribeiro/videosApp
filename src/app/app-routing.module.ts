import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sem-remorso',
    loadChildren: () => import('./filmes/sem-remorso/sem-remorso.module').then( m => m.SemRemorsoPageModule)
  },
  {
    path: 'vanquish',
    loadChildren: () => import('./filmes/vanquish/vanquish.module').then( m => m.VanquishPageModule)
  },
  {
    path: 'rogai-por-nos',
    loadChildren: () => import('./filmes/rogai-por-nos/rogai-por-nos.module').then( m => m.RogaiPorNosPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
