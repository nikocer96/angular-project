import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() close = new EventEmitter<void>();
  @Input({ required: true}) userId!: string;
  enteredTitle = "";
  enteredSummary = "";
  enteredDueDate = "";
  private taskService = inject(TaskService);

  onCloseNewTask() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId)
    this.close.emit()
  }
}
