import React from 'react';
import ReactDOM from 'react-dom/client';
import { connectLogger, createCtx } from '@reatom/framework';
import { reatomContext } from '@reatom/npm-react';
import { historyAtom } from '@reatom/npm-history';
import { createBrowserHistory } from 'history';

import { App } from './App';
import './index.css';

const ctx = createCtx();
connectLogger(ctx);
historyAtom(ctx, createBrowserHistory());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <reatomContext.Provider value={ctx}>
      <App />
    </reatomContext.Provider>
  </React.StrictMode>
);
