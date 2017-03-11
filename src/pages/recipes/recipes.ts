import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditRecipePage} from "../edit-recipe/edit-recipe";

/*
  Generated class for the Recipes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }
  addRecipe(){
    this.navCtrl.push(EditRecipePage);
  }  
}
