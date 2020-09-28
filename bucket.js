class buckets{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 20, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Sprites/dustbingreen.png");

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill("white");
        stroke("white");
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
}
