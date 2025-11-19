import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskUser } from '../task/task.model';

@Component({
  selector: 'app-complete-task',
  imports: [],
  templateUrl: './complete-task.html',
  styleUrl: './complete-task.css',
})
export class CompleteTask {
  @Input({required: true}) task!: TaskUser;
  @Output() completeCancel = new EventEmitter();
  @Output() completeConfirm = new EventEmitter();

  onCompleteCancel() {
    this.completeCancel.emit();
  }

  onCompleteConfirm() {
    this.completeConfirm.emit(this.task.id);
  }
}
