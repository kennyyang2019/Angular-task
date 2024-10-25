import { Component, computed, EventEmitter, input, Input, Output} from '@angular/core';
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };
interface User {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Use of signals in angular
  // avatar = input.required<string>();
  // name = input.required<string>();
  // userPath = computed(()=>'assets/users/' + this.avatar()) ;
  
  // more used since signals are pretty new and older companies are still 
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  userPath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
