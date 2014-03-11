

var verif = function(input,parametres,frais,profile){
if (profile != 'auto-entrepreneur'){
	if (input.type=='ht'){
		var profil = profile;
		ht = input.value * input.quantity;	
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
			type: input.quantity + " facture(s) HT de " + input.value + ' €',
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
			ttc = input.value * input.quantity;
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
			type: input.quantity + " facture(s) TTC de " + input.value + ' €',
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
			var heures = input.value * input.quantity;
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
			type: input.quantity + " fois un temps de travail de " + input.value + ' heures',
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
			salaire = input.value * input.quantity;
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
			type: input.quantity + " salaire(s) net de " + input.value + ' €',
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
			brut = input.value * input.quantity;
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
			type: input.quantity + " salaire(s) brut de " + input.value + ' €',
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
			ttc = input.value * input.quantity;
			var today = new Date();	
			var cout = input.cout;
			var resultat = { 
			ttc: ttc,
			ht: ttcToHt(ttc, params),
			salaire: ttcToSalaireAe(ttc, params),
			date: today,
			type: input.quantity + " factures TTC de " + input.value + ' €',
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
			var heures = input.value * input.quantity;
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
			type: input.quantity + " fois un temps de travail de " + input.value + ' heures',
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
			var salaire = input.value * input.quantity;
			var ttc = salaireToTtcAe(salaire, params);
			var ht = ttcToHt(ttc, params);
			var today = new Date();	
			var cout = input.cout;
			var resultat = { 
			ht: ht,
			ttc: ttc,
			salaire: salaire,
			date: today,
			type: input.quantity + " salaire(s) net de " + input.value + ' €',
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
