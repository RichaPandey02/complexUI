import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGraphicsComponent } from './demo-graphics.component';

describe('DemoGraphicsComponent', () => {
  let component: DemoGraphicsComponent;
  let fixture: ComponentFixture<DemoGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoGraphicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
