import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Auto } from "../model/autos.model";

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http:HttpClient){}
getSingleAuto(id:string){
  return this.http.get('https://super-rest.herokuapp.com/test/erik/' +id);
}
  getAutos():Observable<[Auto]>{
return this.http.get<[Auto]>('https://super-rest.herokuapp.com/test/erik/');
  }
  saveAuto(data:Auto){
    return this.http.post('https://super-rest.herokuapp.com/test/erik/',data);
  }
  updateAuto(id:string,data:Auto){
    return this.http.put('https://super-rest.herokuapp.com/test/erik/'+id,data);
  }
  deleteAuto(id:string){
    return this.http.delete('https://super-rest.herokuapp.com/test/erik/'+id);
  }
}
