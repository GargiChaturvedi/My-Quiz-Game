class Quiz {
    constructor() {
        this.resultHeading = createElement("h1");
    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        });
    }

    updateState(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()) {
                contestantCountRef = contestantCountRef.val();
                contestant.getContestantCount();
            }
            question = new Question();
            question.display();
          }
    }

    play() {
        question.hide();
        background("yellow");
        this.resultHeading.html("Result of the quiz!")
        this.resultHeading.position(0, 0);
        Contestant.getContestantInfo();
        if(allPlayers != undefined) {
            var x = 125;
            var y = 350;
            for(var plr in allPlayers) {
                y += 30;
                var correctAns = "3";
                if(correctAns === allPlayers[plr].option) {
                    fill("green");
                } else {
                    fill("red");
                }
                textSize(20);
                text(allPlayers[plr].name + ": " + allPlayers[plr].option, x, y);
            }
        }
    }
}