import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto, produtos } from '../produtos';

@Component({
  selector: 'app-vitrine-num2',
  templateUrl: './vitrine-num2.component.html',
  styleUrls: ['./vitrine-num2.component.css']
})
export class VitrineNum2Component {
  items = produtos;
  constructor(private router: Router) { }

  compartilhar() {
    window.alert('O produto foi compartilhado!');
  }
  alerta() {
    window.alert('Você será avisado por email quando o preço baixar! #soqnao');
  }
  navegar(produto: Produto) {
    this.router.navigateByUrl(`/produtos/${produto.id}`);
  }
}
