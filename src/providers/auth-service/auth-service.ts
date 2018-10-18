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
        console.log(this.storage.get(credentials.email));
        console.log(credentials);
        console.log(this.storage.get('xyz@abc.com'))

        this.storage.get(credentials.email).then(val => {
          password = val.password;
          let access = credentials.password === password;
          this.currentUser = new User(credentials.name, credentials.email);
          console.log(access);
          observer.next(access);
          observer.complete();
        });
      });
    }
  }
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      this.storage.set(credentials.email,credentials);

      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
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
