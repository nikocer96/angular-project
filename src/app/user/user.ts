import { Component, computed, Input, signal } from '@angular/core';

/*const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);*/

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  /*selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)*/
  @Input({required: true}) avatar!: string
  @Input({required: true}) name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  
  /*onSelectedUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]) 
  }*/
}
