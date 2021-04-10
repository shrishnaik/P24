class PAPER{
    constructor(x,y,radius){
        var option ={
isStatic:false,
restitution:0.2,
friction:0.3,
density:1

        }
        this.radius=radius
        this.body=Bodies.circle(x,y,radius,option);
        World.add(world,this.body)}
        display(){
            var pos=this.body.position
            push()
            translate(pos.x,pos.y)
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
    pop()
    }
}