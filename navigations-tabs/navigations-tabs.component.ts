import { Component, OnInit } from '@angular/core';
import { LiquidityService } from '../services/liquidity.service';

@Component({
  selector: 'app-navigations-tabs',
  templateUrl: './navigations-tabs.component.html',
  styleUrls: ['./navigations-tabs.component.scss']
})
export class NavigationsTabsComponent implements OnInit {
    tabDetails: { 'tabDetails': { 'tabName': string;
    'details': { 'ruleName': string; 'selected': boolean; 'details': string; }[]; }[]; 'activeTabIndex': number; };

    constructor(private liquidityService: LiquidityService) {
        this.tabDetails = { 'tabDetails' : [
            {
               'tabName': 'R1',
               'details': [
                  {
                     'ruleName': 'R1',
                     'selected': true,
                     'details': '1==1, exp%400 = 1'
                  },
                  {
                     'ruleName': 'R1',
                     'selected': true,
                     'details': '1==1, exp%400 = 1'
                  }
               ]
            },
            {
               'tabName': 'R2',
               'details': [
                  {
                     'ruleName': 'R1',
                     'selected': true,
                     'details': '1==1, exp%400 = 1'
                  },
                  {
                     'ruleName': 'R1',
                     'selected': true,
                     'details': '1==1, exp%400 = 1'
                  },
                  {
                     'ruleName': 'R1',
                     'selected': true,
                     'details': '1==1, exp%400 = 1'
                  }
               ]
            },
            {
               'tabName': 'R3',
               'details': [
                  {
                     'ruleName': 'R1',
                     'selected': true,
                     'details': '1==1, exp%400 = 1'
                  },
                  {
                    'ruleName': 'R1',
                    'selected': true,
                    'details': '1==1, exp%400 = 1'
                 }
               ]
            },
            {
               'tabName': 'Rule 4',
               'details': [
                  {
                     'ruleName': 'R1',
                     'selected': true,
                     'details': '1==1, exp%400 = 1'
                  },
                  {
                    'ruleName': 'R1',
                    'selected': true,
                    'details': '1==1, exp%400 = 1'
                 }
               ]
            }
         ],
         'activeTabIndex': 2
        };
    }

    ngOnInit() {
        this.liquidityService.getAttributeList().subscribe(result => console.log('result==>', result));
    }


  addNewtab() {
    this.tabDetails.tabDetails.push( {
        'tabName': 'New rule',
        'details': [
        //    {
        //       'ruleName': 'R1',
        //       'selected': true,
        //       'details': '1==1, exp%400 = 1'
        //    },
        //    {
        //       'ruleName': 'R1',
        //       'selected': true,
        //       'details': '1==1, exp%400 = 1'
        //    }
        ]
     });
}
}
