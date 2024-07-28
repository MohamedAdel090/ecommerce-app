import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if localStorage is available
    if (this.isLocalStorageAvailable()) {
      // Check if the user is logged in
      const isLoggedIn = !!localStorage.getItem('_token');
      if (isLoggedIn) {
        // User is logged in, allow access to the route
        return true;
      } else {
        // User is not logged in, redirect to the login page
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      // localStorage is not available, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      // Perform a test operation on localStorage
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      // If an error occurs, localStorage is not available
      return false;
    }
  }
}