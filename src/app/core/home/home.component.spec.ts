import {
  async,
  TestBed
} from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('Component: Home', () => {
  let component: HomeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
  });

  it('should have a defined component', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    expect(component).toBeDefined();
  }));

});
