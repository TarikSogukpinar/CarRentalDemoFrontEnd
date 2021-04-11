import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private localStorage:LocalstorageService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    
  }

  isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.localStorage.removeToken();
    this.localStorage.removeCurrentCustomer();
    this.toastrService.warning("Başarı ile çıkış yaptınız")
    return this.router.navigate(["/login"]);
    
  }

}

