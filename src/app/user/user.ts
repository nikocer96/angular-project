import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { UserType } from "./user.model"
import { Card } from "../shared/card/card";

/*const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);*/

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {
  /*selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)*/
  /*@Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;*/
  @Input({required: true}) userType!: UserType
  /* output E' UN EVENTO E QUINDI CON PARENTESI TONDE */
  @Output() select = new EventEmitter();
  @Input({ required: true}) selected!: boolean;

  get imagePath() {
    return 'assets/users/' + this.userType.avatar
  }
  
  /*onSelectedUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]) 
  }*/

    onSelectUser() {
      this.select.emit(this.userType.id);
    }
}
