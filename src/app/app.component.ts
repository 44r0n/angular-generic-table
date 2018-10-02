import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  columns = ['Name', 'Level', 'City'];
  heroes = [{ name: "Hero name", level: 3, city: 'Murcia' },
            { name: "Second hero name", level: 4, city: 'Petrer'}
          ];
  attNames = ['name', 'level', 'city'];

  showElement(element: any): void {
    alert(element.name);
  }
}
