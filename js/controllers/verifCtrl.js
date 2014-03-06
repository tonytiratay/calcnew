

var verif = function(input,parametres,frais,profile){
if (profile != 'auto-entrepreneur'){
	if (input.type=='ht'){
		var profil = profile;
		ht = input.value;	
		var params = parametres;
		var today = new Date();
		var cout = input.cout;
		var resultat = { 
			ht: ht,
			ttc: htToTtc(ht, params),
			benefice: htToBenefice(ht, params),
			brut: htToBrut(ht, params),
			salaire: htToSalaire(ht, params),
			date: today,
			type: "Un HT de " + ht + ' €',
			params: {
				tva: params.tva,
				tauxhoraire: params.tauxhoraire,
				cotisationcoop: params.cotisationcoop,
				chargespat: params.chargespat,
				chargessal: params.chargessal
				},
			profil: profil,
			cout: cout
			};
			return resultat;
		}

	else if(input.type=='ttc'){
		var profil = profile;
			var params = parametres;
			ttc = input.value;
			ht = ttcToHt(ttc, params);
			var today = new Date();	
			var cout = input.cout;
			var resultat = { 
			ht: ht,
			ttc: htToTtc(ht, params),
			benefice: htToBenefice(ht, params),
			brut: htToBrut(ht, params),
			salaire: htToSalaire(ht, params),
			date: today,
			type: "Un TTC de " + ttc + ' €',
			params: {
				tva: params.tva,
				tauxhoraire: params.tauxhoraire,
				cotisationcoop: params.cotisationcoop,
				chargespat: params.chargespat,
				chargessal: params.chargessal
				},
			profil: profil,
			cout: cout
			};
			return resultat;
	}

	else if(input.type=='heures'){
		var profil = profile;
			var params = parametres;
			var heures = input.value;
			salaire = params.tauxhoraire * heures;
			ht = salaireToHt(salaire, params);
			var today = new Date();
			var cout = input.cout;
			var resultat = { 
			ht: ht,
			ttc: htToTtc(ht, params),
			benefice: htToBenefice(ht, params),
			brut: htToBrut(ht, params),
			salaire: htToSalaire(ht, params),
			date: today,
			type: "Un temps de travail de " + heures + ' heures',
			params: {
				tva: params.tva,
				tauxhoraire: params.tauxhoraire,
				cotisationcoop: params.cotisationcoop,
				chargespat: params.chargespat,
				chargessal: params.chargessal
				},
			profil: profil,
			cout: cout
			};
			return resultat;
	}

	else if(input.type=='salaire'){
		var profil = profile;
			var params = parametres;
			salaire = input.value;
			ht = salaireToHt(salaire, params);
			var today = new Date();	
			var cout = input.cout;
			var resultat = { 
			ht: ht,
			ttc: htToTtc(ht, params),
			benefice: htToBenefice(ht, params),
			brut: htToBrut(ht, params),
			salaire: htToSalaire(ht, params),
			date: today,
			type: "Un salaire net de " + salaire + ' €',
			params: {
				tva: params.tva,
				tauxhoraire: params.tauxhoraire,
				cotisationcoop: params.cotisationcoop,
				chargespat: params.chargespat,
				chargessal: params.chargessal
				},
			profil: profil,
			cout: cout

			};
			return resultat;
	}

	else if(input.type=='brut'){
		var profil = profile;
			var params = parametres;
			brut = input.value;
			ht = brutToHt(brut, params);
			var today = new Date();	
			var cout = input.cout;
			var resultat = { 
			ht: ht,
			ttc: htToTtc(ht, params),
			benefice: htToBenefice(ht, params),
			brut: htToBrut(ht, params),
			salaire: htToSalaire(ht, params),
			date: today,
			type: "Un salaire brut de " + brut + ' €',
			params: {
				tva: params.tva,
				tauxhoraire: params.tauxhoraire,
				cotisationcoop: params.cotisationcoop,
				chargespat: params.chargespat,
				chargessal: params.chargessal
				},
			profil: profil,
			cout: cout

			};
			return resultat;
	}
}

else {
	if(input.type=='ttc'){
		var profil = profile;
			var params = parametres;
			ttc = input.value;
			var today = new Date();	
			var cout = input.cout;
			var resultat = { 
			ttc: ttc,
			ht: ttcToHt(ttc, params),
			salaire: ttcToSalaireAe(ttc, params),
			date: today,
			type: "Un TTC de " + ttc + ' €',
			params: {
				tva: params.tva,
				tauxhoraire: params.tauxhoraire,
				cotisationcoop: params.cotisationcoop,
				chargespat: params.chargespat,
				chargessal: params.chargessal
				},
			profil: profil,
			cout: cout
			};
			return resultat;
	}
	else if(input.type=='heures'){
		var profil = profile;
			var params = parametres;
			var heures = input.value;
			var salaire = params.tauxhoraire * heures;
			var ttc= salaireToTtcAe(salaire,params);
			var ht= ttcToHt(ttc,params);
			var today = new Date();
			var cout = input.cout;
			var resultat = { 
			salaire : salaire,
			ttc: ttc,
			ht: ht,
			date: today,
			type: "Un temps de travail de " + heures + ' heures',
			params: {
				tva: params.tva,
				tauxhoraire: params.tauxhoraire,
				cotisationcoop: params.cotisationcoop,
				chargespat: params.chargespat,
				chargessal: params.chargessal
				},
			profil: profil,
			cout: cout
			};
			return resultat;
	}
	else if(input.type=='salaire'){
		var profil = profile;
			var params = parametres;
			var salaire = input.value;
			var ttc = salaireToTtcAe(salaire, params);
			var ht = ttcToHt(ttc, params);
			var today = new Date();	
			var cout = input.cout;
			var resultat = { 
			ht: ht,
			ttc: ttc,
			salaire: salaire,
			date: today,
			type: "Un salaire net de " + salaire + ' €',
			params: {
				tva: params.tva,
				tauxhoraire: params.tauxhoraire,
				cotisationcoop: params.cotisationcoop,
				chargespat: params.chargespat,
				chargessal: params.chargessal
				},
			profil: profil,
			cout: cout

			};
			return resultat;
	}


}

};
