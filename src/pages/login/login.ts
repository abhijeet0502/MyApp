import { Component } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
  Loading,
} from "ionic-angular";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { TabsControllerPage } from "../tabs-controller/tabs-controller";
import { SignupPage } from "../signup/signup";


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
  signUp:any=SignupPage;

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
          this.nav.setRoot(TabsControllerPage)
        } else {
          this.showError("Invalid username or password");
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
