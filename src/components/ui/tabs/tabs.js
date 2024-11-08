import { bindable } from 'aurelia-framework'

export class Tabs {
    @bindable pages
    @bindable pageClicked

    attached() {
        this.pages.forEach(p => {
          if(p.default) this.openPage(p)
        })
    }

    // cambiare in openTab
    openPage(page) {
        this.pageClicked({page: page})
        let pageKey = page.key
        let i

        // Get all elements with class="tabcontent" and hide them
        let tabcontents = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontents.length; i++) {
            tabcontents[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        let tablinks = document.getElementsByClassName("tab-links");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(pageKey).style.display = "block";
        document.getElementById(pageKey + '-btn').className += " active";
    }
}