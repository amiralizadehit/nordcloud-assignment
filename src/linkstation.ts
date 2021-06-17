import {Point} from "./point";

class LinkStation{
    private readonly _reach:number;
    private readonly _position:Point;
    constructor(point:Point, reach:number) {
        this._position = point;
        this._reach = reach;

    }

    getReach():number{
        return this._reach;
    }
    getPosition():Point{
        return this._position;
    }

    getPower(devicePosition:Point){
        const distanceToDevice = devicePosition.getDistance(this._position);
        if(distanceToDevice > this._reach){
            return 0;
        }
        return Math.pow(this._reach - distanceToDevice,2);
    }

}
export {LinkStation}