import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';
import { LoginComponent } from '../autentificacion/login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  active: boolean = this.loginService.getActive();
  
  constructor(private dialog: MatDialog,private loginService: LoginService){

  }

  ngOnInit(): void {
    console.log(this.loginService.getActive());
  }
  
  openDialogSesion(): void {
    this.dialog.open(LoginComponent, { disableClose: true, width: '500px' });
  }

  logout() {
    this.loginService.logout();
  }
}

