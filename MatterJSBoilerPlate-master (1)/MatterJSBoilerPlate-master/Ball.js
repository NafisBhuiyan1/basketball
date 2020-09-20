class Ball{

    constructor(x, y, radius){
        var ball_options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x, y, radius, ball_options)
        this.radius=this.radius
        World.add(world, this.body)
    }

    
    display(){
        ellipse(this.body.position.x, this.body.position.y, this.radius);
    }
    
    }
    