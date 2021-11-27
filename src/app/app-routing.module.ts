import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { VitrineNum1Component } from './vitrine-num1/vitrine-num1.component';
import { VitrineNum2Component } from './vitrine-num2/vitrine-num2.component';

const routes: Routes = [
  {path:'', component: VitrineNum1Component},
  {path:'produtos/:idProduto', component: DetalhesProdutoComponent},
  {path:'vitrine-1', component: VitrineNum1Component},
  {path:'vitrine-2', component: VitrineNum2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
