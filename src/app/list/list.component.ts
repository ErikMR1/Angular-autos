import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Auto } from '../model/autos.model';
import { AutosService } from '../services/autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
displayedColumns=['_id','brand','name','model','actions'];
dataSource=new MatTableDataSource<Auto>();

  constructor(private autos:AutosService, private router:Router) {
    this.autos.getAutos().subscribe(res=>{
      this.dataSource.data=res;
    });
   }

  ngOnInit(): void {
  }
  edit(id:string){
    this.router.navigate(['autos',id]);
  }
  delete(id:string){
    this.autos.deleteAuto(id).subscribe(()=>{
      this.refresh();
    },err=>{
      alert('Ocurrio un error al borrrar el elemento');
    });
  }
  refresh(){
    this.autos.getAutos().subscribe(res=>{
      this.dataSource.data=res;
    });
  }
}
