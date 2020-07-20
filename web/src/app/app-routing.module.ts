import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BodyComponent } from './modules/main-page/body/body.component';

export const routes: Routes = [
    {
        path: '',
        component: BodyComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
