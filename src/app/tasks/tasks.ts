import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from './new-task/new-task';
import { type NewTaskInput } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) name: string | undefined;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  private taskService: TaskService;

  // DEPENDENCY INJECTION. ANGULAR CREA AUTOMATICAMENTE LA CLASSE PER NOI. SI FA QUESTO PER CONDIVIDERE LA STESSA INSTANZA ANCHE IN ALTRI COMPONENTI
  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  get selectedUserTasks() {
    //console.log(this.dummyTasks.filter((task) => task.userId === this.userId));
    return this.taskService.getUserTasks(this.userId);
  }

  completeTask(id: string) {
    this.taskService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskInput) {
    this.taskService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }
}
