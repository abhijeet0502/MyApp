import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { CartPage } from "../pages/cart/cart";
import { FavouritesPage } from "../pages/favourites/favourites";
import { StatsPage } from "../pages/stats/stats";
import { TabsControllerPage } from "../pages/tabs-controller/tabs-controller";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { AboutUsPage } from "../pages/about-us/about-us";
import { MyAccountPage } from "../pages/my-account/my-account";
import { IonicStorageModule } from "@ionic/storage";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";
import { HttpClientModule } from "@angular/common/http";
import { HomePage } from "../pages/home/home";
import {InAppBrowser} from '@ionic-native/in-app-browser'

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    FavouritesPage,
    StatsPage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    AboutUsPage,
    MyAccountPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: "__mydb",
      driverOrder: ["indexeddb", "sqlite", "websql"]
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    FavouritesPage,
    StatsPage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    AboutUsPage,
    MyAccountPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    InAppBrowser

  ]
})
export class AppModule {}
