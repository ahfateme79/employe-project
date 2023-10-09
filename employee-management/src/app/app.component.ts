import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showErrorDescriptions = environment.showErrorDescriptions;

  handleError(error: any) {
    if (this.showErrorDescriptions) {
      console.error('Error:', error);
    } else {
      console.error('An error occurred.');
    }
  }
}
