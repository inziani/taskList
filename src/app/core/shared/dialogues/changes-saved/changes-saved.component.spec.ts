import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesSavedComponent } from './changes-saved.component';

describe('ChangesSavedComponent', () => {
  let component: ChangesSavedComponent;
  let fixture: ComponentFixture<ChangesSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesSavedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
