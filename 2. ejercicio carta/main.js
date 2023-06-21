let image1 = document.getElementById("card1");
let image2 = document.getElementById("card2");

image1.addEventListener('mouseover', function(){
    image1.src = "./img/card-front.png"
})
image1.addEventListener('mouseout', function(){
    image1.src = "./img/card-back.png"
})
image2.addEventListener('mouseover', function(){
    image2.src = "./img/card-front.png"
})
image2.addEventListener('mouseout', function(){
    image2.src = "./img/card-back.png"
})