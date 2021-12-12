(function(){
    "use strict";

    //Declaring Variables
    let CurrentImage=0;
    const MyPhotos=['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    const container=document.getElementById('content');
    const NextBtn=document.getElementById('next');
    const PrevBtn=document.getElementById('previous');

    //Swapping images within the slideshow
    function swapimg(){
        let NewSlide = document.createElement('img');
        NewSlide.src = MyPhotos[CurrentImage];
        NewSlide.className='fadeinimg';
        container.appendChild(NewSlide);
        if(container.children.length>2){
            container.removeChild(container.children[0])
        };
    }

    //Adding click event listeners to buttons
    NextBtn.addEventListener('click',function(event){
        event.preventDefault();

        CurrentImage++;
        if(CurrentImage>MyPhotos.length-1){CurrentImage=0;}
        swapimg();
    });

    PrevBtn.addEventListener('click',function(event){
        event.preventDefault();
        CurrentImage--;
        if(CurrentImage<0){CurrentImage=MyPhotos.length-1;}
        swapimg();

    });
})();