import { NgModule } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';

import {CheckboxModule} from 'primeng/checkbox';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
    declarations: [],
    exports: [
        TabMenuModule,
        TabViewModule,
        MegaMenuModule,
        ButtonModule,
        InputTextModule,
        MultiSelectModule,
        DropdownModule,
        CheckboxModule,
        TooltipModule
    ]
})
export class ExternalModule { }
