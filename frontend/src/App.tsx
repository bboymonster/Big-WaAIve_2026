import { useEffect, useState } from 'react';
import { getHealth, type HealthResponse, USE_MOCKS } from './api';

type ConnectionState =
  | { status: 'loading' }
  | { status: 'connected'; data: HealthResponse }
  | { status: 'error'; message: string };

export default function App() {
  const [connection, setConnection] = useState<ConnectionState>({ status: 'loading' });

  const checkConnection = () => {
    setConnection({ status: 'loading' });
    getHealth()
      .then((data) => {
        setConnection({ status: 'connected', data });
      })
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : 'Connection failed';
        setConnection({ status: 'error', message });
      });
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#E2E8F0] flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <header className="border-b border-[#1E232B] px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-sm bg-blue-500" />
            <span className="font-semibold tracking-tight text-white text-sm uppercase">
              Big~WaAIve Template
            </span>
            <span className="text-xs text-neutral-500 font-mono px-1.5 py-0.5 rounded border border-[#1E232B] bg-[#12161D]">
              MVP Sprint
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="text-neutral-500">Mocks:</span>
            <span
              className={`font-mono px-2 py-0.5 rounded text-[11px] font-medium ${
                USE_MOCKS
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  : 'bg-[#12161D] text-neutral-400 border border-[#1E232B]'
              }`}
            >
              {USE_MOCKS ? 'ACTIVE' : 'OFF'}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 flex flex-col justify-center">
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5">
            {connection.status === 'loading' && (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium bg-[#12161D] border border-[#1E232B] text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" />
                Checking backend connection...
              </span>
            )}

            {connection.status === 'connected' && (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-emerald-950/40 border border-emerald-800/60 text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Backend: OK (v{connection.data.version})
              </span>
            )}

            {connection.status === 'error' && (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium bg-rose-950/40 border border-rose-800/60 text-rose-300">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                Backend: Disconnected ({connection.message})
              </span>
            )}

            <button
              onClick={checkConnection}
              className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors px-2 py-1 rounded hover:bg-[#161B22]"
            >
              Refresh
            </button>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Rapid MVP Workspace
            </h1>
            <p className="text-neutral-400 text-sm max-w-2xl leading-relaxed">
              Высокоскоростной стек для двухчасового интенсива: FastAPI, Vite, React, TypeScript и Tailwind CSS.
              Готов к параллельной разработке сценариев и проверке гипотез.
            </p>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-lg border border-[#1E232B] bg-[#0E1117] space-y-2">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">01. Backend</div>
              <div className="text-sm font-medium text-white">FastAPI + Pydantic</div>
              <div className="text-xs text-neutral-400 font-mono">
                GET /api/health
              </div>
            </div>

            <div className="p-4 rounded-lg border border-[#1E232B] bg-[#0E1117] space-y-2">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">02. Frontend</div>
              <div className="text-sm font-medium text-white">React + Vite + Tailwind</div>
              <div className="text-xs text-neutral-400 font-mono">
                proxy: /api &rarr; :8000
              </div>
            </div>

            <div className="p-4 rounded-lg border border-[#1E232B] bg-[#0E1117] space-y-2">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">03. Contracts</div>
              <div className="text-sm font-medium text-white">Single Source of Truth</div>
              <div className="text-xs text-neutral-400 font-mono">
                API_CONTRACT.md
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1E232B] px-6 py-4 text-xs text-neutral-500">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span>Big~WaAIve MVP Starter</span>
          <span className="font-mono">#0B0D10 Theme</span>
        </div>
      </footer>
    </div>
  );
}
