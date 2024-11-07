// simple

function logFinished(actionName){
    console.log("The " + actionName + " action was completed")
}

function doStuff(logger){
    console.log("i'm doing lots of stuff")
    console.log("i am still busy")
    logger("doStuff")
}

doStuff(logFinished) // do not execute logFinished , just pass the name in