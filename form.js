class form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(400,0);
        var input = createInput("Your name");
        input.position(400,160);
        var button = createButton("Enter Race");
        button.position(400,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            Player.update(name);
            Player.updateCount(playerCount);
            var greeting = createElement('h3');
            greeting.html("Hello " + name);
            greeting.position(400,160);
        })
    }
}