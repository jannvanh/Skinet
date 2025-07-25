import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../shared/Models/product';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cartsService';

@Component({
  selector: 'app-product-item',
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatIcon,
    CurrencyPipe,
    RouterLink,
  ],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss'
})
export class ProductItem {
  @Input() product?: Product;
  cartService = inject(CartService);
}
