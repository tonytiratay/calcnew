calculator.factory('conversionCtrl', function() {
	

var htToTtc = function(value, params) {return value * (1 + params.tva / 100)};
var htToCapital = function(value, params) {return value * (100 - params.cotisationcoop) / 100};
var htToSalaire = function(value, params) { return (value * 0.9) / 1.82 };
var ttcToHt = function(value, params) { return value * (100 / (100 + params.tva)) };
var capitalToHt = function(value, params) {return params.cotisationcoop * value / 9 };
var salaireToHt = function(value, params){

};

});