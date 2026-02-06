import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';

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

  login(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
      .then(() => alert('Login successful!'))
      .catch(err => 
        alert(err.message));
  }

  register(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then(() => alert('Registration successful!'))
      .catch(err => 
        alert(err.message));
  }
}
