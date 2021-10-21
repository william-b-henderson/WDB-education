let x = 5;
let y = 4;

function a_plus_abs_b(a,b) {
	/*
    Return a+abs(b), but without calling abs.

    >>> a_plus_abs_b(2, 3)
    5
    >>> a_plus_abs_b(2, -3)
    
  */
	let f = (a,b) => a + b;
	if (b < 0) {
		return f(a, -b);
	}
	return f(a, b);
}
let z = a_plus_abs_b(x,y);


function two_of_three(x, y, z){
    /*Return a*a + b*b, where a and b are the two smallest members of the
    positive numbers x, y, and z. 

    >>> two_of_three(1, 2, 3)
    5
    >>> two_of_three(5, 3, 1)
    10
    >>> two_of_three(10, 2, 8)
    68
    >>> two_of_three(5, 5, 5)
    50
    */
    let x = x * x;
    let y = y * y;
    let z = z * z;
    return x + y - Math.max(x,y,z);
}


function largest_factor(n){
    /*Return the largest factor of n that is smaller than n.

    >>> console.log(largest_factor(15)); # factors are 1, 3, 5
    5
    >>> console.log(largest_factor(80)); # factors are 1, 2, 4, 5, 8, 10, 16, 20, 40
    40
    >>> console.log(largest_factor(13)); # factor is 1 since 13 is prime
    1
    */
    // *** YOUR CODE HERE ***
    let factor = n - 1;
    while (factor > 1) {
        if (n / factor === floor(n / factor)) {
            return factor
        }
        factor--;
    }
    return factor;
}


function hailstone(n){
	/* Print the hailstone sequence starting at n and return its
		    length.
		>>> let a = hailstone(10)
		10
		5
		16
		8
		4
		2
		1
		>>> console.log(a);
		7
	*/
	// *** YOUR CODE HERE ***
    console.log(n)
	if (n == 1) {
        return
    }
    else {
        n % 2 ? hailstone(n * 3 + 1) : hailstone(n / 2);
    }
}