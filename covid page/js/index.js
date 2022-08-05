/* global $ */
/*  eslint-env browser */ 

$(document).ready(function(){
    
    var main_list=$('nav ul >li');
    var articles=$('body > article , header');
    var scrollBtn=$('.scroll');
    var body=$('body');
    var card=$('.card');
    var intro=$('.intro');
    var details=$('.details');
    var img=$('.intro img');
    var span=$('.intro span');
    var closeBtn=$('.details a')
    var p=$('.details p');
    var btn=$('button');
    var btnMenu=$('nav .clickmenu');
    var menu=$('menu');
    var colors=$('menu ul li');
    
    /* card css */
    card.css({position:'fixed',
              zIndex:10,
              top:'-100%',
              left:'-100%',
              backgroundColor:'#FFF',
              width:'20px',
              height:'300px',
             });
    /* intro css */
    intro.css({height:'100px',
               padding:5 ,
               backgroundColor:'#6F42C1',
               color:'white',
               display:'none',
               textAlign:'center',
               borderRadius:'20px 20px 0px 0px'
              });
    /* intro image, span css */
    img.css({width:90,
             height:90,
             borderRadius:'50%' ,
             display:'inline-block' ,
             marginRight:10
            });
    
    span.css({fontWeight:800,
              fontFamily:'fantasty',
              fontSize:40,
              height:100 ,
              verticalAlign:'top' ,
              lineHeight:'100px'
             });
    /* details css */
    details.css({height:'200px',
                 display:'none',
                 backgroundColor:'whitesmoke',
                 padding:20,
                 textAlign:'center' ,
                 borderRadius:'0px 0px 20px 20px'
                });
    /* details button css */
    closeBtn.css({display:'block',
                  width:100 ,
                  margin:'50px auto',
                  borderRadius:20 ,
                  backgroundColor:'#6F42C1',
                  padding:5 ,
                  color:'white' ,
                  textDecoration:'none'
                 });
    /* details p css */
    p.css({textTransform:'Capitalize',margin:0});
    card.animate({top:'25%',left:'32%',},800,function(){
        card.animate({width:520,borderRadius:20},800,function(){
             intro.fadeIn(1500,function(){
                details.slideDown(1200);
             }); 
        });    
    });
    
    closeBtn.on('click',function(e){
        e.preventDefault();
        card.fadeOut(800);
    });
    
    main_list.on('click',function(){
        body.animate({scrollTop : $('#'+$(this).attr('name')).offset().top-69},800);
        $(this).addClass('navchoice').siblings().removeClass('navchoice');
    });
    
    $(window).on('scroll',function(){
        articles.each(function(){
            if(body.scrollTop() > $(this).offset().top-70)
             {
               $('nav ul>li[name="'+$(this).attr('id')+'"]').addClass('navchoice')
                 .siblings().removeClass('navchoice');
             }
            else{
                $('nav ul>li[name="'+$(this).attr('id')+'"]').removeClass('navchoice');
            }
        });
        if(body.scrollTop() > 0)
          {
            if(scrollBtn.is(':hidden'))
                scrollBtn.fadeIn(600);
          }
        else
            scrollBtn.fadeOut(600);
    });
    
    scrollBtn.on('click',function(){
      body.animate({scrollTop:0},800);
    });
    
    btnMenu.on('click',function(){
        menu.toggleClass('visible');
        if(menu.hasClass('visible'))
        {
            menu.animate({left:0},1000);  
        }
        else
        {
            menu.animate({left:-300},1000); 
        }
    });
    
    colors.each(function(){
        $(this).css({backgroundColor:$(this).attr('name')});
    });
    
    colors.on('click',function(){
       body.attr('default-color',$(this).attr('name')); 
    });
    
});