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
* ![image](https://github.com/AriaChristensen/startup/assets/145092000/8571fa04-3310-4609-bc6f-449e60c7405f)

## JavaScript

Javascript manages the code of the website. It is what makes things do what they do.

### Promise Statements

Promise statements can be pending, fulfilled, or rejected.

Traditional promise:
  ```
  const coinToss = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('success');
      } else {
        reject('error');
      }
    }, 10000);
  });
  ```

Or you can use then, try, catch statements to make it run in the order you want.
  ```
  coinToss
    .then((result) => console.log(`Coin toss result: ${result}`))
    .catch((err) => console.log(`Error: ${err}`))
    .finally(() => console.log('Toss completed'));
  ```

Or you can use async/await:
  ```
  try {
    const result = await coinToss();
    console.log(`Toss result ${result}`);
  } catch (err) {
    console.error(`Error: ${err}`);
  } finally {
    console.log(`Toss completed`);
  }
  ```

Another example:
  ```
  const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
  const jsonResponse = await httpResponse.json();
  console.log(jsonResponse));
  console.log('done');

  ```


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
*
*

What does the following line of Javascript do using a # selector?

* It selects an element by ID, `.` selects by class.
  ```
  <li id="li-with-id">List item with an ID.</li>

  $("#li-with-id").replaceWith("<p>Socks</p>");
  ```
  This code replaces "List item with and ID" with "socks"

Which of the following are true? (mark all that are true about the DOM)

*
*
*

By default, the HTML span element has a default CSS display property value of: 

* `<span>` elements display inline

How would you use CSS to change all the div elements to have a background color of red?

* ```
  div {
    background-color: "red";
  }
  ```

How would you display an image with a hyperlink in HTML?

* `<a href="https://www.example.com"><img src="image.jpg" alt="Description of the image"></a>`

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

* See picture above. Margin -> Border -> Padding -> Content

Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?

*
*
*

What will the following code output when executed using a for loop and console.log?

*
*
*

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

* ```
  // Get the element by id
  var element = document.getElementById("byu");
  
  // Change the text color to red
  element.style.color = "green";
  ```

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

* paragraph: `<p>`
* ordered list: `<ol>`
* unordered list: `<ul>`
* second level heading: `<h2>`
* first level heading: `<h1>`
* third level heading: `<h3>`

How do you declare the document type to be html?

* `<!DOCTYPE html>`

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

 
## Final Study Guide
What ports are used for HTTP, HTTPS, SSH?
* HTTP uses port 80
* HTTPS uses port 443
* SSH uses port 22

What do HTTP status codes in the 300, 400, 500 range indicate?
* 100's - information responses
* 200's - successful responses
* 300's - redircetion messages
* 400's - client error responses
* 500's - server error respones

What does the HTTP header content-type allows you to do?
* indicates the original media type of the data or resource (plain test, json, etc)

What do the following attributes of a cookie do?
* Domain - specifies which server can recieve the cookies
* Path - specifies the URL path that the cookie is valid for (e.g. /blog and its subdomains /blog/home etc)
* SameSite - can help prevent cross site forgery attacks. **Strict** only allows cookie transfer within sites of the same name, **lax** will send your cookie in top-level navigation like clicking a link, **none** will allow the cookie to be sent with any navigation
* HTTPOnly - a flag that prevents the cookie from being stolen and used in client-side scripts
  
Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?
* |
* |
* |

Given the following Express service code: What does the following JavaScript fetch return?
* |
* |
* |

Given the following MongoDB query
`{ cost: { $gt: 10 }, name: /fran.*/}`
select all of the matching documents.
* name is Fran and cost is > 10

How should you store user passwords in a database?
* securely... you should hash them and probably salt them

Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?
* |
* |
* |

What is the WebSocket protocol used for?
* Communication between users on a website.

What is JSX and how are the curly braces rendered?
* JSX is a file that contains react code
* curly braces tell the parser that the information inside them is javascript instead of a string

Assuming a HTML document with a 
`<div id="root"></div>`
element, what content will the following React component generate?
     ```
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
      ```
* Hello, Sara
* Hello, Cahal
* Hello, Edite

Assuming a HTML document with a 
`<div id="root"></div>`
element, what content will the following React component generate?
    ```
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);
    ```
* 1
* 2
* 3
* 4
* 5
  
What does the following React component do?
```
function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
* increments count by one each time the button is clicked

What are React Hooks used for?
* React hooks allow you to use features like useState without writing a class component.

What is the useEffect hook used for?
* It allows you to represent lifecycle events like doing a certain effect every time the button is clicked

What does this code do?
```
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```
* Routes the user to different url paths and sets up the styling

What role does npm play in web development?
* npm is a package manager and software registry. It allows you to download software like react and manage dependencies

What does package.json do in a npm project?
* It is located in the root package and is a json file that contains project information like name, version, dependencies, etc. It can be used to run scripts, install and manage packages, etc.

What does the fetch function do?
* It goes through your API to access web endpoints. It lets you make HTTP requests from JavaScript

What does node.js do?
* It allows you to run javascript code outside of a browser

What does Vite do?
* It is a full web framework accesible from the command line. It is a fast way to scaffold and bundle projects and enables you to use react.
