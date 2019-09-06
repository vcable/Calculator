
A simple, functional calculator created using HTML, CSS, and Javascript.  Still a work in progress.  

CURRENT FEATURES: 

-Takes input and is able to do arithmetic, also accepts chaining operations 

-Accepts keyboard input for digits (operators are broken)

-Currently rounds numbers to two decimal places

-Has fully functional delete key (no keyboard input for this yet)

TO ADD:

-Two displays (top display shows operands and operator, bottom display shows result of operations)

-A scientific calculator mode (squaring, logarithms, etc)

-At some point in the likely distant future I would like to add a graphing calculator, similar to what Desmos offers

BUGS TO FIX:

-Keyboard input for operators (+, *, /, -, =), Del, and "." is broken

-For some reason it's impossible to start inputting through the keyboard before clicking at least one button with the mouse

-Cannot enter two numbers that are less than one (i.e .56 and .87) in a row.  Likely due to how the inputDecimal() function works
