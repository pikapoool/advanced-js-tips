// Components should not depend on things they don’t need.
const DisplayUser = ({name}) => {
  return (
    <div>
      <h1>Hello, {name}! </h1>
    </div>
  )
};

const App = () => {
  const user = {
    name: "josh",
    age: 23,
    physicalFeatures: {
      hairColor: "blone",
      heightInC: 175
    }
  }
  // !Bad!!
  // return (
  //   <div>
  //     <DisplayUser user={user} />
  //     <DisplayFeatures user={user} />
  //   </div>
  // );
  return (
    <div>
      <DisplayUser name={user.name} />
      <DisplayFeatures name={user.physicalFeatures} />
    </div>
  );
};