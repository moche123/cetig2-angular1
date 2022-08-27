import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {

  @Input() parentNumber:number = 0;

  @Output() childrenNumberEvent:EventEmitter<number> = new EventEmitter();

  public messageAlert:string = ''

  public childrenNumber = 0;
  constructor() { 
    console.log('CONSTRUCTOR DEL HIJO')
  }

  ngOnInit(): void {
    this.childrenNumber = 0;
    console.log('ONINIT DEL HIJO')
  }

  ngOnChanges( changes:any ): void{
    console.log('ON CHANGES DEL HIJO')
    console.log(changes)
    if(changes.parentNumber.firstChange == true){
      this.messageAlert = 'PRIMERA VEZ'
    }else{
      this.messageAlert = 'N VEZ'
    }
  }

  sendToParent(){
    this.childrenNumber = Math.round(Math.random()*10);

    this.childrenNumberEvent.emit(this.childrenNumber)

  }

}
