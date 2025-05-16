import { Instagram, Linkedin, Mail, PhoneCall, Twitter } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "../lib/analytics";

export const ContactSection = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copied, setCopied] = useState(false);
  // Add form state management
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = (event) => {
    event.preventDefault(); // Prevent default link behavior
    navigator.clipboard.writeText("moonlike965@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission with email forwarding to your address
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

    try {
      // Ensure we're sending to your email address
      const dataWithRecipient = {
        ...formData,
        _replyto: formData.email, // This ensures replies go to the sender
        _subject: `Portfolio Contact from ${formData.name}`,
        email: "moonlike965@gmail.com", // Set this as the destination email
      };

      const response = await fetch("https://formspree.io/f/xjvowzqk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataWithRecipient),
      });

      if (response.ok) {
        // Track successful form submission
        trackEvent("contact_form_submit", { success: true });
        setFormStatus({
          submitting: false,
          submitted: true,
          error: null,
        });
        // Reset form after successful submission
        setFormData({ name: "", email: "", message: "" });
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus({
            submitting: false,
            submitted: false,
            error: null,
          });
        }, 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Form submission failed");
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="relative px-4 py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto ">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Get in
          <span className="text-primary"> Touch</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-glow text-muted-foreground">
          I am always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* contact information */}
          <div className="flex flex-col items-center justify-start w-full h-full p-8 rounded-lg shadow-md">
            <h3 className="w-full pb-12 text-2xl font-semibold text-center text-glow">
              Contact Information
            </h3>
            <div className="flex flex-col items-start justify-start w-full mt-4 space-y-6 ">
              {/* Email */}
              <div className="flex items-start justify-start w-full space-x-20">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="relative flex flex-col items-center justify-center w-20">
                  <div className="relative group">
                    <a
                      href="mailto:moonlike965@gmail.com"
                      onClick={handleCopyEmail}
                      className="text-lg font-semibold text-primary hover:text-glow"
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                    >
                      Email
                    </a>
                    {showTooltip && !copied && (
                      <div className="absolute left-1/2 -translate-x-1/2 -top-10 bg-primary/20 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md shadow-lg border border-primary/30 whitespace-nowrap z-10 transition-all duration-200 ease-in-out">
                        Copy to clipboard
                        <div className="absolute w-0 h-0 -translate-x-1/2 border-4 border-transparent left-1/2 top-full border-t-primary/20"></div>
                      </div>
                    )}
                    {copied && (
                      <div className="absolute left-1/2 -translate-x-1/2 -top-10 bg-secondary-500/20 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md shadow-lg border border-secondary-500/30 whitespace-nowrap z-10 transition-all duration-200 ease-in-out">
                        Copied!
                        <div className="absolute w-0 h-0 -translate-x-1/2 border-4 border-transparent left-1/2 top-full border-t-secondary-500/20"></div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    moonlike965@gmail.com
                  </p>
                </div>
              </div>
              {/* Twitter */}
              <div className="flex items-center justify-start w-full space-x-20">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Twitter className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col items-center justify-center w-20">
                  <a
                    href="https://x.com/moonlike_tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-primary hover:text-glow"
                  >
                    Twitter
                  </a>
                  <p className="text-sm text-muted-foreground">
                    @moonlike_tech
                  </p>
                </div>
              </div>
              {/* LinkedIn */}
              <div className="flex items-center justify-start w-full space-x-20">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col items-center justify-center w-20">
                  <a
                    href="https://www.linkedin.com/in/mahsa-mir-863632201/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-primary hover:text-glow"
                  >
                    LinkedIn
                  </a>
                  <p className="text-sm text-muted-foreground">
                    linkedin.com/in/moonlike965
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* send message form */}
          <div className="">
            <h3 className="text-2xl font-semibold text-glow">Send a Message</h3>
            <p className="max-w-2xl mx-auto mb-12 text-center text-glow text-muted-foreground">
              I am always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md bg-secondary ">
              {formStatus.submitted ? (
                <div className="flex flex-col items-center justify-center w-full max-w-md p-4 space-y-4 text-center">
                  <div className="p-3 rounded-full bg-primary/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-primary">
                    Message Sent!
                  </h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col w-full max-w-md space-y-4"
                >
                  {/* Hidden field to specify the destination email */}
                  <input
                    type="hidden"
                    name="_to"
                    value="moonlike965@gmail.com"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="p-2 transition-colors duration-200 border rounded-md backdrop-blur-md bg-secondary/20 border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary hover:bg-primary/10"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-2 transition-colors duration-200 border rounded-md backdrop-blur-md bg-secondary/20 border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary hover:bg-primary/10"
                  />
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="p-2 transition-colors duration-200 border rounded-md backdrop-blur-md bg-secondary/20 border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary hover:bg-primary/10"
                  ></textarea>

                  {formStatus.error && (
                    <div className="px-4 py-2 text-sm text-red-800 bg-red-100 border border-red-200 rounded-md">
                      {formStatus.error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className={`px-4 py-2 font-semibold transition duration-300 ease-in-out cosmic-button ${
                      formStatus.submitting
                        ? "opacity-70 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {formStatus.submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
