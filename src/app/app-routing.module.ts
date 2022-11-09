import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules,PreloadingStrategy } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  { path: 'auth', loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule) },
  { path: 'user', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
