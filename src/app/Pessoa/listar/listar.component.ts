import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service'
import { Pessoa } from 'src/app/Modelo/Pessoa';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pessoas:Pessoa[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getPessoas()
    .subscribe(data=>{
      this.pessoas=data
    })
  }

  edit(pessoa:Pessoa){
    localStorage.setItem("id",pessoa.id.toString());
    this.router.navigate(["edit"]);
  }

  delete(pessoa:Pessoa){
    this.service.deletePessoa(pessoa)
    .subscribe(data=>{
      this.pessoas=this.pessoas.filter(p=>p!==pessoa);
      alert("Person deleted successfullly...");
    })
    
  }

}
