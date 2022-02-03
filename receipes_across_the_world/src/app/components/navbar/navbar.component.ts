import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public myGit : string ="https://github.com/Gutijaume"

  constructor() { }

  ngOnInit(): void {
  }

}
