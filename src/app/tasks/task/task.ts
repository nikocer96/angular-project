import { Component, Input } from '@angular/core';

interface TaskUser {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task!: TaskUser;
}
