import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel } from 'src/app/models/registerModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   registerForm: FormGroup;

   constructor(private formBuilder: FormBuilder,
      private toastrService: ToastrService,
      private authService: AuthService,
      private router: Router,) {
   }

   ngOnInit(): void {
      this.createLoginForm();
   }

   createLoginForm() {
      this.registerForm = this.formBuilder.group({
         firstName: ["", Validators.required],
         lastName: ["", Validators.required],
         email: ["", Validators.required],
         password: ["", Validators.required]
      })
   }

   register() {
      if (this.registerForm.invalid) {
         this.toastrService.warning('Lütfen boş alan bırakmayınız', 'Dikkat');
         return;
      }

    

      delete this.registerForm.value['confirmPassword'];
      let registerModel: RegisterModel = Object.assign({}, this.registerForm.value);

      this.authService.register(registerModel).subscribe(responseSuccess => {
         this.toastrService.success(responseSuccess.message, 'Başarılı');

         return this.router.navigate(['/cars']);
      }, responseError => {
         if (responseError.error.ValidationErrors) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
               this.toastrService.error(
                  responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası'
               );
            }

            return;
         }

         this.toastrService.error(
            responseError.status + ' ' + responseError.name, responseError.error
         );
      });
   }
}
