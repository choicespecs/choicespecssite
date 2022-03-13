import Navbar from "./component/navbar/Navbar";
import About from "./component/about/About";
import Skills from "./component/skills/Skills";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact";
import { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styled from "styled-components";
import axios from "axios";

const Main = styled.main``;

type AnimatedProps = {
  recentPost: string;
};

declare namespace JSX {
  interface IntrinsicElements {
    AnimatedProps: {
      recentPost: string;
    };
  }
}

const AnimatedSwitch = (props: AnimatedProps) => {
  const location = useLocation();
  const [transitionName, setTransitionName] = useState("next");

  return (
    <TransitionGroup component={Main}>
      <CSSTransition
        key={location.pathname}
        classNames={transitionName}
        timeout={3000} // change to 250 on mobile need to make terinary property related to height
      >
        <Routes location={location}>
          <Route path="/" element={<About recentPost={props.recentPost} />} />
          <Route
            path="/about"
            element={<About recentPost={props.recentPost} />}
          />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default function App() {
  const [recentPost, setRecentPost] = useState("");
  useEffect(() => {
    try {
      console.log("I just sent a request");
      axios
        .get(
          `https://graph.instagram.com/me/media?fields=media_url&limit=1&access_token=IGQVJWcFRwQ2F4SGVyRy1jYlZA3QVdzbWJWMUdDSlFBN0lGSmdobUpRWE0wQnktSWJWNVplVV9pWXduQ19vcVhwUHNBUml0RUxUX1FZAVGRBN1BUWjBzNjdnbnhrLXB1TFdscHVjSEdvS29FQTE2RkdtLQZDZD`
        )
        .then((resp) => {
          console.log("I got a request..");
          setRecentPost(resp.data.data[0]["media_url"]);
        });
    } catch (err) {
      console.log("This is the error", err);
    }
  }, []);

  console.log(recentPost);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatedSwitch recentPost={recentPost} />
      </div>
    </Router>
  );
}
