/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ListarCafeComponent } from './listar-cafe.component';
import { HttpClientModule } from '@angular/common/http';
import { Cafe } from '../cafe';

describe('ListarCafeComponent', () => {
  let component: ListarCafeComponent;
  let fixture: ComponentFixture<ListarCafeComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarCafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCafeComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const book = new Cafe(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.image.url(),
      );
      component.cafes.push(book);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Validación de tabla existente.
  it('should have a table ', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  //Validación de la existencia de encabezado.
  it('should have a table with a header', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  
    const header = table.query(By.css('thead'));
    expect(header).toBeTruthy();
  });

  //Validación de la existencia de 3 elementos en la tabla.
  it('should have 3 <tr> elements', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });

  //Validación de la existencia de 4 columnas
  it('should have a table with 4 columns in the header', () => {
    const headerCells = fixture.debugElement.queryAll(By.css('thead th'));
    expect(headerCells.length).toBe(4);
});

});
