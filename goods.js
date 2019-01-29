

var good = {
    fuel_consumption: 0.1,    
    init : function (nif, name, type, hp, deposit) {
        this.hp = hp
        this.nif = nif
        this.name = name
        this.deposit = deposit 
        this.type = type
    },
    tax_calculation: function () {
        return (this.tax_function_calculation ())
    }
    
}

good.autonomyDistance = function autonomyDistance () {
    return (this.deposit/this.hp)
}

good.autonomyTime = function autonomyTime () {
    return (this.deposit/(this.hp*this.fuel_consumption))
}

var airPlanes = Object.create (good, {
    seat_number : {value : 10},
    tax_function_calculation : {
        value : function () {
            // hp*45+2000*seat_number
            return (this.hp*45+2000*this.seat_number)
        }
    }
})

var landVehicles = Object.create (good, {
    tax_function_calculation : {
        value : function () {
            return (this.landVehiclesTaxFunctionCalculation())
        }
    }
})

var fourWheelDrive = Object.create (landVehicles, {
    landVehiclesTaxFunctionCalculation : {
        value : function () {
            // hp*10 for 4x4
            return (this.hp*10)
        }
    }
})

var TwoWheelDrive = Object.create (landVehicles, {
    landVehiclesTaxFunctionCalculation : {
        value : function () {
            // hp*5 for to Wheels vehicle
            return (this.hp*5)
        }
    }
})

var ships = Object.create (good, {
    feet : {value : 100},
    tax_function_calculation : {
        value : function () {
            // pes*100+hp*5
            return (this.feet*100+this.hp*5)
        }
    }
})

var jumbo_747 = Object.create(airPlanes)
jumbo_747.init(123123, 'jumbo_747', 'airplane', 100, 1000)

var everyTimeWeSayGoodbey = Object.create(ships)
everyTimeWeSayGoodbey.init(98543543, "everyTimeWeSayGoodbey", "ship", 20, 100)

var throughTheDesert = Object.create(fourWheelDrive)
throughTheDesert.init(76767676, 'throughTheDesert', '4x4', 10, 100)


console.log ('jumbo_747\n');
console.log ('name-', jumbo_747.name)
console.log ('type-', jumbo_747.type)
console.log ('nif-', jumbo_747.nif)
console.log ('hp-', jumbo_747.hp)
console.log ('deposit-', jumbo_747.deposit)
console.log ('tax_calculation()-', jumbo_747.tax_calculation());
console.log ('autonomyTime()-', jumbo_747.autonomyTime())

console.log ('\n\n\nthroughTheDesert\n');
console.log ('name-', throughTheDesert.name)
console.log ('type-', throughTheDesert.type)
console.log ('nif-', throughTheDesert.nif)
console.log ('hp-', throughTheDesert.hp)
console.log ('deposit-', throughTheDesert.deposit)
console.log ('tax_calculation()-', throughTheDesert.tax_calculation());
console.log ('autonomyTime()-', throughTheDesert.autonomyTime())



console.log ('\n\n\n\everyTimeWeSayGoodbey\n');
console.log ('name-', everyTimeWeSayGoodbey.name)
console.log ('type-', everyTimeWeSayGoodbey.type)
console.log ('nif-', everyTimeWeSayGoodbey.nif)
console.log ('hp-', everyTimeWeSayGoodbey.hp)
console.log ('deposit-', everyTimeWeSayGoodbey.deposit)
console.log ('tax_calculation()-', everyTimeWeSayGoodbey.tax_calculation());
console.log ('autonomyTime()-', everyTimeWeSayGoodbey.autonomyTime())
