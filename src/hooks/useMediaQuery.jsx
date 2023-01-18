import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;

/**This is a custom hook in React that allows you to use the window.matchMedia() method to check if a media query matches the current viewport size and orientation. The hook uses the useState and useEffect hooks from the react library.

useMediaQuery is a function that takes in a single argument, query, which is a string representing the media query you want to check. For example, "(min-width: 600px)" will check if the viewport width is at least 600 pixels.

The hook sets up an event listener for the resize event on the window, so that the hook's state and the component using it will be updated when the viewport changes. When the component using the hook unmounts, the hook removes the event listener to prevent memory leaks.

The hook returns a boolean value, matches, representing whether the media query matches the current viewport size and orientation.ˀ */