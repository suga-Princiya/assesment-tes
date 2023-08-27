//1. Am I Perfect?
function findFactors(num) {
    const factors = [];
    
    for (let i = 1; i <= Math.floor(num / 2); i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    
    return factors;
  }
  
  function classifyNumber(num) {
    const factors = findFactors(num);
    const sumOfFactors = factors.reduce((sum, factor) => sum + factor, 0);
    
    if (sumOfFactors === num) {
      return 'Perfect';
    } else if (sumOfFactors > num) {
      return 'Abundant';
    } else {
      return 'Deficient';
    }
  }
  
  // Test cases
  console.log(classifyNumber(6));   
  console.log(classifyNumber(12));  
  console.log(classifyNumber(8)); 
  
  //2. How many trails to 1?

  function numberOfStepsToReachOne(x) {
    let steps = 0;
  
    while (x !== 1) {
      if (x % 2 === 0) {
        x = x / 2;
      } else {
        x = 3 * x + 1;
      }
      steps++;
    }
  
    return steps;
  }
  
  // Test case
  console.log(numberOfStepsToReachOne(12));  

  //3.Hide that PIN!

  function hidePin(pin) {
    const binaryString = pin.toString(2);
    const binaryArray = binaryString.split('').reverse();
    const output = [];
    let reverseOrder = false;
  
    for (let i = 0; i < binaryArray.length; i++) {
      if (binaryArray[i] === '1') {
        const powerOfTen = Math.pow(10, i);
        if (powerOfTen === 10000) {
          reverseOrder = true;
        } else {
          const phrases = {
            1: 'pop',
            10: 'double rip',
            100: 'hide your mints',
            1000: 'fall'
          };
          output.push(phrases[powerOfTen]);
        }
      }
    }
  
    if (reverseOrder) {
      output.reverse();
    }
  
    return output;
  }
  
  // Test cases
  console.log(hidePin(3));   
  console.log(hidePin(19));  

  //4.n-Chai
 
  function nChai(n, k, g, b) {
    const result = [];
    let consecutive = 0;
  
    while (n > 0) {
      if ((g > b || consecutive === k) && g > 0) {
        result.push("Green");
        g--;
        consecutive = 0;
      } else if (b > 0) {
        result.push("Black");
        b--;
        consecutive++;
      } else {
        return [];
      }
  
      n--;
    }
  
    return result;
  }
  
  // Test cases
  console.log(nChai(5, 1, 3, 2));  
  console.log(nChai(4, 3, 4, 0));  
  
  
  