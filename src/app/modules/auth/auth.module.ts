import { NgModule } from '@angular/core';
// Modules
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';
// Components
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SuccessComponent } from './pages/success/success.component';
import { FailureComponent } from './pages/failure/failure.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LayoutComponent, SuccessComponent, FailureComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, SharedModule],
})
export class AuthModule {}
