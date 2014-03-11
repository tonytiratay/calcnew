
 
// Calculs à partir du HT
var htToTtc = function(input, params) { 
	return input * (1 + params.tva / 100)
};
var htToBenefice = function(input, params) {
	return input * (100 - params.cotisationcoop) / 100
};
var htToSalaire = function(input, params) { 
	return brutToNet(beneficeToBrut(htToBenefice(input,params),params),params) 
};
var htToBrut = function(input,params) { 
	return beneficeToBrut(htToBenefice( input, params), params) 
};


var ttcToHt = function(input, params) { 
	return input * (100 / (100 + params.tva)) 
};
var beneficeToHt = function(input, params) { 
	return 10 * input / ((100-params.cotisationcoop)/10) 
};
var beneficeToBrut = function(input, params) { 
	return input / (1 + params.chargespat/100)
};

var ttcToSalaireAe = function(input, params) { 
	return input - input * (params.cotisationcoop/100)
};

var brutToNet = function(input, params){ 
	return input * ((100 - params.chargessal) / 100)
};
var netToBrut = function(input, params){ 
	return input / ((100 - params.chargessal) / 100)
};
var brutToBenefice = function(input, params){ 
	return input * (1 + params.chargespat/100)
}; 
var salaireToHt = function(input, params) { 
	return beneficeToHt(brutToBenefice(netToBrut(input,params),params),params) 
};

var salaireToTtcAe = function(input, params) { 
	return input / (1 - params.cotisationcoop/100)
};

var brutToHt = function(input, params) {
	return beneficeToHt(brutToBenefice(input, params), params)
};

// Salaire brut = (Salaire net x 100) / 78 (soit 100-charges salariales)
// Salaire net = Salaire brut * 0.78 (soit 100-charges salariales)
// Montant nécessaire = salaire brut + cotisations sociales patronales.
// = salaire brut X 1,42    = salaire brut X (1 + (1 + cotisations patronales ) 
//Soit 1500 + (1500 x 42 / 100) = 1500 + 630 = 2130 euros.

/*htToSal:(input * ((100-params.cotisationcoop)/100)) / 1.82*/