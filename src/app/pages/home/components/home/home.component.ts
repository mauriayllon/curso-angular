import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos=[
    {
      description:'aaa',
      imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId:1,
      price: 12,
      title:'Salteña'
    },
    {
      description:'aaa',
      imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId:1,
      price: 12,
      title:'Pizza'
    },
    {
      description:'aa',
      imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId:1,
      price: 12,
      title:'Hamburguesa'
    },
    {
      description:'aa',
      imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId:1,
      price: 12,
      title:'Alitas'
    },
    {
      description:'aa',
      imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId:1,
      price: 12,
      title:'HotDog'
    }
  ];

  constructor() { }

  ngOnInit() {
  } 

}