import React from "react";

export default function Greeting(props) {
  const noMessage = <div>No Message</div>
  return props.message ? <div>{props.message}</div> : noMessage
}