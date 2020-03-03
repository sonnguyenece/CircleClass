let Circle = function (radius,color) {
    this.radius = radius;
    this.color = color;
    this.getColor = function () {
        return this.color;
    };
    this.getRadius = function () {
        return this.radius;
    };
    this.getArea = function () {
        return Math.PI * this.radius ** 2
    }
};
let circle = new Circle(2,'red');
let radius = circle.getRadius();
let color = circle.getColor();
let area = circle.getArea();
alert("radius: "+radius+" area: "+area+" color: "+color);