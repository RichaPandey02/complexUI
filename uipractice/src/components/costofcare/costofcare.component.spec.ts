import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from '../navbar/navbar.component';

import { CostofcareComponent } from './costofcare.component';

describe('CostofcareComponent', () => {
  let component: CostofcareComponent;
  let fixture: ComponentFixture<CostofcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostofcareComponent, NavbarComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterModule],
    }).compileComponents();
  });
  it('to test the showMandi function', () => {
    let fun1 = component.onInput('');
    expect(fun1).toBeTruthy();
  });
  it('to test the showMandi function', () => {
    let fun1 = component.onInput('');
    let isShow
    expect(isShow).toBe(true);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostofcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test for a form group element', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#contactForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  });
});
