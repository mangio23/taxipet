export class SearchUtils {
    filterBy(param, field) {
        if(!param || param == '') return true

        //TODO per la status key usa l'includes, chiaramente è sbagliato perché deve usare == ma non so come controllarlo

        if(Number.isInteger(field)) {
            return field == param
        } else if(typeof field === "boolean") {
            if (typeof param === 'boolean') {
                return param === field
            } 
            
            if (typeof param === 'string') {
                return (param === 'true' && field === true) || (param === 'false' && field === false)
            }

            return false
        } else {
            return field.toLowerCase().includes(param.toLowerCase())
        }
    }
}