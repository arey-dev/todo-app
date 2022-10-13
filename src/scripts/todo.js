// todo items
const todoFactory = (title) => {
  let isActive = true;

  const setActive = (bool) => {
    isActive = bool;
  };

  const getActive = () => isActive;

  const getTitle = () => title;

  return {
    setActive,
    getActive,
    getTitle,
  };
};

export default todoFactory;
