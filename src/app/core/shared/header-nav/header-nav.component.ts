import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestDataSource } from '../data/rest.datasource';

import { User } from '../models/user-model';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter<void>();

  public isAuthenticated: boolean = false;
  private userSubscription!: Subscription;
  public loggedInUser!: any;
  public user!: any;
  public userList!: User[];
  public currentLoggedInUser!: User[];


  constructor(
    private dataSource: RestDataSource,
    private router: Router
  ) {

    // this.isAuthenticated = false;

  }


  ngOnInit(): void {
    this.userSubscription = this.dataSource.user.subscribe(user => {
      this.isAuthenticated = !!user;
      this.user = user;
      this.loggedInUser = this.dataSource.fetchUsers().subscribe(users => {
        this.userList = users;
        this.loggedInUser = this.userList.filter((person: User) => person.id === this.user);
        this.currentLoggedInUser = this.loggedInUser;
      })
    });

  }
  onToggleSidenav() {
    this.sideNavToggle.emit();

  }

  onLogOut() {
    this.dataSource.removeToken();

  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
