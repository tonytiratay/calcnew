
 
// Calculs à partir du HT

htToTtc = function(value) {return value * (1 + params.tva / 100)};
htToCapital = function(value) {return value * (100 - params.cotisationcoop) / 100};
htToSalaire = function(value) { return (value * 0.9) / 1.82 }