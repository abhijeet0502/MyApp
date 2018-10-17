import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { StatsPage } from '../stats/stats';
import { CartPage } from '../cart/cart';
import { FavouritesPage } from '../favourites/favourites';



@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = StatsPage;
  tab2Root: any = FavouritesPage;
  tab3Root: any = CartPage;
  constructor(public navCtrl: NavController) {
  }
  goToStats(params){
    if (!params) params = {};
    this.navCtrl.push(StatsPage);
  }goToCart(params){
    if (!params) params = {};
    this.navCtrl.push(CartPage);
  }goToFavourites(params){
    if (!params) params = {};
    this.navCtrl.push(FavouritesPage);
  }
}
