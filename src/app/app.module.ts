import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import { TypeBoxComponent } from './components/type-box/type-box.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { TypeEffectivenessTableComponent } from './components/type-effectiveness-table/type-effectiveness-table.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchFormComponent,
        SearchInputComponent,
        LandingPageComponent,
        PokemonPageComponent,
        TypeBoxComponent,
        SpinnerComponent,
        ExpansionPanelComponent,
        TypeEffectivenessTableComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatCardModule,
        MatExpansionModule,
        MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
