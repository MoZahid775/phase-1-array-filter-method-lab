// Code your solution here
function findMatching(array, string){


 let newArray = array.filter((names) => {return names.toUpperCase() === string.toUpperCase()})

 return newArray;
}

function fuzzyMatch(array, string) {

 let newArray = array.filter((names) => {return names[0] === string[0]})                                                 

return newArray
}

function matchName(array, string) {


let newArray = array.filter((names) => {return names.name === string})

    return newArray
}