import { Component } from '@angular/core';
import { NgForm} from "@angular/forms";
import { ShoppingListService} from  "../../services/shopping-list";
import { Ingredient } from "../../models/ingredient";

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {

constructor(private slService: ShoppingListService){}

listItems: Ingredient[]; 
onAddItem(form: NgForm){
  this.slService.addItem(form.value.ingredientName, form.value.amount );
  form.reset();
  this.loadItems();
  
}
ionViewWillEnter(){
  this.loadItems();
}
private loadItems(){
  this.listItems = this.slService.getItems();

}
deleteItem(index: number){
  this.slService.removeItem(index); 
    this.loadItems();
}


}
