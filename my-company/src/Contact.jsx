import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ fontSize: "35px", marginBottom: "15px" }}>Contact Us</h1>

      <form onSubmit={handleSubmit} style={{ fontSize: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: "400px",
            padding: "10px",
            marginBottom: "15px",
            fontSize: "18px",
            display: "block"
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: "400px",
            padding: "10px",
            marginBottom: "15px",
            fontSize: "18px",
            display: "block"
          }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            width: "400px",
            height: "100px",
            padding: "10px",
            marginBottom: "15px",
            fontSize: "18px",
            display: "block"
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
