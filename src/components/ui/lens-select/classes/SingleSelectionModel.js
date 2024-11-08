export class SingleSelectionModel {
    constructor(lensSelect) {
        this.lensSelect = lensSelect
    }

    hasSelection() {
        return this.lensSelect.model != null
    }

    isSelected(opt) {
        return this.lensSelect.model == opt.value
    }

    select(opt) {
        this.lensSelect.model = opt.value
    }

    deselect() {
        this.lensSelect.model = null
    }
}