import { Injectable } from '@angular/core';
import{environment} from 'src/environments/environment';
import {initializeApp} from "firebase/app";
import {Auth, createUserWithEmailandPassword, signInWithEmailAndPassword} from 'firebase/auth';
import{getAuth, onAuthStateChanged} from "firebase/auth";
import{User} from '../interface/user';
const firebaseApp = initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class AutService {
  public isLoged: any = false;
  auth: Auth;

  constructor() {
    this.auth=getAuth(firebaseApp);
    onAuthStateChanged(this.auth, user=>{
      if(user!=undefined ||user!=null){
        this.isLoged=user;
      }
    });
   }
   tieneSesion(){
    return this.isLoged;
   }
   getStateAuth(){
    return this.auth;
   }
   onLogin(user: User): Promise<any>{
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
   }
   onRegister(user: User): Promise<any>{
    return createUserWithEmailandPassword(this.auth, user.email, user.password);
   }
}
