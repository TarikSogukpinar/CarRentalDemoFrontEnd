import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:5001/api/"

  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + "colors/getallcolors"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getColorById(id:number):Observable<SingleResponseModel<Color>>{
    let newPath = this.apiUrl + "colors/getbycolorid?id="+id
    return this.httpClient.get<SingleResponseModel<Color>>(newPath)
  }

  add(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + "colors/addcolors"
    return this.httpClient.post<ResponseModel>(newPath, color)
  }

  update(color:Color) : Observable<ResponseModel>{
    let newPath = this.apiUrl + "colors/updatecolors"
    return this.httpClient.post<ResponseModel>(newPath, color)
  }

  delete(color:Color) : Observable<ResponseModel>{
    let newPath = this.apiUrl + "colors/deletecolors"
    return this.httpClient.post<ResponseModel>(newPath, color)
  }

}
