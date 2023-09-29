import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';

@NgModule({
    declarations: [NotFoundComponent],
    imports: [CommonModule, RouterModule.forChild([{ path: '', component: NotFoundComponent, pathMatch: 'full' }])]
})
export class NotFoundModule {}

