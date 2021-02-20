class SlingShot{
    constructor(b1,pointb){
        var options={
            bodyA:b1,
            pointB:pointb,
            stiffness:1,
            length:10
        }
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")

        this.pointB=pointb
         this.chain=Constraint.create(options)
        
        World.add(world,this.chain)  
    }
    fly(){
        this.chain.bodyA=null
    }
    attach(body){
        this.chain.bodyA=body
    }
    
    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        if(this.chain.bodyA){
            var pos1 = this.chain.bodyA.position
            var pos2 = this.pointB
            push()
            stroke(48,22,8)
            if(pos1.x<220){
                strokeWeight(7)
                line(pos1.x-20,pos1.y,pos2.x-10,pos2.y)
                line(pos1.x-20,pos1.y,pos2.x+30,pos2.y-3)
                image(this.sling3,pos1.x-30,pos1.y-10,15,30)

            }
            else{
                strokeWeight(3)
                line(pos1.x+25,pos1.y,pos2.x-10,pos2.y)
                line(pos1.x+25,pos1.y,pos2.x+30,pos2.y-3)
                image(this.sling3,pos1.x+25,pos1.y-10,15,30)
            }
            pop()
        }
        
    }
}