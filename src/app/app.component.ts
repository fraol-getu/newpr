import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface lists {
id :number,
name: string,
type: string

}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  lists : lists[]  = [
    {
      id : 1,
      name : "fraol",
      type: "car"
    },
    {
      id : 2,
      name : "fra",
      type: "ca"
    },
    {
      id : 3,
      name : "fr",
      type: "c"
    }
  ]
}


