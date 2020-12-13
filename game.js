class game {
    constructor(){

    }
getState(){
    var gameStateref = database.ref("gameState");
    gameStateref.on("value",function(data){
        gameState = data.val();
    })
}
    update(state){
        database.ref('/').update({
            gameState: state
        })
    }
    start(){
        if(gameState === 0){
            Player = new player();
            Player.getCount();
            Form = new form();
            Form.display();
        }
    }
}