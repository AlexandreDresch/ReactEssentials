export const tutorials = {
  functionalComponents: {
    title: "Functional Components",
    slug: "functional-components",
    intro: `
        Welcome to the world of React Functional Components—shiny new toys of React that people won't stop gushing about. 
        Gone are the days of class components (unless you’re a dinosaur, no offense). Let’s dive into why functional components 
        are awesome, how they work, and—of course—throw in some examples, all wrapped in a sarcastic bow.`,
    sections: [
      {
        title: "What Are Functional Components?",
        content: `
            Think of functional components as the minimalist hipster version of class components. They’re basically JavaScript 
            functions that return some JSX. No this, no componentDidWhatever, just pure functional bliss.`,
        examples: [
          {
            title: "Class Component (ew)",
            code: `
                import React, { Component } from 'react';
  
                class HelloWorld extends Component {
                  render() {
                    return <h1>Hello, World!</h1>;
                  }
                }
  
                export default HelloWorld;
              `,
          },
          {
            title: "Functional Component (ahh, refreshing)",
            code: `
                const HelloWorld = () => {
                  return <h1>Hello, World!</h1>;
                };
  
                export default HelloWorld;
              `,
          },
        ],
      },
      {
        title: "Why Use Functional Components?",
        content: `
            Why not? Unless you enjoy unnecessary boilerplate, functional components are:
            1. **Simpler**: No more messing with \`this\`.
            2. **Cleaner**: Less code, fewer bugs (in theory).
            3. **Hooks-Ready**: The real MVP. Hooks let you do stateful magic in functional components.
          `,
      },
      {
        title: "Basics",
        subSections: [
          {
            title: "Stateless Functional Component",
            content: `
                Functional components are stateless. Here’s an example:`,
            code: `
                const Greeting = ({ name }) => {
                  return <p>Hello, {name}! Nice to meet you.</p>;
                };
  
                export default Greeting;
              `,
          },
          {
            title: "Props",
            content: `
                Props are just arguments. Pass 'em in, use 'em, move on. No more crying over \`this.props\`.`,
            code: `
                const Welcome = ({ user }) => <h2>Welcome, {user}!</h2>;
  
                export default Welcome;
  
                // Somewhere else:
                <Welcome user="Alice" />
              `,
          },
        ],
      },
      {
        title: "Hooks",
        subSections: [
          {
            title: "useState",
            content: `
                Want to manage state? Say goodbye to \`this.state\` and welcome \`useState\`. It’s like having a pet that actually listens to you.`,
            code: `
                import React, { useState } from 'react';
  
                const Counter = () => {
                  const [count, setCount] = useState(0);
  
                  return (
                    <div>
                      <p>You've clicked {count} times.</p>
                      <button onClick={() => setCount(count + 1)}>Click me!</button>
                    </div>
                  );
                };
  
                export default Counter;
              `,
          },
          {
            title: "useEffect",
            content: `
                Need lifecycle methods? Say hello to \`useEffect\`, the swiss-army knife of React hooks.`,
            code: `
                import React, { useState, useEffect } from 'react';
  
                const Timer = () => {
                  const [seconds, setSeconds] = useState(0);
  
                  useEffect(() => {
                    const interval = setInterval(() => {
                      setSeconds((prev) => prev + 1);
                    }, 1000);
  
                    return () => clearInterval(interval); // Cleanup!
                  }, []);
  
                  return <p>You’ve been here for {seconds} seconds. Go touch some grass!</p>;
                };
  
                export default Timer;
              `,
          },
        ],
      },
      {
        title: "Pitfalls",
        content: `
            ### Common Pitfalls
            1. **Overusing useEffect**  
               Stop shoving everything into \`useEffect\`. Just because you *can* doesn’t mean you *should*.
  
            2. **Infinite Loops**  
               Forgetting dependency arrays? Congrats, you’ve just built a time bomb.
  
            3. **Not Memoizing**  
               Love rerenders? Me neither. Learn to use \`React.memo\`, \`useCallback\`, and \`useMemo\`.
          `,
      },
      {
        title: "Final Thoughts",
        content: `
            Functional components are the present and future of React. Sure, class components still work, but they’re like flip phones—functional but not cool. 
            With hooks, you can manage state, side effects, and reusable logic like a pro, all while keeping your code clean and modern.
  
            Now go forth and functionalize all the things. Or don’t. I’m not your boss.
          `,
      },
    ],
  },
  jsx: {
    title: "Understanding JSX",
    slug: "jsx",
    intro: `
          Ah, JSX—React's lovechild with XML. If you've ever thought, "Why does my JavaScript look like HTML?" 
          you're not alone. JSX makes your code look pretty, but only if you play by its rules. Let’s break it down 
          and make you a JSX wizard.`,
    sections: [
      {
        title: "What is JSX?",
        content: `
              JSX stands for **JavaScript XML**, and it’s a syntax extension for JavaScript.  
              It allows you to write HTML-like code within your JavaScript files, which React compiles into regular JavaScript calls.  
              *Sounds magical, doesn’t it?* Actually, it's just syntactic sugar to make your life easier.`,
        examples: [
          {
            title: "Without JSX (boring)",
            code: `
                  const element = React.createElement('h1', null, 'Hello, World!');
                  console.log(element);
                  // { type: 'h1', props: { children: 'Hello, World!' } }
                `,
          },
          {
            title: "With JSX (elegant)",
            code: `
                  const element = <h1>Hello, World!</h1>;
                  console.log(element);
                  // { type: 'h1', props: { children: 'Hello, World!' } }
                `,
          },
        ],
      },
      {
        title: "Basic Rules of JSX",
        subSections: [
          {
            title: "JSX Must Be Wrapped in a Parent Element",
            content: `
                  You can’t just sprinkle JSX wherever you want like confetti. It needs to be wrapped in a single parent element.  
                  *React doesn’t like chaos.*
                `,
            code: `
                  // Correct:
                  const element = (
                    <div>
                      <h1>Hello</h1>
                      <p>World</p>
                    </div>
                  );
    
                  // Incorrect:
                  const element = (
                    <h1>Hello</h1>
                    <p>World</p> // React will yell at you!
                  );
                `,
          },
          {
            title: "Self-Closing Tags",
            content: `
                  In JSX, tags without children must self-close. Because this isn't 1999, and we’ve moved on from \`<br>\`.
                `,
            code: `
                  // Correct:
                  const element = <img src="cat.jpg" alt="A cute cat" />;
    
                  // Incorrect:
                  const element = <img src="cat.jpg" alt="A cute cat"></img>; // Not technically wrong, but why?
                `,
          },
          {
            title: "Expressions in JSX",
            content: `
                  You can use JavaScript expressions in JSX by wrapping them in curly braces.  
                  No, you can’t use statements—React isn’t into that.
                `,
            code: `
                  const name = "John";
    
                  // Correct:
                  const element = <h1>Hello, {name}!</h1>;
    
                  // Incorrect:
                  const element = <h1>Hello, name!</h1>; // That’s just plain text.
                `,
          },
        ],
      },
      {
        title: "Styling in JSX",
        content: `
              Forget CSS files (or don’t, up to you). With JSX, you can style elements directly using inline styles.  
              *But wait, there’s a catch—styles are objects.*
            `,
        examples: [
          {
            title: "Inline Styles",
            code: `
                  const style = {
                    color: 'red',
                    backgroundColor: 'black',
                    fontSize: '20px'
                  };
    
                  const element = <h1 style={style}>Stylish Text</h1>;
                `,
          },
          {
            title: "CSS Classes",
            content: `
                  You can still use CSS classes, but don’t forget—it’s \`className\`, not \`class\`.  
                  (HTML got all the cool names; React had to improvise.)
                `,
            code: `
                  // CSS:
                  // .title { color: blue; }
    
                  const element = <h1 className="title">CSS Classes in JSX</h1>;
                `,
          },
        ],
      },
      {
        title: "Fragments",
        content: `
              Remember how JSX demands a single parent element? Meet \`<React.Fragment>\`—the unsung hero for grouping 
              elements without polluting your DOM with unnecessary \`<div>\`s.
            `,
        examples: [
          {
            title: "Using Fragments",
            code: `
                  import React from 'react';
    
                  const List = () => (
                    <React.Fragment>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </React.Fragment>
                  );
    
                  export default List;
                `,
          },
          {
            title: "Short Syntax",
            code: `
                  const List = () => (
                    <>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </>
                  );
                `,
          },
        ],
      },
      {
        title: "Pitfalls",
        content: `
              ### Common Mistakes
              1. **Forgetting to Wrap in a Parent Element**  
                 React will scream at you for this. Don’t do it.
    
              2. **Inline Style Missteps**  
                 Remember, it’s camelCase for property names. \`background-color\` becomes \`backgroundColor\`.
    
              3. **Mismatching Quotes**  
                 Use double quotes for HTML attributes. Don’t mix and match—it’s messy.
            `,
      },
      {
        title: "Final Thoughts",
        content: `
              JSX is what makes React fun (or infuriating, depending on your mood). Master it, and you’ll write cleaner, 
              more readable components. Ignore it, and you’ll spend your days battling React’s cryptic error messages.
    
              Now go forth and JSX responsibly!
            `,
      },
    ],
  },
  useState: {
    title: "Mastering useState: React's Favorite Hook",
    slug: "usestate",
    intro: `
      If React components were a reality show, \`useState\` would be the one constantly stealing the spotlight.  
      It’s the OG hook, the one that makes functional components actually *functional*.  
      Let’s dive into how you can use \`useState\` to make your components less boring.`,
    sections: [
      {
        title: "What is useState?",
        content: `
          \`useState\` is a React Hook that lets you add state to your functional components.  
          It’s like a magic wand that can make your component remember things—like how many times someone clicked that **Click Me** button.`,
        examples: [
          {
            title: "Basic Syntax",
            code: `
              import React, { useState } from 'react';

              const Counter = () => {
                const [count, setCount] = useState(0); // count starts at 0

                return (
                  <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                      Click me
                    </button>
                  </div>
                );
              };

              export default Counter;
            `,
          },
        ],
      },
      {
        title: "Breaking Down useState",
        subSections: [
          {
            title: "The Hook",
            content: `
              When you call \`useState\`, it returns an array with two elements:  
              1. The **state variable**: This is the value you want to track.  
              2. The **updater function**: A fancy name for a function that changes the state.`,
            code: `
              const [state, setState] = useState(initialValue);

              // Example:
              const [isTired, setIsTired] = useState(false);
              setIsTired(true); // Now "isTired" is true.
            `,
          },
          {
            title: "Initial State",
            content: `
              The argument you pass to \`useState\` is the **initial state**.  
              *Don’t overthink it—it’s just the starting value.*
            `,
            code: `
              const [mood, setMood] = useState('happy'); // Mood starts happy.
              setMood('grumpy'); // Now it's grumpy.
            `,
          },
        ],
      },
      {
        title: "Updating State",
        content: `
          Updating state is as simple as calling the updater function returned by \`useState\`.  
          But wait—React doesn’t *immediately* update the state.  
          It queues it up for the next render because it likes to keep you waiting.`,
        examples: [
          {
            title: "Increment Example",
            code: `
              const [count, setCount] = useState(0);

              const increment = () => {
                setCount(count + 1); // Adds 1 to the current count.
              };

              return <button onClick={increment}>Click Me</button>;
            `,
          },
          {
            title: "Functional Updates",
            content: `
              React might batch updates, so if you depend on the previous state, use a function instead.  
              (No, you can’t skip this part—learn it now before bugs haunt you later.)
            `,
            code: `
              const [count, setCount] = useState(0);

              const increment = () => {
                setCount(prevCount => prevCount + 1); // Correct way when state depends on the previous value.
              };

              return <button onClick={increment}>Click Me</button>;
            `,
          },
        ],
      },
      {
        title: "Handling Objects and Arrays",
        content: `
          State isn’t limited to numbers or strings.  
          You can store objects, arrays, or anything else React can pretend to care about.  
          Just remember: updating state doesn’t merge objects—it *replaces* them. 
          So don’t expect React to read your mind.`,
        examples: [
          {
            title: "State as an Object",
            code: `
              const [person, setPerson] = useState({ name: 'John', age: 30 });

              const updateAge = () => {
                setPerson(prevPerson => ({ ...prevPerson, age: prevPerson.age + 1 }));
              };

              return <button onClick={updateAge}>Happy Birthday!</button>;
            `,
          },
          {
            title: "State as an Array",
            code: `
              const [items, setItems] = useState([1, 2, 3]);

              const addItem = () => {
                setItems(prevItems => [...prevItems, prevItems.length + 1]);
              };

              return <button onClick={addItem}>Add Item</button>;
            `,
          },
        ],
      },
      {
        title: "Pitfalls",
        content: `
          ### Common Mistakes
          1. **Mutating State Directly**  
             Don’t do this. React won’t notice, and your app will laugh at your misfortune.

             \`\`\`javascript
             const [count, setCount] = useState(0);
             count++; // This doesn’t work.
             setCount(count); // Do this instead.
             \`\`\`

          2. **Skipping Functional Updates**  
             Use a function when the new state depends on the old one, or bugs will hunt you down.

          3. **Expecting Immediate Updates**  
             React updates state asynchronously, so check your assumptions at the door.
        `,
      },
      {
        title: "Final Thoughts",
        content: `
          \`useState\` is the first hook you’ll learn, the one you’ll use the most,  
          and the one you’ll still get wrong sometimes. But hey, that’s life.  
          Practice it, embrace the quirks, and soon enough, you’ll be using it like a pro.

          And remember: React doesn’t break your app—you do. 💥
        `,
      },
    ],
  },
  useEffect: {
    title: "Mastering useEffect: The Swiss Army Knife of React Hooks",
    slug: "useeffect",
    intro: `
      \`useEffect\` is that friend who shows up everywhere and does everything.  
      Need to fetch data? useEffect. Need to update the DOM? useEffect.  
      Need to debug a bug that only happens on Tuesdays? Yeah, probably \`useEffect\`.  
      Let's unpack this overachieving hook.`,
    sections: [
      {
        title: "What is useEffect?",
        content: `
          \`useEffect\` lets you perform side effects in your functional components.  
          A side effect is anything that’s not a pure function—fetching data, subscribing to services, updating the DOM.  
          In short: anything that makes your app feel alive instead of a glorified slideshow.`,
        examples: [
          {
            title: "Basic Syntax",
            code: `
              import React, { useEffect } from 'react';

              const App = () => {
                useEffect(() => {
                  console.log('Component mounted or updated');
                });

                return <h1>Hello, world!</h1>;
              };

              export default App;
            `,
          },
        ],
      },
      {
        title: "Breaking Down useEffect",
        subSections: [
          {
            title: "The Dependency Array",
            content: `
              \`useEffect\` accepts two arguments:
              1. A **callback function** where you put your side effect.
              2. An **optional dependency array** that tells React when to re-run the effect.
              
              Here’s how it works:
              - No dependencies? \`useEffect\` runs after every render.
              - Empty array? It runs only once, after the component mounts.
              - Specific dependencies? It runs whenever those change.`,
            examples: [
              {
                title: "Run on Every Render",
                code: `
                  useEffect(() => {
                    console.log('This runs after every render.');
                  });
                `,
              },
              {
                title: "Run Only Once",
                code: `
                  useEffect(() => {
                    console.log('This runs once after the component mounts.');
                  }, []);
                `,
              },
              {
                title: "Run on Specific Changes",
                code: `
                  useEffect(() => {
                    console.log('This runs when "count" changes.');
                  }, [count]);
                `,
              },
            ],
          },
        ],
      },
      {
        title: "Common Use Cases",
        content: `
          Here are some scenarios where you’ll want to flex your \`useEffect\` muscles.`,
        examples: [
          {
            title: "Fetching Data",
            code: `
              const App = () => {
                const [data, setData] = useState(null);

                useEffect(() => {
                  fetch('https://api.example.com/data')
                    .then(response => response.json())
                    .then(data => setData(data));
                }, []);

                return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
              };
            `,
          },
          {
            title: "Event Listeners",
            code: `
              const App = () => {
                useEffect(() => {
                  const handleResize = () => {
                    console.log('Window resized!');
                  };
                  window.addEventListener('resize', handleResize);

                  return () => {
                    window.removeEventListener('resize', handleResize); // Cleanup
                  };
                }, []);

                return <h1>Resize the window!</h1>;
              };
            `,
          },
          {
            title: "Updating the Title",
            code: `
              const App = () => {
                const [count, setCount] = useState(0);

                useEffect(() => {
                  document.title = \`You clicked \${count} times\`;
                }, [count]);

                return (
                  <button onClick={() => setCount(count + 1)}>
                    Click Me
                  </button>
                );
              };
            `,
          },
        ],
      },
      {
        title: "Pitfalls and Gotchas",
        content: `
          ### Watch Out For:
          1. **Infinite Loops**  
             - Forget the dependency array? Congrats, you just broke your app.
             - Example:
               \`\`\`javascript
               useEffect(() => {
                 setState(state + 1); // Infinite loop!
               });
               \`\`\`

          2. **Missing Dependencies**  
             - Always include every variable your effect depends on in the array.
             - Or don’t, and spend hours debugging.

          3. **Cleanup? What’s That?**  
             - Forgetting cleanup functions leads to memory leaks.  
             - React will call your cleanup function before re-running the effect or unmounting the component.`,
        examples: [
          {
            title: "Cleanup Example",
            code: `
              useEffect(() => {
                const interval = setInterval(() => {
                  console.log('Tick...');
                }, 1000);

                return () => {
                  clearInterval(interval); // Cleanup on unmount
                };
              }, []);
            `,
          },
        ],
      },
      {
        title: "Final Thoughts",
        content: `
          \`useEffect\` is like a Swiss Army knife: incredibly versatile, but easy to misuse.  
          Learn to wield it wisely, and you’ll be a React pro in no time.  
          Or don’t, and prepare for a career in bug squashing. Either way, happy coding!`,
      },
    ],
  },
  props: {
    title: "Props: React’s Passive-Aggressive Way of Sharing Data",
    slug: "props",
    intro: `
      Props (short for properties, because React devs love abbreviations) are the bread and butter of React.  
      They let you pass data from parent components to child components.  
      Think of it as giving your child instructions, which they will completely ignore unless they’re coded correctly.`,
    sections: [
      {
        title: "What Are Props?",
        content: `
          Props are immutable objects used to pass data from a parent component to its child components.  
          Immutable means, once they’re passed down, the child can’t change them.  
          (Basically, the child gets no say in what you hand over. Parenting win!)`,
        examples: [
          {
            title: "Basic Props Example",
            code: `
              const Greeting = (props) => {
                return <h1>Hello, {props.name}!</h1>;
              };

              const App = () => {
                return <Greeting name="World" />;
              };

              // Output: Hello, World!
            `,
          },
        ],
      },
      {
        title: "How to Use Props",
        subSections: [
          {
            title: "Passing Props",
            content: `
              You pass props to a child component the same way you pass snacks to a grumpy toddler—reluctantly but necessarily.  
              Use attributes when rendering the component.`,
            examples: [
              {
                title: "Props in Action",
                code: `
                  const UserInfo = (props) => {
                    return <p>{props.name} is {props.age} years old.</p>;
                  };

                  const App = () => {
                    return <UserInfo name="Alice" age={25} />;
                  };

                  // Output: Alice is 25 years old.
                `,
              },
            ],
          },
          {
            title: "Destructuring Props",
            content: `
              Destructuring is the grown-up way to handle props.  
              No more \`props.something\`—just extract what you need.`,
            examples: [
              {
                title: "Destructured Props",
                code: `
                  const UserInfo = ({ name, age }) => {
                    return <p>{name} is {age} years old.</p>;
                  };

                  const App = () => {
                    return <UserInfo name="Bob" age={30} />;
                  };

                  // Output: Bob is 30 years old.
                `,
              },
            ],
          },
        ],
      },
      {
        title: "Prop Types",
        content: `
          Want to enforce rules for props? Enter \`PropTypes\`.  
          They're the parent chaperone of your React app—making sure everything behaves.  
          This isn’t mandatory, but neither is stopping at red lights, and yet here we are.`,
        examples: [
          {
            title: "Using PropTypes",
            code: `
              import PropTypes from 'prop-types';

              const UserInfo = ({ name, age }) => {
                return <p>{name} is {age} years old.</p>;
              };

              UserInfo.propTypes = {
                name: PropTypes.string.isRequired,
                age: PropTypes.number.isRequired,
              };

              const App = () => {
                return <UserInfo name="Charlie" age={35} />;
              };
            `,
          },
        ],
      },
      {
        title: "Default Props",
        content: `
          Forget to pass a prop? React won’t call you out, but your app will break.  
          Thankfully, you can define \`defaultProps\` to handle missing props like a pro.`,
        examples: [
          {
            title: "Setting Default Props",
            code: `
              const Greeting = ({ name = 'Stranger' }) => {
                return <h1>Hello, {name}!</h1>;
              };

              const App = () => {
                return <Greeting />;
              };

              // Output: Hello, Stranger!
            `,
          },
        ],
      },
      {
        title: "Children Props",
        content: `
          The \`children\` prop is a special kind of prop that lets you nest components.  
          It’s like handing your child a box of crayons and hoping they create art instead of chaos.`,
        examples: [
          {
            title: "Using children Prop",
            code: `
              const Card = ({ children }) => {
                return <div className="card">{children}</div>;
              };

              const App = () => {
                return (
                  <Card>
                    <h2>Welcome!</h2>
                    <p>This is a nested component.</p>
                  </Card>
                );
              };

              // Output:
              // <div class="card">
              //   <h2>Welcome!</h2>
              //   <p>This is a nested component.</p>
              // </div>
            `,
          },
        ],
      },
      {
        title: "Final Thoughts",
        content: `
          Props are like a pizza delivery guy—you tell them what to bring, they deliver,  
          but they don’t stick around to mess with your toppings.  
          Learn to use them wisely, and your React app will thank you (or not, it's just code).`,
      },
    ],
  },
  reactivity: {
    title: "Reactivity: Teach Your Code to Pay Attention",
    slug: "reactivity",
    intro: `
      Reactivity is the art of keeping your UI in sync with your data.  
      Before reactivity, you had to manually update the DOM every time something changed, like a digital caveman.  
      Now, JavaScript frameworks do the heavy lifting so you can focus on writing bugs faster.`,
    sections: [
      {
        title: "Reactivity in Vanilla JavaScript",
        content: `
          Vanilla JavaScript doesn’t have built-in reactivity. Shocker, right?  
          But we can simulate it with good old getters, setters, and event listeners.  
          Let’s create a reactive counter manually because we enjoy suffering.`,
        examples: [
          {
            title: "Manual Reactivity Example",
            code: `
              const state = {
                count: 0,
              };

              const render = () => {
                document.body.innerHTML = \`Count: \${state.count}\`;
              };

              const makeReactive = (obj) => {
                return new Proxy(obj, {
                  set(target, key, value) {
                    target[key] = value;
                    render(); // Update UI
                    return true;
                  },
                });
              };

              const reactiveState = makeReactive(state);

              render(); // Initial render
              reactiveState.count = 1; // Updates DOM
              reactiveState.count = 2; // Updates DOM
            `,
          },
        ],
      },
      {
        title: "Reactivity in React",
        content: `
          React takes reactivity and makes it brain-dead simple with hooks like \`useState\`.  
          Instead of wiring proxies or event listeners, you just tell React what to update and call it a day.`,
        examples: [
          {
            title: "React's useState for Reactivity",
            code: `
              import React, { useState } from 'react';

              const Counter = () => {
                const [count, setCount] = useState(0);

                return (
                  <div>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                  </div>
                );
              };

              export default Counter;

              // Clicking the button updates the count, triggering a re-render.
            `,
          },
        ],
      },
      {
        title: "Why Reactivity Matters",
        content: `
          Without reactivity, you’re left to wrestle the DOM into submission every time data changes.  
          Reactivity ensures your UI updates automatically without micromanaging the DOM.  
          Think of it as a well-trained butler, except it never talks back or complains about working overtime.`,
        examples: [],
      },
      {
        title: "Reactivity in Vue (Bonus Round)",
        content: `
          Vue.js takes a different approach using reactive objects.  
          It wraps your data in a reactivity system right out of the box, no hooks required.`,
        examples: [
          {
            title: "Reactivity in Vue",
            code: `
              <template>
                <div>
                  <p>Count: {{ count }}</p>
                  <button @click="increment">Increment</button>
                </div>
              </template>

              <script>
              import { reactive } from 'vue';

              export default {
                setup() {
                  const state = reactive({ count: 0 });

                  const increment = () => {
                    state.count++;
                  };

                  return { ...state, increment };
                },
              };
              </script>

              // Vue's reactivity system updates the DOM automatically. No sweat.
            `,
          },
        ],
      },
      {
        title: "Advanced Reactivity",
        subSections: [
          {
            title: "Reactivity in Complex State Management",
            content: `
              When your app grows beyond counters and simple forms, you'll want something like \`useReducer\`  
              or a state management library (Redux, Zustand, etc.) to keep your reactive data organized.`,
            examples: [],
          },
          {
            title: "Reactivity in Context",
            content: `
              Reactivity works beautifully with context providers, making data accessible throughout your app.  
              It’s like global variables, but classy.`,
            examples: [],
          },
        ],
      },
      {
        title: "Final Thoughts",
        content: `
          Reactivity turns your app from a static, lifeless page into a dynamic, responsive masterpiece.  
          Or, if you overdo it, a spaghetti mess of state updates.  
          Start small, think smart, and remember: just because something can be reactive, doesn’t mean it should be.`,
      },
    ],
  },
  useContext: {
    title: "useContext: Stop Prop Drilling, Start Context Chilling",
    slug: "usecontext",
    intro: `
      Props are great until they're not. When you find yourself passing the same prop through five components  
      just to get it to a button, that's when useContext swoops in to save the day.  
      Think of it as React's version of the buddy system for shared state.`,
    sections: [
      {
        title: "What is useContext?",
        content: `
          \`useContext\` is a hook that lets you access values from a React \`Context\`.  
          Context acts like a magical backpack: you put some state into it,  
          and any component in the app can pull it out—no need to pass it around manually.`,
        examples: [],
      },
      {
        title: "Setting Up a Context",
        content: `
          To use \`useContext\`, you need to:
          1. Create a context.
          2. Wrap your components with a provider.
          3. Access the context using the \`useContext\` hook.  
          Let's dive into the code!`,
        examples: [
          {
            title: "Creating and Using Context",
            code: `
              import React, { createContext, useContext, useState } from 'react';

              // Step 1: Create the context
              const ThemeContext = createContext();

              const ThemeProvider = ({ children }) => {
                const [theme, setTheme] = useState('light');

                const toggleTheme = () => {
                  setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
                };

                return (
                  // Step 2: Wrap your app in the provider
                  <ThemeContext.Provider value={{ theme, toggleTheme }}>
                    {children}
                  </ThemeContext.Provider>
                );
              };

              const Header = () => {
                const { theme } = useContext(ThemeContext); // Step 3: Use the context
                return <h1>The current theme is {theme}</h1>;
              };

              const ThemeToggleButton = () => {
                const { toggleTheme } = useContext(ThemeContext); // Step 3 again
                return <button onClick={toggleTheme}>Toggle Theme</button>;
              };

              const App = () => (
                <ThemeProvider>
                  <Header />
                  <ThemeToggleButton />
                </ThemeProvider>
              );

              export default App;

              // When you toggle the theme, the Header updates automatically. Magic!
            `,
          },
        ],
      },
      {
        title: "When to Use useContext",
        content: `
          Use \`useContext\` when:
          - You're passing the same prop through multiple components, and it's making you sad.
          - You have global data, like themes, authentication info, or settings,  
            that many components need access to.

          Don't use \`useContext\` for every single piece of state—overusing it is the React equivalent of global variables.`,
        examples: [],
      },
      {
        title: "Advanced Context Patterns",
        subSections: [
          {
            title: "Default Values in Context",
            content: `
              When you create a context, you can specify a default value:  
              \`const MyContext = createContext('defaultValue');\`  
              If a component uses the context outside of a provider, it gets the default value.  
              (But let’s be real: you should always use a provider.)`,
            examples: [],
          },
          {
            title: "Using Multiple Contexts",
            content: `
              If you have multiple contexts (like one for theme and another for user info),  
              you can either nest providers or combine them into a single context.  
              Just don’t create so many contexts that your app turns into a context inception nightmare.`,
            examples: [],
          },
        ],
      },
      {
        title: "Common Gotchas",
        content: `
          1. **Performance**: Re-rendering happens whenever the context value changes.  
             For frequently updated values, consider using separate state management solutions.
          2. **Avoid Over-Nesting**: Wrapping your app in 15 providers is not a flex.  
             Keep context usage clean and purposeful.`,
        examples: [],
      },
      {
        title: "Final Thoughts",
        content: `
          \`useContext\` is a lifesaver for managing state in your React app.  
          It's like having a global state with none of the commitment issues.  
          Use it wisely, and remember: context is great, but don’t let it become the new props.`,
        examples: [],
      },
    ],
  },
  useReducer: {
    title: "useReducer: Complex State Without the Drama",
    slug: "usereducer",
    intro: `
      \`useReducer\` is React’s way of saying, "You can do better than \`useState\` for this mess."  
      It’s great for managing state with multiple values, intricate logic, or when you secretly wish you were using Redux.  
      Let’s break it down.`,
    sections: [
      {
        title: "What is useReducer?",
        content: `
          \`useReducer\` is a hook for managing state where the logic involves multiple actions or requires a switch-case-like structure.  
          Think of it as \`useState\`'s more sophisticated, but slightly overachieving sibling.`,
        examples: [],
      },
      {
        title: "Basic Syntax",
        content: `
          The syntax for \`useReducer\` is:  
          \`\`\`javascript
          const [state, dispatch] = useReducer(reducerFunction, initialState);
          \`\`\`  
          - **reducerFunction**: A function that decides how state should change.  
          - **initialState**: Your starting state.  
          - **dispatch**: The magic wand you wave to tell \`useReducer\` what to do.`,
        examples: [],
      },
      {
        title: "An Example: Counter App",
        content: `
          Let’s start simple—counting! But now, with actions like "increment", "decrement", and "reset".`,
        examples: [
          {
            title: "useReducer Counter Example",
            code: `
              import React, { useReducer } from 'react';

              // Step 1: Define the reducer function
              const counterReducer = (state, action) => {
                switch (action.type) {
                  case 'increment':
                    return { count: state.count + 1 };
                  case 'decrement':
                    return { count: state.count - 1 };
                  case 'reset':
                    return { count: 0 };
                  default:
                    throw new Error(\`Unknown action: \${action.type}\`);
                }
              };

              // Step 2: Use the reducer in a component
              const Counter = () => {
                const [state, dispatch] = useReducer(counterReducer, { count: 0 });

                return (
                  <div>
                    <h1>Count: {state.count}</h1>
                    <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                    <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                    <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
                  </div>
                );
              };

              export default Counter;

              // State changes are controlled, predictable, and ready for a promotion to Redux.
            `,
          },
        ],
      },
      {
        title: "When to Use useReducer",
        content: `
          \`useReducer\` is the right choice when:
          - You have multiple state variables that are interdependent.
          - State updates involve complex logic.
          - You’re writing code that you’ll probably regret if you stick with \`useState\`.  

          Don’t use it if:
          - Your state is simple (just use \`useState\`, champ).
          - You only want to appear smart without actually needing \`useReducer\`.`,
        examples: [],
      },
      {
        title: "A More Complex Example: Todo List",
        content: `
          Let’s level up to a todo list, where you can add, toggle, and remove todos.`,
        examples: [
          {
            title: "Todo List with useReducer",
            code: `
              import React, { useReducer } from 'react';

              // Step 1: Define the reducer function
              const todoReducer = (state, action) => {
                switch (action.type) {
                  case 'add':
                    return [...state, { id: Date.now(), text: action.payload, completed: false }];
                  case 'toggle':
                    return state.map((todo) =>
                      todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                    );
                  case 'remove':
                    return state.filter((todo) => todo.id !== action.payload);
                  default:
                    throw new Error(\`Unknown action: \${action.type}\`);
                }
              };

              // Step 2: Use the reducer in a component
              const TodoApp = () => {
                const [todos, dispatch] = useReducer(todoReducer, []);

                const handleAddTodo = () => {
                  const text = prompt('Enter a new todo:');
                  if (text) {
                    dispatch({ type: 'add', payload: text });
                  }
                };

                return (
                  <div>
                    <button onClick={handleAddTodo}>Add Todo</button>
                    <ul>
                      {todos.map((todo) => (
                        <li key={todo.id}>
                          <span
                            style={{
                              textDecoration: todo.completed ? 'line-through' : 'none',
                              cursor: 'pointer',
                            }}
                            onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
                          >
                            {todo.text}
                          </span>
                          <button onClick={() => dispatch({ type: 'remove', payload: todo.id })}>X</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              };

              export default TodoApp;

              // Add todos, toggle them, delete them—it’s all state-managed glory.
            `,
          },
        ],
      },
      {
        title: "Gotchas and Best Practices",
        content: `
          - **Action Types**: Use constants for action types to avoid typos.
          - **Avoid Over-Engineering**: Don’t reach for \`useReducer\` when \`useState\` will do.
          - **Debugging**: Console.log is your friend; reducers can be tricky to debug.
          - **State Explosion**: If your state grows too complex, consider external state management libraries like Redux.`,
        examples: [],
      },
      {
        title: "Final Thoughts",
        content: `
          \`useReducer\` is the perfect choice for managing complex state without descending into chaos.  
          It’s predictable, scalable, and makes you feel like you’re building the next big app—even if it’s just another todo list.`,
        examples: [],
      },
    ],
  },
  useRef: {
    title: "useRef: The Hook That React Forgot",
    slug: "useref",
    intro: `
      \`useRef\` is like React’s sneaky cheat code for:
      - Stalking DOM elements without React knowing.
      - Holding onto values **across renders** without triggering a rerender.
      - Making React’s strict rules a little less strict.
      Let’s explore how to harness this mischief maker!`,
    sections: [
      {
        title: "What is useRef?",
        content: `
          \`useRef\` is a hook that returns a mutable object whose \`current\` property you can use to:
          - Point to a DOM element like an arrow on a treasure map.
          - Keep state-like values that persist between renders but don’t trigger rerenders.`,
        examples: [],
      },
      {
        title: "Basic Syntax",
        content: `
          Using \`useRef\` is easy:  
          \`\`\`javascript
          const ref = useRef(initialValue);
          \`\`\`  
          - \`ref.current\` holds the value or DOM element.  
          - You can update \`ref.current\` whenever you want (no questions asked).`,
        examples: [],
      },
      {
        title: "Example 1: Focusing an Input",
        content: `
          Let’s start with a classic—click a button, and the input gets instant attention.`,
        examples: [
          {
            title: "Input Focus Example",
            code: `
              import React, { useRef } from 'react';

              const InputFocus = () => {
                const inputRef = useRef(null);

                const handleFocus = () => {
                  inputRef.current.focus();
                };

                return (
                  <div>
                    <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
                    <button onClick={handleFocus}>Focus Input</button>
                  </div>
                );
              };

              export default InputFocus;

              // No lifecycle headaches. Just direct DOM access, the way nature intended.
            `,
          },
        ],
      },
      {
        title: "Example 2: Storing Persistent Values",
        content: `
          Not all \`useRef\` heroes wear DOM capes. You can use it to store **mutable values** that survive rerenders without causing them.`,
        examples: [
          {
            title: "useRef as Persistent Value",
            code: `
              import React, { useState, useRef } from 'react';

              const PersistentCounter = () => {
                const countRef = useRef(0);
                const [count, setCount] = useState(0);

                const increment = () => {
                  countRef.current += 1; // This doesn't trigger a rerender
                  setCount(countRef.current); // Update state for UI
                };

                const showRefValue = () => {
                  alert(\`Persistent count: \${countRef.current}\`);
                };

                return (
                  <div>
                    <p>Count: {count}</p>
                    <button onClick={increment}>Increment</button>
                    <button onClick={showRefValue}>Show Ref Value</button>
                  </div>
                );
              };

              export default PersistentCounter;

              // Warning: May induce a false sense of state control.
            `,
          },
        ],
      },
      {
        title: "Example 3: Tracking Renders",
        content: `
          Ever wonder how many times a component has rendered? Let’s snoop using \`useRef\`.`,
        examples: [
          {
            title: "Render Tracker Example",
            code: `
              import React, { useRef, useEffect } from 'react';

              const RenderTracker = () => {
                const renderCount = useRef(0);

                useEffect(() => {
                  renderCount.current += 1;
                  console.log(\`Component rendered \${renderCount.current} times.\`);
                });

                return <h1>Open the console to see render count.</h1>;
              };

              export default RenderTracker;

              // You’ll either be impressed or terrified at how often React renders.
            `,
          },
        ],
      },
      {
        title: "When to Use useRef",
        content: `
          Use \`useRef\` when:
          - You need to manipulate a DOM element directly (e.g., focus, scroll, animations).
          - You need a persistent value that doesn’t cause rerenders (e.g., render count, timeout IDs).
          
          Avoid \`useRef\` if:
          - You want to manage state or trigger renders. Use \`useState\` instead.`,
        examples: [],
      },
      {
        title: "Gotchas and Best Practices",
        content: `
          - **Direct DOM Access**: Avoid overusing it for DOM manipulation. React prefers you use refs sparingly.
          - **Mutability**: \`useRef\` doesn’t care about changes. It’s not reactive—changes won’t notify React.
          - **Initialization**: Always set an initial value, or \`ref.current\` will be \`undefined\` (leading to debugging nightmares).`,
        examples: [],
      },
      {
        title: "Final Thoughts",
        content: `
          \`useRef\` is the duct tape of React. It’s not glamorous, but it’s incredibly useful when React's declarative approach needs a little assist.  
          Whether you're managing focus, keeping render counts, or avoiding rerender madness, \`useRef\` has your back.`,
        examples: [],
      },
    ],
  },
  useMemo: {
    title: "useMemo: The Hook for Efficient Overachievers",
    slug: "usememo",
    intro: `
      \`useMemo\` is your go-to tool for optimizing expensive calculations in React. 
      - It **memoizes** (remembers) the result of a function.
      - React skips recomputing the value if the dependencies haven’t changed.
      Perfect for when you’ve got components doing more math than a calculus professor.`,
    sections: [
      {
        title: "What is useMemo?",
        content: `
          \`useMemo\` is a React hook that ensures expensive computations only run when their dependencies change.  
          **Syntax**:  
          \`\`\`javascript
          const memoizedValue = useMemo(() => computeSomething(), [dependencies]);
          \`\`\`  
          - The first argument is a function that calculates a value.
          - The second is a dependency array; the function only reruns when something in this array changes.`,
        examples: [],
      },
      {
        title: "Example 1: Memoizing a Slow Calculation",
        content: `
          Imagine calculating a number that takes ages (relatively speaking). Without \`useMemo\`, React might re-run the calculation on every render.`,
        examples: [
          {
            title: "Slow Calculation Example",
            code: `
              import React, { useState, useMemo } from 'react';

              const SlowCalculator = () => {
                const [number, setNumber] = useState(0);
                const [multiplier, setMultiplier] = useState(1);

                const expensiveCalculation = (num) => {
                  console.log('Calculating...');
                  for (let i = 0; i < 1e7; i++) {} // Simulate a slow process
                  return num * 2;
                };

                const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);

                return (
                  <div>
                    <h1>Result: {memoizedValue}</h1>
                    <button onClick={() => setNumber(number + 1)}>Increment Number</button>
                    <button onClick={() => setMultiplier(multiplier + 1)}>Change Multiplier (Unused)</button>
                  </div>
                );
              };

              export default SlowCalculator;

              // Only logs "Calculating..." when 'number' changes. 
              // 'multiplier' can change all day without triggering the calculation. 
            `,
          },
        ],
      },
      {
        title: "Example 2: Optimizing List Rendering",
        content: `
          Rendering large lists can be slow, especially if sorting or filtering is involved. Let’s fix that.`,
        examples: [
          {
            title: "Filtered List Example",
            code: `
              import React, { useState, useMemo } from 'react';

              const FilteredList = ({ items }) => {
                const [search, setSearch] = useState('');

                const filteredItems = useMemo(() => {
                  console.log('Filtering items...');
                  return items.filter((item) =>
                    item.toLowerCase().includes(search.toLowerCase())
                  );
                }, [items, search]);

                return (
                  <div>
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search items"
                    />
                    <ul>
                      {filteredItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              };

              export default FilteredList;

              // Filtering only happens when 'items' or 'search' changes.
            `,
          },
        ],
      },
      {
        title: "When to Use useMemo",
        content: `
          Use \`useMemo\` when:
          - A computation is **expensive** and could slow down rendering.
          - A value is derived from props or state and doesn’t need to be recalculated unnecessarily.

          Don’t use \`useMemo\` for everything. Premature optimization is the root of all evil (or at least buggy React apps).`,
        examples: [],
      },
      {
        title: "Gotchas and Best Practices",
        content: `
          - **Dependencies**: Be accurate! If you forget a dependency, your memoized value may become stale.  
          - **Overhead**: \`useMemo\` itself has a cost. Only use it if the calculation is truly expensive.  
          - **Don’t Overuse**: Don’t memoize trivial values—React is fast enough for most cases.`,
        examples: [],
      },
      {
        title: "Final Thoughts",
        content: `
          \`useMemo\` isn’t for every scenario, but when React’s rendering gets sluggish, it’s the hero you didn’t know you needed.  
          Just don’t let it fool you into thinking all your problems can be solved with memoization.`,
        examples: [],
      },
    ],
  },
  useCallback: {
    title: "useCallback: Taming React's Function Factory",
    slug: "usecallback",
    intro: `
      \`useCallback\` is the functional cousin of \`useMemo\`. 
      While \`useMemo\` is for memoizing **values**, \`useCallback\` memoizes **functions**.
      The idea? Prevent React from recreating functions every time a component rerenders, especially when passing those functions as props.`,
    sections: [
      {
        title: "What is useCallback?",
        content: `
          \`useCallback\` helps React remember a function so it doesn’t create a new one on every render.  
          **Syntax**:  
          \`\`\`javascript
          const memoizedFunction = useCallback(() => {
            // your code here
          }, [dependencies]);
          \`\`\`  
          - The first argument is the function you want React to remember.  
          - The second is a dependency array; the function only changes if something in this array changes.`,
        examples: [],
      },
      {
        title: "Example 1: Memoizing an Event Handler",
        content: `
          Suppose you have a component that passes a function as a prop. Without \`useCallback\`, React creates a new function on every render.`,
        examples: [
          {
            title: "Memoized Event Handler Example",
            code: `
              import React, { useState, useCallback } from 'react';

              const Button = React.memo(({ onClick, label }) => {
                console.log(\`Rendering button: \${label}\`);
                return <button onClick={onClick}>{label}</button>;
              });

              const Counter = () => {
                const [count, setCount] = useState(0);

                const increment = useCallback(() => {
                  setCount((prev) => prev + 1);
                }, []);

                return (
                  <div>
                    <h1>Count: {count}</h1>
                    <Button onClick={increment} label="Increment" />
                  </div>
                );
              };

              export default Counter;

              // Without useCallback, the Button would rerender unnecessarily because
              // a new 'increment' function would be created on every render.
            `,
          },
        ],
      },
      {
        title: "Example 2: Optimizing Child Components with useCallback",
        content: `
          When a parent component passes a function to a child, React thinks *"new prop, better rerender everything!"* 
          \`useCallback\` prevents this madness.`,
        examples: [
          {
            title: "Parent-Child Example",
            code: `
              import React, { useState, useCallback } from 'react';

              const List = React.memo(({ getItems }) => {
                console.log('Rendering List');
                const items = getItems();
                return (
                  <ul>
                    {items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                );
              });

              const Parent = () => {
                const [count, setCount] = useState(1);

                const getItems = useCallback(() => {
                  return [count, count + 1, count + 2];
                }, [count]);

                return (
                  <div>
                    <button onClick={() => setCount(count + 1)}>Increment Count</button>
                    <List getItems={getItems} />
                  </div>
                );
              };

              export default Parent;

              // Without useCallback, List would rerender every time Parent rerenders, 
              // even if the 'getItems' logic hasn't changed.
            `,
          },
        ],
      },
      {
        title: "When to Use useCallback",
        content: `
          Use \`useCallback\` when:
          - You’re passing a function as a prop to **memoized child components**.
          - You have a function that depends on **stable dependencies** and is used frequently in renders.

          Avoid \`useCallback\` for inline functions that don’t cause noticeable performance issues.`,
        examples: [],
      },
      {
        title: "Gotchas and Best Practices",
        content: `
          - **Dependencies Matter**: If you mess up the dependency array, your function might not update correctly.  
          - **Overhead**: Using \`useCallback\` everywhere can make your code harder to read without real performance benefits.
          - **Combine with React.memo**: \`useCallback\` shines when used alongside \`React.memo\` for memoized components.`,
        examples: [],
      },
      {
        title: "Final Thoughts",
        content: `
          \`useCallback\` is a helpful tool, but don’t let it become a crutch. Use it when there’s a clear performance issue or when working with memoized components.  
          Remember, sometimes React just wants to create new functions—it’s okay to let it be happy.`,
        examples: [],
      },
    ],
  },
  useLayoutEffect: {
    title: "useLayoutEffect: React's Overachiever Hook",
    slug: "uselayouteffect",
    intro: `
      \`useLayoutEffect\` is like \`useEffect\` but with a stronger Type A personality.  
      While \`useEffect\` runs asynchronously *after* the browser paints the screen, \`useLayoutEffect\` runs **synchronously**, right after React calculates the DOM changes but *before* it updates the screen.
      If you need to measure the DOM or apply styles immediately, this is your tool.`,
    sections: [
      {
        title: "What is useLayoutEffect?",
        content: `
          \`useLayoutEffect\` runs during the layout phase of the rendering process.  
          **Syntax**:  
          \`\`\`javascript
          useLayoutEffect(() => {
            // Your DOM measurement or synchronous updates
          }, [dependencies]);
          \`\`\`  
          - It's like a blocking, "wait-for-me" version of \`useEffect\`.  
          - Use it when timing is critical, such as measuring DOM elements or adjusting layout.`,
        examples: [],
      },
      {
        title: "Example 1: Measuring DOM Elements",
        content: `
          Suppose you need to measure the size of a DOM element before React paints the screen. Here's how you can flex your \`useLayoutEffect\` skills:`,
        examples: [
          {
            title: "DOM Measurement Example",
            code: `
              import React, { useLayoutEffect, useRef, useState } from 'react';

              const LayoutEffectDemo = () => {
                const divRef = useRef(null);
                const [width, setWidth] = useState(0);

                useLayoutEffect(() => {
                  if (divRef.current) {
                    const { width } = divRef.current.getBoundingClientRect();
                    setWidth(width);
                  }
                }, []);

                return (
                  <div>
                    <h1>Div Width: {width}px</h1>
                    <div ref={divRef} style={{ width: '50%', border: '1px solid black' }}>
                      Resize the window to see me change!
                    </div>
                  </div>
                );
              };

              export default LayoutEffectDemo;

              // useLayoutEffect ensures the width is measured before the browser paints.
            `,
          },
        ],
      },
      {
        title: "Example 2: Synchronizing Styles",
        content: `
          Sometimes you need to make immediate style changes that React's normal lifecycle can't handle.  
          \`useLayoutEffect\` lets you modify styles or classes before the screen updates.`,
        examples: [
          {
            title: "Synchronized Styles Example",
            code: `
              import React, { useLayoutEffect, useRef } from 'react';

              const StyleSynchronizer = () => {
                const boxRef = useRef(null);

                useLayoutEffect(() => {
                  if (boxRef.current) {
                    boxRef.current.style.backgroundColor = 'lightblue';
                    boxRef.current.style.color = 'darkblue';
                  }
                }, []);

                return (
                  <div ref={boxRef} style={{ width: '200px', height: '100px', textAlign: 'center', lineHeight: '100px' }}>
                    Synchronized!
                  </div>
                );
              };

              export default StyleSynchronizer;

              // The styles are applied before the user sees any mismatched content.
            `,
          },
        ],
      },
      {
        title: "When to Use useLayoutEffect",
        content: `
          Use \`useLayoutEffect\` when:
          - You need to measure DOM elements before the browser paints.  
          - You want to make style or layout adjustments immediately after React renders.

          Avoid using \`useLayoutEffect\` unless absolutely necessary—it blocks rendering and can hurt performance if overused.`,
        examples: [],
      },
      {
        title: "Gotchas and Best Practices",
        content: `
          - **Performance**: \`useLayoutEffect\` blocks the browser’s paint phase. Use it sparingly.  
          - **Server-Side Rendering (SSR)**: It doesn’t work on the server. If you're using SSR, be cautious; React will skip this hook entirely on the server.  
          - **Debugging**: Since it runs synchronously, debugging \`useLayoutEffect\` issues can feel like untangling Christmas lights.`,
        examples: [],
      },
      {
        title: "Final Thoughts",
        content: `
          \`useLayoutEffect\` is your secret weapon for those "last resort" scenarios where timing is critical.  
          Use it wisely—React’s asynchronous rendering model is there for a reason, and blocking it can lead to performance headaches.  
          That said, when you need precision, \`useLayoutEffect\` delivers like a micromanaging overachiever who doesn't trust anyone else.`,
        examples: [],
      },
    ],
  },
  useImperativeHandle: {
    title: "useImperativeHandle: The 'Backdoor Hook' for Refs",
    slug: "useimperativehandle",
    intro: `
      Normally, refs give parents direct access to DOM elements or component instances.  
      But what if you want to **control what gets exposed**? Enter \`useImperativeHandle\`.  
      With this hook, you can specify exactly what your parent component can access in the child.  
      It's like giving someone a key but only letting them open certain doors.`,
    sections: [
      {
        title: "What is useImperativeHandle?",
        content: `
          \`useImperativeHandle\` is used in conjunction with \`React.forwardRef\` to customize the \`ref\` object that a parent component gets from a child.  
          **Syntax:**  
          \`\`\`javascript
          useImperativeHandle(ref, () => ({
            method1: () => { ... },
            method2: () => { ... }
          }), [dependencies]);
          \`\`\`  
          - The first argument is the \`ref\` passed from the parent.  
          - The second argument is a function that returns an object of properties/methods to expose.  
          - The third argument is optional and contains dependencies that trigger the recalculation.`,
        examples: [],
      },
      {
        title: "Example 1: Customizing a Button's Ref",
        content: `
          Suppose you want a parent to control a button's behavior but only expose specific methods, like enabling or disabling it.`,
        examples: [
          {
            title: "Exposing Custom Methods via Ref",
            code: `
              import React, { useImperativeHandle, forwardRef, useRef, useState } from 'react';

              const CustomButton = forwardRef((props, ref) => {
                const [disabled, setDisabled] = useState(false);

                useImperativeHandle(ref, () => ({
                  disable: () => setDisabled(true),
                  enable: () => setDisabled(false)
                }));

                return (
                  <button disabled={disabled}>
                    {disabled ? 'Disabled' : 'Enabled'}
                  </button>
                );
              });

              const ParentComponent = () => {
                const buttonRef = useRef();

                return (
                  <div>
                    <CustomButton ref={buttonRef} />
                    <button onClick={() => buttonRef.current.disable()}>Disable Button</button>
                    <button onClick={() => buttonRef.current.enable()}>Enable Button</button>
                  </div>
                );
              };

              export default ParentComponent;
            `,
          },
        ],
      },
      {
        title: "Example 2: Managing Focus",
        content: `
          Imagine a child component that renders an input field. You want the parent to control when it gains focus, but nothing else.`,
        examples: [
          {
            title: "Focus Management Example",
            code: `
              import React, { useImperativeHandle, forwardRef, useRef } from 'react';

              const CustomInput = forwardRef((props, ref) => {
                const inputRef = useRef();

                useImperativeHandle(ref, () => ({
                  focus: () => inputRef.current.focus()
                }));

                return <input ref={inputRef} placeholder="Type here..." />;
              });

              const ParentComponent = () => {
                const inputRef = useRef();

                return (
                  <div>
                    <CustomInput ref={inputRef} />
                    <button onClick={() => inputRef.current.focus()}>Focus Input</button>
                  </div>
                );
              };

              export default ParentComponent;
            `,
          },
        ],
      },
      {
        title: "When to Use useImperativeHandle",
        content: `
          Use \`useImperativeHandle\` when:
          - You need to expose **specific methods or properties** of a child component to its parent.  
          - You want to encapsulate logic inside a child component but still allow the parent to trigger certain actions.

          Avoid \`useImperativeHandle\` for general state management—it's a tool for **specialized use cases**.`,
        examples: [],
      },
      {
        title: "Gotchas and Best Practices",
        content: `
          - **Only use with forwardRef**: Without \`React.forwardRef\`, \`useImperativeHandle\` won’t work.  
          - **Encapsulation**: Don’t expose everything—keep your component's internals private unless absolutely necessary.  
          - **Use Sparingly**: If you find yourself using \`useImperativeHandle\` everywhere, you’re probably overcomplicating your design.`,
        examples: [],
      },
      {
        title: "Final Thoughts",
        content: `
          \`useImperativeHandle\` is like a VIP pass for refs—it lets you decide which areas are off-limits and which ones are open for business.  
          While powerful, it should be your last resort for communication between parent and child. For everything else, props and callbacks are still your best friends.`,
        examples: [],
      },
    ],
  },
  useTransition: {
    title: "useTransition: The Hook for Smooth User Experiences",
    slug: "usetransition",
    intro: `
      \`useTransition\` is a React hook introduced in React 18 to help manage **concurrent rendering**.  
      It lets you prioritize high-priority tasks (like keeping the UI responsive) over low-priority ones (like expensive state updates).  
      It's like saying, "Don't stress the user out while you're working hard in the background."`,
    sections: [
      {
        title: "What is useTransition?",
        content: `
          React’s \`useTransition\` allows you to defer non-urgent updates while ensuring that urgent ones (like user input) remain smooth.  
          **Syntax:**  
          \`\`\`javascript
          const [isPending, startTransition] = useTransition();
          \`\`\`  
          - **isPending**: A boolean that tells you if a transition is still in progress.  
          - **startTransition**: A function you use to wrap non-urgent state updates.`,
        examples: [],
      },
      {
        title: "Example 1: Avoiding UI Freezes",
        content: `
          Let’s say you’re rendering a huge list of items, and each state change causes the entire list to re-render. Without \`useTransition\`, your UI would freeze.`,
        examples: [
          {
            title: "Basic useTransition Example",
            code: `
              import React, { useState, useTransition } from 'react';

              const BigList = () => {
                const [input, setInput] = useState('');
                const [list, setList] = useState([]);
                const [isPending, startTransition] = useTransition();

                const handleChange = (e) => {
                  const value = e.target.value;
                  setInput(value);

                  // Wrap the expensive state update in startTransition
                  startTransition(() => {
                    const newList = Array(20000)
                      .fill(null)
                      .map((_, index) => \`\${value} - Item \${index + 1}\`);
                    setList(newList);
                  });
                };

                return (
                  <div>
                    <input
                      type="text"
                      value={input}
                      onChange={handleChange}
                      placeholder="Type something..."
                    />
                    {isPending && <p>Loading...</p>}
                    <ul>
                      {list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              };

              export default BigList;
            `,
          },
        ],
      },
      {
        title: "Example 2: Combining Urgent and Non-Urgent Updates",
        content: `
          Sometimes, you need to handle both urgent updates (e.g., keeping user input responsive) and non-urgent ones (e.g., updating a large UI section).  
          Here's how \`useTransition\` helps you juggle them like a pro.`,
        examples: [
          {
            title: "Keeping Input Responsive",
            code: `
              import React, { useState, useTransition } from 'react';

              const SearchList = () => {
                const [query, setQuery] = useState('');
                const [filteredItems, setFilteredItems] = useState([]);
                const [isPending, startTransition] = useTransition();

                const items = Array(10000)
                  .fill(null)
                  .map((_, index) => \`Item \${index + 1}\`);

                const handleSearch = (e) => {
                  const value = e.target.value;
                  setQuery(value);

                  startTransition(() => {
                    const filtered = items.filter((item) =>
                      item.toLowerCase().includes(value.toLowerCase())
                    );
                    setFilteredItems(filtered);
                  });
                };

                return (
                  <div>
                    <input
                      type="text"
                      value={query}
                      onChange={handleSearch}
                      placeholder="Search items..."
                    />
                    {isPending && <p>Updating list...</p>}
                    <ul>
                      {filteredItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              };

              export default SearchList;
            `,
          },
        ],
      },
      {
        title: "When to Use useTransition",
        content: `
          Use \`useTransition\` when:
          - You have **expensive state updates** that can make the UI sluggish.  
          - You want to keep the app responsive while offloading less important tasks.  
          - You're building user interfaces with **large lists, heavy calculations, or slow re-renders**.`,
        examples: [],
      },
      {
        title: "Gotchas and Best Practices",
        content: `
          - **Not for Urgent Updates**: Never use \`useTransition\` for critical updates like user input or form validation.  
          - **Don’t Overuse**: Only use it for genuinely expensive operations—otherwise, you’re just adding unnecessary complexity.  
          - **Combine with Suspense**: For async operations, combine \`useTransition\` with \`Suspense\` for maximum smoothness.`,
        examples: [],
      },
      {
        title: "Final Thoughts",
        content: `
          \`useTransition\` is like your app’s chill pill. It ensures users don’t see laggy or frozen screens, even when your component is doing some heavy lifting.  
          Use it wisely, and your app will feel as smooth as butter. Abuse it, and you might end up debugging a sluggish mess.`,
        examples: [],
      },
    ],
  },
  useDeferredValue: {
    title: "useDeferredValue: Procrastination, but Make It Productive",
    slug: "usedeferredvalue",
    intro: `
      \`useDeferredValue\` is a React hook designed to help manage concurrent rendering by deferring updates to **non-urgent values**.  
      It ensures your app remains responsive by allowing high-priority updates (like user input) to take precedence over slower, computationally expensive renders.`,
    sections: [
      {
        title: "What is useDeferredValue?",
        content: `
          Think of \`useDeferredValue\` as a way to tell React:  
          "Hey, this value can wait. Let me deal with more important stuff first."  
          It’s especially useful when dealing with heavy computations or large re-renders triggered by a rapidly changing state.  
          **Syntax:**  
          \`\`\`javascript
          const deferredValue = useDeferredValue(value);
          \`\`\`  
          - **value**: The value you want to defer.  
          - **deferredValue**: A version of the input value that updates more slowly.`,
      },
      {
        title: "Example 1: Filtering a Large List",
        content: `
          Imagine you’re filtering a massive list of items. Without \`useDeferredValue\`, every keystroke could trigger an expensive re-render, making your app feel sluggish.`,
        examples: [
          {
            title: "Basic useDeferredValue Example",
            code: `
              import React, { useState, useDeferredValue } from 'react';

              const FilterList = () => {
                const [input, setInput] = useState('');
                const deferredInput = useDeferredValue(input);

                const items = Array.from({ length: 10000 }, (_, i) => \`Item \${i + 1}\`);

                // Expensive filtering logic
                const filteredItems = items.filter((item) =>
                  item.toLowerCase().includes(deferredInput.toLowerCase())
                );

                return (
                  <div>
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type to filter..."
                    />
                    <ul>
                      {filteredItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              };

              export default FilterList;
            `,
          },
        ],
      },
      {
        title: "How Does It Work?",
        content: `
          The key here is \`useDeferredValue\`.  
          - The input state updates immediately, so the UI stays responsive.  
          - The deferred value updates a bit later, ensuring the heavy filtering operation doesn’t block user interactions.`,
        examples: [],
      },
      {
        title: "When to Use useDeferredValue",
        content: `
          Use \`useDeferredValue\` when:
          - You’re working with **expensive computations** that depend on rapidly changing inputs (e.g., searching, filtering).  
          - You need to prioritize user interaction over non-urgent updates.`,
        examples: [],
      },
      {
        title: "Gotchas and Best Practices",
        content: `
          - **Not for Async Work**: \`useDeferredValue\` doesn’t magically make async operations faster. Use \`useTransition\` or Suspense for that.  
          - **UI Jitters**: There might be a noticeable lag in updates—don’t overdo it.  
          - **Combine with useTransition**: For a power combo, use \`useDeferredValue\` alongside \`useTransition\` for the best of both worlds.`,
        examples: [],
      },
      {
        title: "Final Thoughts",
        content: `
          \`useDeferredValue\` is React’s way of saying, “Don’t sweat the small stuff… yet.”  
          Use it wisely, and you’ll keep your app buttery smooth even when handling large datasets or expensive computations.  
          Just remember: too much procrastination can lead to missed deadlines—and bad UX.`,
        examples: [],
      },
    ],
  },
  useId: {
    title:
      "useId: Identifiers that Won't Let You Down (Unlike That One Friend)",
    slug: "useid",
    intro: `
      \`useId\` is a hook in React that guarantees unique, consistent IDs for your components.  
      You can use it for creating IDs that need to remain stable across re-renders.  
      No more ID conflicts. No more trying to remember which input had which ID (or copy-pasting them like a caveman).`,
    sections: [
      {
        title: "What is useId?",
        content: `
          You know how in forms and components, we sometimes use IDs for labels, inputs, and other elements?  
          The problem: React re-renders, and suddenly your IDs start to clash, causing unexpected behavior.  
          Enter \`useId\`:  
          - It generates a unique ID for each render, ensuring no duplication.  
          - It’s guaranteed to work, even across server-side rendering (SSR) and client-side rendering (CSR).  
          **Syntax:**  
          \`\`\`javascript
          const id = useId();
          \`\`\`  
          - **id**: The stable, unique identifier for your component or element.`,
      },
      {
        title: "Example 1: Creating Unique IDs for Forms",
        content: `
          Let's say you're building a form with multiple inputs. Without a unique ID for each element, you might get unpredictable results when React re-renders. \`useId\` will save the day.`,
        examples: [
          {
            title: "Basic useId Example",
            code: `
              import React, { useId } from 'react';

              const MyForm = () => {
                const id = useId();

                return (
                  <form>
                    <label htmlFor={\`\${id}-input\`}>Username:</label>
                    <input id={\`\${id}-input\`} name="username" type="text" />
                    
                    <label htmlFor={\`\${id}-password\`}>Password:</label>
                    <input id={\`\${id}-password\`} name="password" type="password" />
                    
                    <button type="submit">Submit</button>
                  </form>
                );
              };

              export default MyForm;
            `,
          },
        ],
      },
      {
        title: "How Does It Work?",
        content: `
          Every time your component is rendered, \`useId\` generates a unique ID.  
          You can use it to ensure that elements like labels, inputs, and even buttons get their unique identifiers without worrying about duplication.  
          It's especially helpful when you have dynamic forms or lists of items where IDs need to be unique across re-renders.`,
        examples: [],
      },
      {
        title: "When to Use useId",
        content: `
          Use \`useId\` when:
          - You need unique identifiers for dynamically generated elements, like form fields or lists.  
          - You want to ensure that IDs remain stable across renders (including SSR).  
          - You’re tired of writing random ID strings yourself and want React to handle it for you (let's be real, who can remember 20 random strings?).`,
        examples: [],
      },
      {
        title: "Gotchas and Best Practices",
        content: `
          - **No side effects**: \`useId\` is guaranteed to always return the same value during a component's lifecycle, even across re-renders. It’s not affected by state or props.  
          - **SSR Considerations**: It works well with server-side rendering, ensuring that IDs remain consistent when transitioning from SSR to client-side rendering.  
          - **Do not override**: Don’t try to manually override IDs generated by \`useId\`. It’s React’s job to handle that uniqueness—let it do its thing.`,
        examples: [],
      },
      {
        title: "Final Thoughts",
        content: `
          \`useId\` is one of those unsung heroes in React, solving the problem of generating unique IDs without headaches or confusion.  
          It’s like the friend who remembers everyone’s names at a party (except it doesn’t forget, and you don’t have to buy it a drink).  
          Keep it in your toolkit, and you’ll never have to worry about ID collisions again.`,
        examples: [],
      },
    ],
  },
};
