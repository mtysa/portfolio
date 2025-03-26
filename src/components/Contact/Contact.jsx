import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("https://formspree.io/f/xyzepwgb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let’s Connect</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error-msg">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <span className="error-msg">{errors.message}</span>}

        <button type="submit">Send Message</button>

        {status === "SUCCESS" && (
          <p className="success-msg">Thanks! Your message has been sent.</p>
        )}
        {status === "ERROR" && (
          <p className="error-msg">Something went wrong. Please try again.</p>
        )}
      </form>

      <div className="contact-links">
        <a
          title="Email"
          href="mailto:mustafatysa@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={`${import.meta.env.BASE_URL}logos/email.svg`} alt="Email" />
        </a>
        <a
          title="GitHub"
          href="https://github.com/mtysa"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${import.meta.env.BASE_URL}logos/github.svg`}
            alt="GitHub"
          />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/mustafa-ysa-33728a105/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${import.meta.env.BASE_URL}logos/linkedin.svg`}
            alt="LinkedIn"
          />
        </a>
        <a title="Resume" href="/resume.pdf" target="_blank" rel="noreferrer">
          <img src={`${import.meta.env.BASE_URL}logos/cv.svg`} alt="Resume" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
