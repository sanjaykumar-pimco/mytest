
import { Component, OnInit, OnDestroy } from '@angular/core';
// import { MenuSystemService, MenuOrientation, GrowlSeverity, RippleEffectService, OpenfinIntegrationService } from '@pimco/desk';
// import { NotificationService } from '@pimco/desk';
// import { environment } from '../environments/environment';
// import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',

})
export class AppComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        // throw new Error("Method not implemented.");
    }
    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }
    // constructor(public menuService: MenuSystemService, public notificationService: NotificationService,
    //     private ripple: RippleEffectService) {
    // }

    // ngOnDestroy(): void {
    //     this.ripple.unbindRipple();
    // }
    // ngOnInit(): void {
    //     // initialize the ripple effect on visuals
    //     this.ripple.initialize();
    //     // show the user's image on the right
    //     this.menuService.showProfile = false;
    //     // show the search bar
    //     this.menuService.showSearchBar = false;
    //     // hide the top left logo
    //     this.menuService.showTopbarLogo = true;
    //     // show/hide the expand/collapse menu
    //     this.menuService.showExpandCollapseMenu = true;
    //     // Keep the menu always visible?
    //     this.menuService.layoutCompact = true;
    //     this.menuService.changeToHorizontalMenu();
    //     this.menuService.showRightPanelButton = false;

    //     // set the menu items here for the application
    //     this.menuService.menuItems = [

    //         { label: 'RULE VIEWER', icon: 'build', routerLink: ['/'] }

    //     ];

    // }
}
