import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if localStorage is defined and available
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      try {
        // Try to access localStorage
        const token = window.localStorage.getItem('token');
        if (token) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      } catch (error) {
        // If there's an error accessing localStorage, handle it gracefully
        console.error('Error accessing localStorage:', error);
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      // If localStorage is not defined, handle the case accordingly
      console.error('localStorage is not available');
      this.router.navigate(['/login']);
      return false;
    }
  }
}