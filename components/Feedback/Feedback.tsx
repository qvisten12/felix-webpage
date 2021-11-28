import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [toggle, setToggle] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendFeedback = (e: any) => {
    e.preventDefault();

    // powered by emailJS
    emailjs
      .sendForm(
        "service_nn00neg",
        "template_hljnkab",
        form.current!,
        "user_qGfj46Ua3xq4eNrej2j5I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setToggle((prev) => !prev);
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <div className="md:fixed md:bottom-10 md:right-0 hidden md:block">
      {toggle ? (
        <form
          ref={form}
          onSubmit={sendFeedback}
          className="py-5 px-10 bg-white border-gray-100 border-t-2 border-r-2
          border-l-2 rounded-bl-md rounded-tl-md flex flex-col shadow-2xl"
        >
          <button
            className=" text-gray-500
             rounded-md self-start hover:text-black text-lg"
            onClick={() => setToggle((prev) => !prev)}
          >
            X
          </button>
          <div>
            <p className="text-center text-lg font-semibold m-1 my-3">
              Feedback
            </p>
          </div>
          <div className="my-3">
            <input
              className="py-2 border-2 rounded-md w-full px-1"
              placeholder="Name"
              value={name}
              name="user_name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-3">
            <input
              className="py-2 border-2 rounded-md w-full px-1"
              placeholder="Email"
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-3">
            <textarea
              className="py-2 border-2 rounded-md resize-none px-1"
              placeholder="Feedback"
              name="message"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <button
            className="border-blue-500 border-2 p-2 my-3
                    rounded-md text-blue-500 text-md font-bold
                    hover:bg-blue-500 hover:text-white"
            type="submit"
            value="Send"
          >
            Submit
          </button>
        </form>
      ) : (
        <button
          className="bg-blue-500  p-2 rounded-bl-md rounded-tl-md
                     text-white text-lg font-bold
                    hover:scale-105 "
          onClick={() => setToggle((prev) => !prev)}
        >
          Feedback
        </button>
      )}
    </div>
  );
};

export default Feedback;
