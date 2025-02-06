This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Case Study: AI-Powered Resume Analyser

## 1. Introduction
Many job seekers struggle to optimize their resumes for specific job descriptions. Recruiters use ATS (Applicant Tracking Systems) to filter resumes, making it crucial for candidates to tailor their applications.

This project aims to help users analyze their resumes against job descriptions using AI and provide actionable feedback on improving alignment.

## 2. Tech Stack and Why I Chose It
Next.js → Fast performance, API routes for backend integration
LangChain + OpenAI → Natural Language Processing for resume-job description comparison
Tailwind CSS → Simplified styling for a clean UI
pdf-parse → Extracting text from PDF resumes
Supabase (Optional) → Storing user history
This combination ensures fast performance, AI-driven insights, and seamless UX.

## 3. Building the Project
Step 1: Resume Upload & Text Extraction
Users upload a PDF resume
pdf-parse extracts text from the file

Step 2: AI Analysis
User pastes the job description
Backend sends resume + job description to LangChain-powered AI
AI provides personalized feedback

Step 3: Displaying Results
The AI’s response is shown with key improvement suggestions
Users get insights like keyword matching, missing skills, and formatting tips

## 4. Challenges and Solutions
1. Extracting Clean Text from PDFs
Issue: Some resumes have weird formatting (tables, columns)
Solution: Used pdf-parse, but also considered Tesseract.js for OCR-based parsing
2. Generating Meaningful AI Feedback
Issue: AI sometimes gave generic responses
Solution: Tweaked prompt engineering → Made AI focus on ATS compliance, skills, and structure
3. Improving AI Accuracy with Contextual Data
Issue: AI lacked real-world resume evaluation knowledge
Solution: Integrated job description comparison to tailor responses better

## 5. Future Improvements
Authentication & History → Let users save resume analyses
Enhanced AI Insights → Use vector embeddings for deeper skill-matching
ATS Simulator → Show resume match score like real applicant tracking systems

## 6. Key Takeaways
AI can assist job seekers by giving targeted feedback
Building full-stack projects with AI strengthens problem-solving skills
Learning new frameworks (LangChain, pdf-parse) boosts technical versatility
This case study would be perfect for a portfolio, LinkedIn post, or GitHub README to showcase your technical depth and decision-making.

# Work In Progress
While it can provide a function of generating a score and also feedback, it is still on progress as I need to enhance my application more with the CSS and UI Design and also including mroe features like Authentication and History and data storage. Also the library of ChatOpenAI is not friendly with free tier as it can spend up a lot of points so highly recommend to use paid plans in OpenAI in order to be ablt to test out more and ensure you create the API Secret keys in OpenAI API and the .env.local file to store in your secrets.

