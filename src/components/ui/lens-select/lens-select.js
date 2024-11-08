import { inject, bindable, bindingMode, BindingEngine, observable } from 'aurelia-framework'
import { isInDisabledBranch } from 'resources/IsInDisabledBranch'
import { Options } from './classes/Options'
import { SingleSelectionModel } from './classes/SingleSelectionModel'
import { MultiSelectionModel } from './classes/MultiSelectionModel'

@inject(BindingEngine)
export class LensSelect {
    @bindable model
    @bindable options
    @bindable onSearch

    // @observable model
    @observable searchText

    constructor(bindingEngine) {
        this.bindingEngine = bindingEngine
        this.document = document
        this.optionsModel = null
        this.selectionModel = null

        this.isMulti = false
        this.selection = null
        this.dropdown = null
    }

    attached() {
        this.isMulti = this.lensSelect.hasAttribute('multi')
        this.makeItFocusable(this.lensSelect)

        // Set up the options and selection models
        this.optionsModel = new Options(this.options)
        this.selectionModel = this.isMulti ? new MultiSelectionModel(this) : new SingleSelectionModel(this)

        if(this.isMulti) {
            this.bindingEngine.collectionObserver(this.model).subscribe(this.modelChanged.bind())
        }

        // Watch and initialize selection
        this.updateSelection()
        
        // Initialize dropdown
        this.makeItFocusable(this.dropdown)

        // Attach dropdown event listeners
        //Perché se faccio this.document.body.addEventListener('wheel', this.positionDropdown.bind(this)) si spacca quando esco dalla pagina?
        this.document.body.addEventListener('wheel', () => {
            this.positionDropdown.bind(this)
        })

        this.lensSelect.addEventListener('focusin', () => {
            this.dropdown.querySelector('input').focus()
            this.positionDropdown()
        })

        // Update the visible options
        this.optionsModel.filterByText(this.searchText)
    }

    modelChanged() {
        this.updateSelection()
    }

    searchTextChanged(newText) {
        if(!newText || newText.length < 3) return

        if(this.onSearch) {
            this.onSearch({ searchText: newText })
        }

        this.optionsModel.filterByText(newText)
    }

    positionDropdown() {
        const offset = this.lensSelect.getBoundingClientRect()
        const top = offset.top + this.lensSelect.offsetHeight
        const left = offset.left
        const maxHeight = this.document.body.clientHeight - top

        Object.assign(this.dropdown.style, {
            left: left + 'px',
            top: top + 'px',
            width: this.lensSelect.offsetWidth + 'px',
            maxHeight: maxHeight + 'px'
        })
    }

    updateSelection() {
        const selected = this.model
        const findOption = this.optionsModel.findByValue.bind(this.optionsModel)

        if(this.isMulti && Array.isArray(selected)) {
            this.selection = selected.map(findOption)
        } else {
            this.selection = findOption(selected)
        }
    }

    // Interaction methods (called by view)
    select(opt) {
        this.selectionModel.select(opt)

        if(!this.isMulti) {
            this.dropdown.querySelector('input').blur()
        }
    }

    deselect(opt) {
        this.selectionModel.deselect(opt)
    }

    toggleSelect(opt) {
        if(this.selectionModel.isSelected(opt)) {
            this.deselect(opt)
        } else {
            this.select(opt)
        }
    }

    makeItFocusable(element) {
        if(!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0')
        }
    }

    get hasSelection() {
        return this.selectionModel?.hasSelection()
    }

    get visibleOptions() {
        return this.optionsModel?.getVisible()
    }

    get isDisabled() {
        return isInDisabledBranch(this.lensSelect)
    }
}