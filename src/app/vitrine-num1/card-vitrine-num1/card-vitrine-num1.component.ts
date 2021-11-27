import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-vitrine-num1',
  templateUrl: './card-vitrine-num1.component.html',
  styleUrls: ['./card-vitrine-num1.component.css']
})
export class CardVitrineNum1Component{
  @Input() nomeProduto?: string;
  @Input() categorias: string[] = [];
  @Input() preco?: number;
  @Input() imgSrc?: string;
  @Input() descricao?: string;
  @Input() podeComprar: boolean = true;
  @Input() podeCompartilhar: boolean = true;
  @Input() podeAlerta: boolean = true;

  @Output() clickComprar = new EventEmitter();
  @Output() clickCompartilhar = new EventEmitter();
  @Output() clickAlerta = new EventEmitter();

  constructor() { }

  podeExibir(){
    return this.nomeProduto && this.imgSrc && this.descricao && this.preco;
  }
}
