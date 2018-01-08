import {
  async,
  TestBed
} from '@angular/core/testing';
import {
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';

import { SignupComponent } from './signup.component';
import { ValidateMessageComponent } from '../../shared/validation/validate-message.component';
import { AuthenticationService } from '../auth.service';
import { ValidateMessageService } from '../../shared/validation/validate-message.service';

class MockRouter {
  navigateByUrl(url: string) { return url; }
}

describe('Component: Signup', () => {
  let component: SignupComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignupComponent,
        ValidateMessageComponent
      ],
      imports: [
        ReactiveFormsModule,
      ],
      providers: [
        AuthenticationService,
        { provide: Router, useClass: MockRouter },
        ValidateMessageService
      ]
    });

    const fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', async(() => {
    expect(component).toBeDefined();
  }));

});
