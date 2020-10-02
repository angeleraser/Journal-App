import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1601295863283-f4f2429cdfb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80)",
          backgroundSize: "cover",
        }}
        className="journal__entry-picture"></div>
      <div className="journal__entry-body">
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="journal__entry-date-box">
        <p>Monday</p>
        <h2>28</h2>
      </div>
    </div>
  );
};
