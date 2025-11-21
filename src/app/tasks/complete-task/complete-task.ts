import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskUser } from '../task/task.model';
import { TaskService } from '../tasks.service';

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
  private taskService = inject(TaskService);

  onCompleteCancel() {
    this.completeCancel.emit();
  }

  onCompleteConfirm() {
    this.taskService.removeTask(this.task.id);
  }
}
