import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myEcom';
  islogin = true;

  ngOnInit(): void {
    // this.login();
  }
  
  login() {
    if (this.islogin) {
      this.router.navigate(['/home']);

    } else { this.router.navigate(['/login']) };

  }

  constructor(private router: Router){

  }


}
