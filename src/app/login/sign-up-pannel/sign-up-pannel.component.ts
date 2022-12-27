import { AfterContentChecked, ChangeDetectorRef, Component, NgModule, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up-pannel',
  templateUrl: './sign-up-pannel.component.html',
  styleUrls: ['./sign-up-pannel.component.scss']
})

export class SignUpPannelComponent implements OnInit, AfterContentChecked {
  /*
  termsOfUseAccepted: boolean = false;
  userName: string = "";
  login: string = "";
  password: string = "";
  passwordConfirmation: string = "";


  constructor( private router: Router ) {}


  settermsOfUseAccepted(termsOfUseAccepted: boolean) {
    this.termsOfUseAccepted =termsOfUseAccepted;
  }

  signUp() {
    if(this.userName != "" && this.login != "" && 
    this.password != "" && this.passwordConfirmation != ""){
      if(this.password == this.passwordConfirmation) {
        console.log("Attention l'utilisateur "+this.login+" n'a pas été enregistré avec "
        +this.password+" et terms of use est à "+this.termsOfUseAccepted);
        this.router.navigateByUrl("/octom");
      } else {
        console.log("Le mot de passe n'est pas le même.");

      }
    } else {
      console.log("Il manque des informations");
    }
  }

  setUserName(userName: string){
    this.userName = userName;
  }

  setLogin(login: string){
    this.login = login;
  }
  setPassword(password: string){
    this.password = password;
  }

  setPasswordConfirmation (passwordConfirmation: string){
    this.passwordConfirmation = passwordConfirmation;
  }*/



  signUpForm! : FormGroup;
  errors!: Map<string, string>;

  constructor(private formBuilder : FormBuilder, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username : ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(32)
      ]],
      login : ['', [
        Validators.required,
        this.loginValidator(),
        //this.forbiddenNameValidator()
      ]],
      passwordGroup : this.formBuilder.group({
        password : ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(32)
        ]],
        passwordConfirmation : ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(32)
        ]],
      }, {validators: [this.passwordValidator()] }),
      termsAndPrivacy : ['', [
        Validators.requiredTrue
      ]],
      phones : this.formBuilder.array([])
    })

    this.errors = new Map<string, string>();
    this.addPhone();
  }

  passwordValidator(): ValidatorFn {
    return (ctrl: AbstractControl): null | ValidationErrors => {
      const passwordValue = ctrl.get('password')!.value;
      const passwordConfirmValue = ctrl.get('passwordConfirmation')!.value;
      
      return passwordValue == passwordConfirmValue ? null : {
        confirmEqual: {
          password: passwordValue,
          passwordConfirmation: passwordConfirmValue
        }
      };
    };
  }

  loginValidator(): ValidatorFn {
    return (ctrl: AbstractControl): null | ValidationErrors => {
      const loginValue = ctrl.value;
      const regexEmail = new RegExp('^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+([a-zA-Z0-9-.]*[a-zA-Z0-9]){0,}.[a-zA-Z]{2,3}$'); 
      const regexTel = new RegExp('0([0-9]{9})$');
      if(regexEmail.test(loginValue)){
        //alert("email");
        return null;
      } else if (regexTel.test(loginValue)) {
        //alert("tel");
        return null;
      } else {
        return {login: loginValue};
      }
    };
  }
  
  /*forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const nameRe = new RegExp('^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+([a-zA-Z0-9-.]*[a-zA-Z0-9]){0,}.[a-zA-Z]{2,3}$');
      const forbidden = nameRe.test(control.value);
      return forbidden ? null : {forbiddenName: {value: control.value}};
    };
  }*/

  signUp() {
    if (!this.signUpForm.valid) {
      alert('Form is invalid')
      return;
    }
    alert('Sign up success')
  }

  get username() {
    return this.signUpForm.get('username');
  }
  get login() {
    return this.signUpForm.get('login');
  }
  get passwordGroup() {
    return this.signUpForm.get('passwordGroup');
  }
  get password() {
    return this.signUpForm.get('passwordGroup')?.get('password');
  }
  get passwordConfirmation() {
    return this.signUpForm.get('passwordGroup')?.get('passwordConfirmation');
  }
  get termsAndPrivacy() {
    return this.signUpForm.get('termsAndPrivacy');
  }
  get phones() {
    return this.signUpForm.get('phones') as FormArray;
  }

  addPhone() {
    let phone = this.formBuilder.group({
      phonePrefix: '',
      phoneNumber: ['', [
        Validators.minLength(9),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')
      ]]
    });
    if(this.phones.length == 1)
      this.errors.delete("errorRemoveFirstNumber");
    if(this.phones.length < 3) {
      this.phones.push(phone);
    } else {
      console.log("It can be only 3 phones numbers.")
    }
  }

  deletePhone(index: number) {
    if(this.phones.length > 1) {
      this.phones.removeAt(index);
    } else {
      this.errors.set("errorRemoveFirstNumber","You need at least 1 phone number");
    }
  }
  getPhonePrefix(index: number) {
    return this.phones.controls[index].get('phonePrefix');
  }
  getPhoneNumber(index: number) {
    return this.phones.controls[index].get('phoneNumber');
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  
}
