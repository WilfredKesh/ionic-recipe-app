import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage} from "../pages/tabs/tabs";
import { RecipePage } from "../pages/recipe/recipe";
import { RecipesPage } from "../pages/recipes/recipes";
import { EditRecipePage } from "../pages/edit-recipe/edit-recipe";
import { ShoppingListPage} from "../pages/shopping-list/shopping-list";
import {ShoppingListService} from "../services/shopping-list";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    RecipePage,
    RecipesPage,
    EditRecipePage,
    ShoppingListPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    RecipePage,
    RecipesPage,
    EditRecipePage,
    ShoppingListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ShoppingListService]
})
export class AppModule {}
