import { expect } from "chai";
import {Point} from "../src/point";

describe("Unit Tests For Point",()=>{
    describe("getDistance()",()=>{
        it("should return a correct distance from the given point",()=>{
            const pointA = new Point(0,0);
            const pointB = new Point(1,1);
            expect(pointA.getDistance(pointB)).to.equal(Math.sqrt(2));
        })
    })
})