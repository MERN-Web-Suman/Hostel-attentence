
import React from "react";
import FeedbackPanel from "./FeedbackPanel";
import ContactWardenForm from "./ContactWardenForm";

const DualForms = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 max-w-6xl mx-auto">
      {/* Left: Feedback Panel */}
      <div className="md:w-1/2">
        <FeedbackPanel />
      </div>

      {/* Right: Contact Warden Form */}
      <div className="md:w-1/2">
        <ContactWardenForm />
      </div>
    </div>
  );
};

export default DualForms;
