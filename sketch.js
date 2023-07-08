/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/


function drawCloud(x, y, size) {
	ellipse(x, y, size, size);
	ellipse(x - size / 2, y, size / 1.5, size / 1.5);
	ellipse(x + size / 2, y, size / 1.5, size / 1.5);
	ellipse(x - size / 2, y - size / 4, size / 1.5, size / 1.5);
	ellipse(x + size / 2, y - size / 4, size / 1.5, size / 1.5);
	ellipse(x, y - size / 4, size / 1.5, size / 1.5);
}


function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky

	fill(255); // White color for the cloud
	noStroke(); // No outline
	drawCloud(100, 100, 80);
	fill(255);
	text("cloud", 200, 100);

	 

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	fill(160); // Light gray color for the mountain
	noStroke(); // No outline
	triangle(400, 432, 800, 432, 600, 200);
	fill(255);
	text("mountain", 500, 256);


	// 3. a tree
	fill(139, 69, 19); // Brown color for the tree trunk
  noStroke(); // No outline
  rect(700, 336, 40, 96);
  fill(34, 139, 34); // Dark green color for the tree top
  ellipse(720, 280, 120, 120);
  fill(255);
  text("tree", 800, 346);

	// 4. a canyon
	fill(139, 69, 19); // Brown color for the canyon walls
	noStroke(); // No outline
	rect(100, 432, 200, 144);
	fill(100, 155, 255); // Blue color for the canyon floor
	rect(100, 576, 200, 200);
	fill(255);
	text("canyon", 100, 480);
  

// 5. a collectable token - e.g. a jewel, fruit, coins
fill(255, 0, 0); // Red color for the strawberry
noStroke(); // No outline
ellipse(400, 400, 40, 40);
fill(0, 0, 0); 
ellipse(390, 390, 5, 5);
ellipse(410, 390, 5, 5);
ellipse(390, 410, 5, 5);
ellipse(410, 410, 5, 5);
fill(255);
text("collectable item", 400, 400);
}
