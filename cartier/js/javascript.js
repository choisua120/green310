$(document).ready(function(){
// window.onload 와 같은 개념
//article 에 마우스가 들어갔을때,본인이 커져라
//article에 마우스가 들어갔을 때, 본인안에 있는 비디오가 커져라
$('article').mouseenter(function(){
    let vid = $(this).find('video').get(0);
    //가져올 때 양식 source는 하나만 넣기 
        vid.currentTime = 0 // 시작점을 제시할 수 있다
        vid.play()
    $(this).css({'width':'35%'})   
    $(this).find('video').css({'opacity':'0.9'})
    //$(this).find('h3').css({'left':'200px'})
    })
//article에 마우스가 나갔을 떄 본인이 작아져라
//article에 마우스가 나갔을 때, 본인안에 있는 비디오가 사라져라
$('article').mouseleave(function(){
    let vid = $(this).find('video').get(0);
        vid.pause()
    $(this).css({'width':'12%'})
    $(this).find('video').css({'opacity':'0'})
    })
})