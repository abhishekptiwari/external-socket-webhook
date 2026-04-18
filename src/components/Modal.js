import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') onClose();
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        aria-label="Close"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute inset-0 overflow-y-auto p-4 sm:p-6">
        <div
          className={cn('mx-auto w-full max-w-[920px]')}
        >
          <div
            className={cn(
              'rounded-3xl border border-white/10 bg-zinc-950/70 shadow-[0_40px_120px_-60px_rgba(0,0,0,.9)] backdrop-blur-xl'
            )}
            style={{ maxHeight: 'calc(100dvh - 2rem)' }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
              <div>
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="text-xs text-white/55">We’ll reply within 24 hours.</div>
              </div>
              <button
                className="grid size-10 place-items-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15"
                onClick={onClose}
                aria-label="Close modal"
                type="button"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="max-h-[calc(100dvh-9rem)] overflow-y-auto p-5 sm:p-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
