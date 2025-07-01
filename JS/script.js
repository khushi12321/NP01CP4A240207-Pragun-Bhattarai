let images = ["../image/showcase.jpg", "../image/showcase2.jpg", "../image/showcase3.jpg","../image/showcase4.jpg"]; //array of images to slide
      var img= document.getElementById('img');
      var x = 0;
      setInterval(slider, 3000); //changes slide every 4 sec
      function slider(){
          if(x<images.length){
              x=x+1;
          }
          else{
              x = 1;
          }
          img.innerHTML="<img src="+images[x-1]+">"; //changes the image in img tag inside slider
      }

            