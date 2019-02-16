import React from "react";

const FunComp = props => {
  const { msg } = props;
  const name = props.name;
  console.log(props);
  console.log(name);
  const intro = `My name is ${name}`;
  return (
    <div>
      <h1>{intro}</h1>
    </div>
  );
};

export default FunComp;
