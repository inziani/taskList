import { Component, OnInit, ViewChild } from '@angular/core';
import { RestDataSource } from 'src/app/core/shared/data/rest.datasource';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';


import { TasksInterface } from 'src/app/core/shared/interfaces/task-interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

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
      console.log(this.taskListing);
    });
  }

   ngAfterViewInit() {
    this.sourceData.sort = this.sort;
    this.sourceData.paginator = this.paginator;

   }
  openCreateTaskDialog() {

  }
  openEditTaskDialog(id: number) {

  }

  openDeleteTaskDialog(id: number) {

  }

}
