import { bindable, observable } from 'aurelia-framework'

export class TableSearch {
    @bindable placeholder
    @bindable searchByGeneral
    @bindable filter

    @observable general

    attached() {
        this.generalSearchInput.setAttribute('size', this.generalSearchInput.getAttribute('placeholder').length)
    }

    generalChanged() {
        this.searchByGeneral({general: this.general})
    }

    // get thereAreFilters() {
    //     return this.searchParams ? Object.entries(this.searchParams.filters).any(f => f[1]) : false
    // }

    cancelFilter() {
        this.filtersModal.close()
    }

    filterData() {
        this.filter()
        this.cancelFilter()
    }
}