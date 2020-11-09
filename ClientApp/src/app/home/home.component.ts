import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";



@Component( {
  selector: "app-home",
  templateUrl: "./home.component.html",
} )
export class HomeComponent implements OnInit
{
  private form: FormGroup;



  constructor( private fb: FormBuilder )
  {
  }



  public ngOnInit(): void
  {
    this.form = this.fb.group(
        {
          id: [],
          amount: [],
          discount: [],
          summary: [],
        },
    );
  }
}
