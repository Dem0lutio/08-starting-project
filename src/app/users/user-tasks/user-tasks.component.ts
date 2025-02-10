import { name } from './../../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
import { UsersService } from './../users.service';
import { Component, computed, inject, input } from '@angular/core';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>();
  private usersService = inject(UsersService);

  userName = computed(
    () => this.usersService.users.find((u) => u.id === this.userId())?.name
  );
}
