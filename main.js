const sizes = document.querySelectorAll(".size")
const crust = document.querySelector(".imgbox")
const slide = document.querySelectorAll(".slide")
const slideBox1 = document.querySelector(".side-top")
const slideBox2 = document.querySelector(".side-right")
const slideBox3 = document.querySelector(".side-bottom")
const slideBox4 = document.querySelector(".side-left")

const btn = document.querySelectorAll("button")

for (let j = 0; j < slide.length; j++) {
    slide[j].addEventListener("click", function () {
        slide[j].classList.toggle("active")      
    })
}


btn[2].addEventListener("click", function(){
    crust.style.width = 400 + "px"
    crust.style.height = 400 + "px"
})

btn[1].addEventListener("click", function(){
    crust.style.width = 500 + "px"
            crust.style.height = 500 + "px"
})

btn[0].addEventListener("click", function(){
    crust.style.width = 600 + "px"
            crust.style.height = 600 + "px"
})



const chefbox = document.querySelector('.chefbox')
const sauce = document.querySelector('.sauce')
const saucebox = document.querySelector('.saucebox')
sauce.onclick = function () {
    saucebox.style.display = 'block'
    cheesebox.style.display = 'none'
    meatsbox.style.display = 'none'
    veggiesbox.style.display = 'none'
    chefbox.style.display = 'none'
}

const cheese = document.querySelector('.cheese')
const cheesebox = document.querySelector('.cheesebox')
cheese.onclick = function () {
    saucebox.style.display = 'none'
    cheesebox.style.display = 'block'
    meatsbox.style.display = 'none'
    veggiesbox.style.display = 'none'
    chefbox.style.display = 'none'
}

const meats = document.querySelector('.meats')
const meatsbox = document.querySelector('.meatsbox')
meats.onclick = function () {
    saucebox.style.display = 'none'
    cheesebox.style.display = 'none'
    meatsbox.style.display = 'block'
    veggiesbox.style.display = 'none'
    chefbox.style.display = 'none'
}

const veggies = document.querySelector('.veggies')
const veggiesbox = document.querySelector('.veggiesbox')
veggies.onclick = function () {
    saucebox.style.display = 'none'
    cheesebox.style.display = 'none'
    meatsbox.style.display = 'none'
    veggiesbox.style.display = 'block'
    chefbox.style.display = 'none'
}













var pep=document.querySelector(".box-pep img")


pep.onmousedown = function(event) {

    let shiftX = event.clientX - pep.getBoundingClientRect().left;
    let shiftY = event.clientY - pep.getBoundingClientRect().top;
  
    pep.style.position = 'absolute';
    pep.style.zIndex = 1000;
    pep.style.width='100px';
    document.body.append(pep);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      pep.style.left = pageX - shiftX + 'px';
      pep.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    pep.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      pep.onmouseup = null;
    };
  
  };
  
  pep.ondragstart = function() {
    return false;
  };












  var canvas= document.getElementById("demo");
  var context = canvas.getContext("2d");
  canvas.onmousemove = function(e){
    var mouseX=Math.floor(e.offsetX);
    var mouseY=Math.floor(e.offsetY);
    context.beginPath();
    context.arc(mouseX,mouseY,13,0,2*Math.PI);
    context.closePath();
    context.fillStyle = "hsla(0, 100%, 66%, 0.459)";
    context.fill();
    
  
  }
  
  for ( var i=1; i<20 ;i++ ){
    for ( var y=1; y<20 ;y++ ){
      context.beginPath();
      context.rect(10 * i,10 * y,3,3);
      context.closePath();
      context.fillStyle = "rgba(255,255,255,0.3)";
      context.fill();
    }
  }