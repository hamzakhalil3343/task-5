import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddnewbookPage } from './addnewbook.page';

describe('AddnewbookPage', () => {
  let component: AddnewbookPage;
  let fixture: ComponentFixture<AddnewbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewbookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddnewbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
