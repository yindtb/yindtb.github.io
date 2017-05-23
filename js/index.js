// Now it is ad hoc design.

$(document).ready(function(){
	// Param setup
	canvas = document.getElementById("myCanvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	width = canvas.width;
	height = canvas.height;
	context = canvas.getContext("2d");
	nStars = ~~(width * height * .0015);
	starRadiusLower = height * .002;
	starRadiusUpper = height * .003;
	stars = [];
	for (var i=0; i<nStars; i++) {
		singleStar = {};
		singleStar.r = starRadiusLower + (starRadiusUpper - starRadiusLower) * Math.random();
		singleStar.cx = width * Math.random();
		singleStar.cy = height * Math.random();
		stars.push(singleStar);
	}

	setInterval(intervalHandler, 300);
	}
);

function intervalHandler() {
  context.clearRect(0, 0, width, height);
  // Draw the sky
  var backgroundImg = document.getElementById("sky");
  context.drawImage(backgroundImg, 0, 0, width, height);
  
  // Draw the stars
  for (var i=0; i<nStars; i++) {
	  var oneStar = stars[i];
	  var starImg = document.getElementById("star");
	  context.drawImage(starImg, oneStar.cx - oneStar.r, oneStar.cy - oneStar.r, 2*oneStar.r, 2*oneStar.r);
	  oneStar.r += Math.random()-0.5;
	  if (oneStar.r < starRadiusLower) oneStar.r = starRadiusLower;
	  if (oneStar.r > starRadiusUpper) oneStar.r = starRadiusUpper;
	  stars[i].r = oneStar.r;
  }
  
  // Draw main figure
  var mainImg = document.getElementById("yin");
  var fig_height = height * .8;
  var fig_width = fig_height / 748.0 * 552.0;
  context.drawImage(mainImg, (width - fig_width) / 2, height - fig_height, fig_width, fig_height);
}

