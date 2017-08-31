import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoWindowComponent } from './info-window/info-window.component';
import { TurretComponent } from './internal-defenses/turret/turret.component';

const routes: Routes = [
    {
        path: 'info/:id',
        component: InfoWindowComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}