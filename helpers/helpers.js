module.exports = {
    /**
     * 
     * @param {any} input1 
     * @param {string} operator 
     * @param {any} input2 
     */
    ifCondition(input1, operator, input2, options){
        switch (operator) {

            case "contains":
                if (input1.includes(input2)) {
                    return options.fn(this)
                }
                return options.inverse(this)

            case "||":
                if (input1 || input2) {
                    return options.fn(this)
                }
                return options.inverse(this)

            case "==":
                if (input1 === input2) {
                    return options.fn(this)
                }
                return options.inverse(this)
        
            case ">":
                if (input1 > input2) {
                    return options.fn(this)
                }
                return options.inverse(this)
                
            case "<":
                if (input1 < input2) {
                    return options.fn(this)
                }
                return options.inverse(this)

            case ">=":
                if (input1 >= input2) {
                    return options.fn(this)
                }
                return options.inverse(this)

            case "<=":
                if (input1 <= input2) {
                    return options.fn(this)
                }
                return options.inverse(this)
        }

    }
}