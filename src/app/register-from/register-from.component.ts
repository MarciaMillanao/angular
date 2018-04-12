import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register-from',
  templateUrl: './register-from.component.html',
  styleUrls: ['./register-from.component.css']
})
export class RegisterFromComponent implements OnInit {
  userForm:FormGroup; //esto sea una propiedad de mi constructor, se ejecutará dentro dek constructor, por lo que lo llamararemos en nuestra función createForm

  //constructor es quien nos dara una instancia de la clase, donde solicitamos que cada vez que se cree un form sea FormBuilder
  //private significa que solo estará disponible solo dentro de esta instancia (mi constructor), esto permite tener más privacidad
  constructor(private fb:FormBuilder, private authService:AuthService) {
    this.createForm(); //es constructor es lo que si o si se ejecutará primero
   }//con FormBuilder podemos 

  ngOnInit() {
  }

  createForm(){
    this.userForm= this.fb.group({//group es parte del FormBuilder, esto significará que sera un form completo
      //estos serán los datos que solicitará el formulario
      name:[, Validators.required],
      age: [0, Validators.min(18)],
      mail: ['', Validators.required],
      password : ['', Validators.required]
    });

    this.userForm.statusChanges.subscribe((value:any)=>{
      console.log("VALIDATION CHANGE >" +JSON.stringify(value));
    });

    this.userForm.valueChanges.subscribe((value:any)=>{
      console.log("DATA CHANGE >" +JSON.stringify(value));
    });
  }

  onRegisterClick(){
    this.authService.signup(this.userForm.get("mail").value, this.userForm.get("password").value);
  }

  onClickLogout(){
    this.authService.logout(); //acá me deslogueo
  }
}
