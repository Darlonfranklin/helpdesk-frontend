import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { Credential } from '../../models/credential';
import { ReactiveFormsModule } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  creds: Credential = {
    email: '',
    password: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  title: string = "Acesso Help Desk";

  constructor(private toast: ToastrService) { }

  ngOnInit(): void {

  }

  logIn() {
    this.toast.error("Usuário ou senha inválidos!", "ERRO!")
  }

  validateField(): boolean {
    if (this.email.valid && this.password.valid) {
      return true;
    } else {
      return false;
    }
  }
}
