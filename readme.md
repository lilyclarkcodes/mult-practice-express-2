# Roll the Dice for Multiplication Practice (Express)
Roll two 12-sided dice to generate two random whole numbers between 1-12 and display the product.

INCOMPLETE

**Link to project:** 

## How It's Made:
**Tech used:** HTML, CSS, JavaScript, Node.js, express

## Lessons Learned:
I wanted the app to provide the product of the two numbers rolled, but not until the user clicked a second button. I struggled to create a second server response for a second button to be clicked after the first button, but including the results of the first response. This ended up being a difficulty in the design of the app, and made me consider remaking the app using client-side JavaScript. I started rethinking my goal - I wondered if it was necessary for this to be a backend app. I wanted to better understand the benefit of each, and when it makes the most sense to use either one. Do I want my server to handle the requests and calculations, or the browser? Do I require a database to store data? Can I create this as a client-side app using local storage to save data between button clicks?

I decided to leave the product as displaying immediately, and remake the app with client-side JavaScript to see if I could more easily add a second button that displayed the product after clicking. 