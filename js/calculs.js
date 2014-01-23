var fromht = function(val) {
  resultats.ht = val;
  resultats.ttc = resultats.ht * (1 + (params.tva / 100));
  resultats.tva = resultats.ttc - resultats.ht;
  resultats.valchargescoop = resultats.ht * (params.chargescoop/100);
  resultats.capital = resultats.ht - resultats.valchargescoop;
  resultats.charges =  (100 + parseInt(params.chargessal) + parseInt(params.chargespat)) / 100;
  resultats.salaire = resultats.capital / resultats.charges;
  resultats.chargessal = resultats.salaire * (params.chargessal / 100);
  resultats.chargespat = resultats.salaire * (params.chargespat / 100);
  resultats.heurestravail = resultats.salaire / params.tauxhoraire;
  
  
}


var fromttc = function(ttc) {
  resultats.ht = ttc * (100 / (100 + params.tva));
  return resultats.ht;
  }

var fromtva = function(tva) {
  resultats.ht = (tva / params.tva) * 100;
  return resultats.ht;
  }

var fromchargescoop = function(chargescoop) {
  resultats.ht = 10 * chargescoop;
  return resultats.ht;
  }

var fromcapital = function(capital) {
  resultats.ht = params.chargescoop * capital / 9;
  return resultats.ht;
  }

var fromchargessal = function(charge) {
  resultats.salaire = charge / (params.chargessal / 100);
  resultats.capital = resultats.charges * resultats.salaire;
  resultats.ht = params.chargescoop * resultats.capital / 9;
  return resultats.ht;
  }

var fromchargespat = function(charge) {
  resultats.salaire = charge / (params.chargespat / 100);
  resultats.capital = resultats.charges * resultats.salaire;
  resultats.ht = params.chargescoop * resultats.capital / 9;
  return resultats.ht;
  }

var fromsalaire = function(salaire) {
  resultats.capital = resultats.charges * (salaire * params.moispardefaut);
  resultats.ht = params.chargescoop * resultats.capital / 9;
  return resultats.ht;
  }