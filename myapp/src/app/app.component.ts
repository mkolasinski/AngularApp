import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // language=Angular2HTML
  // template: "<h2> Hello {{ title }}</h2>"
})
export class AppComponent {
  title = 'Favourite App';
  // name = " Michal ";
  // lastname = " Kolasinski ";
  // email = " m.kolasinski@gmail.com";
  users: [
    {
      id: 1,
      firstname: 'Michal',
      lastname: 'Kolasinski',
      email: 'm.kolasinski@gmail.com'
    },
    {
      id:2,
      firstname: 'Klaudia',
      lastname: 'Hestkowska-Kolasinska',
      email: 'klaudia.hestkowska@gmail.com'
    }
    ]
}
