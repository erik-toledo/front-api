import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { error } from 'console';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datosLogin: any[] = []
  constructor( protected userService : UserService) { }

  ngOnInit(): void {
    this.userService.getdatosLogin()
    .subscribe(
      (datasLogin) => {
        this.datosLogin = datasLogin['results']
      },
      (error) => {
        console.error(error)
      }
    )
  }

}
