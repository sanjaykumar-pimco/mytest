import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityViewerComponent } from './liquidity-viewer.component';
import { NavigationsTabsComponent } from '../navigations-tabs/navigations-tabs.component';
import { ExternalModule } from '../external-module';
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from '../app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LiquidityViewerComponent', () => {
    let component: LiquidityViewerComponent;
    let fixture: ComponentFixture<LiquidityViewerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LiquidityViewerComponent, NavigationsTabsComponent],
            imports: [BrowserModule,
                CommonModule,
                CheckboxModule,
                TooltipModule,
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                AppRoutes,
                BrowserAnimationsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LiquidityViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
