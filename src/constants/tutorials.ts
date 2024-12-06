export const tutorials = {
  functionalComponents: {
    title: "Functional Components",
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
};
