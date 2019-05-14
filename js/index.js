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
  }
 
//   focus
let bus = document.querySelector(".logo-heading");

bus.addEventListener('focus', function(event) {
        
        event.target.style.hidden= true;
        });
 

resize
let heightOutput = document.querySelector('');
let widthOutput = document.querySelector('');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}


// scroll
window.onresize = reportWindowSize;

 btn.addEventListener('scroll', function(event) {
    counter++;
    event.target.style.color= 'green';
        });

 btn.addEventListener('select', function(event) {
            counter++;
            event.target.style.color= 'green';
            });

 btn.addEventListener('dbclick', function(event) {
                counter++;
                event.target.style.color= 'green';
                });
