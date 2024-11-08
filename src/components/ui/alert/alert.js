export class Alert {

    open(type, timer) {
        this.icon = this.getIconByType(type)

        let modalAnimation = 'bounce-in .5s alternate'
        this.alertModal.open(modalAnimation, timer)
    }

    close() {
        this.alertModal.close()
    }

    getIconByType(type) {
        switch(type.toLowerCase()) {
            case 'error': return 'x'
            case 'success': return 'check'
            case 'info': return 'circle-info'
            case 'warning': return 'triangle-exclamation'
            default: return null
        }
    }
}