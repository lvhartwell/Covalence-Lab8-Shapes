let Shape = function(height, width) {
    this.height = height;
    this.width = width;
}
Shape.prototype.draw = function() {
    this.div = $("<div class=" + this.constructor.name 
+ "></div>");
this.div.css({
    height: this.height,
    width: this. width,
    top: Math.floor(Math.random() * (600-this.height)),
    left: Math.floor(Math.random() * (600-this.width))
});
if(this instanceof Triangle) {
    this.div.css("border-width",
this.height + "px 00" + this.height + "px");
}
this.div.click(this.describe.bind(this));
this.div.dblclick(function() {
    this.div.remove();
}.bind(this));
$("#canvas").append(this.div);

}
Shape.prototype.describe = function() {
    $('#name').text(this.constructor.name);
    $('#width').text(this.width);
    $('#height').text(this.height);
    $('#radius').text(this instanceof Circle ? this.radius : "N/A");
    $('#area').text(this.area());
    $('#perimeter').text(this.perimeter());
}

let Circle = function(radius) {
    Shape.call(this, radius*2, radius*2);
    this.radius =  radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {

    return Math.PI * (this.radius * this.radius);
}
Circle.prototype.perimeter = function() {
    return 2* Math.PI * this.radius;
}

let Triangle = function(height) {
    Shape.call(this, height, height);
    this.height = height;
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.area = function() {
    return 0.5 * this.width* this.height;
}
Triangle.prototype.perimeter = function() {
    return 2 * this.height * Math.sqrt((2*this.height) * this.height);
}

let Rectangle = function(height, width) {
    Shape.call(this, height, width);
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
    return this.height * this.width;
}
Rectangle.prototype.perimeter = function() {
    return (2*this.height) + (2*this.width);
}

let Square = function(side) {
    Rectangle.call(this, side, side);
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

function makeCircle() {
    new Circle($('#cRadius').val()).draw();
}

function makeTriangle() {
    new Triangle($('#tHeight').val()).draw();
}

function makeRectangle() {
    new Rectangle($('#rlength').val(),$('#rwidth').val()).draw();
}
function makeSquare() {
    new Square($('#sSide').val()).draw();
}


