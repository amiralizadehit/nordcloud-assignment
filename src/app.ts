import {LinkStation} from "./linkstation";
import {Point} from "./point";

const linkStations:LinkStation[] =
    [
        new LinkStation(new Point(0,0),10),
        new LinkStation(new Point(20,20),5),
        new LinkStation(new Point(10,0),12)
    ]
const devices:Point[] =
    [
        new Point(0,0),
        new Point(100,100),
        new Point(15,10),
        new Point(18,18),
    ];

findBestLinkStation();

function findBestLinkStation(){
    let power = 0;
    let newPower = 0;
    let selectedLinkIndex = -1;
    let bestLinkStation = undefined;
    devices.forEach(device=>{
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
            console.log(`No link station within reach for point ${device.x}, ${device.y}`);
        }else{
            bestLinkStation = linkStations[selectedLinkIndex];
            console.log(`Best link station for point ${device.x}, ${device.y} is ${bestLinkStation.getPosition().x}, ${bestLinkStation.getPosition().x} with power ${power}`);
        }
    });
}