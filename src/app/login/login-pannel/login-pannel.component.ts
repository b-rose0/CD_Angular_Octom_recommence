import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-pannel',
  templateUrl: './login-pannel.component.html',
  styleUrls: ['./login-pannel.component.scss']
})
export class LoginPannelComponent {  

  constructor( private router: Router ) {}

  signUp() {
  console.log("Attention l'utilisateur n'a pas été enregistré");
  this.router.navigateByUrl("/octom");
 }

}
