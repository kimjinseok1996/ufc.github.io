$(function(){
            var windowtop;
            var headernum = 0;
            var firstfamousboxtop = $("#firstfamousbox").offset().top;
            var fourfamousboxtop = $("#fourbox").offset().top;
            
            $("header #leftmenu li").eq(0).hover(function(){
                    $("#header_underbar").css({"left":"3.3%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
                    
                    $("header #leftmenu li").eq(1).hover(function(){
                        $("#header_underbar").css({"left":"13.3%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
                    
                    $("header #leftmenu li").eq(2).hover(function(){
                        $("#header_underbar").css({"left":"23.3%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
                    
                    $("header #leftmenu li").eq(3).hover(function(){
                        $("#header_underbar").css({"left":"33.3%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
            $("header #rightmenu li").eq(0).hover(function(){
                    $("#header_underbar").css({"left":"93.4%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
                    
                    $("header #rightmenu li").eq(1).hover(function(){
                        $("#header_underbar").css({"left":"83.3%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
                    
                    $("header #rightmenu li").eq(2).hover(function(){
                        $("#header_underbar").css({"left":"73.3%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
                    
                    $("header #rightmenu li").eq(3).hover(function(){
                        $("#header_underbar").css({"left":"63.4%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
            
            var section1filter, section1textdiv, section2cover;
            var section2top, gongtop, lastarticletop;
        
            $(window).scroll(function(){
                windowtop = $(window).scrollTop();
                section1filter = 100 - windowtop/6;
                $("#section1").css({"filter":"brightness("+section1filter+"%)"});
                if(windowtop >= 50){
                    $("header").addClass("on");
                    $("#header_underbar").css({"left":"49%"});
                    
                    $("header #leftmenu li").eq(0).hover(function(){
                        $("#header_underbar").css({"left":"4%"});
                    },function(){
                        $("#header_underbar").css({"left":"49%"});
                    });
                    
                    $("header #leftmenu li").eq(1).hover(function(){
                        $("#header_underbar").css({"left":"14%"});
                    },function(){
                        $("#header_underbar").css({"left":"49%"});
                    });
                    
                    $("header #leftmenu li").eq(2).hover(function(){
                        $("#header_underbar").css({"left":"24%"});
                    },function(){
                        $("#header_underbar").css({"left":"49%"});
                    });
                    
                    $("header #leftmenu li").eq(3).hover(function(){
                        $("#header_underbar").css({"left":"34%"});
                    },function(){
                        $("#header_underbar").css({"left":"49%"});
                    });
                    
                    $("header #rightmenu li").eq(0).hover(function(){
                    $("#header_underbar").css({"left":"94%"});
                    },function(){
                        $("#header_underbar").css({"left":"49%"});
                    });
                    
                    $("header #rightmenu li").eq(1).hover(function(){
                        $("#header_underbar").css({"left":"84%"});
                    },function(){
                        $("#header_underbar").css({"left":"49%"});
                    });
                    
                    $("header #rightmenu li").eq(2).hover(function(){
                        $("#header_underbar").css({"left":"74%"});
                    },function(){
                        $("#header_underbar").css({"left":"49%"});
                    });
                    
                    $("header #rightmenu li").eq(3).hover(function(){
                        $("#header_underbar").css({"left":"64%"});
                    },function(){
                        $("#header_underbar").css({"left":"49%"});
                    });
                    
                    if(headernum == 0){
                        $("header").animate({"width":"100%"},700);
                        headernum = 1;
                    }
                }
                else{
                    $("header").removeClass("on");
                    $("#header_underbar").css({"left":"48.4%"});
                    
                    if(headernum == 1){
                        $("header").animate({"width":"1200px"},700);
                        $("#header_underbar").css({"left":"48.4%"});
                        $("header #leftmenu li").eq(0).hover(function(){
                    $("#header_underbar").css({"left":"3.3%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
                    
                    $("header #leftmenu li").eq(1).hover(function(){
                        $("#header_underbar").css({"left":"13.3%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
                    
                    $("header #leftmenu li").eq(2).hover(function(){
                        $("#header_underbar").css({"left":"23.3%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
                    
                    $("header #leftmenu li").eq(3).hover(function(){
                        $("#header_underbar").css({"left":"33.3%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
            $("header #rightmenu li").eq(0).hover(function(){
                    $("#header_underbar").css({"left":"93.4%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
                    
                    $("header #rightmenu li").eq(1).hover(function(){
                        $("#header_underbar").css({"left":"83.3%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
                    
                    $("header #rightmenu li").eq(2).hover(function(){
                        $("#header_underbar").css({"left":"73.3%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
                    
                    $("header #rightmenu li").eq(3).hover(function(){
                        $("#header_underbar").css({"left":"63.4%"});
                    },function(){
                        $("#header_underbar").css({"left":"48.4%"});
                    });
                        headernum = 0;
                    }
                }
                if(windowtop >= firstfamousboxtop-900){
                    $("#secondfamousbox").css({"top":"500px", "opacity":"1"});
                }
                if(windowtop >= fourfamousboxtop-1200){
                    //$("#secondfamousbox").css({"top":"500px", "opacity":"1"});
                    $("#thirdfamousbox").css({"top":"1100px", "opacity":"1"});
                    $("#fourboxleft").css({"margin-top":"0", "opacity":"1"});
                }   
                section2cover = 950 - windowtop/2;
                $("#section2").css({"top":section2cover+ "px"});
                
                section2top = $("#section2").offset().top;
                if(windowtop >= section2top){
                    $("#section2").css({"top":"630px"});
                }
                gongtop = $("#section2_gong").offset().top;
                if(windowtop >= gongtop-700){
                    $("#gong_cont").css({"top":"50%", "opacity":"1"});
                }
                lastarticletop = $("#section2_lastarticle").offset().top;
                if(windowtop >= lastarticletop-700){
                    $("#first_article").css({"top":"50px", "opacity":"1"});
                }
            });
            
            var footlangnum = 0;
            $("#footlang").on("click",function(){
                if(footlangnum == 0){
                    $("#langbox").show();
                    footlangnum=1;
                }
                else if(footlangnum == 1){
                    $("#langbox").hide();
                    footlangnum=0;
                }
            });
        });