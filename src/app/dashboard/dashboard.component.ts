import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { error } from 'console';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datosDashboard: any[] = []
  constructor(protected userService : UserService) { }

  ngOnInit(): void {
    this.userService.getdatosDashboard()
    .subscribe(
      (datasDashboard) => {
        this.datosDashboard = datasDashboard['results']
      },
      (error) => {
        console.error(error)
      }
    )
  }

}
