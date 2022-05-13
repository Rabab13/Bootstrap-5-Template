// Create canvas on page 
myPageCanvas = document.createElement('canvas');
// Assign Id 
myPageCanvas.id = "canv"
// canvas style 
myPageCanvas.width = 800;
myPageCanvas.height = 200;
myPageCanvas.style.display = 'block';
myPageCanvas.style.margin = '10px auto';

// Add canvas to the page 
document.body.appendChild(myPageCanvas);

// Canvas info 
var myCanvas = document.getElementById("canv")
    myContext = myCanvas.getContext('2d')

myContext.fillRect(0, 0, 800, 200 )
myContext.fillStyle = '#F00'
myContext.strokeStyle = '00F'
myContext.lineWidth = 3;
myContext.font = '80px Arial'

myContext.fillText('HTML CANVAS', 50, 80)
myContext.strokeText('HTML CANVAS', 50, 80)

// Add second text
myContext.strokeStyle = 'blue'
myContext.lineWidth = 2;
myContext.strokeText('HTML CANVAS', 50, 80)

/*************************************************
myCanvasWidth = myCanvas.width;
myCanvasHeight = myCanvas.height;

create fill triangle
1
myContext.fillStyle = '#129'
fillRect(x, y, width, height)
myContext.fillRect(10, 10, 200, 100)
2
myContext.fillStyle = '#269'
fillRect(x, y, width, height)
myContext.fillRect(20, 20, 200, 100)


*****************************
myContext.strokeStyle= "red"
myContext.lineWidth = 10
myContext.strokeRect(70, 70, 100, 50)

******************************************
You can create image card using below canvas 
myContext.fillStyle = 'red'
myContext.fillRect(0, 0, 500, 250)
myContext.clearRect(30,25, 100, 100)

********************************************
myContext.fillStyle = "#EEE"; //fill color 
myContext.fillRect(0, 0, 300, 150 )
myContext.strokeStyle = "#F00"
myContext.lineWidth = 5;
// top left line 
myContext.moveTo(5, 5);
myContext.lineTo(120, 60);
myContext.stroke();
// top right line 
myContext.moveTo(295, 5);
myContext.lineTo(170, 60);
myContext.stroke();
// Bottom right line 
myContext.moveTo(145, 80);
myContext.lineTo(5, 145);
myContext.stroke();
// Bottom left line 
myContext.moveTo(295, 145);
myContext.lineTo(145, 80);
myContext.stroke();
********************************************
var myCanvas = document.getElementById("canv")
myContext = myCanvas.getContext('2d')
myContext.font = '60px Arial'
myContext.fillStyle = 'blue';
myContext.fillText('R', 20, 40)
myContext.fillStyle = 'red';
myContext.fillText('A', 30, 60)
myContext.fillStyle = 'green';
myContext.fillText('B', 40, 80)
myContext.fillStyle = 'yellow';
myContext.fillText('A', 50, 100)
myContext.fillStyle = 'pink';
myContext.fillText('B', 60, 120)
myContext.strokeStyle = 'aqua'
myContext.strokeText('Rabab', 50, 150)*/




