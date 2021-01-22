import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../model/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(data:LoginRequest){
    return this.http.post<LoginResponse>('https://reqres.in/api/login',data);
  }
}
