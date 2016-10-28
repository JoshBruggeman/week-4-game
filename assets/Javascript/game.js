var jewelGenerator= function(min,max) {
	return Math.floor(Math.random()*(max-min+1)+min);
};

$('#blue').on('click',jewelGenerator(1-12));
 console.log(jewelGenerator());

$('#red').on('click',jewelGenerator(1-12));

$('#green').on('click',jewelGenerator(1-12));

$('#yellow').on('click,'jewelGenerator(1-12));

var numTotal= jewelGenerator(19-120);
$('#total').html(total);

var scoreKeeper= function() {
	if ('#total'=numTotal) {
		alert("You win");
		Wins++;
	}else{ ('#total' >numtotal);
	alert("You lose");
	Losses++
}