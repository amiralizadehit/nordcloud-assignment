
import {findBestLinkStation} from "../src/app";
import {LinkStation} from "../src/linkstation";
import {Point} from "../src/point";
import { expect } from "chai";

const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

describe("Unit Tests For App",()=>{
    describe("findBestLinkStation()",()=>{
        it("should find the best link stations with most power",()=>{
            let givenLinkStations:LinkStation[] =
                [
                    new LinkStation(new Point(0,0),10),
                    new LinkStation(new Point(20,20),5),
                    new LinkStation(new Point(10,0),12)
                ]
            let givenDevices:Point[] =
                [
                    new Point(3,5),
                    new Point(2,7),
                    new Point(6,11),
                    new Point(15,9),
                ];
            const result = findBestLinkStation(givenLinkStations, givenDevices);
            expect(result).to.be.array();
            expect(result).to.be.ofSize(4);
            expect(result).to.be.containingAllOf([
                "Best link station for point 3,5 is 0,0 with power 17.38",
                "Best link station for point 2,7 is 0,0 with power 7.40",
                "Best link station for point 6,11 is 10,0 with power 0.09",
                "Best link station for point 15,9 is 10,0 with power 2.90"
            ]);

        })
        it("should not find any link stations (all out of reach)",()=>{
            let givenLinkStations:LinkStation[] =
                [
                    new LinkStation(new Point(0,0),10),
                    new LinkStation(new Point(20,20),5),
                    new LinkStation(new Point(10,0),12)
                ]
            let givenDevices:Point[] =
                [
                    new Point(200,200),
                    new Point(100,100),
                    new Point(-100,-100),
                    new Point(-250,-250),
                ];
            const result = findBestLinkStation(givenLinkStations, givenDevices);
            expect(result).to.be.array();
            expect(result).to.be.ofSize(4);
            expect(result).to.be.containingAllOf([
                "No link station within reach for point 200,200",
                "No link station within reach for point 100,100",
                "No link station within reach for point -100,-100",
                "No link station within reach for point -250,-250"
            ]);
        })
    })
})
