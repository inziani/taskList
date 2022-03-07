import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter<void>();

  public isAuthenticated!: boolean;
  public loggedInUser: string = 'Val';


  constructor() {

    this.isAuthenticated = false;

  }


  ngOnInit(): void {

  }
  onToggleSidenav() {
    this.sideNavToggle.emit();

  }

  onLogOut() {

  }

}
