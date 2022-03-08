import { Component, OnInit, ViewChild } from '@angular/core';
import { RestDataSource } from 'src/app/core/shared/data/rest.datasource';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';


import { TasksInterface } from 'src/app/core/shared/interfaces/task-interface';
import { RandomQuote } from 'src/app/core/shared/interfaces/rendom-quote-interface';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { ChangeTaskComponent } from '../change-task/change-task.component';
import { DeleteTaskDialogComponent } from 'src/app/core/shared/dialogues/delete-task-dialog/delete-task-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public randomQuote!: RandomQuote;

  public taskListing!: TasksInterface[];
  public taskListingHeaders: string[] = ['id', 'title', 'description', 'owner','date_created', 'date_changed', 'maintenance', 'owner'];
  public sourceData = new MatTableDataSource<TasksInterface>();
  public resultsLength = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable, { static: true }) refreshTable!: MatTable<any>;

  constructor(
    private dataSource: RestDataSource,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource.fetchTasks().subscribe(taskList => {
      this.taskListing = taskList;
      this.sourceData.data = taskList;

    });

    this.dataSource.fetchRandomQuotes().subscribe(quotes => {
      this.randomQuote = quotes;
    })
  }

   ngAfterViewInit() {
    this.sourceData.sort = this.sort;
    this.sourceData.paginator = this.paginator;

   }
  openCreateTaskDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    // Post data after closing the dialogue box

    const dialogRef = this.dialog.open(CreateTaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(newTask => {

    })






  }
  openEditTaskDialog(id: number) {

    // ***create dialog object
    const dialogConfig = new MatDialogConfig();
    // ***stop user from closing dialog by clicking elsewhere and other dialog configuration
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    // dialogConfig.direction = 'rtl'

    // ****fetch data from the API
    this.dataSource.fetchSingleTask(id).subscribe((response) => {
      let task = response;
      dialogConfig.data = task;

      // ***Open Dialog
      const dialogRef = this.dialog.open(ChangeTaskComponent, dialogConfig);

      // ***Returned data from dialogue
      dialogRef.afterClosed().subscribe(result => {

        if (result == undefined) {
          return;
        }
        else {

          console.log('Editable Data after else button', result);

        }

      });

    });


  }

  openDeleteTaskDialog(id: number) {

     // ***create dialog object
    const dialogConfig = new MatDialogConfig();
    // ***stop user from closing dialog by clicking elsewhere and other dialog configuration
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    // dialogConfig.direction = 'rtl'

    // ****fetch data from the API
    this.dataSource.fetchSingleTask(id).subscribe((response) => {
      let task = response;
      dialogConfig.data = task;

      // ***Open Dialog
      const dialogRef = this.dialog.open(DeleteTaskDialogComponent, dialogConfig);

      // ***Returned data from dialogue
      dialogRef.afterClosed().subscribe(result => {

        if (result == undefined) {
          return;
        }
        else {

          console.log('Editable Data after else button', result);

        }

      });

    });


  }

}
