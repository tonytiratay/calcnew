

	function Param(title, value, visibility, mandatory){
	this.title = title;
	this.value = value;
	this.visibility = visibility;
	this.mandatory = mandatory;
	}


	function Profile(name, params, results){
		this.name = name;
		this.params = params;
		this.results = results;
		
	}

	function Result(title, value, visibility, mandatory){
	this.title = title;
	this.value = value;
	this.visible = visibility;
	this.mandatory = mandatory;
	}

// Déclaration des paramètres

	var tva = new Param("TVA", 20, true, false);
	var tauxhoraire = new Param ("Taux horaire", 25, true, false);
	var chargesdiverses = new Param ("Charges diverses", 10, true, false);
	var chargescoop = new Param ("Charges coopératives", 10, true, false);
	var chargespat = new Param ("Charges patronnales", 54, true, false);
	var chargessal = new Param ("Charges salariales", 28, true, false);

// Déclaration des résultats

	var ht = new Result("ht", 1000, true, false);
	var ttc = new Result("ttc", 1000, true, false);
	var capital = new Result("capital", 1000, true, false);
	var salaire = new Result("salaire", 1000, true, false);

// Array des paramètres et résultats à insuffler à un profil

	var parametres = [tva, tauxhoraire, chargescoop, chargespat, chargessal];
	var resultats = [ht, ttc, capital, salaire];

// Déclaration des profils

	var cooperative = new Profile("Cooperative", parametres, resultats);

// Lister les paramètres

	var listerparametres = function(obj){
			obj.params.forEach(function(obj){
				console.log(obj.title + ': ' + obj.value);
			});
		};