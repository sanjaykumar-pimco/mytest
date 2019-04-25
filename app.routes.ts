import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LiquidityViewerComponent } from './liquidity-viewer/liquidity-viewer.component';

export let routesArray: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'rule' },
    { path: 'rule', component: LiquidityViewerComponent, pathMatch: 'full' }];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routesArray);
