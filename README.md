## Calculator

Fourth project from The Odin Project Foundations course. A browser-based interactive calculator that performs basic arithmetic operations and supports both mouse and keyboard input.

## What I Learned

This project strengthened my understanding of DOM manipulation, state handling, and event-driven logic in JavaScript:

# State Management:
Handled calculator state using variables (num1, operator, num2, justCalculated) to control input flow and operation sequencing.

# Core Arithmetic Logic:
Implemented basic math functions (add, subtract, multiply, divide) and used a central operate() function to dispatch operations dynamically.

# Sequential Calculations:
Enabled continuous calculations by storing intermediate results in num1 and chaining operations without resetting after each result.

# Event Handling:

Click events for number, operator, equals, clear, and backspace buttons
Keyboard support via keydown mapping
Separation of digit, operator, and control inputs

# Error Handling:

Division by zero detection
Error state display management
Safe handling of invalid operator states

# Display Logic:

Prevented multiple decimal points
Controlled overwrite vs append behavior
Formatted floating-point results (toFixed(4)) when needed
Handled integer vs decimal output cleanly

## How to Use

Click number buttons to input values
Select an operator (+, −, ×, ÷)
Press = to get the result
Use C to reset the calculator
Use ⌫ to delete the last digit
Keyboard input is fully supported

# Keyboard shortcuts:

0–9 → numbers
+ - * / → operators
Enter or = → calculate result
Backspace → delete last character
C → clear
. → decimal point

## Pseudocode

START calculator
Initialize state: num1 = 0, operator = '', justCalculated = false

ON digit input:

If display is "0" OR justCalculated OR error:
→ replace display with input
Else:
→ append input to display

ON operator input:

If operator already exists and not justCalculated:
→ compute previous operation
→ store result in num1
Else:
→ set num1 from display
Store new operator
Set justCalculated = true

ON equals:

If operator is empty or error state:
→ do nothing
Else:
→ compute result
→ format output (integer or 4 decimals)
→ update display
→ set justCalculated = true

ON clear:

Reset all variables
Set display to 0

ON backspace:

Remove last character
If empty → set to 0

## Technologies Used

HTML5 (semantic structure)
CSS3 (Flexbox layout, responsive UI, button states)
JavaScript (ES6+)
DOM manipulation
Event handling
State-based logic
Arithmetic operations
Git / GitHub (version control)

## Live Preview

https://tarlan129.github.io/Calculator/