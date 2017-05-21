var width = window.innerWidth;
var height = window.innerHeight;
var svgString = "\
	<svg width=\""+ width +"\" height=\""+ height +"\" viewBox=\"0 0 "+ width +" "+ height +"\" \
     xmlns=\"http://www.w3.org/2000/svg\"> \
  <defs> \
	<radialGradient id=\"skyGradient\"> \
      <stop offset=\"0%\" stop-color=\"rgba(30, 120, 220, .7)\"/> \
	  <stop offset=\"50%\" stop-color=\"rgba(10, 80, 200, .9)\"/> \
      <stop offset=\"100%\" stop-color=\"rgba(0, 50, 190, 1.0)\"/> \
    </radialGradient> \
  </defs> \
  <rect x=\"0\" y=\"0\" width=\""+ width +"\" height=\""+ height +"\" \
      style=\"fill: url(#skyGradient)\"/> \
</svg>";
document.write(" <div style=\"display:none;\"> \
	<img id=\"sky\" src = \"data:image/svg+xml;base64," 
	+window.btoa(svgString)+
    "\"></div>");
	
svgString = "\
	<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" \
     xmlns=\"http://www.w3.org/2000/svg\"> \
  <defs> \
	<radialGradient id=\"skyGradient\"> \
      <stop offset=\"0%\" stop-color=\"rgba(255, 255, 255, .95)\"/> \
	  <stop offset=\"50%\" stop-color=\"rgba(255, 255, 255, .65)\"/> \
      <stop offset=\"100%\" stop-color=\"rgba(255, 255, 255, .05)\"/> \
    </radialGradient> \
  </defs> \
  <circle cx=\"10\" cy=\"10\" r=\"10\" \
      style=\"fill: url(#skyGradient)\"/> \
</svg>";
document.write(" <div style=\"display:none;\"> \
	<img id=\"star\" src = \"data:image/svg+xml;base64," 
	+window.btoa(svgString)+
    "\"></div>");
