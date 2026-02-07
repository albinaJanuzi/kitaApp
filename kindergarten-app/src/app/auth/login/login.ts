import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  login() {
  signInWithEmailAndPassword(this.auth, this.email, this.password)
    .then(() => {
      this.router.navigate(['/news']);
    })
    .catch((err: any) => {
  console.log("Firebase error:", err);
  alert(err.message);
});
}

  register() {
  createUserWithEmailAndPassword(this.auth, this.email, this.password)
    .then(() => {
      this.router.navigate(['/news']);
    })
    .catch((err: any) => {
  console.log("Firebase error:", err);
  alert(err.message);
});
}

  constructor(private auth: Auth, private router: Router) {}
}
