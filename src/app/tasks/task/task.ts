import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskUser } from './task.model';
import { CompleteTask } from '../complete-task/complete-task';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common'; 


@Component({
  selector: 'app-task',
  imports: [CompleteTask, Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task!: TaskUser;
  @Output() completeCancel = new EventEmitter();
  isOpenComplete = false;

  onOpenComplete() {
    this.isOpenComplete = true;
  }

  onCloseComplete() {
    this.isOpenComplete = false;
  }
}
