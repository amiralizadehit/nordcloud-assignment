import {LinkStation} from "../src/linkstation";
import {Point} from "../src/point";
import { expect } from "chai";


describe("Unit Tests For LinkStation",()=>{
    describe("getPower()",()=>{
        it("should return a correct power for given device position",()=>{
            const linkStation = new LinkStation(new Point(0,0),10);
            expect(linkStation.getPower(new Point(2,2))).to.equal(Math.pow(10 - Math.sqrt(8),2));
        })
        it("should return 0 if distance > reach",()=>{
            const linkStation = new LinkStation(new Point(0,0),2);
            expect(linkStation.getPower(new Point(2,2))).to.equal(0);
        })
    })
})