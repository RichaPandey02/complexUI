import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostofcareComponent } from './costofcare.component';

describe('CostofcareComponent', () => {
  let component: CostofcareComponent;
  let fixture: ComponentFixture<CostofcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostofcareComponent ]
    })
    .compileComponents();
  });
  it("to test the showMandi function",()=>{
    let mandi1=new CostofcareComponent();
    let fun1=mandi1.isShow;
    expect(fun1).toBeTruthy()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CostofcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
