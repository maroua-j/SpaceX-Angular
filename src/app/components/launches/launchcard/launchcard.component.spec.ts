import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchcardComponent } from './launchcard.component';

describe('LaunchcardComponent', () => {
  let component: LaunchcardComponent;
  let fixture: ComponentFixture<LaunchcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
