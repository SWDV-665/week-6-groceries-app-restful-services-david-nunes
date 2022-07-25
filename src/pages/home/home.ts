import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToastController} from "ionic-angular";
import {AlertController} from "ionic-angular";
import {GroceriesServiceProvider} from "../../providers/groceries-service/groceries-service";
import {InputDialogServiceProvider} from "../../providers/input-dialog-service/input-dialog-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";
  constructor(public inputDialogService: InputDialogServiceProvider, public dataService: GroceriesServiceProvider, public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  loadItems(){
    return this.dataService.getItems()
  }
  removeItem(item, index){
    const toast = this.toastCtrl.create({
      message: `Removing item: ${item.name}`,
      duration: 3000,
    });
    toast.present();
  this.dataService.removeItem(index);
  }

  editItem(item, index){
    this.inputDialogService.showPrompt(item, index)
  }
  addItem(){
    this.inputDialogService.showPrompt();
  }
}
