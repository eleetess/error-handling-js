function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    const result = a / b;
    console.log("Result:", result);
    return result;
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log("Execution complete.");
  }
}
// notes:
divideNumbers(10, 2);  // logs "Result: 5" then "Execution complete."
divideNumbers(10, 0);  // logs "Division by zero is not allowed." then "Execution complete."
//How it works:
//try: Attempts to perform the division. If b === 0, it throws an error.
//catch: Handles any error thrown in the try block and logs its message.
//finally: Runs regardless of whether an error occurred — logs "Execution complete."
// Test 1: valid inputs
//console.log("== Test 1: divideNumbers(10, 2) ==");
//divideNumbers(10, 2);
// Expected console output:
// Result: 5
// Execution complete.

// Test 2: division by zero
//console.log("== Test 2: divideNumbers(10, 0) ==");
//divideNumbers(10, 0);
// Expected console output:
// Division by zero is not allowed.
// Execution complete.
async function fetchData() {
  try {
    const response = await fetch('https://httpstat.us/500');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text(); // or .json(), depending on the response format
    console.log('Data:', data);
  } catch (error) {
    console.error('Fetch failed:', error);
  } finally {
    console.log('Fetch attempt finished.');
  }
}
//notes
// Test the function
fetchData();
//try block: runs the fetch to https://httpstat.us/500.

//Checks response.ok: since the URL returns a 500 error, we manually throw an error.

//catch block: logs the caught error with a custom message.

//finally block: runs regardless of success or failure, logging "Fetch attempt finished."

//Test: calling fetchData() runs through the sequence and logs the intended messages.

function greet(name) {
  if (name === undefined) {
    console.log("Hello, Guest!");
  } else {
    console.log("Hello, " + name);
  }
}

greet();         // Output: Hello, Guest!
greet("Erica");  // Output: Hello, Erica
