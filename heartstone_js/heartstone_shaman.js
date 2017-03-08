    let cardList = []
    let count = 0
    let arr = ['普通卡只能选择2张哦','传说卡只能选择1张哦','已经选择30张卡牌喽']

    let by = function(name){
        return function(o, p){
            let a, b;
            if (typeof o === "object" && typeof p === "object" && o && p) {
                a = o[name];
                b = p[name];
                if (a === b) {return 0}
                    if (typeof a === typeof b) {return a < b ? -1 : 1;}
                return typeof a < typeof b ? -1 : 1;
            }
            else {
                throw ("error");
            }
        }
    }

    $.ajax({
        url: '../cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL") {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
        $(".card_num").append(`<span class="cardLimit">${count}/30</span><span class="reseted">重置</span>`)
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });

//方法
function allCard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL") {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}

function pickPaladin(argument) {
   $.ajax({
    url: './cards.json',
})
   .done(function(result) {
    let pick =function (result) {
        if (result.playerClass == "SHAMAN") {
            return result
        }
    }
    let temp = result.filter(pick)
    temp.sort(by("cost"))
    $(".card_list").empty()
    for (let i = 0; i < temp.length - 1; i++) {
        $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
    }
})
   .fail(function() {
    console.log("error");
})
   .always(function() {
    console.log("complete");
});
}

function pickNeutural(argument) {
   $.ajax({
    url: './cards.json',
})
   .done(function(result) {
    let pick =function (result) {
        if (result.playerClass == "NEUTRAL") {
            return result
        }
    }
    let temp = result.filter(pick)
    temp.sort(by("cost"))
    $(".card_list").empty()
    for (let i = 0; i < temp.length - 1; i++) {
        $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
    }
})
   .fail(function() {
    console.log("error");
})
   .always(function() {
    console.log("complete");
});
}
function renderCardList(res){
    $('ul').empty()
         cardList.forEach(function(item){
        $("ul").append(`
            <li style="background-image: url(${item.img}">
                <div class="cardItem">
                <p class="cardNum">${item.cost}</p>
                <p class="cardName">${item.name}</p>
                <div class="cardItemBg">
                    <img src="http://avatar.zhangyoubao.com/guide_osspic/lscs/common/cardBgShade.png" class="lazy">
                    <img class="star" src="http://avatar.zhangyoubao.com/guide_osspic/lscs/common/StarIcon.png">
                </div>
                </div>
            </li>
            `)
    })
}

function addMask(index){
    $(".notice").addClass("noticecss")
    .append(`
        <div class="close">&#xe672</div>
        <div class="notice_content">${arr[index]}</div>
        <div class="confirm">确定</div>
        `)
    $(".mask").addClass("maskcss")
}

function changeCss(event){
    event.css({
        'color': '#fff',
        'background-color': 'sandybrown'
    });
    event.siblings().css({
        'color': '#000',
        'background-color': 'transparent'
    });
}
function freeCard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.rarity == "FREE" && (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL")) {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}
function commonCard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.rarity == "COMMON" && (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL")) {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}
function rareCard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.rarity == "RARE" && (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL")) {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}
function epicCard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.rarity == "EPIC" && (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL")) {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}
function legendaryCard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.rarity == "LEGENDARY" && (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL")) {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}
function zeroCostcard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.cost == 0 && (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL")) {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}
function oneCostcard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.cost == 1 && (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL")) {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}
function twoCostcard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.cost == 2 && (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL")) {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}
function threeCostcard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.cost == 3 && (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL")) {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}
function fourCostcard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.cost == 4 && (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL")) {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}
function fiveCostcard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.cost == 5 && (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL")) {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}
function sixCostcard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (result.cost == 6 && (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL")) {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}
function sevenCostcard(argument) {
    $.ajax({
        url: './cards.json',
    })
    .done(function(result) {
        let pick =function (result) {
            if (+result.cost >= 7 && (result.playerClass == "SHAMAN" || result.playerClass =="NEUTRAL")) {
                return result
            }
        }
        let temp = result.filter(pick)
        temp.sort(by("cost"))
        $(".card_list").empty()
        for (let i = 0; i < temp.length - 1; i++) {
            $(".card_list").append(`<div class="card_content" data-id="${temp[i].id}" data-cost="${temp[i].cost}" data-name="${temp[i].name}" data-img="${temp[i].img}" data-rarity="${temp[i].rarity}"><img src="${temp[i].img}" alt=""></div>`)
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}
