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


function exactMatch(drivers, obj) {
  return drivers.filter(function (d) {
    for(const key in obj) {
      return d[key] === obj[key]
    }
  });
}