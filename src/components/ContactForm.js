
"use client";

import { useState } from "react";
import { contact } from "@/data/site";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    // Apni Web3Forms access key yahan add karein
    data.append("access_key", "13f9b8f4-bbe8-43ce-85f8-8b780c1fd299");

    // Email subject
    data.append("subject", "New Enquiry - BS Fiber Website");

    // Website details
    data.append("from_name", "BS Fiber Website");
    data.append("to", contact.email);

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field =
    "mb-5 w-full border border-[#e5e5e5] bg-white px-3 py-2.5 outline-none focus:border-gold";

  const label = "mb-1.5 block text-[15px] text-heading";

  return (
    <form onSubmit={onSubmit} className="mt-px bg-white p-[30px]">
      <label htmlFor="cf-name" className={label}>
        Name*
      </label>
      <input
        id="cf-name"
        name="name"
        type="text"
        autoComplete="name"
        required
        className={field}
      />

      <label htmlFor="cf-email" className={label}>
        Email*
      </label>
      <input
        id="cf-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        className={field}
      />

      <label htmlFor="cf-msg" className={label}>
        Your Message*
      </label>
      <textarea
        id="cf-msg"
        name="message"
        required
        className={`${field} h-[150px] resize-y`}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full cursor-pointer bg-[#CCB49C] px-[30px] py-3 text-[15px] uppercase text-black transition-colors duration-300 hover:bg-gold disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p role="status" className="mt-4 text-sm text-green-700">
          Thank you! Your enquiry has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-red-600">
          Unable to send your enquiry. Please try again.
        </p>
      )}
    </form>
  );
}