import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm: FormGroup

  constructor(private carService:CarService, 
    private activatedRoute:ActivatedRoute, 
    private formBuilder:FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createBrandUpdateForm()
  }

  createBrandUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      carId: ["", Validators.required],
      carName: ["", Validators.required],
      fuelType: ["", Validators.required],
      productionYear: ["", Validators.required],
      description: ["", Validators.required],
      dailyPrice: ["", Validators.required],
    })
  }

  update() {
    if (this.carUpdateForm.valid) {
      let brandModel = Object.assign({}, this.carUpdateForm.value)
      this.carService.update(brandModel).subscribe(data => {
        this.toastrService.success("Brand güncellendi", "Başarılı")
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası")

          }
        }
      })
    } else {
      this.toastrService.error("Form eksik", "Dikkat")
    }

  }


}
