export class Options {
    constructor(options) {
        this.options = options || []
        this.visible = []
    }

    getAll() {
        return this.options
    }

    getVisible() {
        return this.visible
    }

    hideAll() {
        this.visible = []
    }

    filterByText(searchText) {
        const t = searchText?.trim().toLowerCase()
        this.visible = !t ? [] : this.options.filter(o => o.text.toLowerCase().includes(t))
    }

    findByValue(val) {
        return this.options.find(o => o.value == val)
    }
}