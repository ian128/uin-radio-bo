import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLiveShowComponent } from './list-live-show.component';

describe('ListLiveShowComponent', () => {
  let component: ListLiveShowComponent;
  let fixture: ComponentFixture<ListLiveShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLiveShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLiveShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
