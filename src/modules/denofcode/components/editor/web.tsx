/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import MonacoEditor, { type OnChange } from '@monaco-editor/react';
import { useState, useRef, useEffect } from 'react';
import { useStore } from '@/store';

export const HTMLEditor = () => {
  const htmlcode = useStore((state) => state.htmlcode);
  const csscode = useStore((state) => state.csscode);
  const setHTML = useStore((state) => state.setHTML);
  const setCSS = useStore((state) => state.setCSS);

  const [editorMode, setEditorMode] = useState<'html' | 'css'>('html');

  const onChange: OnChange = (value) => {
    if (editorMode === 'html') {
      setHTML(value ?? '');
    } else {
      setCSS(value ?? '');
    }
  };

  return (
    <div className='flex h-full flex-col'>
      <div className='flex'>
        <button
          className={`mr-2 rounded px-4 py-2 ${editorMode === 'html' ? 'bg-blue-500 text-white' : 'bg-none'}`}
          onClick={() => setEditorMode('html')}
        >
          HTML
        </button>
        <button
          className={`rounded px-4 py-2 ${editorMode === 'css' ? 'bg-blue-500 text-white' : 'bg-none'}`}
          onClick={() => setEditorMode('css')}
        >
          CSS
        </button>
      </div>

      <div className='mt-5 flex-grow'>
        <MonacoEditor
          height='100%'
          width='100%'
          language={editorMode === 'html' ? 'html' : 'css'}
          value={editorMode === 'html' ? htmlcode : csscode}
          onChange={onChange}
          theme='vs-dark'
          options={{
            minimap: {
              enabled: true,
            },
            fontSize: 14,
            wordWrap: 'on',
          }}
        />
      </div>
    </div>
  );
};

export const HTMLPreview = () => {
  const htmlcode = useStore((state) => state.htmlcode);
  const csscode = useStore((state) => state.csscode);
  const previewRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    updatePreview();
  }, [htmlcode, csscode]);

  const updatePreview = () => {
    if (previewRef.current) {
      const combinedCode = `
        <style>${csscode}</style>
        ${htmlcode}
      `;
      previewRef.current.srcdoc = combinedCode;
    }
  };

  return (
    <div className='h-full w-full overflow-hidden rounded-xl border border-gray-300'>
      <iframe
        ref={previewRef}
        title='Preview'
        className='h-full w-full border-none'
        sandbox='allow-scripts'
      />
    </div>
  );
};
