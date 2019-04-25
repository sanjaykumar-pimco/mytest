import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { PimcoDesktopModule } from '@pimco/desk';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExternalModule } from './external-module';
import { LiquidityViewerComponent } from './liquidity-viewer/liquidity-viewer.component';
import { LiquidityService } from './services/liquidity.service';
import { GlobalErrorHandler } from './global-error-handler';
import { ServerErrorInterceptor } from './server-error.interceptor';
import {MessageService} from 'primeng/api';
import { NavigationsTabsComponent } from './navigations-tabs/navigations-tabs.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutes,
        BrowserAnimationsModule,
        // PimcoDesktopModule.forRoot(),
        ExternalModule
    ],
    declarations: [
        AppComponent,
        LiquidityViewerComponent,
        NavigationsTabsComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        LiquidityService,
        MessageService
        // external
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
