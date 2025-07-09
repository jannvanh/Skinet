import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../services/cartsService';
import { Snackbar } from '../services/snackbar';

export const emptyShoppingCartGuard: CanActivateFn = (route, state) => {
  const cartsService = inject(CartService)
  const snackbar = inject(Snackbar)
  const router = inject(Router)

  if (!cartsService.cart() || cartsService.cart()?.items.length === 0) {
    snackbar.error('Shopping cart cannot be empty')
    router.navigateByUrl('/cart')
    return false
  } else {
    return true
  }
};
