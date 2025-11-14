import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';

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
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  /* output E' UNA PROPRIETA' E QUINDI CON PARENTESI TONDE */
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  
  /*onSelectedUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]) 
  }*/

    onSelectUser() {
      this.select.emit(this.id);
    }
}
