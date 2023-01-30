var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines = parseInt(lines[0])

if(lines % 2 === 0) {
	for(let i = 0; i <= lines; i++) {
		if(i % 2 !== 0) {
			console.log(i)
		}
	}
} else {
	for(let i = 0; i <= lines; i++) {
		if(i % 2 !== 0) {
			console.log(i)
		}
	}
}
