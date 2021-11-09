import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Design
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// Components
import { FooterComponent } from './components/footer/footer.component';
// Pipes
import { HidePasswordPipe } from './pipes/hide-password.pipe';

@NgModule({
  declarations: [FooterComponent, HidePasswordPipe],
  imports: [CommonModule],
  exports: [
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatSnackBarModule,
    FooterComponent,
    HidePasswordPipe,
  ],
})
export class SharedModule {}
