import React from "react";
import Layout from "./base-layout";
import lionel from "../assets/lionel.jpeg";

const imageStyles = {
  borderRadius: "10px",
  maxHeight: "500px",
  maxWidth: "500px",
  width: "100%",
  margin: "auto"
};

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        }}
      >
        <h1>Hello, is it me you&apos;re looking for?</h1>
        <img src={lionel} alt="" style={imageStyles} />
        <p>Whatever you we&apos;re looking for hasn&apos;t been found.</p>
        <p>We hope you enjoy a photo of Lionel instead.</p>
      </div>
    </Layout>
  );
};

export default NotFound;
