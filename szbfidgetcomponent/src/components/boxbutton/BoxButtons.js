import './BoxButton.css';

	function boxButtons() {
		
		function colorChanger1() {
			let randomColor = Math.floor(Math.random()*16777215).toString(16);
			const _colorButton1 = document.querySelector('.colorButton1');
			_colorButton1.style.backgroundColor = '#' + randomColor;			
		}

		function colorChanger2() {
			let randomColor = Math.floor(Math.random()*16777215).toString(16);
			const _colorButton2 = document.querySelector('.colorButton2');
			_colorButton2.style.backgroundColor = '#' + randomColor;
		}

		function colorChanger3() {
			let randomColor = Math.floor(Math.random()*16777215).toString(16)
			const _colorButton3 = document.querySelector('.colorButton3');
			_colorButton3.style.backgroundColor = '#' + randomColor;			
		}

		function colorChanger4() {
			let randomColor = Math.floor(Math.random()*16777215).toString(16)
			const _colorButton4 = document.querySelector('.colorButton4');
			_colorButton4.style.backgroundColor = '#' + randomColor;			
		}

		function colorChanger5() {
			let randomColor = Math.floor(Math.random()*16777215).toString(16)
			const _colorButton5 = document.querySelector('.colorButton5');
			_colorButton5.style.backgroundColor = '#' + randomColor;			
		}


	return (
		<div className="tile1">
			<button className='colorButton1' onClick={colorChanger1}></button>
			<button className='colorButton2' onClick={colorChanger2}></button>
			<button className='colorButton3' onClick={colorChanger3}></button>
			<button className='colorButton4' onClick={colorChanger4}></button>
			<button className='colorButton5' onClick={colorChanger5}></button>
		</div>
	);
	
}
export default boxButtons;
	