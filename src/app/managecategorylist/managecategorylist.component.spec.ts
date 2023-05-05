import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecategorylistComponent } from './managecategorylist.component';

describe('ManagecategorylistComponent', () => {
  let component: ManagecategorylistComponent;
  let fixture: ComponentFixture<ManagecategorylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecategorylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagecategorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
