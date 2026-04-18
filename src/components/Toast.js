import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function Toast({ show, message, onDone }) {
  useEffect(() => {
    if (!show) return undefined;
    const t = window.setTimeout(onDone, 2600);
    return () => window.clearTimeout(t);
  }, [show, onDone]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-sm text-white shadow-[0_20px_60px_-30px_rgba(0,0,0,.9)] backdrop-blur-xl">
        <CheckCircle2 className="size-4 text-emerald-300" />
        <span>{message}</span>
      </div>
    </div>
  );
}

