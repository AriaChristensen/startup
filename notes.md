# Notes

## Using Github
I still need to log in on VSCode, but I feel pretty proficient at using hte command line now.
Don't forget to push after you commit, or it won't actually show up.

My key is stored in ~/.ssh, as well as a handy shortcut (ssh webprog) that can be used in ubuntu.

[Link to README](https://github.com/AriaChristensen/startup/blob/main/README.md)


## Managing Instance

Go to AWS console and make sure the instance is running, this allows entrance to the webpage. 
Don't terminate the instance or the webpage will not be accessible.


## HTML

Here is a link to my CodePen with some basic HTML commands: https://codepen.io/Aria-Christensen/pen/XWoEEwa.

HTML is used to provide structure and content. There is a <head></head> section that contains information about the site as a whole, and a <body></body> section that contains all the content for the page.

Here is a link to my CodePen with some syntax for using inputs: https://codepen.io/Aria-Christensen/pen/KKboGOY

Note that when you add things after an = sign, they need to be enclosed in "quotes".

Here is a link to my CodePen with syntax for media: https://codepen.io/Aria-Christensen/pen/KKbRgjy

## CSS
Here is a link to my CodePen with some basic CSS: https://codepen.io/AriaChristensen/pen/MWZMRxj.

CSS is used to style webpages and can do easy animations.

Here is a link to my CodePen with some basic CSS commands: https://codepen.io/Aria-Christensen/pen/abPPpbV

### Flex 
*
*
*


## Midterm Study Guide
In the following code, what does the link element do?

* Link defines relationships to other external sources like stylesheets.
* ```<link rel="stylesheet" href="styles.css">```

In the following code,  what does a div tag do?

* Div divides the html into sections for referencing in CSS and JavaScript files

In the following code, what is the difference between the #title and .grid selector?

* \# links to a part of a document.
* ```<a href="#" >Link name</a>```

In the following code, what is the difference between padding and margin?

* ![image](https://github.com/AriaChristensen/startup/assets/145092000/9a390df7-0169-45da-aa7f-3f2b76da7387)


Given this HTML and this CSS how will the images be displayed using flex?

* See above

What does the following padding CSS do?

* Padding will shift the object from the border.

What does the following code using arrow syntax function declaration do?

* ```
  hello = function() {
  return "Hello World!";
  }
  ```

    turns in to

* ```
  hello = () => {
  return "Hello World!";
  }
  ```

What does the following code using map with an array output?

* map with an array will do operations on every element of an array
* ```
  const numbers = [65, 44, 12, 4];
  const newArr = numbers.map(myFunction)

  function myFunction(num) {
    return num * 10;
  }
  ```
What does the following code output using getElementByID and addEventListener?

*

What does the following line of Javascript do using a # selector?

*

Which of the following are true? (mark all that are true about the DOM)

*

By default, the HTML span element has a default CSS display property value of: 

*

How would you use CSS to change all the div elements to have a background color of red?

*

How would you display an image with a hyperlink in HTML?

*

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

*

Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?

*

What will the following code output when executed using a for loop and console.log?

*

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

*

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

*

How do you declare the document type to be html?

*

What is valid javascript syntax for if, else, for, while, switch statements?

* ```
  if (condition) {
    //  block of code to be executed if the condition is true
  } else {
    //  block of code to be executed if the condition is false
  }
  ```
* ```
  for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
  ```
* ```
  while (condition) {
    // code block to be executed
  }
  ```
* ```
  switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
  ```

What is the correct syntax for creating a javascript object?

* ```
  var person = {
    name: "Alice",
    age: 25
  };
  ```

Is is possible to add new properties to javascript objects?

* Yes, there are two ways
* ```
  // Using dot notation
  person.gender = "male";
  
  // Using square bracket notation
  person["gender"] = "male";
  ```

If you want to include JavaScript on an HTML page, which tag do you use?

* `<script> </script>` is placed in the head, in the body, or after the body.

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

*
*
*

Which of the following correctly describes JSON?

* JSON stores and transfers objects as strings. It is used to go between http and other coding languages

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

* `chmod` controls file permissions
* `pwd` prints working directory
* `cd` moves current directory to following argument
* `ls` prints list of things in current directory
* `vim`, `nano` are text editors
* `mkdir` makes a directory
* `mv` moves a file
* `rm` removes a file
* `man` goes to the manual
* `ssh` lets you remote into another session on another machine
* `ps` lists processes
* `wget` retrieves and downloads files from the web
* `sudo` lets you run a command as a super user, it elevates your privileges
* `do` creates and runs shell scripts

Which of the following console command creates a remote shell session?

* `New-PSSession cmdlet` (for powershell)
* `ssh` for linux

Which of the following is true when the -la parameter is specified for the ls console command?

* `-l` = use long list
* `-a` = don't ignore .files
*  so `-la` = do both

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?

* Top level: `.click`
* subdomain: `banana.fruit`
* root domain: `bozo.click`

Is a web certificate is necessary to use HTTPS.

* HTTPS does require a certificate, but HTTP does not.

Can a DNS A record can point to an IP address or another A record.

* a DNS A record must point to another IP address, it cannot point to another A record.
An A record maps a domain name to an IPv4 address, it can't alias to another domain name.

Port 443, 80, 22 is reserved for which protocol?

* Port 80 is for HTTP traffic
* Port 22 is for SSH traffic
* Port 443 is for HTTPS traffic

What will the following code using Promises output when executed?

* ```
  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });

  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  ```
  * This code outputs OK if x is not changed. It outputs error if it is.

