import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  register(email, password) {
    return  this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  loginGoogleAccount() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }

  user() {
    return this.afAuth.user;
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }
}

