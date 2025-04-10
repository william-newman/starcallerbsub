import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatreonModalComponent } from './patreon-modal.component';

describe('PatreonModalComponent', () => {
  let component: PatreonModalComponent;
  let fixture: ComponentFixture<PatreonModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatreonModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatreonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
