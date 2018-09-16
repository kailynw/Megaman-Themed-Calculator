

		function buttonDisplay(number){
			if(startsWithOperator()){
				
				console.log("Cant start evaluation with an operator")
				return alert("Cant start evaluation with an operator(+,/,*). Please clear input")
				
			}
			return calculator.displayBox.value=calculator.displayBox.value+ number
		}

		function startsWithOperator(){
			if(calculator.displayBox.value=="*" || calculator.displayBox.value=="+"||calculator.displayBox.value=="/" )
				return true;
			else
				return false;
		}

		function clearDisplay(){
			calculator.displayBox.value= " ";
		}