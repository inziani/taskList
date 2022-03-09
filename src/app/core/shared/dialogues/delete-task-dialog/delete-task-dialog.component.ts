import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestDataSource } from '../../data/rest.datasource';
import { Tasks } from '../../models/task-model';
import { ChangesSavedComponent } from '../changes-saved/changes-saved.component';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.css']
})
export class DeleteTaskDialogComponent implements OnInit {

  public title: string = 'Delete Task';
  public error!: string;
  public isLoading: boolean = false;
  public task!: Tasks;
 

  constructor(

    private dataSource: RestDataSource,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<DeleteTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public deleteTaskDialogData: any,

  ) { }

  ngOnInit(): void {

    this.task = this.deleteTaskDialogData;
  }

  onDeleteTask() {

    this.dataSource.deleteTask(this.task.id).subscribe(success => {
      if (success) {
        this.dialog.open(ChangesSavedComponent);
      }

    },
      error => {
        this.error = 'The deletion failed';
        alert(this.error)
        this.isLoading = false
      }
    )

  }

}
