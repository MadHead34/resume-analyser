"use client";

import { useState } from "react";
import { AnalysisResponse } from "@/types/analysisResponse"; 

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<AnalysisResponse | null>(null); 

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submission triggered");

    // Check the file and job description before submitting
    console.log("File:", file);
    console.log("Job Description:", jobDescription);
    
    if (!file || !jobDescription) {
      alert("Please upload a resume and enter a job description.");
      return;
    }

    console.log("Submitting file and job description...");
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", jobDescription);

    const response = await fetch("/api/analyse", {
      method: "POST",
      body: formData,
    });

    const data: AnalysisResponse = await response.json(); 
    setResult(data);
  };

  return (
    <div>
      <h1>Resume Analyser</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <textarea
          placeholder="Enter job description..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <button type="submit">Analyse</button>
      </form>
      {result && (
        <div>
          <h2>Analysis Result</h2>
          <p>Match Score: {result.matchScore}%</p>
          <p>Missing Skills: {result.missingSkills?.join(", ")}</p>
          <p>Feedback: {result.feedback}</p>
        </div>
      )}
    </div>
  );
}