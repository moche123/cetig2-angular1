import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  public friends:any = [
    {
      name: 'Charles',
      age: 20
    },
    {
      name: 'August',
      age: 30
    },
    {
      name: 'Dario',
      age: 25
    },
    {
      name: 'Cesar',
      age: 31
    },
    {
      name: 'Juan',
      age: 21
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
