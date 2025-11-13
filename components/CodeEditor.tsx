
import React from 'react';

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode }) => {
  const lineNumbers = code.split('\n').map((_, i) => i + 1);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden flex-grow flex shadow-lg border border-gray-700/50">
      <div className="font-mono text-sm text-gray-500 bg-gray-900/50 p-4 text-right select-none">
        {lineNumbers.map(num => <div key={num}>{num}</div>)}
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="font-mono text-sm bg-transparent text-gray-200 p-4 w-full flex-grow resize-none outline-none focus:outline-none placeholder-gray-500"
        placeholder="Paste your code here..."
        spellCheck="false"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
      />
    </div>
  );
};
