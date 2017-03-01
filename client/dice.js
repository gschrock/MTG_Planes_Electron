angular.module('app.dice', []);

app.controller("diceRoll", function($scope, Roll){
  angular.extend($scope, Roll);
  $scope.display = Roll;
  
})

app.factory("Roll", function(){
  var rollDice = function(){
    console.log("roll!")
    result.count++;
    console.log(result.count)
    result.symbol = "assets/planeswalker.png"
    var randomDice = Math.round(Math.random()*6)
    console.log(randomDice)
    if(randomDice < 4){
      // X Nothing
      result.symbol = "assets/X.png"
    } else if (randomDice === 4){
      // Planeswalk
      result.symbol = "assets/planeswalker.png"
    } else {
      // Chaos
      result.symbol = "assets/chaos.png"
    }
  }
  
  var result = {
    symbol: "assets/planeswalker.png",
    rollDice: rollDice,
    count: 0
  }
  return result;
});
