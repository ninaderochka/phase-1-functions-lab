// Code your solution in this file! 
const hQ = 42;
const pickupLocation = number;
function distanceFromHqInBlocks(pickupLocation) {
   if (pickupLocation > hQ) {
   return pickupLocation - hQ 
   } else return hQ - pickupLocation
}


function distanceFromHqInFeet(pickupLocation) {
return distanceFromHqInBlocks(pickupLocation) * 264; 
}

function distanceTravelledInFeet(start, destination) {
if (start < destination) {
    return (destination - start) * 264;
} else return (start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return 2/100 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else (distance > 2500)
    return 'cannot travel that far'
}