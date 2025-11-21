import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
import { TaskService } from './tasks/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User, Tasks, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('corso-angular');
  users = DUMMY_USERS;
  selectedUserId?: string = "";
  private taskService = inject(TaskService)

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log("hai selezionato " + this.selectedUserId);
  }
}
