import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToastController} from "ionic-angular";
import {AlertController} from "ionic-angular";
import {GroceriesServiceProvider} from "../../providers/groceries-service/groceries-service";
import {InputDialogServiceProvider} from "../../providers/input-dialog-service/input-dialog-service";
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";
  constructor(public inputDialogService: InputDialogServiceProvider, public dataService: GroceriesServiceProvider, public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public socialSharing: SocialSharing) {
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

  shareItem(item) {
    let message = `Grocery Item - Name: ${item.name} - Quantity ${item.quantity}`;
    let subject = "Shared via Groceries app";
    console.log(`Attempting to delete ${item.name}`)
    this.socialSharing.share(message, subject)
  }
  editItem(item, index){
    this.inputDialogService.showPrompt(item, index)
  }
  addItem(){
    this.inputDialogService.showPrompt();
  }
}
