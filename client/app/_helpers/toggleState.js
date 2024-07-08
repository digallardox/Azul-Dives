export const toggleState = ( setState) => {
  if (typeof setState !== "function") {
    console.error("Expected setState to be a function");
  }
  setState((prevState) => !prevState);
};
