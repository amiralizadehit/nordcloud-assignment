class Point {
    private readonly _x:number;
    private readonly _y:number;

    constructor(x:number, y:number) {
        this._x = x;
        this._y = y;
    }
    public get x(){
        return this._x;
    }
    public get y(){
        return this._y;
    }

    public getDistance(otherPoint:Point):number{
        return Math.sqrt(Math.pow(this._x - otherPoint.x, 2) + Math.pow(this._y - otherPoint.y, 2));
    }
    
}

export {Point}