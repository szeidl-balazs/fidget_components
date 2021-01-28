import './Counter.css';

function counter() {

	let incr = 0;
  	function increaser() {    
  	incr += 1;    
  	calculator(incr, decr);
	}
	
	let decr = 0;
	function decreaser() {    
  	decr -= 1;      
  	calculator(incr, decr);
	}
    
	function calculator(incr, decr) {
  	const _display = document.querySelector('.score');
  	_display.innerHTML = incr + decr;
	}

	return (
			<div className="tile2">			  
			  <div>
					<button className="minus" onClick={decreaser}>-</button>
					<button className="plus" onClick={increaser}>+</button>
				</div>

				<div>
					<span className="scoreTitle">Score </span>
					<span className="score">0</span>
				</div>
			</div>
	);
}
export default counter;