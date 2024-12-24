const imageContainer = document.getElementById('merchItem1');
const btn1Previous = document.getElementById('btn1Previous');
const btn1Next = document.getElementById('btn1Next');

const images = [
    'inventory/ponchos/img1.jpg',
    'inventory/ponchos/img2.jpg',
    'inventory/ponchos/img3.jpg',
    'inventory/ponchos/img4.jpg',
    'inventory/ponchos/img5.jpg',
    'inventory/ponchos/img6.jpg',
    'inventory/ponchos/img7.jpg',
    'inventory/ponchos/img8.jpg',
    'inventory/ponchos/img9.jpg',
    'inventory/ponchos/img10.jpg',
    'inventory/ponchos/img11.jpg',
    'inventory/ponchos/img12.jpg',
    'inventory/ponchos/img13.jpg',
    'inventory/ponchos/img14.jpg',
    'inventory/ponchos/img15.jpg',
    'inventory/ponchos/img16.jpg',
    'inventory/ponchos/img17.jpg',
    'inventory/ponchos/img18.jpg',
    'inventory/ponchos/img19.jpg',
    'inventory/ponchos/img20.jpg',
    'inventory/ponchos/img21.jpg',
    'inventory/ponchos/img22.jpg',
    'inventory/ponchos/img23.jpg',
    'inventory/ponchos/img24.jpg',
    'inventory/ponchos/img25.jpg',
    'inventory/ponchos/img26.jpg',
    'inventory/ponchos/img27.jpg',
    'inventory/ponchos/img28.jpg',
    'inventory/ponchos/img29.jpg',
    'inventory/ponchos/img30.jpg',
    'inventory/ponchos/img31.jpg',
    'inventory/ponchos/img32.jpg',
    'inventory/ponchos/img33.jpg',
    'inventory/ponchos/img34.jpg',
    'inventory/ponchos/img35.jpg',
    'inventory/ponchos/img36.jpg',
    'inventory/ponchos/img37.jpg',
    'inventory/ponchos/img38.jpg',
    'inventory/ponchos/img39.jpg'
];
const images2 = [
    'inventory/kidsPanchos/img1.jpg',
    'inventory/kidsPanchos/img2.jpg',
    'inventory/kidsPanchos/img3.jpg',
    'inventory/kidsPanchos/img4.jpg',
    'inventory/kidsPanchos/img5.jpg',
    'inventory/kidsPanchos/img6.jpg',
    'inventory/kidsPanchos/img7.jpg',
    'inventory/kidsPanchos/img8.jpg',
    'inventory/kidsPanchos/img9.jpg',
    'inventory/kidsPanchos/img10.jpg',
    'inventory/kidsPanchos/img11.jpg',
    'inventory/kidsPanchos/img12.jpg',
    'inventory/kidsPanchos/img13.jpg',
    'inventory/kidsPanchos/img14.jpg',
    'inventory/kidsPanchos/img15.jpg',
    'inventory/kidsPanchos/img16.jpg',
    'inventory/kidsPanchos/img17.jpg',
    'inventory/kidsPanchos/img18.jpg',
    'inventory/kidsPanchos/img19.jpg',
    'inventory/kidsPanchos/img20.jpg',
    'inventory/kidsPanchos/img21.jpg',
    'inventory/kidsPanchos/img22.jpg',
    'inventory/kidsPanchos/img23.jpg',
    'inventory/kidsPanchos/img24.jpg',
    'inventory/kidsPanchos/img25.jpg',
    'inventory/kidsPanchos/img26.jpg',
    'inventory/kidsPanchos/img27.jpg',
    'inventory/kidsPanchos/img28.jpg',
    'inventory/kidsPanchos/img29.jpg',
    'inventory/kidsPanchos/img30.jpg',
    'inventory/kidsPanchos/img31.jpg',
    'inventory/kidsPanchos/img32.jpg',
    'inventory/kidsPanchos/img33.jpg',
    'inventory/kidsPanchos/img34.jpg',
    'inventory/kidsPanchos/img35.jpg',
    'inventory/kidsPanchos/img36.jpg',
    'inventory/kidsPanchos/img37.jpg',
    'inventory/kidsPanchos/img38.jpg',
    'inventory/kidsPanchos/img39.jpg',
    'inventory/kidsPanchos/img40.jpg',
    'inventory/kidsPanchos/img41.jpg',
    'inventory/kidsPanchos/img42.jpg',
    'inventory/kidsPanchos/img43.jpg'
];

const images3 = [
    'inventory/toys/img1.jpg',
    'inventory/toys/img2.jpg',
    'inventory/toys/img3.jpg',
    'inventory/toys/img4.jpg',
    'inventory/toys/img5.jpg',
    'inventory/toys/img6.jpg',
    'inventory/toys/img7.jpg',
    'inventory/toys/img8.jpg',
    'inventory/toys/img9.jpg',
    'inventory/toys/img10.jpg',
    'inventory/toys/img11.jpg',
    'inventory/toys/img12.jpg',
    'inventory/toys/img13.jpg',
    'inventory/toys/img14.jpg',
    'inventory/toys/img15.jpg',
    'inventory/toys/img16.jpg',
    'inventory/toys/img17.jpg',
    'inventory/toys/img18.jpg',
    'inventory/toys/img19.jpg',
    'inventory/toys/img20.jpg',
    'inventory/toys/img21.jpg',
    'inventory/toys/img22.jpg',
    'inventory/toys/img23.jpg',
    'inventory/toys/img24.jpg',
    'inventory/toys/img25.jpg',
    'inventory/toys/img26.jpg',
    'inventory/toys/img27.jpg',
    'inventory/toys/img28.jpg',
    'inventory/toys/img29.jpg',
    'inventory/toys/img30.jpg',
    'inventory/toys/img31.jpg',
    'inventory/toys/img32.jpg',
    'inventory/toys/img33.jpg',
    'inventory/toys/img34.jpg',
    'inventory/toys/img35.jpg',
    'inventory/toys/img36.jpg',
    'inventory/toys/img37.jpg',
    'inventory/toys/img38.jpg',
    'inventory/toys/img39.jpg'
];

const images5 = [
    'inventory/headWear/img1.jpg',
    'inventory/headWear/img2.jpg',
    'inventory/headWear/img3.jpg',
    'inventory/headWear/img4.jpg',
    'inventory/headWear/img5.jpg',
    'inventory/headWear/img6.jpg'
];
let currentIndex1 = 0;

btn1Next.addEventListener('click', () => {
    currentIndex1 = (currentIndex1 + 1) % images.length;
    imageContainer.src = images[currentIndex1];
});

btn1Previous.addEventListener('click', () => {
    if(currentIndex1==0){
        currentIndex1=38;
    }
    else{
        --currentIndex1;
    }
    imageContainer.src = images[ currentIndex1];
});

const imageContainer2 = document.getElementById('merchItem2');
const btn2Previous = document.getElementById('btn2Previous');
const btn2Next = document.getElementById('btn2Next');
let currentIndex2 = 0;

btn2Next.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    imageContainer2.src = images2[currentIndex2];
});

btn2Previous.addEventListener('click', () => {
    if(currentIndex2==0){
        currentIndex2=42
    }
    else{
        --currentIndex2;
    }
    imageContainer2.src = images2[ currentIndex2];
});
const imageContainer3 = document.getElementById('merchItem3');
const btn3Previous = document.getElementById('btn3Previous');
const btn3Next = document.getElementById('btn3Next');
let currentIndex3 = 0;

btn3Next.addEventListener('click', () => {
    currentIndex3 = (currentIndex3 + 1) % images3.length;
    imageContainer3.src = images3[currentIndex3];
});

btn3Previous.addEventListener('click', () => {
    if(currentIndex3==0){
        currentIndex3=38
    }
    else{
        --currentIndex3;
    }
    imageContainer3.src = images3[currentIndex3];
});

const imageContainer5 = document.getElementById('merchItem5');
const btn5Previous = document.getElementById('btn5Previous');
const btn5Next = document.getElementById('btn5Next');
let currentIndex5 = 0;

btn5Next.addEventListener('click', () => {
    currentIndex5 = (currentIndex5 + 1) % images5.length;
    imageContainer5.src = images5[currentIndex5];
});

btn5Previous.addEventListener('click', () => {
    if(currentIndex5==0){
        currentIndex5=5
    }
    else{
        --currentIndex5;
    }
    imageContainer5.src = images5[currentIndex5];
});