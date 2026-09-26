// Course Content Data
const courseContent = {
  'html-css': {
    title: 'HTML & CSS Fundamentals',
    content: `
      <h2>HTML & CSS Fundamentals</h2>
      <p>Learn the building blocks of the web. Master HTML tags, CSS styling, and create your first static website.</p>

      <div class="lesson">
        <h3>Module 1: HTML Basics</h3>
        <p>HTML (HyperText Markup Language) is the foundation of every website. It provides the structure and content.</p>
        <p><strong>Key concepts:</strong></p>
        <ul>
          <li>HTML5 semantic tags (header, nav, section, footer)</li>
          <li>Creating forms and inputs</li>
          <li>Links and navigation</li>
          <li>Images and media</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Welcome!&lt;/h1&gt;
    &lt;p&gt;This is my first website.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>

      <div class="lesson">
        <h3>Module 2: CSS Styling</h3>
        <p>CSS (Cascading Style Sheets) makes your HTML look beautiful. Control colors, layouts, and responsive design.</p>
        <p><strong>Key concepts:</strong></p>
        <ul>
          <li>Selectors (class, ID, element)</li>
          <li>Box model (margin, padding, border)</li>
          <li>Flexbox and Grid layouts</li>
          <li>Media queries for responsive design</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>/* Style a button */
.button {
  background-color: #62d6ff;
  color: #06101d;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.button:hover {
  background-color: #9be7ff;
}</code></pre>
      </div>

      <div class="lesson">
        <h3>Module 3: Responsive Design</h3>
        <p>Make your websites work on all devices - phones, tablets, and desktops.</p>
        <ul>
          <li>Mobile-first design approach</li>
          <li>CSS media queries</li>
          <li>Flexible layouts with Flexbox</li>
          <li>Testing on different devices</li>
        </ul>
      </div>

      <p><strong>Project:</strong> Build a personal portfolio website with HTML and CSS.</p>
    `
  },

  'javascript': {
    title: 'JavaScript Essentials',
    content: `
      <h2>JavaScript Essentials</h2>
      <p>Make your websites interactive and dynamic. JavaScript is the programming language of the web.</p>

      <div class="lesson">
        <h3>Module 1: JavaScript Basics</h3>
        <p>Learn the fundamentals of programming with JavaScript.</p>
        <p><strong>Topics:</strong></p>
        <ul>
          <li>Variables (var, let, const)</li>
          <li>Data types (strings, numbers, booleans)</li>
          <li>Operators (arithmetic, comparison, logical)</li>
          <li>Conditional statements (if/else)</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>// Variables and data types
const name = 'John';
let age = 25;
var isStudent = true;

// Conditional logic
if (age >= 18) {
  console.log(name + ' is an adult');
} else {
  console.log(name + ' is a minor');
}</code></pre>
      </div>

      <div class="lesson">
        <h3>Module 2: Functions and Scope</h3>
        <p>Functions let you write reusable code. Scope determines where variables are accessible.</p>
        <ul>
          <li>Function declarations and expressions</li>
          <li>Arrow functions (=&gt;)</li>
          <li>Parameters and return values</li>
          <li>Scope and closures</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>// Function declaration
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Arrow function
const add = (a, b) => a + b;

console.log(greet('Alice')); // Hello, Alice!
console.log(add(5, 3));      // 8</code></pre>
      </div>

      <div class="lesson">
        <h3>Module 3: DOM Manipulation</h3>
        <p>Interact with HTML elements using JavaScript. This makes your pages dynamic.</p>
        <ul>
          <li>Selecting elements (getElementById, querySelector)</li>
          <li>Changing content and styles</li>
          <li>Event listeners (click, hover, submit)</li>
          <li>Creating and removing elements</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>// Select an element
const button = document.querySelector('.button');

// Add a click event
button.addEventListener('click', function() {
  alert('Button clicked!');
  button.style.backgroundColor = '#62d6ff';
});</code></pre>
      </div>

      <p><strong>Project:</strong> Build an interactive to-do list app with add, delete, and mark complete features.</p>
    `
  },

  'websites': {
    title: 'Build Complete Websites',
    content: `
      <h2>Build Complete Websites</h2>
      <p>Combine HTML, CSS, and JavaScript to build real, professional websites. Learn project planning and deployment.</p>

      <div class="lesson">
        <h3>Module 1: Project Planning & Structure</h3>
        <p>Before coding, plan your website structure.</p>
        <ul>
          <li>Defining project goals and features</li>
          <li>Creating wireframes and mockups</li>
          <li>Organizing files and folders</li>
          <li>Version control with Git</li>
        </ul>
      </div>

      <div class="lesson">
        <h3>Module 2: Building Responsive Layouts</h3>
        <p>Create layouts that work on all screen sizes using modern CSS techniques.</p>
        <ul>
          <li>CSS Grid for complex layouts</li>
          <li>Flexbox for flexible components</li>
          <li>Navigation menus and headers</li>
          <li>Footer sections and layouts</li>
        </ul>
        <p><strong>Example: Responsive Navigation</strong></p>
        <pre><code>/* Mobile-first approach */
.nav-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Desktop layout */
@media (min-width: 768px) {
  .nav-links {
    flex-direction: row;
    gap: 20px;
  }
}</code></pre>
      </div>

      <div class="lesson">
        <h3>Module 3: Interactive Features</h3>
        <p>Add interactivity with forms, buttons, and user interactions.</p>
        <ul>
          <li>Form validation with JavaScript</li>
          <li>Modal windows and popups</li>
          <li>Image galleries and sliders</li>
          <li>Smooth scrolling and animations</li>
        </ul>
      </div>

      <div class="lesson">
        <h3>Module 4: Deploying Your Website</h3>
        <p>Launch your website on the internet for everyone to see.</p>
        <ul>
          <li>Hosting options (Netlify, GitHub Pages, Vercel)</li>
          <li>Domain names</li>
          <li>SSL certificates (HTTPS)</li>
          <li>Performance optimization</li>
        </ul>
      </div>

      <p><strong>Capstone Project:</strong> Build a complete business website with multiple pages, contact forms, and interactive elements. Deploy it live!</p>
    `
  },

  'advanced-js': {
    title: 'Advanced JavaScript',
    content: `
      <h2>Advanced JavaScript</h2>
      <p>Master modern JavaScript and advanced programming concepts used by professional developers.</p>

      <div class="lesson">
        <h3>Module 1: ES6+ Features</h3>
        <p>Modern JavaScript features that make code cleaner and more powerful.</p>
        <ul>
          <li>Arrow functions</li>
          <li>Destructuring (objects and arrays)</li>
          <li>Template literals</li>
          <li>Classes and inheritance</li>
          <li>Spread operator</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>// Destructuring
const user = { name: 'Alice', age: 25, city: 'NYC' };
const { name, age } = user;

// Template literals
console.log(\`\${name} is \${age} years old\`);

// Arrow functions
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);</code></pre>
      </div>

      <div class="lesson">
        <h3>Module 2: Async Programming</h3>
        <p>Handle operations that take time (API calls, file operations) with Promises and async/await.</p>
        <ul>
          <li>Callbacks and their limitations</li>
          <li>Promises (resolve, reject)</li>
          <li>Async/await syntax</li>
          <li>Error handling with try/catch</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>// Async/await
async function fetchUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error:', error);
  }
}</code></pre>
      </div>

      <div class="lesson">
        <h3>Module 3: Advanced Patterns</h3>
        <ul>
          <li>Design patterns (Singleton, Factory, Observer)</li>
          <li>Functional programming concepts</li>
          <li>Higher-order functions</li>
          <li>Memoization and performance optimization</li>
        </ul>
      </div>

      <p><strong>Project:</strong> Build a weather app that fetches real-time data from an API and displays it dynamically.</p>
    `
  },

  'react': {
    title: 'React Fundamentals',
    content: `
      <h2>React Fundamentals</h2>
      <p>Build fast, interactive user interfaces with React. Learn components, hooks, and state management.</p>

      <div class="lesson">
        <h3>Module 1: React Basics & Components</h3>
        <p>React is a JavaScript library for building UIs with reusable components.</p>
        <ul>
          <li>What is React and JSX</li>
          <li>Functional components</li>
          <li>Props (passing data)</li>
          <li>Component composition</li>
        </ul>
        <p><strong>Example Component:</strong></p>
        <pre><code>// Functional component
function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

// Using the component
&lt;Welcome name="Alice" /&gt;</code></pre>
      </div>

      <div class="lesson">
        <h3>Module 2: React Hooks</h3>
        <p>Hooks let you use state and other features in functional components.</p>
        <ul>
          <li>useState: Managing component state</li>
          <li>useEffect: Side effects and lifecycle</li>
          <li>useContext: Sharing data between components</li>
          <li>Custom hooks</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Increment
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      </div>

      <div class="lesson">
        <h3>Module 3: Building Complete Apps</h3>
        <ul>
          <li>Routing with React Router</li>
          <li>State management (Context API)</li>
          <li>Fetching data from APIs</li>
          <li>Form handling and validation</li>
        </ul>
      </div>

      <p><strong>Project:</strong> Build a movie search app with React that fetches data from an API and displays results dynamically.</p>
    `
  },

  'python': {
    title: 'Python Programming',
    content: `
      <h2>Python Programming</h2>
      <p>Learn Python, one of the most popular programming languages. Perfect for beginners and for building powerful applications.</p>

      <div class="lesson">
        <h3>Module 1: Python Basics</h3>
        <p>Start with Python fundamentals.</p>
        <ul>
          <li>Variables and data types</li>
          <li>Strings, numbers, and booleans</li>
          <li>Operators</li>
          <li>Input and output</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code># Variables
name = "John"
age = 25
gpa = 3.8

# Printing
print(f"{name} is {age} years old")
print(f"GPA: {gpa}")</code></pre>
      </div>

      <div class="lesson">
        <h3>Module 2: Control Flow</h3>
        <p>Control how your program runs with conditions and loops.</p>
        <ul>
          <li>If/elif/else statements</li>
          <li>For loops</li>
          <li>While loops</li>
          <li>Break and continue</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code># For loop
for i in range(1, 6):
    print(f"Number: {i}")

# While loop
count = 0
while count < 5:
    print(count)
    count += 1</code></pre>
      </div>

      <div class="lesson">
        <h3>Module 3: Functions and Data Structures</h3>
        <ul>
          <li>Defining functions</li>
          <li>Lists, tuples, and dictionaries</li>
          <li>List comprehensions</li>
          <li>Working with files</li>
        </ul>
      </div>

      <p><strong>Project:</strong> Build a simple calculator or weather data processor using Python.</p>
    `
  }
};

// Open course modal
function openCourse(courseId) {
  const modal = document.getElementById('courseModal');
  const courseBody = document.getElementById('courseBody');
  const course = courseContent[courseId];

  if (course) {
    courseBody.innerHTML = course.content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Close course modal
function closeCourse() {
  const modal = document.getElementById('courseModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
  const modal = document.getElementById('courseModal');
  if (event.target === modal) {
    closeCourse();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeCourse();
  }
});