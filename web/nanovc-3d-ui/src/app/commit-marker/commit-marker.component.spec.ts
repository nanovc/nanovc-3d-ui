import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitMarkerComponent } from './commit-marker.component';

describe('CommitMarkerComponent', () => {
  let component: CommitMarkerComponent;
  let fixture: ComponentFixture<CommitMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
