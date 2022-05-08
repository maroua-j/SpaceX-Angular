import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulecardComponent } from './capsulecard.component';

describe('CapsulecardComponent', () => {
  let component: CapsulecardComponent;
  let fixture: ComponentFixture<CapsulecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsulecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsulecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
