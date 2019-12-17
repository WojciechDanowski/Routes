import React from "react";

const Contact = props => {
  setTimeout(() => {
    props.history.push("/about");
  }, 2000);
  return (
    <div className="container">
      <h4 className="center"> Contact</h4>
      <p>
        my number is: <br></br>
        my mail is : a@a.com
      </p>
    </div>
  );
};

export default Contact;
