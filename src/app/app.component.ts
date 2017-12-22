import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <main>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </main>
  `
})
export class AppComponent {
  title = 'app';
}
