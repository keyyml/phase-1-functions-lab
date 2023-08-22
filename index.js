// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber) {
    if (blockNumber > 42) {
      return blockNumber - 42;
    } else {
      return 42 - blockNumber;
    }
  }
  
function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
  }

function distanceTravelledInFeet(blockNumber, destination){
    if (blockNumber > destination) {
        return (blockNumber - destination)*264;
      } else {
        return (destination - blockNumber)*264;
      }
}
function calculatesFarePrice(blockNumber, destination){
    const feet = distanceTravelledInFeet(blockNumber, destination)
    if (feet <= 400){
        return 0
    }
    if (feet > 400 && feet < 2000){
        return (feet-400)*.02
    }
    if (feet > 2000 && feet < 2500){
        return 25
    }
    if (feet > 2500){
        return 'cannot travel that far'
    }
    }
    