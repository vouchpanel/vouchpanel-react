import React from "react";
import Helmet from "react-helmet";

const Wall = (props: { id: number }) => {
  return (
    <>
      <Helmet script={[{ src: "https://app.vouchpanel.com/js/embed.js" }]} />
      <div className="vouchpanel-publish" data-wall={props.id}></div>
    </>
  );
};

export default Wall;
