import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bad',
    loadChildren: () =>
      import('./bad-example/bad-example.module').then(
        (m) => m.BadExampleModule
      ),
  },
  {
    path: 'good',
    loadChildren: () =>
      import('./good-example/good.module').then((m) => m.GoodModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
