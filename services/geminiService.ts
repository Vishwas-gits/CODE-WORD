import { GoogleGenAI } from "@google/genai";
import { AnalysisMode } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

function getPrompt(code: string, mode: AnalysisMode, learnMode: boolean): string {
  const learnQualifier = learnMode
    ? "You are in 'Learn Mode'. Explain everything in detail as if teaching a beginner. Cover underlying concepts, syntax, and best practices."
    : "";
  
  const baseIntro = `You are Codewords, an expert AI programming assistant. Analyze the following code snippet and provide your analysis in Markdown format. ${learnQualifier}`;

  switch (mode) {
    case 'explain':
      return `${baseIntro}\n\nExplain the code block by block. For each part, describe its purpose, logic, and functionality.\n\n\`\`\`\n${code}\n\`\`\``;
    case 'debug':
      return `${baseIntro}\n\nAnalyze the code for potential bugs, logic errors, and anti-patterns. For each issue found, specify the line number(s), describe the problem, and suggest a correction. If no bugs are found, state that clearly.\n\n\`\`\`\n${code}\n\`\`\``;
    case 'optimize':
      return `${baseIntro}\n\nAnalyze the code for performance and style optimization. Suggest improvements for efficiency, readability, and idiomatic conventions. For each suggestion, provide the optimized code snippet and explain why it's better.\n\n\`\`\`\n${code}\n\`\`\``;
    default:
      throw new Error("Invalid analysis mode");
  }
}

export async function analyzeCode(
  code: string,
  mode: AnalysisMode,
  learnMode: boolean
): Promise<string> {
  try {
    const prompt = getPrompt(code, mode, learnMode);
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        return `Error from AI service: ${error.message}`;
    }
    return "An unexpected error occurred while analyzing the code.";
  }
}