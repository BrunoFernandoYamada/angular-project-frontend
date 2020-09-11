import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pessoa } from 'src/app/Modelo/Pessoa';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }
  
  pessoa:Pessoa = new Pessoa();

  ngOnInit(): void {
  }

  add(pessoa:Pessoa){
    this.service.createPessoa(pessoa)
    .subscribe(data=>{
      alert("Person added successfully...");
      this.router.navigate(["listar"]);
    })
  }

  cancel(){
    this.router.navigate(["listar"]);
  }

}
