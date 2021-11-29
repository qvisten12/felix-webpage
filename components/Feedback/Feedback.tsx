import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState(false);
  const [completed, setCompleted] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendFeedback = (e: any) => {
    e.preventDefault();

    // powered by emailJS
    if (name.length > 0 && email.length > 0 && feedback.length > 0) {
      emailjs
        .sendForm(
          "service_nn00neg",
          "template_hljnkab",
          form.current!,
          "user_qGfj46Ua3xq4eNrej2j5I"
        )
        .then(
          (result) => {
            setName("");
            setEmail("");
            setFeedback("");
            setError(false);
            setCompleted(true);
            setTimeout(() => {
              setCompleted(false);
              setToggle((prev) => !prev);
            }, 4000);
          },
          (error) => {
            console.log(error);
            setCompleted(false);
            setError(true);
          }
        );
    } else {
      setError(true);
    }
  };

  return (
    <div className="md:fixed md:bottom-10 md:right-0 hidden md:block">
      {toggle ? (
        <div>
          <form
            ref={form}
            onSubmit={sendFeedback}
            className="py-5 px-10 w-96 h-5/6 bg-white border-gray-100 border-t-2 border-r-2
          border-l-2 rounded-bl-md rounded-tl-md flex flex-col shadow-2xl"
          >
            {completed ? (
              <p className="text-gray-700 font-bold text-lg">
                Thank you for your feedback!{" "}
                <span className="inline-block"> 🙂</span>
              </p>
            ) : (
              <>
                <button
                  className=" text-gray-500
             rounded-md self-start hover:text-black text-lg"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  X
                </button>

                <div>
                  <p className="text-center text-lg font-semibold m-1 my-2">
                    Feedback
                  </p>
                  <p className="text-center text-gray-600 text-base font-medium m-1 my-2">
                    Found a bug, or maybe a tip?
                  </p>
                </div>
                <div className="my-2">
                  <input
                    className="py-2 border-2 rounded-md w-full px-1"
                    placeholder="Name"
                    value={name}
                    name="user_name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="my-2">
                  <input
                    className="py-2 border-2 rounded-md w-full px-1"
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="my-2">
                  <textarea
                    className="py-2 border-2 rounded-md resize-none px-1 w-full"
                    placeholder="Feedback"
                    name="message"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </div>
                <p
                  className="text-red-500 my-2"
                  style={{ display: error ? "block" : "none" }}
                >
                  Please make sure all field are filled!
                </p>
                <button
                  className="border-blue-500 border-2 p-2 my-2
                    rounded-md text-blue-500 text-md font-bold
                    hover:bg-blue-500 hover:text-white"
                  type="submit"
                  value="Send"
                >
                  Submit
                </button>
              </>
            )}
          </form>
        </div>
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
