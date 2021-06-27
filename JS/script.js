var slider = 1;
var opacity = 0;
var flag = true;
var test = 0;



console.log(test);

document.querySelector('.carousel__right').addEventListener('click',function(){
   console.log(test);
    test ++;
    if(slider > 2){
        slider = 1;
    }else{
        slider++;
    }
    document.querySelector('.carousel__slide').src ="../img/slider_"+slider+".jpg"; 
    
})


document.querySelector('.carousel__left').addEventListener('click',function(){

    if(slider < 2){
        slider = 3;
    }else{
        slider--;
    }
    document.querySelector('.carousel__slide').src ="../img/slider_"+slider+".jpg";
})

function gradualAppear(){
    setInterval(autoChuyen,4000);
    function autoChuyen(){
        if(slider > 2){
            slider = 1;
        }else{
            slider++;
        }   
        document.querySelector('.carousel__slide').src ="../img/slider_"+slider+".jpg"; 
        opac();
       
    }   
}
function opac(){
    document.querySelector('.carousel__slide').style.opacity = opacity;  
    if(opacity === 0){opacity = 1}else{opacity = 0};
    document.querySelector('.carousel__slide').style.opacity = opacity;  
}