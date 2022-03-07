import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  openSidenav: boolean = false;
  @Output() closeSideNav = new EventEmitter<void>();
  openPanel: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeSideNav.emit();

  }

  onLogOut() {

  }

}
