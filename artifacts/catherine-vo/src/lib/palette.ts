export const PALETTE_STORAGE_KEY = 'cv-palette';
/** When set, alternate palettes + the picker are available in this browser only. */
export const PALETTE_PREVIEW_KEY = 'cv-palette-preview';

export const palettes = [
  {
    id: 'warm-gold',
    label: 'Warm Gold',
    note: 'Brand default — cream + antique gold',
    swatches: ['#FDFAF4', '#8B6914', '#C9A84C'],
  },
  {
    id: 'ink-paper',
    label: 'Ink & Paper',
    note: 'Serious — charcoal + clay accent',
    swatches: ['#F9F8F6', '#1F2A3A', '#A84B3A'],
  },
  {
    id: 'harbor',
    label: 'Harbor',
    note: 'Calm — mist + navy + teal',
    swatches: ['#F2F6F9', '#243B5A', '#3E8A7E'],
  },
  {
    id: 'grove',
    label: 'Grove',
    note: 'Mission — forest + parchment + brass',
    swatches: ['#F7F4EC', '#224B3A', '#B0893A'],
  },
  {
    id: 'plum-dusk',
    label: 'Plum Dusk',
    note: 'Unexpected — plum + amber',
    swatches: ['#F8F5F8', '#4A3658', '#C4782A'],
  },
] as const;

export type PaletteId = (typeof palettes)[number]['id'];

export function isPaletteId(value: string | null): value is PaletteId {
  return palettes.some((p) => p.id === value);
}

export function applyPalette(id: PaletteId) {
  document.documentElement.setAttribute('data-palette', id);
  localStorage.setItem(PALETTE_STORAGE_KEY, id);
}

export function isPalettePreviewEnabled(): boolean {
  try {
    return localStorage.getItem(PALETTE_PREVIEW_KEY) === '1';
  } catch {
    return false;
  }
}

export function setPalettePreviewEnabled(enabled: boolean) {
  try {
    if (enabled) {
      localStorage.setItem(PALETTE_PREVIEW_KEY, '1');
    } else {
      localStorage.removeItem(PALETTE_PREVIEW_KEY);
    }
  } catch {
    // ignore
  }
}

/** Public visitors always get Warm Gold unless preview mode is unlocked in this browser. */
export function getActivePalette(): PaletteId {
  if (!isPalettePreviewEnabled()) {
    return 'warm-gold';
  }
  const stored = localStorage.getItem(PALETTE_STORAGE_KEY);
  return isPaletteId(stored) ? stored : 'warm-gold';
}

export function getStoredPalette(): PaletteId {
  return getActivePalette();
}

/**
 * Reads ?palettes=1|0 and optional ?palette=<id> from the URL.
 * Enables private preview without showing controls to the public.
 */
export function syncPaletteFromUrl(search = window.location.search): {
  preview: boolean;
  palette: PaletteId;
} {
  const params = new URLSearchParams(search);

  if (params.get('palettes') === '1') {
    setPalettePreviewEnabled(true);
  } else if (params.get('palettes') === '0') {
    setPalettePreviewEnabled(false);
    applyPalette('warm-gold');
  }

  const preview = isPalettePreviewEnabled();
  const requested = params.get('palette');

  if (preview && isPaletteId(requested)) {
    applyPalette(requested);
    return { preview, palette: requested };
  }

  const palette = getActivePalette();
  applyPalette(palette);
  return { preview, palette };
}
