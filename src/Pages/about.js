import React from "react";

const About = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "Center",
          alignItems: "Center",
          height: "90vh",
        }}
      >
        <div>
          <img
            style={{
              marginBottom: "20px",
              marginLeft: "100px",
              borderRadius: "30px",
              padding: "20px",
            }}
            src="Loki.jpg"
          />
          <p
            style={{
              fontStyle: "italic",
              fontWeight: "900",
              color: "#615957",
            }}
          >
            Name : Lokesh.V <br></br>
            Company : Iksha Labs <br></br>
            Location : Gurgaon <br></br>
            Phone : 7013525217 <br></br>
            Email : lokesh@ikshalabs.com <br></br>
            About me : Developing novel solutions for persisting problems
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
