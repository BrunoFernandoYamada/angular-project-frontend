import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/Modelo/Pessoa';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pessoa:Pessoa = new Pessoa();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPessoaId(+id)
    .subscribe(data=>{
      this.pessoa=data
    })
  }

  save(pessoa:Pessoa){
    this.service.updatePessoa(pessoa)
    .subscribe(data=>{
      this.pessoa=data;
      alert("Person updated successfully...");
      this.router.navigate(["listar"]);
    })
  }
  
  cancel(){
    this.router.navigate(["listar"]);
  }

}
