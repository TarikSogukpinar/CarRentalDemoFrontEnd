import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { ɵBrowserGetTestability } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomerDetails } from 'src/app/models/customerDetails';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  customerDetail:CustomerDetails;
  constructor(private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private toastrService:ToastrService,
    private router: Router,
    private userService:UserService,
    private localStorageService:LocalstorageService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
     
      let loginModel = Object.assign({}, this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.getByEmail(loginModel.email);
        this.toastrService.info(response.message);
        this.toastrService.info("Giriş Başarılı !");
        localStorage.setItem("token", response.data.token);
        return this.router.navigate(['/cars']);
      }, responseError=>{
       
        this.toastrService.error(responseError.error)
      })
    }else{
      this.toastrService.error("Boş Alan Bırakmamalısınız")
    }
  }


  getByEmail(email:string){
    this.userService.getByEmail(email).subscribe(response=>{
      this.customerDetail=response.data;
      this.localStorageService.setCurrentCustomer(this.customerDetail);
      console.log(response.data);
    })
  }


}






