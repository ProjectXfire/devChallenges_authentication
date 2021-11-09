import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// Modules
import { SharedModule } from '@shared/shared.module';
// Components
import { LayoutComponent } from './components/layout/layout.component';
// Pages
import { UserComponent } from './pages/user/user.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

@NgModule({
  declarations: [LayoutComponent, UserComponent, UserEditComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule, ReactiveFormsModule],
})
export class UserModule {}
