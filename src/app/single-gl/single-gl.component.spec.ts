import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGLComponent } from './single-gl.component';

describe('SingleGLComponent', () => {
  let component: SingleGLComponent;
  let fixture: ComponentFixture<SingleGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleGLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
