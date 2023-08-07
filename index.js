// code your solution here
const denverResults = [
    {
        year: 2013,
        result: "L",
    },
    {
        year: 2014,
        result: "N/A",
    },
    {
        year: 2015,
        result: "W",
    },
]

function superbowlWin(denverResults){
    // let log = denverResults.find(function (item){
    //     return item.result === "W"
    // })
    let log = denverResults.find(item => item.result === "W")
    if(log === undefined){
    return undefined
   } else {
    return log.year
   }
}