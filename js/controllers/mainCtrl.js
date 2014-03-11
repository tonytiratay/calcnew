calculator.controller('mainCtrl', ['$scope', 'systemCtrl', '$location', function($scope){

	$scope.profilejustset = false;
	$scope.profile = "non-defini";
	$scope.checkProfile = function(){
		if ($scope.profile =="non-defini"){
			window.location.assign('#/profile');
		}
	};

	$scope.convertisseur = {
		tva: 20,
		value:100,
		type: 'ttc'
	};

	$scope.back = function($scope){
		window.history.back();
	};


	$scope.input = { quantity:1, value: 100, type: 'ttc', cout: false };
	
	var setInput = function(inputtype){
		$scope.input.type = inputtype;	
	};

	$scope.setInput = setInput;

	$scope.params = {
	tva: 20,
	tauxhoraire: 20,
	cotisationcoop: 10,
	chargespat: 42,
	chargessal: 22,
	mettredecote: 0,
	};



	$scope.setToCout = function(word){
		if (word == 'yes'){
			$scope.input.cout = true;
			}
		else if (word == 'no'){
			$scope.input.cout = false;
		}
		console.log($scope.input.cout)
	};

	$scope.resetparams = function(){
		$scope.params.tva = 20;
		$scope.params.tauxhoraire = 25;
		$scope.params.cotisationcoop = 10;
		$scope.params.chargespat = 42;
		$scope.params.chargessal = 22;
		$scope.params.mettredecote = 0;
		window.history.back();
	};

	$scope.validateParams = function(){
		if ($scope.params.tva == null) {$scope.params.tva = 20;}
		else if ($scope.params.tauxhoraire == null) {$scope.params.tauxhoraire = 15;}
		else if ($scope.params.cotisationcoop == null) {$scope.params.cotisationcoop = 10;}
		else if ($scope.params.chargespat == null) {$scope.params.chargespat = 42;}
		else if ($scope.params.chargessal == null) {$scope.params.chargessal = 22;}
		window.history.back();
	};

	$scope.setProfile = function(profile) {
		$scope.profile = profile;
				
		if (profile == 'auto-entrepreneur') {
			$scope.params.chargessal= 0; 
			$scope.params.chargespat= 0; 
			$scope.params.cotisationcoop= 26.8; 
			$scope.params.cotisationtitle='Cotisations (%)';
			if ($scope.input.cout == true) {setInput('salaire');}
			else {setInput('ttc')}
		}

		else if (profile == 'entreprise') {
			$scope.params.chargessal= 22; 
			$scope.params.chargespat= 42; 
			$scope.params.cotisationcoop= 0; 
			$scope.params.cotisationtitle='Cotisations sur le HT (%)';
		}

		else if (profile == 'cooperative') {
			$scope.params.chargessal= 22; 
			$scope.params.chargespat= 42; 
			$scope.params.cotisationcoop= 10; 
			$scope.params.cotisationtitle='Cotisation coopérative (%)';
		}

	};

	$scope.ifFirstConnect = function(profile){
		if ($scope.profilejustset == false) {
				$scope.profilejustset = true;
				$scope.setProfile(profile);
				window.location.assign('#/');
		}

		else if ($scope.profilejustset == true){
			$scope.setProfile(profile);
			window.history.back();	
		};
	};

	var redirectTo = function(destination){
		
	};

/*	var profileSet = function(){
		$scope.profilejustset = false;
		window.location.assign('#/');
	};
*/
	var redirectifempty = function(){
    	if ($scope.resultats == 0) {window.location.assign('#/');}
    };

	$scope.resultats = [];

	$scope.redirectifempty = redirectifempty();
	
	

	$scope.ifroot = function(){
		if (window.location.hash == "#/"){
			$scope.menutoshow = "home"
		}
		else {$scope.menutoshow = "back"}

	};

	$scope.remove = function(resultat){
	    $scope.resultats.splice($scope.resultats.indexOf(resultat),1);
	    redirectifempty();
	}

	$scope.save = function(){
		var input = $scope.input;
		var params = $scope.params;
		var frais = $scope.frais;
		var profil = $scope.profile;
		var result = verif(input,params,frais, profil);
		$scope.resultats.push(result);
		window.location.assign('#/simulations');


	};

	$scope.checkparams = function(){
		if ($scope.params.tva === null) { $scope.params.tva = 0; }
	};

 }]);