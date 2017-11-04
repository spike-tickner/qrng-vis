

// Create a circle shaped path with its center at the center
// of the view and a radius of 30:
var path = new Path.Circle({
	center: view.center,
	radius: 50,
	strokeColor: 'white'
});

var center = new Point(50, 50);
var points = num;
var radius1 = 25;
var radius2 = 40;
var path = new Path.Star(center, points, radius1, radius2);
path.fillColor = 'black';

function onResize(event) {
	// Whenever the window is resized, recenter the path:
	path.position = view.center;
}