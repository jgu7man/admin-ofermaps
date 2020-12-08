import { Component, OnInit } from '@angular/core';
import { LoginService } from 'gdev-tools/gdev-login/login.service';
import { AlertService } from 'gdev-tools/alerts/alert.service';
import { GdevLoginFields } from 'gdev-tools/gdev-login/components/login-card/login-card.component';

@Component( {
  selector: 'om-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
} )
export class LoginComponent implements OnInit {

  constructor (
    private _login: LoginService,
    private _alerts: AlertService
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(submitData: GdevLoginFields) {
    await this._login.passwordLogin( submitData.email, submitData.password )
  }

}
