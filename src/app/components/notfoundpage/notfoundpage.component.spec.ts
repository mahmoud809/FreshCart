import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundpageComponent } from './notfoundpage.component';

describe('NotfoundpageComponent', () => {
  let component: NotfoundpageComponent;
  let fixture: ComponentFixture<NotfoundpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotfoundpageComponent]
    });
    fixture = TestBed.createComponent(NotfoundpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
