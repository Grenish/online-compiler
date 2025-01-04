"use client";

import { useState } from "react";
import Code from "../components/Code";
import Output from "../components/Output";
import LanguageOpt from "../components/LanguageOpt";

export default function Home() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("Python");

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleRunCode = (code: string, lang: string) => {
    let simulatedOutput = `${lang}$\n\n${code}`;
    setOutput(simulatedOutput);
  };

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Code Editor</h1>

      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex-1 border rounded-md overflow-hidden">
          <LanguageOpt onLanguageChange={handleLanguageChange} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 mt-6">
        <div className="flex-1 h-96 border rounded-md">
          <h2 className="font-bold p-4">Code</h2>
          <Code
            onCodeChange={handleCodeChange}
            onRunCode={handleRunCode}
            language={language}
          />
        </div>

        <div className="flex-1 h-96 border rounded-md">
          <h2 className="font-bold p-4">Output</h2>
          <Output output={output} />
        </div>
      </div>
    </div>
  );
}
