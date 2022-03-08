import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestDataSource } from 'src/app/core/shared/data/rest.datasource';
import { ChangesSavedComponent } from 'src/app/core/shared/dialogues/changes-saved/changes-saved.component';
import { TasksFormGroup } from 'src/app/core/shared/models/task-form-model';
import { Tasks } from 'src/app/core/shared/models/task-model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  public formGroup = new TasksFormGroup();
  public isLoading = false;
  public formSubmitted: boolean = false;
  public task!: Tasks;
  public error!: string;
  public title: string = 'Add Task';
  public taskData: any;


  constructor(
    private dataSource: RestDataSource,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<CreateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogDataTask: any
  ) { }

  ngOnInit(): void {
  }

  onAddTask() {
    this.dialogRef.close(this.formGroup.value);
    this.task = this.formGroup.value;
    this.dataSource.addTask(this.task.title, this.task.description).subscribe(success => {
      if (success) {
        this.dialog.open(ChangesSavedComponent);

      }
    },
      error => {
        this.error = 'Task not created'
        alert(this.error);
        this.isLoading = false;
    })

  }

}
