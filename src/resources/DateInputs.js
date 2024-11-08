export class DateInputs {
    static get today() {
        let today = new Date()
        let roughMonth = today.getMonth() + 1
        let month = roughMonth > 9 ? roughMonth : '0' + roughMonth
        let roughDay = today.getUTCDate()
        let day = roughDay > 9 ? roughDay : '0' + roughDay
    
        return today.getFullYear() + '-' + month + '-' + day
    }
}