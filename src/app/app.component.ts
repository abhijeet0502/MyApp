import { Component, ViewChild, Inject } from "@angular/core";
import { Platform, Nav } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LoginPage } from "../pages/login/login";
import { HomePage } from "../pages/home/home";
import { MyAccountPage } from "../pages/my-account/my-account";
import { AboutUsPage } from "../pages/about-us/about-us";


@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav)
  navCtrl: Nav;
  rootPage: any=LoginPage;
  homePage:any=HomePage;
  myAccountPage: any=MyAccountPage;
  aboutPage:any=AboutUsPage;

  constructor(
   @Inject(Platform) platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
   
  ) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
//   ngOnInit() {
//     // Let's navigate from TabsPage to Page1
//     this.navCtrl.setRoot(this.rootPage);
//  }


 pushHome(){
   //check if logged in
   this.navCtrl.push(this.homePage) 
 }

 pushAbout(){
    //check if logged in
  this.navCtrl.push(this.aboutPage)
}
pushMyAccount(){
   //check if logged in
  this.navCtrl.push(this.myAccountPage)
}
}
