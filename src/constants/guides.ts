export const guides = [
  {
    id: "0",
    title: "Counter",
    slug: "counter",
    description:
      "This guide walks you through creating a simple counter component in React that displays a number and has two buttons: Increment and Decrement. We’ll use the useState hook to manage the counter value and add a challenge to ensure the counter value doesn’t go below zero.",
    steps: [
      {
        title: "Create the Counter Component",
        description:
          "In the src folder, create a new file named Counter.js and define the counter component. Follow the steps below:",
        code: `
  import React, { useState } from 'react';
  
  const Counter = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(count + 1);
    const decrement = () => {
      if (count > 0) setCount(count - 1);
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '20px', color: "#FFFFFF" }}>
        <h1>Simple Counter</h1>
        <h2>{count}</h2>
        <div>
          <button onClick={increment} style={{ margin: '5px', padding: '10px 20px' }}>
            Increment
          </button>
          <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px' }}>
            Decrement
          </button>
        </div>
      </div>
    );
  };
  
  export default Counter;
          `,
      },
    ],
    explanation: [
      {
        title: "How It Works",
        description:
          "This section explains how the counter component functions and the purpose of each part.",
        details: [
          {
            topic: "useState Hook",
            explanation:
              "useState(0) initializes the counter with 0. setCount updates the counter value.",
          },
          {
            topic: "Increment Function",
            explanation:
              "Adds 1 to the counter value using setCount(count + 1).",
          },
          {
            topic: "Decrement Function",
            explanation:
              "Checks if the current value is greater than 0 before decrementing.",
          },
          {
            topic: "Buttons",
            explanation:
              'The "Increment" button calls increment on click. The "Decrement" button calls decrement on click.',
          },
          {
            topic: "Inline Styles",
            explanation:
              "Adds basic styling to the buttons for a better appearance.",
          },
        ],
      },
    ],
    previous: "Home",
    previous_slug: "/",
    next: "Background Color Changer",
    next_slug: "background-color-changer",
  },
  {
    id: "1",
    title: "Background Color Changer",
    slug: "background-color-changer",
    description:
      "This guide walks you through creating a component that changes the page's background color when a button is clicked. The background color is generated randomly on each click. We’ll use the useState hook to manage the color and useEffect to update the background style dynamically.",
    steps: [
      {
        title: "Create the Background Color Changer Component",
        description:
          "In the src folder, create a new file named BackgroundChanger.js and define the component. Follow the steps below:",
        code: `
    import React, { useState, useEffect } from "react";
  
    const BackgroundChanger = () => {
      const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // Initial color: white
  
      // Update the body's background color whenever the color state changes
      useEffect(() => {
        document.body.style.backgroundColor = backgroundColor;
      }, [backgroundColor]);
  
      // Generate a random hexadecimal color
      const generateRandomColor = () => {
        const randomColor = \`#\${Math.floor(Math.random() * 16777215).toString(16)}\`;
        setBackgroundColor(randomColor);
      };
  
      return (
        <div style={{ textAlign: "center", marginTop: "50px", backgroundColor: backgroundColor, width: "100%", padding: "10px 20px" }}>
          <h1>Background Color Changer</h1>
          <p>
            Current Color: <strong>{backgroundColor}</strong>
          </p>
          <button
            onClick={generateRandomColor}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Change Background Color
          </button>
        </div>
      );
    };
  
    export default BackgroundChanger;
        `,
      },
    ],
    explanation: [
      {
        title: "How It Works",
        description:
          "This section explains how the background color changer component functions and the purpose of each part.",
        details: [
          {
            topic: "useState Hook",
            explanation:
              "useState('#ffffff') initializes the background color with white. setBackgroundColor updates the color state with a new value.",
          },
          {
            topic: "useEffect Hook",
            explanation:
              "Monitors the color state and applies the new value to the document's background whenever it changes.",
          },
          {
            topic: "Random Color Generation",
            explanation:
              "The generateRandomColor function creates a random hexadecimal color using Math.random and updates the state.",
          },
          {
            topic: "Button",
            explanation:
              "The button triggers the generateRandomColor function when clicked, changing the background color.",
          },
          {
            topic: "Inline Styles",
            explanation:
              "Adds basic styling to the button for better aesthetics.",
          },
        ],
      },
    ],
    previous: "Counter",
    previous_slug: "counter",
    next: "To-Do List",
    next_slug: "to-do-list",
  },
  {
    id: "2",
    title: "To-Do List",
    slug: "to-do-list",
    description:
      "This guide walks you through building a fully functional to-do list application using TypeScript with React. Users can add, remove, mark tasks as completed, and filter tasks. The useState hook is utilized for state management.",
    steps: [
      {
        title: "Create the To-Do List Component",
        description:
          "In this step, we define the task type, set up state management, implement task addition, removal, completion toggling, filtering, and render the component. Follow the code below:",
        code: `
  import React, { useState } from "react";
  
  type Task = {
    id: number;
    text: string;
    completed: boolean;
  };
  
  const TodoList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [input, setInput] = useState<string>("");
    const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");
  
    const addTask = () => {
      if (input.trim()) {
        setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
        setInput("");
      }
    };
  
    const removeTask = (id: number) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };
  
    const toggleTask = (id: number) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };
  
    const filteredTasks = tasks.filter((task) => {
      if (filter === "all") return true;
      if (filter === "pending") return !task.completed;
      if (filter === "completed") return task.completed;
      return false;
    });
  
    return (
      <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <h1>To-Do List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={addTask}>Add</button>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as "all" | "pending" | "completed")}
          style={{ padding: "8px", color: "black" }}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <span onClick={() => toggleTask(task.id)}>{task.text}</span>
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TodoList;
        `,
      },
    ],
    explanation: [
      {
        title: "Key Concepts",
        description:
          "This section explains the main features of the application.",
        details: [
          {
            topic: "TypeScript Types",
            explanation:
              "Provides type safety for the task structure and component state.",
          },
          {
            topic: "useState Hook",
            explanation:
              "Manages the tasks array, input text, and filter state.",
          },
          {
            topic: "Event Handlers",
            explanation:
              "Functions like `addTask`, `toggleTask`, and `removeTask` handle user actions efficiently.",
          },
          {
            topic: "Filter Tasks",
            explanation:
              "The filter dropdown dynamically changes the displayed tasks based on their status.",
          },
        ],
      },
    ],
    previous: "Background Color Changer",
    previous_slug: "background-color-changer",
    next: "Basic Timer",
    next_slug: "basic-timer",
  },
  {
    id: "3",
    title: "Basic Timer",
    slug: "basic-timer",
    description:
      "This guide walks you through building a timer component that counts seconds using React's `useState` and `useEffect` hooks. The timer includes start, pause, and reset functionality.",
    steps: [
      {
        title: "Create the Timer Component",
        description:
          "In this step, we'll define the state for tracking time, the running status, and implement the necessary buttons for controlling the timer. Follow the code below:",
        code: `
  import React, { useState, useEffect } from "react";
  
  const Timer = () => {
    const [time, setTime] = useState(0); // State to track the elapsed time
    const [isRunning, setIsRunning] = useState(false); // State to track whether the timer is running
  
    useEffect(() => {
      let interval: NodeJS.Timeout | null = null;
  
      if (isRunning) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 1); // Increment the time every second
        }, 1000);
      } else if (interval) {
        clearInterval(interval); // Stop the interval when the timer is paused
      }
  
      return () => {
        if (interval) clearInterval(interval); // Cleanup the interval on unmount or when paused
      };
    }, [isRunning]); // Dependency on isRunning to control the timer
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Timer: {time}s</h1>
        <div style={{ display: "flex", gap: "4px" }}>
          <button onClick={() => setIsRunning(true)}>Start</button>
          <button onClick={() => setIsRunning(false)}>Pause</button>
          <button
            onClick={() => {
              setTime(0); // Reset the timer to 0
              setIsRunning(false); // Pause the timer
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  };
  
  export default Timer;
        `,
      },
    ],
    explanation: [
      {
        title: "Key Concepts",
        description:
          "This section explains the core concepts and features of the Timer component.",
        details: [
          {
            topic: "useState Hook",
            explanation:
              "Used to track the `time` (seconds elapsed) and `isRunning` (whether the timer is running or paused).",
          },
          {
            topic: "useEffect Hook",
            explanation:
              "Manages the interval for updating the timer, starts the timer when `isRunning` is `true`, and stops the interval when `isRunning` is `false`.",
          },
          {
            topic: "Event Handlers",
            explanation:
              "The `Start`, `Pause`, and `Reset` buttons control the timer's behavior, with `Start` setting the timer running, `Pause` stopping it, and `Reset` resetting the time to 0.",
          },
        ],
      },
    ],
    previous: "To-Do List",
    previous_slug: "to-do-list",
    next: "Name Filter",
    next_slug: "name-filter",
  },
  {
    id: "4",
    title: "Name Filter",
    slug: "name-filter",
    description:
      "This guide walks you through creating a list filter component that allows users to filter a list of names based on user input. It uses React's `useState` hook to manage the input and filter the list dynamically.",
    steps: [
      {
        title: "Create the List Filter Component",
        description:
          "In this step, we'll define the state for managing the filter text and implement the necessary functionality to filter the list of names. Follow the code below:",
        code: `
  import React, { useState } from "react";
  
  const NameFilter = () => {
    const [filter, setFilter] = useState(""); // State to track the filter input
    const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank"]; // Sample list of names
  
    const filteredNames = names.filter((name) =>
      name.toLowerCase().includes(filter.toLowerCase()) // Ignore case when filtering
    );
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Name Filter</h1>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)} // Update the filter state on input change
          placeholder="Filter names..."
          style={{ padding: "10px", width: "100%", marginBottom: "20px", color: "black" }}
        />
        <ul>
          {filteredNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default NameFilter;
        `,
      },
    ],
    explanation: [
      {
        title: "Key Concepts",
        description:
          "This section explains the core concepts and features of the Name Filter component.",
        details: [
          {
            topic: "useState Hook",
            explanation:
              "Used to track the `filter` state, which controls the user input for filtering the list.",
          },
          {
            topic: "Filtering Logic",
            explanation:
              "The list of names is filtered using the `filter` method, which compares the names to the filter text (ignoring case).",
          },
          {
            topic: "Event Handling",
            explanation:
              "The `onChange` event handler updates the `filter` state as the user types, dynamically updating the displayed list.",
          },
        ],
      },
    ],
    previous: "Basic Timer",
    previous_slug: "basic-timer",
    next: "Registration Form",
    next_slug: "registration-form",
  },
  {
    id: "5",
    title: "Registration Form",
    slug: "registration-form",
    description:
      "This guide walks you through creating a simple registration form with React. It includes fields for name, email, and password, and displays a personalized welcome message upon submission. The form uses React's `useState` hook to manage the input values and validates the form before submission.",
    steps: [
      {
        title: "Create the Registration Form Component",
        description:
          "In this step, we'll create a form with input fields for name, email, and password, and handle their state using `useState`. We'll also add logic to validate the fields and display a welcome message upon submission. Follow the code below:",
        code: `
  import React, { useState } from "react";
  
  const RegistrationForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // Validation state
    const [error, setError] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      // Check if all fields are filled
      if (!name || !email || !password) {
        setError("All fields are required!");
        return;
      }
  
      // Clear error and set submission state
      setError("");
      setIsSubmitted(true);
    };
  
    if (isSubmitted) {
      return <WelcomeMessage name={name} />;
    }
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              style={{ color: "black" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{ color: "black" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{ color: "black" }}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
  
  const WelcomeMessage = ({ name }: { name: string }) => {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome, {name}!</h1>
        <p>Your registration was successful.</p>
      </div>
    );
  };
  
  export default RegistrationForm;
        `,
      },
    ],
    explanation: [
      {
        title: "Key Concepts",
        description:
          "This section explains the core concepts and features of the Registration Form component.",
        details: [
          {
            topic: "useState Hook",
            explanation:
              "Used to manage the state for the form fields (`name`, `email`, and `password`) and the submission status (`isSubmitted`).",
          },
          {
            topic: "Form Validation",
            explanation:
              "Ensures all fields are filled before submission. Displays an error message if validation fails.",
          },
          {
            topic: "Conditional Rendering",
            explanation:
              "Uses conditional rendering to switch between the form and the welcome message after successful submission.",
          },
          {
            topic: "Event Handling",
            explanation:
              "The `onChange` event handlers update the state as the user types, and the `onSubmit` handler validates and submits the form.",
          },
        ],
      },
    ],
    previous: "Name Filter",
    previous_slug: "name-filter",
    next: "Data Fetching",
    next_slug: "data-fetching",
  },
  {
    id: "6",
    title: "Data Fetching",
    slug: "data-fetching",
    description:
      "This guide walks you through creating a React component that fetches and displays data from a public API. The application uses React's `useEffect` and `useState` hooks to manage data fetching, loading states, and reloading functionality.",
    steps: [
      {
        title: "Create the Data Fetching Component",
        description:
          "In this step, we'll define the state for managing the fetched data and loading status, and implement the logic for making an API request using `fetch`. We'll also add a button to reload the data and a loading indicator. Follow the code below:",
        code: `
  import React, { useState, useEffect } from "react";

  interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  const DataFetching = () => {
    const [posts, setPosts] = useState([]); // State to store the fetched posts
    const [loading, setLoading] = useState(false); // State to track the loading status
  
    // Function to fetch posts from the API
    const fetchPosts = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data.slice(0, 2)); // Limit to 2 posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
  
    // Fetch data on component mount
    useEffect(() => {
      fetchPosts();
    }, []);
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Posts</h1>
        <button onClick={fetchPosts} style={{ marginBottom: "20px" }}>
          Reload Posts
        </button>
        {loading ? (
          <p>Loading...</p> // Show loading indicator
        ) : (
          <ul>
            {posts.map((post: Post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default DataFetchingComponent;
        `,
      },
    ],
    explanation: [
      {
        title: "Key Concepts",
        description:
          "This section explains the core concepts and features of the Data Fetching Application component.",
        details: [
          {
            topic: "useEffect Hook",
            explanation:
              "Used to perform the side effect of fetching data when the component mounts.",
          },
          {
            topic: "useState Hook",
            explanation:
              "Manages the state for the fetched data (`posts`) and the loading status (`loading`).",
          },
          {
            topic: "Loading Indicator",
            explanation:
              "A conditional render displays a loading message while the API request is in progress.",
          },
          {
            topic: "API Fetching",
            explanation:
              "The `fetch` function makes an asynchronous request to a public API and handles the response data.",
          },
          {
            topic: "Reload Button",
            explanation:
              "The button allows the user to manually reload the data by invoking the `fetchPosts` function.",
          },
        ],
      },
    ],
    previous: "Registration Form",
    previous_slug: "registration-form",
    next: "Image Gallery",
    next_slug: "image-gallery",
  },
  {
    id: "7",
    title: "Image Gallery",
    slug: "image-gallery",
    description:
      "This guide walks you through creating a simple image gallery where users can click on an image to see a larger version in a modal. The modal includes functionality for navigating between images and closing the modal.",
    steps: [
      {
        title: "Create the Image Gallery Component",
        description:
          "In this step, we will create a gallery component that displays a set of images. When an image is clicked, it will open in a modal with an option to navigate to the next or previous image. We'll use React's `useState` hook to manage the state for the selected image and the current image index.",
        code: `
  import React, { useState } from "react";
  
  // List of images
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506469717960-433cebe3f181?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 3",
    },
  ];
  
  const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  
    // Handle image click
    const handleImageClick = (index: number) => {
      setSelectedImage(images[index].src);
      setCurrentImageIndex(index);
    };
  
    // Handle close modal
    const closeModal = () => {
      setSelectedImage(null);
    };
  
    // Navigate to the next image
    const nextImage = () => {
      if (currentImageIndex !== null && currentImageIndex < images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
        setSelectedImage(images[currentImageIndex + 1].src);
      }
    };
  
    // Navigate to the previous image
    const prevImage = () => {
      if (currentImageIndex !== null && currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
        setSelectedImage(images[currentImageIndex - 1].src);
      }
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Image Gallery</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              style={{ cursor: "pointer", width: "160px", height: "150px" }}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
  
        {selectedImage && (
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
          >
            <div style={{ position: "relative" }}>
              <button
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "42px",
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                X
              </button>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={prevImage}
                  disabled={currentImageIndex === 0}
                  style={{
                    padding: "10px",
                    background: "white",
                    color: "black",
                    cursor: currentImageIndex === 0 ? "not-allowed" : "pointer",
                  }}
                >
                  {">"}
                </button>
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{
                    width: "500px",
                    height: "auto",
                    border: "2px solid white",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)",
                  }}
                />
                <button
                  onClick={nextImage}
                  disabled={currentImageIndex === images.length - 1}
                  style={{
                    padding: "10px",
                    background: "white",
                    color: "black",
                    cursor: currentImageIndex === images.length - 1 ? "not-allowed" : "pointer",
                  }}
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ImageGallery;
        `,
      },
    ],
    explanation: [
      {
        title: "Key Concepts",
        description:
          "This section explains the core concepts and features of the Image Gallery component.",
        details: [
          {
            topic: "useState Hook",
            explanation:
              "Used to manage the state for the selected image (`selectedImage`) and the current image index (`currentImageIndex`).",
          },
          {
            topic: "Conditional Rendering",
            explanation:
              "The modal is conditionally rendered when the user clicks on an image. The gallery is displayed by default, and the modal appears when an image is selected.",
          },
          {
            topic: "Modal Navigation",
            explanation:
              "The modal includes buttons to navigate to the previous and next images, using the current image index to manage navigation.",
          },
          {
            topic: "Close Button",
            explanation:
              "The close button allows the user to close the modal by setting the `selectedImage` state to `null`.",
          },
        ],
      },
    ],
    previous: "Data Fetching",
    previous_slug: "data-fetching",
    next: "Countdown",
    next_slug: "countdown",
  },
  {
    id: "8",
    title: "Countdown",
    slug: "countdown",
    description:
      "This guide walks you through creating a simple timer where the user sets the number of seconds for the countdown. Once the timer starts, the remaining time is displayed and decreases every second. When it reaches zero, an alert is triggered, notifying the user that the time is up. Additionally, the timer includes pause and reset functionalities.",
    steps: [
      {
        title: "Create the Countdown Component",
        description:
          "In this step, we will create a countdown component that allows the user to input a number of seconds for the countdown. We'll use React's `useState` hook to store the remaining time and `useEffect` to start the countdown when the timer is started.",
        code: `
  import React, { useState, useEffect } from "react";
  
  const Countdown = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);
  
    // Start timer
    const startTimer = () => {
      setTimeRemaining(seconds);
      setIsActive(true);
    };
  
    // Pause timer
    const pauseTimer = () => {
      setIsActive(false);
    };
  
    // Reset timer
    const resetTimer = () => {
      setTimeRemaining(seconds);
      setIsActive(false);
    };
  
    // Countdown logic
    useEffect(() => {
      if (isActive && timeRemaining > 0) {
        const interval = setInterval(() => {
          setTimeRemaining((prev) => prev - 1);
        }, 1000);
  
        return () => clearInterval(interval);
      }
  
      if (timeRemaining === 0) {
        alert("Time is up!");
        setIsActive(false);
      }
    }, [isActive, timeRemaining]);
  
    return (
      <div>
        <h1>Timer with Interval and Alert</h1>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
          placeholder="Enter seconds"
        />
        <div style={{ display: "flex", gap: "4px", alignItems: "center", width: "100%", justifyContent: "center" }}>
          <button onClick={startTimer}>Start</button>
          <button onClick={pauseTimer}>Pause</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
        <p>Time Remaining: {timeRemaining}s</p>
      </div>
    );
  };
  
  export default Countdown;
        `,
      },
    ],
    explanation: [
      {
        title: "Key Concepts",
        description:
          "This section explains the core concepts and features of the Countdown component.",
        details: [
          {
            topic: "useState Hook",
            explanation:
              "Used to manage the state for the initial timer duration (`seconds`), the current timer status (`isActive`), and the remaining time (`timeRemaining`).",
          },
          {
            topic: "useEffect Hook",
            explanation:
              "Used to start the countdown when the timer is active and the time remaining is greater than zero. It also handles clearing the interval when the countdown finishes or the component unmounts.",
          },
          {
            topic: "setInterval Function",
            explanation:
              "This function is used to decrease the remaining time by 1 second every 1000 milliseconds. It is cleared when the timer stops or reaches zero.",
          },
          {
            topic: "Alert",
            explanation:
              "When the countdown reaches zero, an alert is triggered to notify the user that the time has expired.",
          },
        ],
      },
    ],
    previous: "Image Gallery",
    previous_slug: "image-gallery",
    next: "Tabs Navigation",
    next_slug: "tabs-navigation",
  },
  {
    id: "9",
    title: "Tabs Navigation",
    slug: "tabs-navigation",
    description:
      "This guide walks you through creating a simple tab navigation system where each tab displays different content. The active tab will be visually highlighted, and clicking on different tabs will render corresponding content. This example uses React's `useState` hook to manage the active tab and `map()` for rendering each tab dynamically.",
    steps: [
      {
        title: "Create the Tabs Component",
        description:
          "In this step, we will create a tabs component that displays a set of tabs and their corresponding content. We'll use the `useState` hook to track the active tab and dynamically render its content. Each tab will be clickable and, when clicked, will activate its corresponding content area.",
        code: `
  import React, { useState } from "react";
  
  // Tab content data
  const tabs = [
    { id: 1, title: 'About', content: 'This is the About tab content.' },
    { id: 2, title: 'Contact', content: 'This is the Contact tab content.' },
    { id: 3, title: 'Services', content: 'This is the Services tab content.' },
  ];
  
  const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);
  
    const handleTabClick = (tabId: number) => {
      setActiveTab(tabId);
    };
  
    return (
      <div>
        <h1>Tabs Navigation</h1>
  
        // Tabs Navigation
        <div style={{ display: 'flex', cursor: 'pointer' }}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              style={{
                padding: '10px 20px',
                marginRight: '5px',
                border: '1px solid #ccc',
                backgroundColor: activeTab === tab.id ? "#ff0000" : "#f8f9fa",
                color: activeTab === tab.id ? 'white' : 'black',
                fontWeight: activeTab === tab.id ? 'bold' : 'normal',
              }}
            >
              {tab.title}
            </div>
          ))}
        </div>
  
        // Tab Content
        <div style={{ marginTop: '20px' }}>
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id}>
                  <h2>{tab.title}</h2>
                  <p>{tab.content}</p>
                </div>
              )
          )}
        </div>
      </div>
    );
  };
  
  export default Tabs;
        `,
      },
    ],
    explanation: [
      {
        title: "Key Concepts",
        description:
          "This section explains the core concepts and features of the Tabs component.",
        details: [
          {
            topic: "useState Hook",
            explanation:
              "Used to manage the state for the active tab (`activeTab`). The state controls which tab is currently active and displayed.",
          },
          {
            topic: "Event Handling",
            explanation:
              "The `handleTabClick` function is used to change the active tab when a user clicks on a tab. This function updates the `activeTab` state to the selected tab's id.",
          },
          {
            topic: "Conditional Rendering",
            explanation:
              "Conditional rendering is used to display the content of the active tab only. This ensures that the content for inactive tabs is not displayed.",
          },
          {
            topic: "Dynamic Styling",
            explanation:
              "Dynamic styles are applied to the active tab. The tab’s background color changes based on whether it is selected, and the text is made bold to highlight the active tab.",
          },
        ],
      },
    ],
    previous: "Countdown Timer",
    previous_slug: "countdown",
    next: "Home",
    next_slug: "/",
  },
];
