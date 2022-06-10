function receivesAFunction(callBack){
    return callBack();
}
function  returnsANamedFunction(){
    const func = function () {
        console.log(`Nom nom nom, this  is delicious!`);
      };
      return func;
}
function returnsAnAnonymousFunction(){
    return function () {
        console.log(`Nom nom nom, this  is delicious!`);
      };
}
const returnFirstTwoDrivers = (drivers)=>{
    return drivers.slice(0,2);
} 
const returnLastTwoDrivers = (drivers)=>{
    return drivers.slice(-2);
}
const selectingDrivers  = [returnFirstTwoDrivers , returnLastTwoDrivers]

function createFareMultiplier(multplicand){
    return function (){ return 20 *multplicand};
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers , opt_func=returnFirstTwoDrivers){
    return opt_func(drivers);
}