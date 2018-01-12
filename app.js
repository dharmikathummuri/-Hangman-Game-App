var app = angular.module("hangmanApp",[]);


//controllers
app.controller("gameController",["$scope",function($scope,){

  var words = ["cat","rat","map"];
    var selectedWord;
  $scope.incorrectGuessesChosen = [];
  $scope.correctGuesseChosen =[];
  $scope.guesses =6;
  $scope.displayWord='';
  $scope.input ={
    letter:''

  };
  var selectRandomWord = function(){
      var index =Math.round(Math.random()*words.length);
      return words[index];
  }

  var newGame = function(){
      $scope.incorrectGuessesChosen = [];
      $scope.correctGuesseChosen =[];
      $scope.guesses =6;
      $scope.displayWord='';
       selectedWord = selectRandomWord();
      console.log(selectedWord);

      var tempDisplayWord = "";
      for(var i=0;i<selectedWord.length;i++){

        tempDisplayWord += "*";
      }

      $scope.displayWord = tempDisplayWord;




  }

  $scope.letterChoosen =function(){

    for(var i=0;i<$scope.correctGuesseChosen.length;i++){

    if($scope.correctGuesseChosen[i].toLowerCase()==$scope.input.letter){

           $scope.input.letter="";
           return;
        }
    }



  for(var i=0;i<$scope.incorrectGuessesChosen .length;i++){

  if($scope.incorrectGuessesChosen[i].toLowerCase()==$scope.input.letter){

         $scope.input.letter="";
         return;
      }
  }

  var correct =false;
  for(var i=0;i<selectedWord.length;i++){
    if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()){
      $scope.displayWord=$scope.displayWord.slice(0,i)+$scope.input.letter.toUpperCase()+$scope.displayWord.slice(i+1);
        correct =true;
    }

  }
  if(correct){
        $scope.correctGuesseChosen.push($scope.input.letter.toLowerCase());

  }
  else{
      $scope.guesses--;
      $scope.incorrectGuessesChosen.push($scope.input.letter.toLowerCase());
  }
  $scope.input.letter="";
  if($scope.guesses==0){

    window.alert("you lost");
  }
  if($scope.displayWord.indexOf("*")==-1){

    window.alert("you won");
  }

}//end letterchosen()
  newGame();

}]);
