/**
 * factory function for todos
 */

const todo = (title) => {
  const todoTitle = title;
  let isComplete = false;

  const getTitle = () => todoTitle;

  const getState = () => isComplete;

  const toggleState = () => {
    isComplete = !isComplete;
  };

  return {
    getTitle,
    toggleState,
    getState,
  };
};

export default todo;
