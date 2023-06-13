var w;
var datarep = 0;
var welem;
var prevt;
var next = 1;
var delem;
var dnext;
var dprevt;
var datarepd;
var elem;
var h;

$(document).ready(function(){
    param();
})
var list = ['t', 'p'];

var val = setInterval(function(){
    slide();
}, 2000);
function param()
{
    elem = $('.slider');
    
    w = elem.width()/3;
    prevt = elem.children().length - 1;

    console.log(elem.children().eq(0).children().height());
    elem.css({'width': w + 'px'});
        h = elem.children().eq(0).height();
            elem.css({'height': h + 'px'});
                welem = elem.children().eq(0).width();
                console.log('welem' + welem);



    elem.children('item').css('width', w + 'px');
    elem.children().each(val => {
        elem.children().eq(val).attr('data-rep',  '' + val + '');
        var hr = val == 0? "img_active" : val == 1 || val == elem.children().length - 1? 'next_img': '';
        elem.children().eq(val).addClass(hr);
        var st = val == 0? 0: val == 1? elem.children().eq(0).width()*0.8: val == elem.children().length - 1? 0 - elem.children().eq(0).width()*0.8: 0;
        elem.children().eq(val).css('transform', 'translateX(' + st + 'px)');
        console.log(elem.children().length - 1)
    })
    
}

function slide(){
    $(".item[data-rep='" + datarep + "']").removeClass('img_active').addClass('next_img');
    $(".item[data-rep='" + datarep + "']").css('transform', 'translateX(' + Number(0 - welem*0.8) + 'px)');
    $(".item[data-rep='" + next + "']").removeClass('next_img').addClass('img_active');
    $(".item[data-rep='" + next + "']").css('transform', 'translateX(0px)');
    $(".item[data-rep='" + prevt + "']").css('transform', 'translateX(' + Number(welem*0.8) + 'px)');
    delem = datarep;
    dnext = next;
    dprevt = prevt;
    datarep = dnext;
    prevt = delem;
    next = dprevt;
    
    
}