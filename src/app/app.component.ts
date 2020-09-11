import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';

  constructor(private route:Router){

  }

  listar(){
    this.route.navigate(['listar']);
  }

  novo(){
    this.route.navigate(['add']);
  }
  
}


