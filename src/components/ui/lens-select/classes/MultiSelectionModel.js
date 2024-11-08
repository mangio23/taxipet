export class MultiSelectionModel {
    constructor(lensSelect) {
        this.lensSelect = lensSelect
        this.lensSelect.model = this.lensSelect.model || []
    }

    hasSelection() {
        return this.lensSelect.model.length > 0
    }

    isSelected(opt) {
        return this.lensSelect.model.includes(opt.value)
    }

    select(opt) {
        this.lensSelect.model.push(opt.value)
    }

    deselect(opt) {
        const idx = this.lensSelect.model.indexOf(opt.value)
        if(idx > -1) {
            this.lensSelect.model.splice(idx, 1)
        }
    }
}