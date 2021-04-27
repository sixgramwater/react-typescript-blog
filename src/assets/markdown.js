export const markdown = `
## Hello, markdown
But first, what is the event loop and why should you care?

**feel free to use it!** JavaScript is single-threaded: only one task can run at a time. Usually that’s no big deal, but now imagine you’re running a task which takes 30 seconds.. Ya.. During that task we’re waiting for 30 seconds before anything else can happen (JavaScript runs on the browser’s main thread by default, so the entire UI is stuck) 😬 It’s 2019, no one wants a slow, unresponsive website.

Luckily, the browser gives us some features that the JavaScript engine itself doesn’t provide: a Web API. This includes the DOM API, setTimeout, HTTP requests, and so on. This can help us create some async, non-blocking behavior 🚀
## Make sure everything is OK
When we invoke a function, it gets added to something called the call stack. The call stack is part of the JS engine, this isn’t browser specific. It’s a stack, meaning that it’s first in, last out (think of a pile of pancakes). When a function returns a value, it gets popped off the stack 👋

\`\`\` javascript
const timer = () => {
  console.log('OK')
}
\`\`\`
The respond function returns a setTimeout function. The setTimeout is provided to us by the Web API: it lets us delay tasks without blocking the main thread. The callback function that we passed to the setTimeout function, the arrow function () => { return 'Hey' } gets added to the Web API. In the meantime, the setTimeout function and the respond function get popped off the stack, they both returned their values!

## Setup for this tutorial
There are two ways to complete this tutorial: you can either write the code in your browser, or you can set up a local development environment on your computer.
First, open this Starter Code in a new tab. The new tab should display an empty tic-tac-toe game board and React code. We will be editing the React code in this tutorial.
You can now skip the second setup option, and go to the Overview section to get an overview of React.

## Overview
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
Hope that this makes you feel a bit more comfortable with the event loop! Don't worry if it still seems confusing, the most important thing is to understand where certain errors/behavior can come from in order to Google the right terms efficiently and end up on the correct Stack Overflow page 💪🏼 Feel free to reach out to me if you have any questions!

## Test your skill
Now this is the part we’ve all been waiting for… Time for the event loop to do its only task: connecting the queue with the call stack! If the call stack is empty, so if all previously invoked functions have returned their values and have been popped off the stack, the first item in the queue gets added to the call stack. In this case, no other functions were invoked, meaning that the call stack was empty by the time the callback function was the first item in the queue.



`