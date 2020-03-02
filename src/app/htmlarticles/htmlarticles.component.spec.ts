import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlarticlesComponent } from './htmlarticles.component';

describe('HtmlarticlesComponent', () => {
  let component: HtmlarticlesComponent;
  let fixture: ComponentFixture<HtmlarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
