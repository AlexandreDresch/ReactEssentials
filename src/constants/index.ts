export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Base",
    url: "#base",
  },
  {
    id: "2",
    title: "Hooks",
    url: "#hooks",
  },
  {
    id: "3",
    title: "Guides",
    url: "#guides",
  },
];

export const roadmapItems = [
  {
    title: "Counter",
    slug: "counter",
    level: "Beginner",
    description:
      "This guide walks you through creating a simple counter component in React that displays a number and has two buttons: 'Increment' and 'Decrement.' We’ll use the useState hook to manage the counter value and add a challenge to ensure the counter value doesn’t go below zero.",
  },
  {
    title: "Change Background Color",
    slug: "background-color-changer",
    level: "Beginner",
    description:
      "This is a guide to creating a React component that changes the page's background color when a button is clicked. The color will be generated randomly on each click.",
  },
  {
    title: "To-Do List",
    slug: "to-do-list",
    level: "Beginner",
    description:
      "In this tutorial, we will create a To-Do List App using React. The app will allow users to add and remove tasks. As a challenge, we’ll also enable users to mark tasks as completed and filter the tasks to display only the pending ones.",
  },
  {
    title: "Basic Timer",
    slug: "basic-timer",
    level: "Beginner",
    description:
      "This guide walks you through building a timer that counts seconds using React. You’ll also learn to add pause and reset functionality for the timer.",
  },
  {
    title: "Name Filter",
    slug: "name-filter",
    level: "Beginner",
    description:
      "Here we will guide you through building a Name Filter component that renders a list of names. We'll use React’s useState hook to control the input field for filtering and the map function to display only the items that match the filter. Additionally, we’ll ensure the filtering is case-insensitive.",
  },
  {
    title: "Registration Form",
    slug: "registration-form",
    level: "Beginner",
    description:
      "In this guide, you’ll learn how to build a simple registration form using React. The form will have fields for name, email, and password. Upon submission, a welcome message will be displayed with the entered information. You’ll use the useState hook for state management and create a separate component for the welcome message. As a bonus challenge, we’ll add basic form validation to ensure all fields are filled out before submission.",
  },
  {
    title: "Data Fetching",
    slug: "data-fetching",
    level: "Beginner",
    description:
      "In this tutorial, we’ll create a React component that fetches data from a public API and displays it in a list. We’ll use useEffect to fetch the data when the component loads, and add functionality to reload the data with a button. Additionally, we'll display a loading indicator while the data is being fetched.",
  },
  {
    title: "Image Gallery",
    slug: "image-gallery",
    level: "Intermediary",
    description:
      "This guide walks you through creating a simple image gallery where users can click on an image to see a larger version in a modal. We'll use React's useState hook to manage the selected image and render the modal conditionally. We will also add navigation to allow users to move between images in the modal.",
  },
  {
    title: "Countdown",
    slug: "countdown",
    level: "Intermediary",
    description:
      "Here, we'll build a simple timer that counts down from a user-defined number of seconds. Once the timer reaches zero, an alert will pop up to notify the user that the time is up. We will use React's useState to manage the timer state and useEffect to handle the countdown logic. Additionally, we'll include buttons to pause and reset the timer.",
  },
  {
    title: "Tabs Navigation",
    slug: "tabs-navigation",
    level: "Intermediary",
    description:
      "In this tutorial, we will create a simple interface with tabs. Each tab will display different content when clicked (for example, an About tab and a Contact tab). We’ll use React's useState hook to manage which tab is active and render the corresponding content. As a challenge, we will add a visual effect to highlight the active tab.",
  },
];

export const reactHooks = [
  [
    { name: "useState", slug: "usestate", size: "h-96" },
    { name: "useEffect", slug: "useeffect", size: "h-48" },
    { name: "useContext", slug: "usecontext", size: "h-48" },
  ],
  [
    { name: "useReducer", slug: "usereducer", size: "h-48" },
    { name: "useRef", slug: "useref", size: "h-96" },
    { name: "useMemo", slug: "usememo", size: "h-48" },
  ],
  [
    { name: "useCallback", slug: "usecallback", size: "h-48" },
    { name: "useLayoutEffect", slug: "uselayouteffect", size: "h-48" },
    { name: "useImperativeHandle", slug: "useimperativehandle", size: "h-96" },
  ],
  [
    { name: "useTransition", slug: "usetransition", size: "h-96" },
    { name: "useDeferredValue", slug: "usedeferredvalue", size: "h-48" },
    { name: "useId", slug: "useid", size: "h-48" },
  ],
];

export const baseLinks = [
  {
    id: "0",
    image: "/carousel/functional-components.png",
    slug: "functional-components",
  },
  {
    id: "1",
    image: "carousel/jsx.png",
    slug: "jsx",
  },
  {
    id: "2",
    image: "carousel/usestate.png",
    slug: "usestate",
  },
  {
    id: "3",
    image: "carousel/useeffect.png",
    slug: "useeffect",
  },
  {
    id: "4",
    image: "carousel/props.png",
    slug: "props",
  },
  {
    id: "5",
    image: "carousel/reactivity.png",
    slug: "reactivity",
  },
];
