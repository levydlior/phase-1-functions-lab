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

//try