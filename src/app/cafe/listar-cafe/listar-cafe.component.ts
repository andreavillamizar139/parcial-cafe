import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-listar-cafe',
  templateUrl: './listar-cafe.component.html',
  styleUrls: ['./listar-cafe.component.css']
})
export class ListarCafeComponent implements OnInit {
  cafes: Array<Cafe> = [];
  cafeOrigen:number = 0;
  cafeBlend:number = 0;

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.cafeOrigen = contarCafeDeOrigen(this.cafes);
      this.cafeBlend = contarCafeBlend(this.cafes);
    });
  }

  
  
  ngOnInit() {
    this.getCafes();
  }
  
}

function contarCafeDeOrigen(cafes: any[]): number {
  const cafeDeOrigen = cafes.filter(item => item.tipo === "Café de Origen");
  return cafeDeOrigen.length;
}

function contarCafeBlend(cafes: any[]): number {
  const cafeDeOrigen = cafes.filter(item => item.tipo === "Blend");
  return cafeDeOrigen.length;
}
