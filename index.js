//wakeDog
function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }

//leashDog
function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
}

//walkToPark
function walkToPark(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

//throwFrisbee
function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

//walkHome
function walkHome(dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
}

//unleashDog
function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
}

//array o'functions
const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

//exerciseDog
function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed))
}