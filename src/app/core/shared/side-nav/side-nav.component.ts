import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { RestDataSource } from '../data/rest.datasource';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  openSidenav: boolean = false;
  @Output() closeSideNav = new EventEmitter<void>();
  openPanel: boolean = false;

  constructor(
    private dataSource: RestDataSource
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeSideNav.emit();

  }

  onLogOut() {

    this.dataSource.removeToken();

  }

}
