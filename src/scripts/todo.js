/**
 * factory function for todos
 */

const todo = (title) => {
  const todoTitle = title;

  const getTitle = () => todoTitle;

  return {
    getTitle,
  };
};

export default todo;
