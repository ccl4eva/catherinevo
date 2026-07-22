import { useEffect, useState } from 'react';
import {
  applyPalette,
  getActivePalette,
  isPalettePreviewEnabled,
  palettes,
  setPalettePreviewEnabled,
  syncPaletteFromUrl,
  type PaletteId,
} from '@/lib/palette';

/**
 * Private palette preview — only visible after unlocking with ?palettes=1
 * Lock again with ?palettes=0 (resets visitors in this browser to Warm Gold).
 */
export function PaletteToggle() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState<PaletteId>('warm-gold');
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const { preview, palette } = syncPaletteFromUrl();
    setEnabled(preview);
    setActive(palette);

    // Drop query params from the address bar so the unlock URL isn't shared by accident
    if (window.location.search.includes('palettes=') || window.location.search.includes('palette=')) {
      const url = new URL(window.location.href);
      url.searchParams.delete('palettes');
      url.searchParams.delete('palette');
      window.history.replaceState({}, '', `${url.pathname}${url.hash}`);
    }
  }, []);

  if (!enabled) {
    return null;
  }

  function select(id: PaletteId) {
    applyPalette(id);
    setActive(id);
  }

  function lock() {
    setPalettePreviewEnabled(false);
    applyPalette('warm-gold');
    setEnabled(false);
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-[60] px-3 py-2 text-xs font-medium rounded-lg border border-border bg-card text-foreground shadow-sm hover:bg-background"
      >
        Palettes
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60] w-[min(100vw-2rem,20rem)] rounded-xl border border-border bg-card shadow-lg p-3 text-foreground">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-primary">
            Private palettes
          </p>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Only on this browser — unlock via ?palettes=1
          </p>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={lock}
            className="text-xs text-muted-foreground hover:text-foreground px-1"
          >
            Lock
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-xs text-muted-foreground hover:text-foreground px-1"
            aria-label="Minimize palette picker"
          >
            Hide
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        {palettes.map((palette) => {
          const isActive = active === palette.id;
          return (
            <button
              key={palette.id}
              type="button"
              onClick={() => select(palette.id)}
              className={`flex items-center gap-3 rounded-lg px-2.5 py-2 text-left transition-colors border ${
                isActive
                  ? 'border-primary bg-background'
                  : 'border-transparent hover:bg-background/80'
              }`}
            >
              <span className="flex gap-0.5 shrink-0" aria-hidden>
                {palette.swatches.map((color) => (
                  <span
                    key={color}
                    className="w-3.5 h-3.5 rounded-full border border-foreground/10"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium leading-tight">
                  {palette.label}
                </span>
                <span className="block text-[11px] text-muted-foreground truncate">
                  {palette.note}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Re-export helper so FOUC script logic stays documented in one place
export { isPalettePreviewEnabled, getActivePalette };
