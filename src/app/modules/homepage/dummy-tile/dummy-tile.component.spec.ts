import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyTileComponent } from './dummy-tile.component';

describe('DummyTileComponent', () => {
  let component: DummyTileComponent;
  let fixture: ComponentFixture<DummyTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
