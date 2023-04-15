import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: [],
})
export class ModalErrorComponent implements OnInit {
  error: string = '';
  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
