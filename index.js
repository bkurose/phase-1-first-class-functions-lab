const returnFirstTwoDrivers = function (array) {
    return array.slice(0, 2)
}

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function (array) { 
    return array.slice(array.length - 2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multi){
    return function fareMultiplier(fare) {
        return multi * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (array, returnDriverFunction){
    return returnDriverFunction(array);
}
