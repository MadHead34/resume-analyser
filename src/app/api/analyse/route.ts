import { NextRequest, NextResponse } from 'next/server';
import pdfParse from 'pdf-parse';
import { ChatOpenAI } from "@langchain/openai";

export async function POST(req: NextRequest) {
  try {
    // Log that the route is hit to verify
    console.log("API route hit");

    // Parse form data (Next.js 15+ supports formData directly)
    const formData = await req.formData();
    const file = formData.get('resume') as File;
    const jobDescription = formData.get('jobDescription') as string;

    // Check if both file and job description are provided
    if (!file || !jobDescription) {
      return NextResponse.json({ error: 'Missing file or job description' }, { status: 400 });
    }

    console.log('Received file:', file);
    console.log('Received job description:', jobDescription);

    // Convert file to buffer for PDF parsing
    const arrayBuffer = await file.arrayBuffer();
    const pdfBuffer = Buffer.from(arrayBuffer);
    const pdfData = await pdfParse(pdfBuffer);

    // Extract text from the PDF
    const resumeText = pdfData.text;

    // Log parsed resume text
    console.log('Parsed resume text:', resumeText);

    // Use OpenAI (Langchain) to analyze the resume and job description
    const ai = new ChatOpenAI({
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      openAIApiKey: process.env.OPENAI_API_KEY, // Ensure your API key is set in .env
    });

    const prompt = `Compare this resume: ${resumeText} with this job description: ${jobDescription} and provide a match score (0-100) and feedback.`;

    // Send prompt to OpenAI API
    const response = await ai.invoke(prompt);

    const content = Array.isArray(response.content)
  ? response.content
      .map((item) => {
        if (typeof item === "string") return item; // Handle plain text case
        if ("text" in item) return item.text; // Extract text if it exists
        return ""; // Ignore non-text elements
      })
      .join(" ")
  : response.content;

    // Parse the OpenAI response
    const analysis = JSON.parse(content);

    try {
        const analysis = JSON.parse(content); // Now parsing a clean string
        console.log("Analysis result:", analysis);
        return NextResponse.json(analysis, { status: 200 });
      } catch (parseError) {
        console.error("Error parsing AI response:", parseError);
        return NextResponse.json({ error: "Invalid AI response format" }, { status: 500 });
      }

    // Return the result as JSON
    return NextResponse.json(analysis, { status: 200 });
  } catch (error) {
    // Log any error that occurs in the process
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}