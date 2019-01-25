// Code your solution here:

function driversWithRevenueOver(drivers, revenue){ 
  return drivers.filter(function(dman){ 
    return dman.revenue > revenue ; 
  });
}

function driverNamesWithRevenueOver(drivers, revenue) { 
  return driverNamesWithRevenueOver(drivers, revenue).map(function(dman){
    return dman.name; 
  });
}