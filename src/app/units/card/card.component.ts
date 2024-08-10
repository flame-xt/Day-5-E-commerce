import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private api:ApiService){}
  products:any=""
  ngOnInit()
  {
    this.api.getproducts().subscribe((data:any)=>{this.products=data})
  }
}
