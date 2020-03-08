import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, public authService: AuthService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['angel@angel.com', [Validators.required, Validators.email]],
      password: ['Ad1234', Validators.required]
    });
  }

  onSubmit(formValue) {
    alert('Se ha enviado el formulario correctamente:' + formValue.email + ' ' + formValue.password);
    this.authService.login( formValue.email, formValue.password).subscribe(
      result => {
        localStorage.setItem('currentUser', JSON.stringify({ email: formValue.email, token: result.token }));

        console.log(result)
      } ,
      error => console.error(error)
    )
  }

  /*getErrorMessage() {
    return this.form.email.hasError('required') ? 'You must enter a value' :
        this.form.email.hasError('email') ? 'Not a valid email' :
            '';
  }*/


}



