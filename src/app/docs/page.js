"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./docs.css";
import firstPage from "./outputImages/1.png";
import secondPage from "./outputImages/2.png";
import ThirdPage from "./outputImages/3.png";
import FourthPage from "./outputImages/4.png";
import FifthPage from "./outputImages/5.png";
export default function Docs() {
  const [activeSection, setActiveSection] = useState("installation");

  const handleSectionClick = (section) => {
    setActiveSection(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    console.log(firstPage);
    handleSectionClick("installation");
  }, []);

  return (
    <main className="">
      <div className="container">
        <div className="sidebar">
          <div
            className={`section-link ${
              activeSection === "installation" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("installation")}
          >
            Installation
          </div>
          <div
            className={`section-link ${
              activeSection === "client" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("client")}
          >
            Client
          </div>
          <div
            className={`section-link ${
              activeSection === "server" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("server")}
          >
            Server
          </div>
          <div
            className={`section-link ${
              activeSection === "caution" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("caution")}
          >
            Caution
          </div>
          <div
            className={`section-link ${
              activeSection === "caution" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("demo")}
          >
            Demo
          </div>
        </div>
        <div className="content">
          <div
            id="installation"
            className={`section ${
              activeSection === "installation" ? "visible" : ""
            }`}
          >
            <h2>Installation</h2>
            <p>
              To install the <strong>@noti/noti.io</strong> package and set up
              notifications for your webpage easily, follow these steps:
            </p>
            <div className="divider"></div>
            <h3>Client Installation</h3>

            <div className="code-section">
              <div className="code-line">npm i @noti/noti.io-client</div>
            </div>
            <p>
              Install the client package to receive notifications on your
              webpage.
            </p>
            <div className="divider"></div>
            <h3>Server Installation</h3>

            <div className="code-section">
              <div className="code-line">npm i @noti/noti.io</div>
            </div>

            <p>
              Install the server package to send notifications to your clients.
            </p>
          </div>
          <div
            id="client"
            className={`section ${activeSection === "client" ? "visible" : ""}`}
          >
            <h2>Client</h2>
            <p>
              To set up notifications on your webpage using the{" "}
              <code>@noti/noti.io-client</code> package, follow these steps:
            </p>
            <div className="divider"></div>
            <h3>Step 1: Install the Client Package</h3>
            <div className="code-section">
              <div className="code-line">npm i @noti/noti.io-client</div>
            </div>
            <p>
              Install the client package to receive notifications on your
              webpage.
            </p>
            <div className="divider"></div>
            <h3>Step 2: Configure Noti_client</h3>
            <p>Use the following code in your client-side code:</p>
            <div className="divider"></div>
            <pre className="code-section">
              <code>
                {`
import { Noti_client } from "noti.io-client";
import { useEffect } from "react";

function App() {


  useEffect(() => {
    new Noti_client(
      "http://localhost:5000/", // Replace with your server URL
      document.querySelector(".App"), // DOM selector to inject the notification UI
      );
  }, []);

  return (
    <div className="App">
      {/* The notification UI will be injected here */}
    </div>
  );
}

export default App;
`}
              </code>
              <div className="divider"></div>
            </pre>
            <div className="divider"></div>
            <p>
              In this code, the <code>&quot;http://localhost:5000/&quot;</code>
              is the server URL where the notifications will be sent from.
              Replace it with your actual server URL. The second parameter
              <code>document.querySelector(&quot;.App&quot;)</code> selects the
              DOM element (parent component) where the notification UI will be
              injected. Ensure that it is a valid parent component for the
              notifications. The third parameter contains custom styles for the
              notification UI.
            </p>
            <div className="divider"></div>
            <p>
              Once you set up the client-side code, you should receive
              notifications on your webpage when the server sends them.
            </p>
            {/* Client content here */}
          </div>
          <div
            id="server"
            className={`section ${activeSection === "server" ? "visible" : ""}`}
          >
            <h2>Server</h2>
            <p>
              To create a server that sends notifications to connected clients,
              you can use the following code with the package:
            </p>
            <div className="divider"></div>
            <div className="code-section">
              <div className="code-line">npm i @noti/noti.io</div>
            </div>
            <div className="divider"></div>
            <pre className="code-section">
              <code>{`
import { Noti } from "noti.io";

const Notific = new Noti(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-type"],
    credentials: true,
  },
  allowEIO3: true,
});

Notific.Send({
    Msg: Notification Message, 
    backgroundColor:Background Color of notfication,
    textColor: Color of text Content of notification,
    Symbol: Symbol that will be shown along with notification,
    MaxWidth,
    MinWidth
  });`}</code>
            </pre>
            <div className="divider"></div>
            <p>Full Server example</p>
            <pre className="code-section">
              <code>
                {`
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Noti } from "noti.io";

dotenv.config();
const app = express();

app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("hello");
});

const server = http.createServer(app);
const Notific = new Noti(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-type"],
    credentials: true,
  },
  allowEIO3: true,
});


Notific.Send({
    Msg: "Please wait for a while", 
    backgroundColor: "#fff", .
    textColor: "#000",
    Symbol: "⌛",
  });



const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    server.listen(port, () => {
      console.log("Server is listening on port $\{port}...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
              `}
              </code>
            </pre>
            {/* Server content here */}
          </div>
          <div
            id="caution"
            className={`section ${
              activeSection === "caution" ? "visible" : ""
            }`}
          >
            <h2>Caution</h2>
            <p>
              In React 18 and above <code>React.StrictMode</code> makes the
              initial render happen twice causing notifications to be initalized
              twice .To avoid this, consider removing{" "}
              <code>React.StrictMode</code> in your <code>index.js</code> or{" "}
              <code>App.js</code> file during development.
            </p>
          </div>
          <div
            id="demo"
            className={`section ${activeSection === "demo" ? "visible" : ""}`}
          >
            <h2>Demo</h2>
            <div className="demo-section">
              <pre className="code-section">
                <code>{`Notific.Send({
    Msg: "Please wait for a while", 
    backgroundColor: "#fff", .
    textColor: "#000",
    Symbol: "⌛",
  });`}</code>
              </pre>
              <div className="output-section">
                <img src={firstPage.src} alt="Demo Output" />
              </div>
            </div>
            <div className="demo-section">
              <pre className="code-section">
                <code>{` Notific.Send({
    Msg: "Something went wrong!",
    backgroundColor: "#e74c3c", // Vibrant background color
    textColor: "#fff", // Text color
    Symbol: "⚠️", // Warning symbol
  });`}</code>
              </pre>
              <div className="output-section">
                <img src={secondPage.src} alt="Demo Output" />
              </div>
            </div>
            <div className="demo-section">
              <pre className="code-section">
                <code>{`  Notific.Send({
    Msg: "New message received!",
    backgroundColor: "#3498db", // Vibrant background color
    textColor: "#fff", // Text color
    Symbol: "📬", // Mailbox symbol
  });`}</code>
              </pre>
              <div className="output-section">
                <img src={ThirdPage.src} alt="Demo Output" />
              </div>
            </div>
            <div className="demo-section">
              <pre className="code-section">
                <code>{` Notific.Send({
  Msg: "Notification!",
  backgroundColor: "#27ae60", // Vibrant background color
  textColor: "#fff", // Text color
  Symbol: "🚀", // Rocket symbol
});`}</code>
              </pre>
              <div className="output-section">
                <img src={FourthPage.src} alt="Demo Output" />
              </div>
            </div>
            <div className="demo-section">
              <pre className="code-section">
                <code>{` Notific.Send({
    Msg: "You have a meeting at 2 PM.",
    backgroundColor: "#8e44ad", // Vibrant background color
    textColor: "#fff", // Text color
    Symbol: "🕑", // Clock symbol
  });`}</code>
              </pre>
              <div className="output-section">
                <img src={FifthPage.src} alt="Demo Output" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
