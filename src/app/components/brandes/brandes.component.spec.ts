import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandesComponent } from './brandes.component';

describe('BrandesComponent', () => {
  let component: BrandesComponent;
  let fixture: ComponentFixture<BrandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
