// Your code goes here

// click

let btn = document.querySelector(".destination .btn");
btn.addEventListener('click', function(event) {
     alert('zoom zoom');
    });



// select

let link = document.querySelector(".nav-link"); 
link.addEventListener('select', function(event) {
        counter++;
        link.onclick = prompt('JavaScript is like magic');
        });


 // wheel

  let scale = 1;
  const el = document.querySelector('body');
  el.onwheel = zoom;

body.addEventListener('wheel', function zoom(el) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -2;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 2;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  });
 
//   focus
let bus = document.querySelector(".logo-heading");

bus.addEventListener('focus', function(event) {
        
        event.target.style.hidden= true;
        });
 

// resize

let heightOutput = document.querySelector('');
let widthOutput = document.querySelector('');

function reportWindowSize() {
  heightOutput.textContent = document.innerHeight;
  widthOutput.textContent = document.innerWidth;
}


// scroll
window.onresize = reportWindowSize;

 btn.addEventListener('scroll', function(event) {
     event.target.style.color= 'green';
        });

  // keydown

  const keyDown = document.querySelector('body');
  keyDown.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight'){
      alert('Right')
      }
      else if ('ArrowLeft event'){
          alert('Left')
      }
      console.log(event);
  });




  // drag and drop

let dragged;
let dropzone;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false)

  // load              

 let start = document.querySelector("body"); 
 start.addEventListener('load', function(event) {
                        start.load;
                        });
                       
                       
  // dblclick                    
   let clicker = document.querySelector(".img/fun.jpg"); 
                        clicker.addEventListener('dblclick', function(event) {
                                counter++;
                                clicker.onclick = prompt('This was prompted from a double-click');
                                });
                                