import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToastController} from "ionic-angular";
import {AlertController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";
  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Eggs",
      quantity: 3
    },
    {
      name: "Potatoes",
      quantity: 5
    },
    {
      name: "Bread",
      quantity: 1
    }
  ]
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }
  removeItem(item, index){
    this.items.splice(index, 1);
    const toast = this.toastCtrl.create({
      message: `Removing item: ${item.name}`,
      duration: 3000,
    });
    toast.present();
  }

  addItem(){
    console.log("button clicked")
    const prompt = this.alertCtrl.create({
      title: 'Add item',
      message: 'Please enter an item...',
      inputs: [
        {
          name: "item",
          placeholder: "Name"
        },
        {
          name: 'quantity',
          placeholder: "Quantity"
        }
      ],
      buttons: [
        {
          text: "Submit",
          handler: value => {
            let parsedValue = {
              name: value.item,
              quantity: parseInt(value.quantity)
            };
            this.items.push(parsedValue);
          }
        }
      ]
    })
    prompt.present();
  }
}
