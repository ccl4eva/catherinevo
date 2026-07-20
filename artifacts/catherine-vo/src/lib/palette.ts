export const PALETTE_STORAGE_KEY = 'cv-palette';

export const palettes = [
  {
    id: 'warm-gold',
    label: 'Warm Gold',
    note: 'Current — cream + antique gold',
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

export function getStoredPalette(): PaletteId {
  const stored = localStorage.getItem(PALETTE_STORAGE_KEY);
  return isPaletteId(stored) ? stored : 'warm-gold';
}
