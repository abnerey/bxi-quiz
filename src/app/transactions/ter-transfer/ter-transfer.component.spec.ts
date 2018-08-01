import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerTransferComponent } from './ter-transfer.component';

describe('TerTransferComponent', () => {
  let component: TerTransferComponent;
  let fixture: ComponentFixture<TerTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
