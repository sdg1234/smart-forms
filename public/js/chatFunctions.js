function addToChat(data) {
    $('#messages').append(data);
    $("#messages").animate({
        scrollTop: $("#messages")[0].scrollHeight
    }, 1);
    $('.collapsible').collapsible();
}

function sumAssured() {
    socket.emit('products', 'sum assured is 10000 and term is 10 years');
}

function userSpeaks(type) {
    inputType = type;
    console.log(inputType);
    let message = $('#m').val();
    console.log(message);
    socket.emit('products', message);
    let botContent =
        "<li class='user-item'>" +
            "<div class='user-message'>" +
                "<div class='user-image'>" +
                "</div>" +
                "<div class='user-data'>" +
                    "<div class='user-heading'>" +
                        "Me:" +
                    "</div>" +
                    "<div class='user-message-content'>" +
                        message +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</li>";
    addToChat(botContent);
    $('#m').val('');
}

var botMessageStart = 
    "<li class='bot-item'>" +
    "<div class='bot-message'>" +
        "<div class='bot-image'>" +
        "</div>" +
        "<div class='bot-data'>" +
            "<div class='bot-heading'>" +
                "Insurance Bot:" +
            "</div>" +
            "<div class='bot-message-content'>" ;

var botMessageEnd = "</div>" +
                "</div>" +
            "</div>" +
        "</li>";
function botMessage(message) {
    let botContent = '';
    if(targetUser == null) {
        botContent += botMessageStart + message + botMessageEnd;
                    
        return botContent;
    } else {        
        console.log("has entered into function");
        let botStarter =
                "<div class='alternate-header'>"+    
                    "<div class='bot-image'>" +
                    "</div>" +
                    "<div class='bot-heading'>" +
                        "Insurance Bot:" +
                    "</div>" +
                "</div>"+
                '<ul class="collapsible popout" data-collapsible="accordion">';
        let botEnd = '</ul>';
        for(let i=0; i<policies.length;i++) {
            if(targetUser == "child") {
                if(policies[i].type == 'child') {
                    botContent +=
                    ' <li>'+
                        '<div class="collapsible-header">'+
                            policies[i].name+
                        '</div>'+
                        ' <div class="collapsible-body">'+
                            "<div class='card-content white-text'>" +
                                "<ul class='collection with-header'>" +
                                    "<li class='collection-header text-color'>"+
                                        "<h6>Sum Assured</h6>"+
                                    "</li>"+
                                    "<li class='collection-item text-color'>" +
                                        "<input class='with-gap' name='group1"+ i +"' type='radio' id='test"+ i +"1'/>" +
                                        "<label for='test"+ i +"1' class='text-color'>50,000</label>" +
                                    "</li>" +
                                    "<li class='collection-item text-color'>" +
                                        "<input class='with-gap' name='group1"+ i +"' type='radio' id='test"+ i +"2'/>" +
                                        "<label for='test"+ i +"2'  class='text-color'>1,00,000</label>" +
                                    "</li>" +
                                "</ul>" +
                                "<ul class='collection with-header'>" +
                                    "<li class='collection-header text-color'><h6>Payment mode</h6></li>" +
                                    "<li class='collection-item text-color'>" +
                                        "<input class='with-gap' name='group2"+ i +"' type='radio' id='test"+ i +"3'/>" +
                                        "<label for='test"+ i +"3'  class='text-color'>Monthly</label>" +
                                    "</li>" +
                                    "<li class='collection-item text-color'>" +
                                        "<input class='with-gap' name='group2"+ i +"' type='radio' id='test"+ i +"4'/>" +
                                        "<label for='test"+ i +"4'  class='text-color'>Yearly</label>" +
                                    "</li>" +
                                "</ul>" +
                                '<a class="waves-effect waves-light btn sum-assured-btn" onclick="sumAssured()">Done</a>'+
                            "</div>" +
                        ' </div>'+
                    ' </li>';
                }
                
            } else if (targetUser == "life") {
                if(policies[i].type == 'life') {
                    botContent +=
                        ' <li>'+
                            '<div class="collapsible-header">'+
                                policies[i].name+
                            '</div>'+
                            ' <div class="collapsible-body">'+
                                "<div class='card-content white-text'>" +
                                    "<ul class='collection with-header'>" +
                                        "<li class='collection-header text-color'>"+
                                            "<h6>Sum Assured</h6>"+
                                        "</li>"+
                                        "<li class='collection-item text-color'>" +
                                            "<input class='with-gap' name='group3"+ i +"' type='radio' id='test"+ i +"1'/>" +
                                            "<label for='test"+ i +"1' class='text-color'>50,000</label>" +
                                        "</li>" +
                                        "<li class='collection-item text-color'>" +
                                            "<input class='with-gap' name='group3"+ i +"' type='radio' id='test"+ i +"2'/>" +
                                            "<label for='test"+ i +"2'  class='text-color'>1,00,000</label>" +
                                        "</li>" +
                                    "</ul>" +
                                    "<ul class='collection with-header'>" +
                                        "<li class='collection-header text-color'><h6>Payment mode</h6></li>" +
                                        "<li class='collection-item text-color'>" +
                                            "<input class='with-gap' name='group4"+ i +"' type='radio' id='test"+ i +"3'/>" +
                                            "<label for='test"+ i +"3'  class='text-color'>Monthly</label>" +
                                        "</li>" +
                                        "<li class='collection-item text-color'>" +
                                            "<input class='with-gap' name='group4"+ i +"' type='radio' id='test"+ i +"4'/>" +
                                            "<label for='test"+ i +"4'  class='text-color'>Yearly</label>" +
                                        "</li>" +
                                    "</ul>" +
                                '<a class="waves-effect waves-light btn sum-assured-btn" onclick="sumAssured()">Done</a>'+
                                "</div>" +
                            ' </div>'+
                        ' </li>';
                }
            }
        }  
        return botStarter+botContent+botEnd;
    }
  
        
}

function showDiv() {
    console.log("has entered into function");
    let botContent =
        "<div class='row'>" +
            "<div>" +
                "<div class='card-content white-text'>" +
                    "<div>" +
                        "<ul class='collection with-header'>" +
                            "<li class='collection-header text-color'>"+
                                "<h6>Sum Assured</h6>"+
                            "</li>"+
                            "<li class='collection-item text-color'>" +
                                "<input class='with-gap' name='group1' type='radio' id='test1'/>" +
                                "<label for='test1' class='text-color'>50,000</label>" +
                            "</li>" +
                            "<li class='collection-item text-color'>" +
                                "<input class='with-gap' name='group1' type='radio' id='test2'/>" +
                                "<label for='test2'  class='text-color'>1,00,000</label>" +
                            "</li>" +
                        "</ul>" +
                    "</div>" +
                    "<div>" +
                        "<ul class='collection with-header'>" +
                            "<li class='collection-header text-color'><h6>Payment mode</h6></li>" +
                            "<li class='collection-item text-color'>" +
                                "<input class='with-gap' name='group1' type='radio' id='test3'/>" +
                                "<label for='test3'  class='text-color'>Monthly</label>" +
                            "</li>" +
                            "<li class='collection-item text-color'>" +
                                "<input class='with-gap' name='group1' type='radio' id='test4'/>" +
                                "<label for='test4'  class='text-color'>Yearly</label>" +
                            "</li>" +
                        "</ul>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>";

    addToChat(botContent);
}

var policies = [{
    "name": "Child Education",
    "type": "child"
},{
    "name": "Child Health",
    "type": "child"
},{
    "name": "Child Marriage",
    "type": "child"
},{
    "name": "Child Life",
    "type": "child"
},{
    "name": "Personal Health",
    "type": "life"
},{
    "name": "Family Health",
    "type": "life"
},{
    "name": "Retirement",
    "type": "life"
}];