import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from '../model/autos.model';
import { AutosService } from '../services/autos.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
  formAuto:FormGroup;
  id:string | undefined;
  constructor(private formBuilder:FormBuilder, private autos:AutosService,private route:ActivatedRoute,private router:Router){
    this.formAuto=this.formBuilder.group({
      brand:['',[Validators.required,Validators.maxLength(20),Validators.pattern('[a-zA-Z 0-9]*')]],
      name:['',[Validators.required,Validators.maxLength(20),Validators.pattern('[a-zA-Z 0-9]*')]],
      model:['',[Validators.required,Validators.maxLength(20),Validators.pattern('[a-zA-Z 0-9]*')]]
    });
    this.route.params.subscribe(parameters=>{
      if(parameters.id){
        this.id=parameters.id;

        this.autos.getSingleAuto(parameters.id).subscribe(res =>{
          this.formAuto.get('brand')?.setValue(res.brand);
          this.formAuto.get('name')?.setValue(res.name);
          this.formAuto.get('brand')?.setValue(res.model);

        });
      }
    });
  }

  ngOnInit(): void {
  }

  saveClick(){
    const data=new Auto();
    data.brand= this.formAuto.get('brand')?.value;
    data.name= this.formAuto.get('name')?.value;
    data.model= this.formAuto.get('model')?.value;

    if(this.id){
      this.autos.updateAuto(this.id,data).subscribe(()=>{
          this.router.navigate(['list']);
      },err=>{
        alert('Ocurrio un error al actualizar el elemento');
      });
    }else{
      this.autos.saveAuto(data).subscribe(()=>{
        this.router.navigate(['list']);
      },err=>{
        alert('Ocurrio un error al insertar el elemento');
        });
      }
    }
}
