import { Component } from '@angular/core';
import { faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;

}
