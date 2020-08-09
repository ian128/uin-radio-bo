import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLiveShowComponent } from './manage-live-show.component';

describe('ManageLiveShowComponent', () => {
  let component: ManageLiveShowComponent;
  let fixture: ComponentFixture<ManageLiveShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLiveShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLiveShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
