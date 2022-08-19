const record = [
    {
        year: "2015",
        result: "W"
    },

    {
        year: "2016",
        result: "L"
    }
]


function superbowlWin(record){
    let winresult;
    for(let item of record){
        if(item.result === "W"){
            winresult = item["year"];
            return winresult
        }
    }
}

let denvorsWin = record.find(superbowlWin)