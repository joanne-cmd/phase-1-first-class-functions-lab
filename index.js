// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
 const returnFirstTwoDrivers=(function (drivers){
   return drivers.slice(0,2);
 })
 const returnLastTwoDrivers=(function (drivers){
  return drivers.slice(-2);
})
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
//console.log(selectingDrivers[0](drivers))
function createFareMultiplier(i){
  return (function(fare){
    return fare*i;
  })

}
const fareDoubler= createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);
function selectDifferentDrivers(drivers, driverfind){
  return driverfind(drivers)

}


