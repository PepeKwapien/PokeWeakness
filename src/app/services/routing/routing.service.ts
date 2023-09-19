import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RoutingService {
    constructor(private router: Router) {}

    public isOnRootPage(): boolean {
        return this.router.url === '/';
    }

    public navigateToLandingPage() {
        this.router.navigate(['/']);
    }

    public navigateToPokemonPage(pokemonName: string) {
        this.router.navigate([`/${pokemonName}`]);
    }

    public navigateToNotFound() {
        this.router.navigate(['/missingno']);
    }
}
