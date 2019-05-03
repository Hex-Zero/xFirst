const arrList = ['#h0v0','#h1v0','#h2v0','#h3v0','#h0v1','#h1v1','#h2v1','#h3v1',
                '#h0v2','#h1v2','#h2v2','#h3v2','#h0v3','#h1v3','#h2v3','#h3v3'];
let imgList = ['url(dragon.png)','url(dragon.png)','url(horse.png)','url(horse.png)'
                ,'url(goat.png)','url(goat.png)','url(monkey.png)','url(monkey.png)'
                ,'url(rooster.png)','url(rooster.png)','url(snake.png)','url(snake.png)'
                ,'url(pig.png)','url(pig.png)','url(rabbit.png)','url(rabbit.png)'];       
$(document).ready(()=>{
    $(window).scroll(function() { 
        if($(window).scrollTop() + $(window).height()  < $(document).height() ) {
         $('#topfadein').fadeOut(1000),$('#scrollfade').fadeIn(600); 
     }else{$('#topfadein').fadeIn(600),$('#scrollfade').fadeOut(1000);}
    })
    $('#topfadein').on("click",()=>{location.reload();})
    const randList = [];
    for(let i=0;i<16;i++){ 
        let randomNum = Math.floor(Math.random()*imgList.length);
        let first = imgList[0];
        imgList[0] = imgList[randomNum]; 
        imgList[randomNum] = first;
        randList.push(imgList.shift());
    }
    let firstPick = "";
    let secondPick = "";
    let firstPicki = 0;
    let secondPicki = 0;
    let count = 0;
    for(let y = 0;;y++){
        if(y >15){return y=0} 
        $(arrList[y]).on("click",()=>{
          $(arrList[y]).css('background-color','white');
          $(arrList[y]).css('background-image',randList[y]);
          $(arrList[y]).css('opacity','1'); 
        if(firstPick === ""){
            return  firstPick = randList[y], firstPicki = y;
        }else if(secondPick === ""){
            secondPick = randList[y], secondPicki = y
        if(firstPick === secondPick){
            count++;
            arrList[firstPicki] = "";
            arrList[secondPicki] = "";
           if(count > 7){$("#topfadein").html("Congratulations !")}
            return  firstPick = "",
                    secondPick = "",
                    firstPicki = 0,
                    secondPicki = 0;              
            }else{ 
           function hex(){ 
            $(arrList[firstPicki]).css('background-color','white');
            $(arrList[firstPicki]).css('background-image',"");
            $(arrList[firstPicki]).css('opacity','1'); 
            $(arrList[secondPicki]).css('background-color','white');
            $(arrList[secondPicki]).css('background-image',"");
            $(arrList[secondPicki]).css('opacity','1'); 
            return  firstPick = "",
                    secondPick = "",
                    firstPicki = 0,
                    secondPicki = 0;}
            setTimeout(()=>hex(),250);
            } 
         }
        });
    };
});