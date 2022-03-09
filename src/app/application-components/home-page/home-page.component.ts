import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RestDataSource } from 'src/app/core/shared/data/rest.datasource';
import { User } from 'src/app/core/shared/models/user-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public isAuthenticated: boolean = false;
  private userSubscription!: Subscription;
  public loggedInUser!: any;
  public user!: any;
  public userList!: User[];
  public currentLoggedInUser!: User[];

  constructor(

    private dataSource: RestDataSource
  ) { }

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

   ngOnDestroy() {
     this.userSubscription.unsubscribe();
     
  }

}
