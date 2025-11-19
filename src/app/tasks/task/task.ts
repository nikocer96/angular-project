import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskUser } from './task.model';
import { CompleteTask } from '../complete-task/complete-task';


@Component({
  selector: 'app-task',
  imports: [CompleteTask],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task!: TaskUser;
  @Output() complete = new EventEmitter<string>();
  @Output() completeCancel = new EventEmitter();
  isOpenComplete = false;

  onCompleteTask() {
    this.complete.emit(this.task.id)
  }

  onOpenComplete() {
    this.isOpenComplete = true;
  }

  onCloseComplete() {
    this.isOpenComplete = false;
  }
}
