
import React from 'react';
import { AnalysisMode } from '../types';
import { BugIcon, OptimizeIcon, ExplainIcon, LogoIcon } from './icons';

interface ResultsDisplayProps {
  result: string;
  isLoading: boolean;
  error: string | null;
  mode: AnalysisMode;
}

// A simple component to render markdown-like text
const MarkdownRenderer: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\`\`\`[\s\S]*?\`\`\`|\`[^\`]*?\`|###\s.*|##\s.*|#\s.*|\*\s.*)/g);

  return (
    <div className="prose prose-invert prose-sm max-w-none font-sans text-gray-300">
      {parts.map((part, index) => {
        if (part.startsWith('```')) {
          const code = part.replace(/```.*\n/,'').replace(/```/,'');
          return <pre key={index} className="bg-gray-900/50 rounded-md p-3 my-2 font-mono text-xs overflow-x-auto"><code>{code}</code></pre>;
        }
        if (part.startsWith('`')) {
          return <code key={index} className="bg-gray-700 text-cyan-300 rounded px-1 py-0.5 font-mono text-xs">{part.slice(1, -1)}</code>;
        }
        if (part.startsWith('# ')) {
          return <h1 key={index} className="text-xl font-bold text-white mt-4 mb-2">{part.substring(2)}</h1>;
        }
        if (part.startsWith('## ')) {
          return <h2 key={index} className="text-lg font-semibold text-gray-100 mt-3 mb-1">{part.substring(3)}</h2>;
        }
        if (part.startsWith('### ')) {
            return <h3 key={index} className="text-base font-semibold text-gray-200 mt-2">{part.substring(4)}</h3>;
        }
        if (part.startsWith('* ')) {
            return <li key={index} className="ml-4 list-disc">{part.substring(2)}</li>
        }
        return <span key={index}>{part}</span>;
      })}
    </div>
  );
};


const LoadingSkeleton: React.FC = () => (
  <div className="space-y-4 animate-pulse">
    <div className="h-4 bg-gray-700 rounded w-1/4"></div>
    <div className="h-3 bg-gray-700 rounded w-full"></div>
    <div className="h-3 bg-gray-700 rounded w-5/6"></div>
    <div className="h-16 bg-gray-800 rounded mt-4"></div>
    <div className="h-3 bg-gray-700 rounded w-full"></div>
    <div className="h-3 bg-gray-700 rounded w-1/2"></div>
  </div>
);

const EmptyState: React.FC<{ mode: AnalysisMode }> = ({ mode }) => {
    const content = {
        explain: { icon: <ExplainIcon className="w-16 h-16 text-gray-600"/>, title: "Explain Code", text: "Paste your code and click Analyze to get a detailed explanation."},
        debug: { icon: <BugIcon className="w-16 h-16 text-gray-600"/>, title: "Find Bugs", text: "Let the AI scan your code for logical errors and potential issues."},
        optimize: { icon: <OptimizeIcon className="w-16 h-16 text-gray-600"/>, title: "Optimize Code", text: "Get suggestions on how to improve your code's performance and style."}
    }
    const current = content[mode];
    return (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            {current.icon}
            <h3 className="mt-4 text-xl font-bold text-gray-400">{current.title}</h3>
            <p className="mt-1 text-sm">{current.text}</p>
        </div>
    );
};

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, isLoading, error, mode }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700/50 flex flex-col min-h-[400px] lg:min-h-0">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
          <LogoIcon className="w-6 h-6 text-cyan-400"/>
          <h2 className="text-lg font-bold text-white">AI Analysis</h2>
      </div>
      <div className="flex-grow overflow-y-auto pr-2 -mr-2">
        {isLoading && <LoadingSkeleton />}
        {error && <div className="text-red-400 bg-red-900/30 p-4 rounded-md">{error}</div>}
        {!isLoading && !error && !result && <EmptyState mode={mode} />}
        {!isLoading && !error && result && <MarkdownRenderer text={result} />}
      </div>
    </div>
  );
};
