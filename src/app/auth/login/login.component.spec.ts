import {
  async,
  TestBed
} from '@angular/core/testing';
import {
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthenticationService } from '../auth.service';

class MockRouter {
  navigateByUrl(url: string) { return url; }
}

describe('Component: Login', () => {
  let component: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
        ReactiveFormsModule,
      ],
      providers: [
        AuthenticationService,
        { provide: Router, useClass: MockRouter },
      ]
    });

    const fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', async(() => {
    expect(component).toBeDefined();
  }));

});
