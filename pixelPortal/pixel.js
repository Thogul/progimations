class pixel
{
    constructor(x, y, dx, dy)
    {
        this.position = createVector(x, y);
        this.dx = dx;
        this.dy = dy;
        this.color = 'blue';
        this.centerVector = createVector(width/2, height/2);
    }

    update()
    {
        let headingvector = this.position.copy();
        headingvector.sub(this.centerVector);
        headingvector.normalize();
        //headingvector.div(10);
        //headingvector.mult();
        this.position.add(headingvector);
    }

    draw()
    {
        let tempvector = this.position.copy();
        let centertopixel = tempvector.sub(this.centerVector);
        let angle = centertopixel.heading();
        
        push();
        translate(this.position.x, this.position.y);
        rotate(angle);
        
        fill(this.color);
        rect(0, 0, this.dx, this.dy);
        pop();
    }
}