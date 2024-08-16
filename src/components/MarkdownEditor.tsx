// src/components/MarkdownEditor.tsx
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <div>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter hospital details in markdown"
      />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownEditor;
