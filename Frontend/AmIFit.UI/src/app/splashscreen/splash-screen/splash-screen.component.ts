import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

  windowWidth: string;
  showSplash = true;

  constructor(private router: Router) {  }
  
    ngOnInit(): void {
      setTimeout(() => {
        this.windowWidth = "-" + window.innerWidth + "px";
  
        setTimeout(() => {
          this.showSplash = !this.showSplash;
        }, 500);
      }, 3000);
      this.router.navigateByUrl('/login')
    } 
}
