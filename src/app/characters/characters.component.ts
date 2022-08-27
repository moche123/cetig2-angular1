import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit,OnDestroy,AfterViewInit {

  //string, number, boolean, GENERICO: any

  public apiName:string = 'Pokemon';
  public subscribe$: Subscription = new Subscription;
  public characters$:any;

  @ViewChild("title", { read: ElementRef }) tref!: ElementRef;


  constructor( private apiService:ApiService ) { 
  }
 

  ngOnInit(): void {
    // console.log('ONInit')
    // this.subscribe$ = this.apiService.getPersonajes().subscribe( (info:any) => {
    //   this.characters = info;
    //   console.log(this.characters)
    // } )

    this.characters$ = this.apiService.getPersonajes();
  }

  ngAfterViewInit(): void { //! ELEMENTOS DEL DOM
    console.log('VIEW IMPLEMENTATION FINISH')
    console.log(this.tref.nativeElement.textContent)
  }

  ngOnDestroy(){
    // this.subscribe$.unsubscribe();
  }



}
