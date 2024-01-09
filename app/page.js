"use client";
import axios from "axios";
import React, { useState } from "react";

const Home = () => {
  const [history, setHistory] = useState([]);
  const [response, setResponse] = useState();

  const fetchHome = () => {
    setResponse("");
    setHistory([...history, { path: "/posts", method: "GET" }]);
    console.log(history);
    console.log("fetchHome fn run");
    axios
      .get(process.env.NEXT_PUBLIC_API + "/posts")
      .then((response) => {
        // Handle the response
        console.log(response.data);
        setResponse(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };
  const getOnePost = () => {
    setResponse("");

    setHistory([...history, { path: "/posts/:id", method: "GET" }]);
    // console.log(history);
    // console.log("fetchHome fn run");
    let id = "659c39e7743150018447cb2d";
    axios
      // .get(process.env.NEXT_PUBLIC_API + "/posts/659c39e7743150018447cb2d")
      .get(process.env.NEXT_PUBLIC_API + "/posts/" + id)
      .then((response) => {
        // Handle the response
        console.log(response.data);
        setResponse(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };
  const deleteOne = () => {
    setResponse("");
    setHistory([...history, { path: "/posts", method: "DELETE" }]);
    console.log(history);
    console.log("deleteOne fn run");
    axios
      .delete(process.env.NEXT_PUBLIC_API + "/posts")
      .then((response) => {
        // Handle the response
        console.log(response.data);
        setResponse(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };

  const createPost = () => {
    setResponse("");
    setHistory([...history, { path: "/posts/create", method: "POST" }]);
    console.log(history);
    console.log("fetchHome fn run");
    axios
      .post(process.env.NEXT_PUBLIC_API + "/posts/create")
      .then((response) => {
        // Handle the response
        console.log(response.data);
        setResponse(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };
  const updateOnePost = () => {
    setResponse("");
    setHistory([...history, { path: "/posts/:id", method: "PATCH" }]);
    // console.log(history);
    console.log("update fn run");
    axios
      .post(process.env.NEXT_PUBLIC_API + "/posts/659c39e7743150018447cb2d")
      .then((response) => {
        // Handle the response
        console.log(response.data);
        setResponse(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };
  return (
    <div className="w-full ">
      <div className="w-full  flex justify-center items-center border-b-2">
        <button
          className="m-5 px-3 py-2 rounded-sm shadow-lg hover:bg-teal-600 bg-teal-500 "
          onClick={fetchHome}
        >
          Fetch All Posts
        </button>{" "}
        <button
          className="m-5 px-3 py-2 rounded-sm shadow-lg hover:bg-teal-600 bg-teal-500 "
          onClick={getOnePost}
        >
          Fetch One Post
        </button>{" "}
        <button
          className="m-5 px-3 py-2 rounded-sm shadow-lg hover:bg-teal-600 bg-teal-500 "
          onClick={updateOnePost}
        >
          Update One Post
        </button>{" "}
        <button
          className="m-5 px-3 py-2 rounded-sm shadow-lg hover:bg-teal-600 bg-teal-500 "
          onClick={deleteOne}
        >
          Delete One
        </button>{" "}
        <button
          className="m-5 px-3 py-2 rounded-sm shadow-lg hover:bg-teal-600 bg-teal-500 "
          onClick={createPost}
        >
          Create One
        </button>
      </div>
      <div className="flex">
        <div
          id="history"
          className="w-1/8 py-3 px-5 border-r-2 flex justify-start items-center"
        >
          {history && (
            <ul>
              <div className=" font-bold border-b-2 text-center">History</div>
              {history.map((his, index) => (
                <li key={his.index} className="flex justify-between ">
                  {his.path}{" "}
                  <div
                  style={{"margin-left":"10px"}}
                    className={
                      his.method == "DELETE"
                        ? "text-orange-500"
                        : his.method == "POST"
                        ? "text-green-500"
                        : his.method == "GET"
                        ? ""
                        : ""
                    }
                  >
                    {his.method}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {response && (
          <div id="Result" className="w-full h-auto px-5 py-3 bg-gray-900">
            {response}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
