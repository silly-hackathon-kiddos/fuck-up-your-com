window.addEventListener('load', function(){
    //document.body.style.backgroundColor = "#000";
    var canvas = document.createElement('canvas');
    canvas.style.height = screen.availHeight + "px";
    canvas.style.width = screen.availWidth + "px";
    canvas.style.position = "fixed";
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    canvas.style.zIndex = "2147483637";
    //canvas.style.background = 'purple';
    
    document.getElementsByTagName('body')[0].appendChild(canvas);
    
    var context = canvas.getContext('2d');
	var ballSize = 10;
	var originXcoordinate = 20;
	var originYcoordinate = 20;
    
    // to make ball move only left right
    var incrementXcoordinate = 5;
	var incrementYcoordinate = Math.floor(Math.random() * 10);
    
    // set boundary
    var boundaryHeight=400;
    var boundaryWidth=800;
    
    // Create gradient
    var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    
    setInterval(function(){ 
        context.zIndex = "2147483638";
        context.beginPath();

        // set stroke color
        context.fillStyle = gradient;
        // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
        context.arc(originXcoordinate, originYcoordinate, ballSize, 0, Math.PI*2,true);
        context.closePath();
        context.fill();
        originXcoordinate+=incrementXcoordinate;
		originYcoordinate+=incrementYcoordinate;
        
        // If stroke hits boundary, change direction to draw
        if( originXcoordinate<0 || originXcoordinate>boundaryWidth) incrementXcoordinate=-incrementXcoordinate;
        if( originYcoordinate<0 || originYcoordinate>boundaryHeight) incrementYcoordinate=-incrementYcoordinate;
        
		originXcoordinate+=incrementXcoordinate; 
		originYcoordinate+=incrementYcoordinate;
    }, 5);
});


  
