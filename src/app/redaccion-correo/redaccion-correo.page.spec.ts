import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedaccionCorreoPage } from './redaccion-correo.page';

describe('RedaccionCorreoPage', () => {
  let component: RedaccionCorreoPage;
  let fixture: ComponentFixture<RedaccionCorreoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RedaccionCorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
