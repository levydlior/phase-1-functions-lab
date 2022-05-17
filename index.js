// Code your solution in this file!

function distanceFromHqInBlocks(startingBlock){
    let headquarters = 42 
    const distance = headquarters - startingBlock;
    return Math.abs(distance)
}


function distanceFromHqInFeet(startingBlock){
    return distanceFromHqInBlocks(startingBlock) * 264;
}

function distanceTravelledInFeet(startingBlock, endBlock) {
    const feetTravled = (startingBlock - endBlock) * 264 
    return Math.abs(feetTravled)
}

function calculatesFarePrice(start, destination){
    let fare
    // function distanceTravelledInFeet(startingBlock, endBlock) {
    //     const feetTravled = (startingBlock - endBlock) * 264 
    //     const result = Math.abs(feetTravled)
    //     return result
    // }
    if(distanceTravelledInFeet(start, destination) < 400){
        return fare = 0
    } else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <= 2000 ){
        return (distanceTravelledInFeet(start, destination)-400) * .02 
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500 ){
        return 25
    } else {
        return 'cannot travel that far'
    }
}