import { Component } from '@angular/core';
import { AthletesListComponent } from "../../components/athletes-list/athletes-list.component";

@Component({
  selector: 'app-profiles-page',
  imports: [ AthletesListComponent],
  templateUrl: './profiles-page.component.html',
})
export default class ProfilesPageComponent {

}
