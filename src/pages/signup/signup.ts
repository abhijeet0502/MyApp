import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";



export class Data{
  name:string;
  password:string;

  constructor(){
    this.name='';
    this.password='';
  }
}

export class RegisterCredentials{

  email:string;
  data=new Data();
  constructor(){
    
    this.email='';
  }
}

@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  createSuccess = false;
  registerCredentials = new RegisterCredentials();

  constructor(
    private nav: NavController,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController
  ) {}

  public register() {
    this.auth.register(this.registerCredentials).subscribe(
      success => {
        if (success) {
          this.createSuccess = true;
          this.showPopup("Success", "Account created.");
        } else {
          this.showPopup("Error", "Problem creating account.");
        }
      },
      error => {
        this.showPopup("Error", error);
      }
    );
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: "OK",
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
