import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklostComponent } from './booklost.component';

describe('BooklostComponent', () => {
  let component: BooklostComponent;
  let fixture: ComponentFixture<BooklostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooklostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
