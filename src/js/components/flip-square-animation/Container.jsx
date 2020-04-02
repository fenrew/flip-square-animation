import React, { useState, useEffect } from "react";
import "./container-styles.css";
import AboutMe from "./About-me/AboutMe"

const Container = () => {
  const [flipSquare, setFlipSquare] = useState({
    classAnimation: "",
    ref: React.createRef(),
    open: true
  });

  const [animation, setAnimation] = useState({
    active: false,
  })

  const handleClick = () => {
    setFlipSquare({
      ...flipSquare,
      classAnimation: "animation",
      open: !flipSquare.open
    })
    setAnimation({
      active: true
    })
  };

  useEffect(() => {
    const handler = () => {
      setAnimation({
        active: false,
      })
    }
    
    document.getElementById("small-flip-square-container").addEventListener("animationend", handler)
    return () => document.getElementById("small-flip-square-container").removeEventListener("animationend", handler)
  }, [])

  let animationClass = ""
  if(flipSquare.open && animation.active) animationClass = "animation-open"
  else if(!flipSquare.open && animation.active) animationClass = "animation-close"

  console.log(animationClass, flipSquare.open, animation.active)
  return (
    <div id="main-flip-square-container">
      <div
        id="small-flip-square-container"
       className={`${animationClass} small-flip-square-container-${flipSquare.open ? "open" : "close"}`}
        ref={flipSquare.ref}
        onClick={e => animation.active ? "" : handleClick(e)}
      >
        {animation.active ? "" : <AboutMe open={flipSquare.open} />}
      </div>
    </div>
  );
};

export default Container;
