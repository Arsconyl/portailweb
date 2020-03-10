import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlsinglearticleComponent } from './htmlsinglearticle.component';

describe('HtmlsinglearticleComponent', () => {
  let component: HtmlsinglearticleComponent;
  let fixture: ComponentFixture<HtmlsinglearticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlsinglearticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlsinglearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
