/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../shared/user.service';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule,FormsModule,RouterTestingModule],
      declarations: [ RegisterComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [UserService,{provide: APP_BASE_HREF, useValue: '/'}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
