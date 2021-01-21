import React from "react";

const Title = ({ title, className }) => {
  return (
    <div className={className}>
      <h1 className="heading-secondary">{title}</h1>
    </div>
  );
};

export default Title;
