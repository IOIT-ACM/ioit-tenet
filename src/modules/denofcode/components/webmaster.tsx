'use client';

import Editor from '@monaco-editor/react';

export const WebMasterScreen = () => {
  return (
    <div>
      <Editor
        height='calc(100vh - 3rem)'
        width='calc(100vw - 3rem)'
        defaultLanguage='html'
        theme='vs-dark'
      />
    </div>
  );
};
