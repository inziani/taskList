import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestDataSource } from 'src/app/core/shared/data/rest.datasource';
import { ChangesSavedComponent } from 'src/app/core/shared/dialogues/changes-saved/changes-saved.component';
import { TasksFormGroup } from 'src/app/core/shared/models/task-form-model';
import { Tasks } from 'src/app/core/shared/models/task-model';

@Component({
  selector: 'app-change-task',
  templateUrl: './change-task.component.html',
  styleUrls: ['./change-task.component.css']
})
export class ChangeTaskComponent implements OnInit {

  public formGroup = new TasksFormGroup();
  public isLoading = false;
  public formSubmitted: boolean = false;
  public task!: Tasks;
  public error!: string;
  public taskData: any;
  public title: string = 'Edit Task';


  constructor(
    private dataSource: RestDataSource,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ChangeTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogDataTask: any
  ) { }

  ngOnInit(): void {
    this.formGroup.patchValue(this.dialogDataTask);
  }

  editTask() {

    this.dialogRef.close(this.formGroup.value);
    this.task = this.formGroup.value;
    console.log('Activity Category on form information -',this.task);
    this.dataSource.editTask(this.dialogDataTask.id, this.dialogDataTask.title, this.dialogDataTask.description).subscribe(success => {
      if (success) {
        this.dialog.open(ChangesSavedComponent);

      }
    },
      error => {
        this.error = 'Transaction failed, changes not saved';
        alert(this.error);
        this.isLoading = false;
      },

    );

  }

}
