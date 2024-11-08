import { inject, bindable } from 'aurelia-framework'
import { Router } from 'aurelia-router'
import { ResponsiveUtils } from 'resources/ResponsiveUtils'

@inject(Router)
export class Navbar {
    constructor(router) {
        this.router = router

        this.responsiveUtils = ResponsiveUtils

        this.userDropdownContentIsFocused = false
    }

    routeTo(route) {
        this.router.navigateToRoute(route)
    }
}