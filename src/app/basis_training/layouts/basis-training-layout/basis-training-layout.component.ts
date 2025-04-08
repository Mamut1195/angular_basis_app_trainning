import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { HomePageComponent } from "../../pages/home-page/home-page.component";


@Component({
  selector: 'app-basis-training-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './basis-training-layout.component.html',
})
export default class BasisTrainingLayoutComponent {

}
