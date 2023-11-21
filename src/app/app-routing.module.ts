import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './vista/page/test/test.component';
import { Test2Component } from './vista/page/test2/test2.component';

const routes: Routes = [
  {path: 'Vista1', component: Test2Component},
  { path: 'Vista2', component: TestComponent },
  {path: '**', redirectTo: 'Vista2', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }