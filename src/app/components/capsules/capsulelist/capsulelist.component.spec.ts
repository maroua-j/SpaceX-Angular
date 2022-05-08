import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulelistComponent } from './capsulelist.component';

describe('CapsulelistComponent', () => {
  let component: CapsulelistComponent;
  let fixture: ComponentFixture<CapsulelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsulelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsulelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
