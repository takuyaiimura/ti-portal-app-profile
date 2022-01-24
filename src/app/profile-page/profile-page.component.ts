import { Component, OnInit } from '@angular/core';
import { OktaSDKAuthService } from 'app/shared/okta/okta-auth-service';
import {
  OktaAuth,
  OktaAuthOptions,
  TokenManager,
  AccessToken,
  IDToken,
  UserClaims,
  TokenParams
} from '@okta/okta-auth-js'



@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  private UserLoggedIn: any;
  private authService = new OktaAuth(this.oktaSDKAuth.config);
  strDate: Date = new Date();

  strWelcome: any;
  strSan: any;

  strUserSession: Boolean;
  strUser: any;
  UserGivenName: any;
  UserLastName: any;
  UserEmail: any;
  UserFullName: any;
  strEmailAddress: any;
  UserID: any;
  UserCountry: any;
  MyMFA: any;

  constructor(private oktaSDKAuth: OktaSDKAuthService) { }

  async ngOnInit() {
    this.strUserSession = await this.authService.session.exists()
      .then(function (exists) {
        if (exists) {
          // logged in
          console.log(exists);
          return exists
        } else {
          // not logged in
          //console.log(exists);
          return exists
        }
      });

    //console.log(this.strUserSession);

    switch (this.strUserSession == true) {
      case false:
      //alert(this.oktaSDKAuth.config.redirectUri)
      // this.openSnackBar()

      case true:

        // access and ID tokens are retrieved automatically from the TokenManager
        this.authService.token.getWithoutPrompt()
          .then(function (user) {
            // user has details about the user
            //console.log(user)
            return user;
            //return Promise.resolve(this.authService);
          })
          .catch(function (err) {
          });
        this.strUser = await this.authService.token.getWithoutPrompt()
        console.log(this.strUser);
        // this.UserID = this.strUser.tokens.idToken.claims.sub;
        this.UserEmail = this.strUser.tokens.idToken.claims.email;

        this.strWelcome = 'ようこそ';
        this.strSan = 'さん';

        this.UserGivenName = this.strUser.tokens.idToken.claims.firstname;
        this.UserLastName = this.strUser.tokens.idToken.claims.lastname;
        this.UserFullName = this.UserGivenName + " " + this.UserLastName;
        this.strEmailAddress = this.strUser.tokens.idToken.claims.email;
        this.UserID = this.strUser.tokens.idToken.claims.sub;
        this.UserCountry = this.strUser.tokens.idToken.claims.countryCode;
        this.MyMFA = this.strUser.tokens.idToken.claims.amr;
    }
  }



}
