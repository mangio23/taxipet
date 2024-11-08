export class Modal {

    open(animation, timer) {
        this.content.style.animation = animation ?? 'grow-in .4s ease'
        if(timer > 0) {
            setTimeout(() => {
                this.visible = false
            }, timer * 1000)
        }

        this.visible = true
    }

    close() {
        this.visible = false
    }
}