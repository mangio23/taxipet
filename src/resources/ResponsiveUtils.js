export class ResponsiveUtils {
    static get isMobileScreen() {
        return window.innerWidth <= 600
    }

    static get isTabletScreen() {
        return window.innerWidth > 600 && window.innerWidth < 1200
    }

    static get isComputerScreen() {
        return window.innerWidth >= 1200
    }
}