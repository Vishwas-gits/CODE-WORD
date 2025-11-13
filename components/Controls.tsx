
import React from 'react';
import { AnalysisMode } from '../types';
import { BugIcon, OptimizeIcon, ExplainIcon, SparkleIcon, BrainIcon } from './icons';

interface ControlsProps {
  analysisMode: AnalysisMode;
  setAnalysisMode: (mode: AnalysisMode) => void;
  learnMode: boolean;
  setLearnMode: (learn: boolean) => void;
  onAnalyze: () => void;
  isLoading: boolean;
}

const ModeButton: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 ${
      isActive
        ? 'bg-cyan-500 text-white shadow-md'
        : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export const Controls: React.FC<ControlsProps> = ({
  analysisMode,
  setAnalysisMode,
  learnMode,
  setLearnMode,
  onAnalyze,
  isLoading,
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700/50 flex flex-col gap-4">
      <div className="flex gap-2">
        <ModeButton
          label="Explain"
          icon={<ExplainIcon className="w-5 h-5" />}
          isActive={analysisMode === 'explain'}
          onClick={() => setAnalysisMode('explain')}
        />
        <ModeButton
          label="Debug"
          icon={<BugIcon className="w-5 h-5" />}
          isActive={analysisMode === 'debug'}
          onClick={() => setAnalysisMode('debug')}
        />
        <ModeButton
          label="Optimize"
          icon={<OptimizeIcon className="w-5 h-5" />}
          isActive={analysisMode === 'optimize'}
          onClick={() => setAnalysisMode('optimize')}
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <label htmlFor="learn-mode-toggle" className="flex items-center gap-3 cursor-pointer select-none">
          <div className="relative">
            <input 
              type="checkbox" 
              id="learn-mode-toggle" 
              className="sr-only"
              checked={learnMode}
              onChange={() => setLearnMode(!learnMode)}
            />
            <div className={`block w-12 h-6 rounded-full transition-colors ${learnMode ? 'bg-cyan-500' : 'bg-gray-600'}`}></div>
            <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${learnMode ? 'translate-x-6' : ''}`}></div>
          </div>
          <div className="flex items-center gap-2">
             <BrainIcon className="w-5 h-5 text-gray-300"/>
             <span className="font-medium text-sm">Learn Mode</span>
          </div>
        </label>
        <button
          onClick={onAnalyze}
          disabled={isLoading}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </>
          ) : (
            <>
              <SparkleIcon className="w-5 h-5" />
              <span>Analyze</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
