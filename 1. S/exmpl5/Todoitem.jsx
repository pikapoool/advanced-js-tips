// doesn't care about how many todos there are, where they came from, or on what page they will be displayed. 
// It just knows it will receive an id and title, and should return a <li> containing that information.
export const TodoItem = ({ id, title }) => {
  return <li>{`ID: ${id}, Title: ${title}`}</li>;
};
