// Define the returnFirstTwoDrivers function
function returnFirstTwoDrivers(drivers) {
    // Slice the first two elements from the drivers array and return a new array
    return drivers.slice(0, 2);
}
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnLastTwoDrivers(drivers) {
    //SLice the last two variables from the drivers array and return a new array.
    return drivers.slice(-2);
    //Using (-2); ensures that the last two variables of the array will alwasy get chosen.. esp in the case that more were added to the array at a later point in the code.
}
// Define the selectingDrivers array with returnFirstTwoDrivers and returnLastTwoDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    //higher order function taking an argument in this case an integer and returns a function that will multiply.
        // Return a function that takes a value and multiplies it by the provided multiplier
        return function(value) {
            return value * multiplier;
        };
    }
const fare = 10;
function fareDoubler(fare) {
    //Double the fare and return the result by multiplying the fare by 2.
    return fare * 2;
}
function fareTripler(fare) {
    //triple the fare and return the result by multiplying the fare by 3.
    return fare * 3;
}
function selectDifferentDrivers(arrayOfDrivers, func) {
    // Call the callback function with the arrayOfDrivers and return the result
    return func(arrayOfDrivers);
}
