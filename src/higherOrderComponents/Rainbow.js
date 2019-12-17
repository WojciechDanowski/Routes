import React from "react";

const Rainbow = WrappedComponent => {
  const colours = ["blue", "pink", "orange", "red", "green", "yellow"];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = randomColour + "-text";
};
