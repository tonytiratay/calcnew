var calculator = angular.module('calculator', []);


 calculator.controller('SystemCtrl', ['$scope', function($scope){

	$scope.input = { value: 100, type: 'HT' };

	params = {
	tva: 20,
	tauxhoraire: 25,
	cotisationcoop: 10,
	charges: 82
	};


	$scope.resultat = [{ 
			ht: $scope.input.value,
			ttc: htToTtc($scope.input.value),
			capital: htToCapital($scope.input.value),
			salaire: htToSalaire($scope.input.value)
		}];
	

	$scope.save = function(){
		
		$scope.resultats.push({ 
			ht: $scope.input.value,
			ttc: htToTtc($scope.input.value),
			capital: htToCapital($scope.input.value),
			salaire: htToSalaire($scope.input.value)
		});

	};


	$scope.htToTtc = htToTtc;
	$scope.htToCapital = htToCapital;
	$scope.htToSalaire = htToSalaire;


 }]);
