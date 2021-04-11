import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDetails } from '../models/customerDetails';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:5001/api/customers/";
  currentCustomer: CustomerDetails;

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomerDetails(): Observable<ListResponseModel<CustomerDetails>> {
    let newPath = this.apiUrl + "getcustomerdetails";
    return this.httpClient.get<ListResponseModel<CustomerDetails>>(newPath);

  }
  getCustomerById(customerId:number):Observable<SingleResponseModel<CustomerDetails>>{
    let newPath=this.apiUrl+"getcustomerdetailbyid?customerId="+customerId;
    return this.httpClient.get<SingleResponseModel<CustomerDetails>>(newPath);
  }
  setCustomer(customer:CustomerDetails){
    this.currentCustomer=customer;
  }
  getCustomer():CustomerDetails{
    return this.currentCustomer;
  }
  getCustomerByEmail(email:string):Observable<SingleResponseModel<CustomerDetails>>{
    let newPath=this.apiUrl+"getcustomerbyemail?email="+email;
    return this.httpClient.get<SingleResponseModel<CustomerDetails>>(newPath);
  }

  getCustomerByCompanyName(companyName:string):Observable<SingleResponseModel<CustomerDetails>>{
    let newPath=this.apiUrl+"getcustomerbycompany?companyname="+companyName;
    return this.httpClient.get<SingleResponseModel<CustomerDetails>>(newPath);
  }

  customerUpdate(customer:Customer):Observable<ResponseModel>{
    let newPath="https://localhost:5001/api/customers/updatecustomer";
    return this.httpClient.put<ResponseModel>(newPath,customer);

  }

}
