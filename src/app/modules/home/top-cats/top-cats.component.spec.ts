import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCatsComponent } from './top-cats.component';

describe('TopCatsComponent', () => {
  let component: TopCatsComponent;
  let fixture: ComponentFixture<TopCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
