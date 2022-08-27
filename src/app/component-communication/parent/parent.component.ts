import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit,OnDestroy {

  public parentNumber: number = 5;

  public childrenNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  sendToChildren() {
    this.parentNumber = Math.round(Math.random() * 10)
  }


  receiveFromChildren(e: any) {
    console.log(e)
    this.childrenNumber = e;
   
  }
  
  ngOnDestroy(): void {
    console.log('SE FUE DE LA PAGINA COMUNICACIOn')
  }
}
