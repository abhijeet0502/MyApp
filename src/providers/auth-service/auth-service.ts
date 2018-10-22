import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  constructor(public http: HttpClient, public storage: Storage) {
    console.log("Hello AuthServiceProvider Provider");
    console.log(this.storage.keys());
  }

  public login(credentials) {
    let password = "";

    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        console.log(this.storage.keys);

        this.storage
          .get(credentials.email)
          .then(val => {
            if (val.password != null) {
              password = val.password;
            }
            let access = credentials.password === password;
            this.currentUser = new User(credentials.name, credentials.email);
            console.log(access);
            observer.next(access);
            observer.complete();
          })
          .catch(error => {
            let access = false;
            observer.next(access);
          });
      });
    }
  }
  public register(credentials) {
    let emailAlreadyExits = false;

    // this.storage.get(credentials.email).then(data => {
    //   if (data) {
    //     alert("exists");
    //     emailAlreadyExits = true;
    //   } else {
    //     return Observable.create(observer => {
    //       error => {
    //         observer.next(false);
    //         observer.complete();
    //       };
    //     });
    //   }
    // });

    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      this.storage.get(credentials.email).then(data => {
        if (data) {
          alert("exists");
          emailAlreadyExits = true;
          return false;
          return Observable.create(observer => {
            observer.next(false);
            observer.complete();
          });

        } else {
          this.storage.set(credentials.email, credentials);
          return Observable.create(observer => {
            observer.next(true);
            observer.complete();
          });
        }
      });
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
