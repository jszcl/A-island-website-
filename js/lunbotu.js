'use strict'
$(function() {var jnums = $('#num li');
var time = null;
var k=0;
var handler = function(){clearInterval(time);
                         k=this.index;
                        var imgindex=imglist[k];
                           $("#showimg").attr("src",imgindex) ;
                            timestart();
};
var imglist = ["imgs/a.jpg","imgs/b.jpg","imgs/c.jpg","imgs/d.jpg"]
function clicking(){
    
    for (var i=0;i<jnums.length;i++){
    jnums[i].index=i;
    jnums[i].addEventListener("click",handler,true);

    };
   
};


function timestart () {
    clearInterval(time);
    time=setInterval(circle,3000);
    clicking();

};

function circle(){
    if (k > jnums.length-2) {
        k = 0;
    } else {
        k++;
    }

    $("#showimg").attr("src",imglist[k]);
    
};
timestart ();
})