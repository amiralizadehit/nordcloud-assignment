import {LinkStation} from "./linkstation";
import {Point} from "./point";

const givenLinkStations:LinkStation[] =
    [
        new LinkStation(new Point(0,0),10),
        new LinkStation(new Point(20,20),5),
        new LinkStation(new Point(10,0),12)
    ]
const givenDevices:Point[] =
    [
        new Point(0,0),
        new Point(100,100),
        new Point(15,10),
        new Point(18,18),
    ];

const solutionArray = findBestLinkStation(givenLinkStations, givenDevices);
printSolutionArray(solutionArray);

function findBestLinkStation(linkStations:LinkStation[], devices:Point[]):string[]{
    let resultStrings:string[] = [];
    let resultString:string;
    let power = 0;
    let newPower = 0;
    let selectedLinkIndex = -1;
    let bestLinkStation = undefined;
    devices.forEach(device=>{
        resultString = '';
        power = 0;
        newPower = 0;
        selectedLinkIndex = -1;
        linkStations.forEach((linkStation,index)=>{
           newPower = linkStation.getPower(device);
            if(newPower > power){
                power = newPower
                selectedLinkIndex = index;
            }

        });
        if(power===0){
            resultString = `No link station within reach for point ${device.x},${device.y}`;
        }else{
            bestLinkStation = linkStations[selectedLinkIndex];
            resultString = `Best link station for point ${device.x},${device.y} is ${bestLinkStation.getPosition().x},${bestLinkStation.getPosition().y} with power ${power.toFixed(2)}`;
        }
        resultStrings.push(resultString);
    });
    return resultStrings;
}

function printSolutionArray(array:string[]){
    array.forEach(solution=>{
        console.log(solution);
    })
}

export {findBestLinkStation}