import { Component } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
  Loading,
  IonicPage
} from "ionic-angular";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";


export class LoginCredentials {
  email: string;
  password: string;

  constructor() {
    this.password = '';
    this.email = '';
  }
}
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  loading: Loading;
  loginCredentials= new LoginCredentials();

  constructor(
    private nav: NavController,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {
  
  }

  public login() {
    this.showLoading();
    this.auth.login(this.loginCredentials).subscribe(
      allowed => {
        if (allowed) {
          this.nav.setRoot("tabs-page")
        } else {
          this.showError("Access Denied");
        }
      },
      error => {
        this.showError(error);
      }
    );
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: "Fail",
      subTitle: text,
      buttons: ["OK"]
    });
    alert.present();
  }
}
