import { Component, OnInit } from '@angular/core';
import { EMPTY, empty } from 'rxjs';

@Component({
  selector: 'app-componentForm',
  templateUrl: './componentForm.component.html',
  styleUrls: ['./componentForm.component.css']
})
export class ComponentFormComponent implements OnInit {

  constructor() { }

  cacher : boolean = true;

  title : String = "Composant initialisé";
  valid : Boolean = true;
  prenom : String = "";
  nom : String = "";
  genre : String = "";
  adresse : String = "";
  ville : String = "";
  cp : String = "";
  email : String = "";
  tel : String = "";
  pays : String = "";
  login : String = "";
  password : String = "";
  confirmPassword : String = "";

  validationPassword : boolean = true;
  cacherErreur : boolean = true;

  ngOnInit(): void {
    this.title = "Formulaire de contact";
  }

  clicChange () : void {
    if(this.confirmationPassword(this.password, this.confirmPassword) && this.login != ""){
      this.cacher = false;
      this.valid = false;
      this.cacherErreur = true;
    }
    else{
      this.cacherErreur=false;
    }
  }

  confirmationPassword(passwordInput : String, confirmPasswordInput : String) : boolean {
    if(passwordInput != confirmPasswordInput || passwordInput =="") {
      return false;
    }
    else {
      return true;
    }
  }

  ngOnDestroy () {

  }
}
