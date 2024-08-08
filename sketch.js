function setup() {
    createCanvas(600, 600);
     background("rgb(221,219,219)");
  }
  
  function draw() {
    
    stroke("rgb(240,160,174)")
    fill("rgb(72,116,228)3)")
    
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
        rect(mouseX, mouseY, 20, 35)
    }
  }