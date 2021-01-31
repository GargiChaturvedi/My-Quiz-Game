class Contestant {
    constructor() {
        this.index = null;
        this.name = null;
        this.option = null;
    }

    getContestantCount() {
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value", function(data) {
            contestantCount = data.val();
        });
    }

    updateCount(count) {
        database.ref('/').update({
            contestantCount: count
        });
    }

    update(name, option) {
        var contestantIndex = "contestants/contestant" + this.index;
        database.ref(contestantIndex).update({
            name: name,
            option: option
        });
    }

    /*
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name: this.name,
          distance: this.distance
        });
      }
    */

    static getContestantInfo() {
        var contestantInfoRef = database.ref('contestants');
        contestantInfoRef.on("value", function(data) {
            allPlayers = data.val();
        })
    }
}