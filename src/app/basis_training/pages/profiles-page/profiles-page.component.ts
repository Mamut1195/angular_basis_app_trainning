import { Component } from '@angular/core';
import { AthleteListComponent } from "../../components/athletes-list/athletes-list.component";

@Component({
  selector: 'app-profiles-page',
  imports: [AthleteListComponent],
  templateUrl: './profiles-page.component.html',
})
export default class ProfilesPageComponent {

}
