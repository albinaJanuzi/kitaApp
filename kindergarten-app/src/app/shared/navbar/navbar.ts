import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
import { authState } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html'
})
export class NavbarComponent {

  userEmail: string | null = null;

  constructor(private auth: Auth, private router: Router) {
  authState(this.auth).subscribe(user => {
    this.userEmail = user?.email ?? null;
  });
}


  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['/login']);
    });
  }

  
}
