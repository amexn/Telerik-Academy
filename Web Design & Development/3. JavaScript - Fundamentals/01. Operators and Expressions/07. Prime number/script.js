/*
	7. Write an expression that checks if given positive
	integer number n (n ≤ 100) is prime. E.g. 37 is prime.
*/

taskName = "7. Prime number";

function Main(bufferElement) {

	var integer = ReadLine("Enter a integer: ", GetRandomInt(1, 100));

    SetSolveButton(function () {
    	ConsoleClear();
    	IsPrime(integer.value);
    });
}

function IsPrime(number) {
	var number = parseInt(number);

    if (Number.isNaN(number)) {
        WriteLine("Error! Incorrect input value!");
        return;
    }

	if (!number || number < 0 || number > 100) {
		WriteLine("Number must be positive and less than 100!");
		return;
	}

	for (var i = 2; i <= Math.sqrt(number); i++) {
		if ((number % i) == 0) {
			WriteLine(Format("Number {0} is NOT prime!", number));
			return;
		}
	}

	WriteLine(Format("Number {0} is prime!", number));
}