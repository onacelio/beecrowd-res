var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines = parseInt(lines[0])

if(lines % 2 === 0) {
	lines+=1
	console.log(lines)
	for(let i = 0; i <= 4; i++) {
		console.log(lines+=2)
	}
} else {
	for(let i = 0; i <= 5; i++) {
		console.log(lines)
		lines+=2
	}
}
