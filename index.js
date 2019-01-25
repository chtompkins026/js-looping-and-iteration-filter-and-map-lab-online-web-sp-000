// Code your solution here:

function driversWithRevenueOver(drivers, revenue){ 
  return drivers.filter(function(dman){ 
    return dman.revenue > revenue ; 
  });
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(function (dman){
    return dman.name;
  });
}