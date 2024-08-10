import { Component } from '@angular/core';
import { CardComponent } from '../../units/card/card.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {}
