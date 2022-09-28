import React, {useState} from 'react';

const randPick = (messages) => {
    const randIndex = Math.floor(Math.random() * messages.length);
  return messages[randIndex];
}

const Eightball = (props) => {
    
    const [msg, setMessage] = useState("Think of a Question.");
    const [color, setColor] = useState("black");

    const getMessage = () => {
      const { msg, color } = randPick(props.messages);
      setMessage(msg);
      setColor(color);
    }

    const backToDefault = () => {
         setMessage("Think of a Question");
         setColor("black");
    }
  
    return (
        <>
            <div
            className="ball"
            onClick={getMessage}
            style={{ backgroundColor: color }}>
                <h1>{msg}</h1>
            </div>
            <button onClick={backToDefault}>Reset</button>
        </>
    )
}

Eightball.defaultProps = {
    messages: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]}

  export default Eightball;