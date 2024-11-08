import { inject } from 'aurelia-framework'
import { EventAggregator } from 'aurelia-event-aggregator'
import { RouterEvent } from 'aurelia-router'

@inject(EventAggregator)
export class App {
    constructor(eventAggregator) {
        eventAggregator.subscribe(RouterEvent.Complete, () => {
            this.router.navigateToRoute('home')
        })
    }

    configureRouter(config, router) {
        config.map([
            { route: ['', 'home'], name: 'home', title: 'Home', moduleId: 'pages/home/home' }
        ]);

        this.router = router
    }
}