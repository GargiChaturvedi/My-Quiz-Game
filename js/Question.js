class Question {
    constructor(){
        this.title = createElement("h1");
        this.question = createElement("h3");
        this.option1 = createElement("h4");
        this.option2 = createElement("h4");
        this.option3 = createElement("h4");
        this.option4 = createElement("h4");
        this.nameInput = createInput("Enter your name here!");
        this.optionInput = createInput("Enter your preferred option no. here!");
        this.submitButton = createButton("Submit");
        this.confirmation = createElement("h2");
    }

    display() {
        var optionCol = color("green");
        var titleCol = color("blue");
        var questionCol = color("red");

        this.title.html("Quiz Game");
        this.title.position(0, 0);
        this.title.style('color', titleCol);

        this.question.html("In the first Frozen movie, Elsa and Anna lived in which city?");
        this.question.position(25, 100);
        this.question.style('color', questionCol);

        this.option1.html("1. Ahtohallan");
        this.option1.position(50, 150);

        this.option2.html("2. Northuldra");
        this.option2.position(50, 200);

        this.option3.html("3. Arendelle");
        this.option3.position(50, 250);

        this.option4.html("4. Enchanted city");
        this.option4.position(50, 300);

        this.option1.style('color', optionCol);
        this.option2.style('color', optionCol);
        this.option3.style('color', optionCol);
        this.option4.style('color', optionCol);

        this.nameInput.position(50, 350);
        this.optionInput.position(200, 350);
        this.submitButton.position(200, 400);

        this.submitButton.mousePressed(()=>{
            this.nameInput.hide();
            this.optionInput.hide();
            this.submitButton.hide();

            contestant.name = this.nameInput.value();
            contestant.option = this.optionInput.value();

            contestantCount += 1;
            contestant.index = contestantCount;

            contestant.update(contestant.name, contestant.option);
            contestant.updateCount(contestantCount);
            this.confirmation.html("Answer submitted!");
            this.confirmation.position(125, 350);
        });
    }

    hide() {
        this.confirmation.hide();
        this.title.hide();
    }
}