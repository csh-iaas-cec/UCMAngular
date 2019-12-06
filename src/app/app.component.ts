import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ucmWeb-client';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
          label: 'TabTest1',
          link: '/solutioncatalog',
          index: 0
      }, {
          label: 'Tab Test2',
          link: './tabtest2',
          index: 1
      }, {
          label: 'Tab Test3',
          link: './tabtest3',
          index: 2
      }, 
  ];
}
ngOnInit(): void {
this.router.events.subscribe((res) => {
 
    this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
});
}
}
