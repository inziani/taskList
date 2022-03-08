import { Component, OnInit, ViewChild } from '@angular/core';
import { RestDataSource } from 'src/app/core/shared/data/rest.datasource';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';


import { TasksInterface } from 'src/app/core/shared/interfaces/task-interface';
import { RandomQuote } from 'src/app/core/shared/interfaces/rendom-quote-interface';
import { CreateTaskComponent } from '../create-task/create-task.component';

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

  }

  openDeleteTaskDialog(id: number) {

  }

}
