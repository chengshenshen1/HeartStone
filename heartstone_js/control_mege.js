//点击事件
$(".card_list").on('click', '.card_content', function(event) {
    let cardData = {
        img: $(this).data('img'),
        cost: $(this).data('cost'),
        name: $(this).data('name'),
        rarity: $(this).data('rarity'),
    }
    let _last = cardList.filter(function (elm) {
        return elm.name == cardData.name
    })
    if (_last.length == 2 ) {
        addMask(0)
    } else if (_last.length == 1 && cardData.rarity == 'LEGENDARY') {
        addMask(1)
    }else if (cardList.length == 30 ) {
        addMask(2)
    }else{
         cardList.push(cardData)
        renderCardList($(this))
        count = cardList.length
        $(".card_num").html(`<span class="cardLimit">${count}/30</span><span class="reseted">重置</span>`)
    }
});

$(".card_num").on('click', '.reseted',function(event) {
    cardList = []
    $("ul").empty()
    count = 0
    $(".card_num").html(`<span class="cardLimit">${count}/30</span><span class="reseted">重置</span>`)
});

$(".picked_card").on('click',"li",function(event) {
    var cardIndex = $(this).index()
    if(cardIndex !== -1){
        cardList.splice(cardIndex, 1)
        renderCardList($(this))
        count = cardList.length
        $(".card_num").html(`<span class="cardLimit">${count}/30</span><span class="reseted">重置</span>`)
    }
});

$("#familyprofession").click(function(event) {
    $(".classify").css({
        display: 'flex',
    });
    $(".classification").css({
        display: 'none',
    });
    $(".consume").css({
        display: 'none',
    });
    $(".cardtype").css({
        display: 'none',
    });
    $(".cardhomeland").css({
        display: 'none',
    });
});

$("#cardrarity").click(function(event) {
    $(".classify").css({
        display: 'none',
    });
    $(".classification").css({
        display: 'flex',
    });
    $(".consume").css({
        display: 'none',
    });
    $(".cardtype").css({
        display: 'none',
    });
    $(".cardhomeland").css({
        display: 'none',
    });
});

$("#cardcost").click(function(event) {
    $(".classify").css({
        display: 'none',
    });
    $(".classification").css({
        display: 'none',
    });
    $(".consume").css({
        display: 'flex',
    });
    $(".cardtype").css({
        display: 'none',
    });
    $(".cardhomeland").css({
        display: 'none',
    });
});

$("#cardclassify").click(function(event) {
    $(".classify").css({
        display: 'none',
    });
    $(".classification").css({
        display: 'none',
    });
    $(".consume").css({
        display: 'none',
    });
    $(".cardtype").css({
        display: 'flex',
    });
    $(".cardhomeland").css({
        display: 'none',
    });
});

$("#cardfrom").click(function(event) {
    $(".classify").css({
        display: 'none',
    });
    $(".classification").css({
        display: 'none',
    });
    $(".consume").css({
        display: 'none',
    });
    $(".cardtype").css({
        display: 'none',
    });
    $(".cardhomeland").css({
        display: 'flex',
    });
});

$("#familyprofession").click(function(event) {
    $(".classify").css({
        display: 'flex',
    });
    $(".classification").css({
        display: 'none',
    });
    $(".consume").css({
        display: 'none',
    });
    $(".cardtype").css({
        display: 'none',
    });
    $(".cardhomeland").css({
        display: 'none',
    });
});

$(".notice").on("click",".close",function (argument) {
    $(".notice").empty()
    $(".notice").removeClass("noticecss")
    $(".mask").removeClass("maskcss")
});

$(".notice").on("click",".confirm",function(argument){
    $(".notice").empty()
    $(".notice").removeClass("noticecss")
    $(".mask").removeClass("maskcss") 
});

$("#paladincard").on('click',function(){
    pickPaladin()
    $(".classify").css({
        'display': 'none',
    });
    $(".content:first-child").text('法师')
    changeCss($(this))
});

$("#neutural").on('click',function(){
    pickNeutural()
    $(".classify").css({
        'display': 'none',
    });
    $(".content:first-child").text('中立')
    changeCss($(this))
});

$("#all").on('click', function(event) {
    allCard()
    $(".content:first-child").text('家族职业')
    $(".classify").css({
        'display': 'none',
    });
    changeCss($(this))
});

$(".classification_list").on('click', function(event) {
    if ($(this).text() == "全部") {
        allCard()
        $("#cardrarity").text('稀有度')
        $(".classification").css({
            'display': 'none',
        })
        changeCss($(this))
    }else if ($(this).text() == "免费") {
        freeCard()
        $("#cardrarity").text('免费')
        $(".classification").css({
            'display': 'none',
       })
        changeCss($(this))
    }else if ($(this).text() == "普通") {
        commonCard()
        $("#cardrarity").text('普通')
        $(".classification").css({
            'display': 'none',
       })
        changeCss($(this))
    }else if ($(this).text() == "稀有") {
     rareCard()
     $("#cardrarity").text('稀有')
     $(".classification").css({
        'display': 'none',
    })
     changeCss($(this))
    }else if ($(this).text() == "史诗") {
    epicCard()
    $("#cardrarity").text('史诗')
    $(".classification").css({
        'display': 'none',
    })
    changeCss($(this))  
    }else if ($(this).text() == "传说") {
    legendaryCard()
    $("#cardrarity").text('传说')
    $(".classification").css({
        'display': 'none',
    })
    changeCss($(this))   
    }
});

$(".consume_list").on('click', function(event) {
    if ($(this).text() == "全部") {
        allCard()
        $("#cardcost").text("费用")
        $(".consume").css({
            'display': 'none',
        });
        changeCss($(this))
    }else if ($(this).text() == "0费") {
        zeroCostcard()
        $("#cardcost").text("0费")
        $(".consume").css({
            'display': 'none',
        })
        changeCss($(this))
    }else if ($(this).text() == "1费") {
        oneCostcard()
        $("#cardcost").text("1费")
        $(".consume").css({
            'display': 'none',
        })
        changeCss($(this))
    }else if ($(this).text() == "2费") {
        twoCostcard()
        $("#cardcost").text("2费")
        $(".consume").css({
            'display': 'none',
        })
        changeCss($(this))
    }else if ($(this).text() == "3费") {
        threeCostcard()
        $("#threecost").text("3费")
        $(".cardcost").css({
            'display': 'none',
        })
        changeCss($(this))
    }else if ($(this).text() == "4费") {
        fourCostcard()
        $("#cardcost").text("4费")
        $(".consume").css({
            'display': 'none',
        })
        changeCss($(this))
    }else if ($(this).text() == "5费") {
        fiveCostcard()
        $("#cardcost").text("5费")
        $(".consume").css({
            'display': 'none',
        })
        changeCss($(this))
    }else if ($(this).text() == "6费") {
        sixCostcard()
        $("#cardcost").text("6费")
        $(".consume").css({
            'display': 'none',
        })
        changeCss($(this))
    }else if ($(this).text() == "7费+") {
        sevenCostcard()
        $("#cardcost").text("7费+")
        $(".consume").css({
            'display': 'none',
        })
        changeCss($(this))
    }
});
