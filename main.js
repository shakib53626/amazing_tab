

var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var item4 = document.getElementById('item4');
var circle = document.getElementById('circle-box');
var img2 = document.getElementById('img2');
var img1 = document.getElementById('img1');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var title2 = document.querySelector('.item-2-title h5');
var title1 = document.querySelector('.item-1-title h5');
var title3 = document.querySelector('.item-3-title h5');
var title4 = document.querySelector('.item-4-title h5');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var active = document.querySelector('.active');


    item1.style.display="block";
    item2.style.display="none";
    item3.style.display="none";
    item4.style.display="none";

document.getElementById('btn1').addEventListener('click', function(){
    btn1.style.borderRadius="20px 0 0 0";
    btn2.style.borderRadius="0 100% 0 0";
    btn3.style.borderRadius=" 0 0 0 100%";
    btn4.style.borderRadius="0 0 100% 0";

    img1.style.rotate="0deg";
    img3.style.rotate="0deg";
    img2.style.rotate="0deg";
    img4.style.rotate="0deg";
    title1.style.rotate="0deg";
    title1.style.margin="0 90px 0 0 ";
    title2.style.rotate="0deg";
    title3.style.rotate="0deg";
    title4.style.rotate="0deg";
    title1.style.margin="0 90px 0 0";

    btn1.style.transition="0.5s";
    item1.style.display="block";
    item2.style.display="none";
    item3.style.display="none";
    item4.style.display="none";
    circle.style.rotate='0deg';
    circle.style.transition='0.5s';
    border.style.border='2px double #fff'
    border.style.margin='10px';
    
});
document.getElementById('btn2').addEventListener('click', function(){
    btn2.style.borderRadius="0 20px 0 0";
    btn1.style.borderRadius="100% 0 0 0";
    btn3.style.borderRadius=" 0 0 0 100%";
    btn4.style.borderRadius="0 0 100% 0";

    img1.style.rotate="90deg";
    img3.style.rotate="90deg";
    img4.style.rotate="90deg";
    img2.style.rotate="0deg";
    title1.style.rotate="90deg";    
    title2.style.rotate="90deg";
    title1.style.margin="0 75px 10px 0";
    title3.style.rotate="90deg";
    title4.style.rotate="90deg";

    btn2.style.transition="0.5s";
    item2.style.display="block";
    item1.style.display="none";
    item3.style.display="none";
    item4.style.display="none";
    circle.style.rotate='270deg';
    circle.style.transition='0.5s';
});
document.getElementById('btn3').addEventListener('click', function(){
    btn3.style.borderRadius=" 0 0 0 20px";
    btn1.style.borderRadius="100% 0 0 0";
    btn4.style.borderRadius="0 0 100% 0";
    btn2.style.borderRadius="0 100% 0 0";

    img2.style.rotate="-90deg";
    img1.style.rotate="-90deg";
    img3.style.rotate="-90deg";
    img4.style.rotate="-90deg";
    title1.style.rotate="-90deg";
    title2.style.rotate="-90deg";
    title3.style.rotate="-90deg";
    title4.style.rotate="-90deg";
    title1.style.margin="0 80px 20px 0";

    btn3.style.transition="0.5s";
    item2.style.display="none";
    item1.style.display="none";
    item3.style.display="block";
    item4.style.display="none";
    circle.style.rotate='90deg';
    circle.style.transition='0.5s';
});
document.getElementById('btn4').addEventListener('click', function(){
    btn4.style.borderRadius="0 0 20px 0";
    btn1.style.borderRadius="100% 0 0 0";
    btn3.style.borderRadius=" 0 0 0 100%";
    btn2.style.borderRadius="0 100% 0 0";

    img2.style.rotate="180deg";
    img1.style.rotate="180deg";
    img3.style.rotate="180deg";
    img4.style.rotate="180deg";
    title2.style.rotate="180deg";
    title1.style.rotate="180deg";
    title3.style.rotate="180deg";
    title4.style.rotate="180deg";
    title1.style.margin="0 62px 0 0";

    btn4.style.transition="0.5s";
    item2.style.display="none";
    item1.style.display="none";
    item3.style.display="none";
    item4.style.display="block";
    circle.style.rotate='180deg';
    circle.style.transition='0.5s';
});