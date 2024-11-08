export class BookingForm {
    constructor() {
        this.data = {
            fullName: null,
            email: null,
            mobilePhone: null,
            date: null,
            or: false,
            ownerTransport: false,
            wait: false
        }

        this.booking = false
    }

    book() {
        this.booking = true
    }
}