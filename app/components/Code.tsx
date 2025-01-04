"use client";

import { useState } from "react";

const Code = ({
  onCodeChange,
  onRunCode,
  language,
}: {
  onCodeChange: (code: string) => void;
  onRunCode: (code: string, lang: string) => void;
  language: string;
}) => {
  const [code, setCode] = useState("");

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
    onCodeChange(e.target.value);
  };

  const handleRunCode = () => {
    onRunCode(code, language);
  };

  return (
    <div className="w-full h-full p-4">
      <textarea
        value={code}
        onChange={handleCodeChange}
        className="w-full h-full border-2 border-gray-300 rounded-md p-2 resize-none font-mono"
        placeholder={`Write your ${language} code here...`}
      />
      <button
        onClick={handleRunCode}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Run
      </button>
    </div>
  );
};

export default Code;
