import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Busy } from '../../core/services/busy';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CartService } from '../../core/services/cartsService';
import { Account } from '../../core/services/account';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatButton,
    MatBadge,
    RouterLink,
    RouterLinkActive,
    MatProgressBar,
    MatMenu,
    MatMenuTrigger,
    MatDivider,
    MatMenuItem,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  busyService = inject(Busy)
  cartService = inject(CartService)
  accountService = inject(Account)
  private router = inject(Router)

  logout(){
    this.accountService.logout().subscribe({
      next: () => {
        this.accountService.currentUser.set(null);
        this.router.navigateByUrl('/');
      }
    })
  }
}
