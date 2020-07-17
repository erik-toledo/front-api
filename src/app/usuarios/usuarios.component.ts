import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { error } from 'console';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  datosUsuarios: any[] = []
  informacion:  any[] = []

  constructor(protected userService : UserService) { }

  ngOnInit(): void {
    this.userService.getdatosUsuarios()
    .subscribe(
      (datasUsuarios) => {
        this.datosUsuarios = datasUsuarios['results']
      },
      (error) => {
        console.error(error)
      }
    )
    this.userService.getdatosUsuarios()
    .subscribe(
      (info) => {
        
        this.informacion = info['info']
       
      },
      (error) => {
        console.error(error)
      }
    )
  }
  

}
