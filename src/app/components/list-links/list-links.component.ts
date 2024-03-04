import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/Link';

@Component({
  selector: 'app-list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.scss']
})

export class ListLinksComponent implements OnInit {
  Links : Array<Link> = [
    { name: 'GitHub', url: 'https://github.com/'},
    { name: 'FrontEnd Mentor', url: 'https://www.frontendmentor.io/'},
    { name: 'LinkdIn', url: 'https://www.linkedin.com/'},
    { name: 'Twitter', url: 'https://www.twitter.com'},
    { name: 'Instagram', url: 'https://www.instagram.com'},
  ];


  constructor() {}
  
  ngOnInit() : void {


  }
}