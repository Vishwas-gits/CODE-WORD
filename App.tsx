import React, { useState, useCallback } from 'react';
import { CodeEditor } from './components/CodeEditor';
import { Controls } from './components/Controls';
import { ResultsDisplay } from './components/ResultsDisplay';
import { analyzeCode } from './services/geminiService';
import { AnalysisMode } from './types';
import { LogoIcon } from './components/icons';

const App: React.FC = () => {
  const [code, setCode] = useState<string>(`function factorial(n) {\n  if (n === 0) {\n    return 1;\n  }\n  return n * factorial(n - 1);\n}`);
  const [analysisMode, setAnalysisMode] = useState<AnalysisMode>('explain');
  const [learnMode, setLearnMode] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = useCallback(async () => {
    if (!code.trim()) {
      setError("Please enter some code to analyze.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnalysisResult('');
    
    try {
      const result = await analyzeCode(code, analysisMode, learnMode);
      setAnalysisResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [code, analysisMode, learnMode]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 p-4 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoIcon className="w-8 h-8 text-cyan-400" />
            <h1 className="text-xl font-bold text-white tracking-tight">Codewords</h1>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="flex flex-col gap-4">
          <Controls 
            analysisMode={analysisMode}
            setAnalysisMode={setAnalysisMode}
            learnMode={learnMode}
            setLearnMode={setLearnMode}
            onAnalyze={handleAnalyze}
            isLoading={isLoading}
          />
          <CodeEditor code={code} setCode={setCode} />
        </div>

        <ResultsDisplay 
          result={analysisResult}
          isLoading={isLoading}
          error={error}
          mode={analysisMode}
        />
      </main>
    </div>
  );
};

export default App;