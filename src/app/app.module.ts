import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertasProdutoComponent } from './alertas-produto/alertas-produto.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { VitrineNum1Component } from './vitrine-num1/vitrine-num1.component';
import { VitrineNum2Component } from './vitrine-num2/vitrine-num2.component';
import { CardVitrineNum1Component } from './vitrine-num1/card-vitrine-num1/card-vitrine-num1.component';
import {MatCardModule} from '@angular/material/card';
import { CardVitrineNum2Component } from './vitrine-num2/card-vitrine-num2/card-vitrine-num2.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlertasProdutoComponent,
    DetalhesProdutoComponent,
    VitrineNum1Component,
    VitrineNum2Component,
    CardVitrineNum1Component,
    CardVitrineNum2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
