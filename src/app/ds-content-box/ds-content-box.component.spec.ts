import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsContentBoxComponent } from './ds-content-box.component';

describe('DsContentBoxComponent', () => {
  let component: DsContentBoxComponent;
  let fixture: ComponentFixture<DsContentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsContentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsContentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
