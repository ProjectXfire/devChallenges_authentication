import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { LayoutComponent } from './components/layout/layout.component';
import { UserComponent } from './pages/user/user.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: UserComponent,
      },
      {
        path: 'edit',
        component: UserEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
