calculator.factory('systemCtrl', function() {
	

var back = function($scope){
	window.history.back();
};

var redirectifempty = function(){
    	if ($scope.resultats == 0) {window.location.assign('#/');}
};

var ifroot = function(){
if (window.location.hash == "#/"){
	$scope.menutoshow = "home"
	}
else {$scope.menutoshow = "back"}
};





});