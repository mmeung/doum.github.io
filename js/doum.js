$(function(){
    $('.latest-title li').hover(function(){
        $('.latest-title li').removeClass('active');
        $(this).addClass('active');
    })

    $.get("../list/list.json")
    .done(function(json){
        const list = json.listpop; 
        const maxlength = list.length; 

        let str = '';

    for (let i = 0; i < maxlength; i++){
        let n = i+1;
        str += '<li>';
        str += '<a href="#">';
        str += '<img src="' + list[i].img + '" alt="' + list[i].count + '">';
        str += '<p class="pop-content">';
        str += '<span>' + n +'</span>' ;
        str += list[i].content;
        str += '</p>';
        str += '<p class="pop-info">' + list[i].info +'</p>';
        str += '<p class="pop-comment">댓글<span>' + list[i].comment +'</span></p>';
        str += '</a>';
        str += '</li>';
    }
    $('.list-pop').html(str);

    })

    
});