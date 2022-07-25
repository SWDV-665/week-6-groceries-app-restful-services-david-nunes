import { Injectable } from '@angular/core';
import {GroceriesServiceProvider} from "../groceries-service/groceries-service";
import {AlertController} from "ionic-angular";

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public dataService: GroceriesServiceProvider, public alertCtrl: AlertController) {
  }
  showPrompt(item?, index?){
    const prompt = this.alertCtrl.create({
      title: item ? 'Edit item' : 'Add Item',
      message: item ? 'Edit the item...' : 'Add an item...',
      inputs: [
        {
          name: "name",
          placeholder: "Name",
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          placeholder: "Quantity",
          value: item ? item.quantity : null
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {}
        },
        {
          text: "Save",
          handler: value => {
            let parsedValue = {
              name: value.name,
              quantity: parseInt(value.quantity)
            };
            item ? this.dataService.editItem(parsedValue, index) : this.dataService.addItem(parsedValue);
          }
        }
      ]
    });
    prompt.present()
  }
}
