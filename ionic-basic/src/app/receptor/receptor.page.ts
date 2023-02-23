import { Component, OnInit } from '@angular/core';
import {Personaje} from '../interface/personaje';
import {EnvioReceptorService} from '../service/envio-receptor.service';
@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.page.html',
  styleUrls: ['./receptor.page.scss'],
})
export class ReceptorPage implements OnInit {
  user: Personaje={};
  list: Personaje[]=[];
  personajes: Personaje[]=[];
  constructor(private envioReceptorService: EnvioReceptorService) { }

  ngOnInit() {
    this.envioReceptorSer
  }

}
