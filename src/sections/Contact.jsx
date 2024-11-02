import { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const handleSubmit = () => {};
  return (
    <section className="c-space">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text mt-20">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're lolking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm hre to help
          </p>
          <form action="" ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="dawit yenew"
                className="field-input"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="dawityenew@gmail.com"
                className="field-input"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Hi, I am interested in..."
                className="field-input"
              />
            </label>

            <button className="field-btn w-full" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
