import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {OktaWidgetService} from 'app/shared/okta/okta-widget.service';
import { OktaConfig } from "app/shared/okta/okta-config";
import { AuthService } from "app/shared/okta/okta-authentication";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.css']
})
export class LoginContentComponent implements OnInit {
  strDate: Date = new Date();
  loginform: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  constructor(private widgetLogin: OktaWidgetService,private authService: AuthService,private OktaConfig: OktaConfig,private fb: FormBuilder) { }


  // ngOnInit(){   
  //   this.widgetLogin.CloseWidget();
  //   this.widgetLogin.login();    
    
  // }



//   closeModal() {
//     //this._dialogRef.close();
//     //this.widgetLogin.CloseWidget();
 
//  }    
 async ngOnInit() {
    
  this.loginform = this.fb.group({
    username: ["", Validators.email],
    password: ["", Validators.required]
  });
  
  if (await this.authService.checkAuthenticated()) {
    await console.log("logged in, redirecting you to the home page");
    window.location.replace(this.OktaConfig.strRedirectURL);
    
  }
}

async onSubmit() {
  console.log("event fired");
  console.log("loginInvalid", this.loginInvalid);
  console.log("formSubmitAttempt", this.formSubmitAttempt);
  console.log("returnUrl", this.OktaConfig.strRedirectURL);

  this.loginInvalid = false;
  this.formSubmitAttempt = false;
  //if (this.loginform.valid) {
    //try {
      var username = this.loginform.get("username").value;
      var password = this.loginform.get("password").value;
      await this.authService.login(username, password);
      //} catch (err) {
      //alert(this.authService.strstateToken)      
      this.loginInvalid = true;
    //}
  //} else 
  {
    this.formSubmitAttempt = true;
    //console.log("username", username);
    //console.log("password", password);
  }
}
  


}