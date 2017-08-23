import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsContactFormComponent } from './ds-contact-form.component';

describe('DsContactFormComponent', () => {
  let component: DsContactFormComponent;
  let fixture: ComponentFixture<DsContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
