/* eslint-disable import/prefer-default-export */
export const NDVI_COLOR_RANGES = [
  {
    min: -1, max: 0, color: '#a50026', interval: '≤ 0',
  },
  {
    min: 0, max: 0.1, color: '#d73027', interval: '0 - 0.1',
  },
  {
    min: 0.1, max: 0.2, color: '#f46d43', interval: '0.1 - 0.2',
  },
  {
    min: 0.2, max: 0.3, color: '#fdae61', interval: '0.2 - 0.3',
  },
  {
    min: 0.3, max: 0.4, color: '#fee08b', interval: '0.3 - 0.4',
  },
  {
    min: 0.4, max: 0.5, color: '#ffffbf', interval: '0.4 - 0.5',
  },
  {
    min: 0.5, max: 0.6, color: '#d9ef8b', interval: '0.5 - 0.6',
  },
  {
    min: 0.6, max: 0.7, color: '#a6d96a', interval: '0.6 - 0.7',
  },
  {
    min: 0.7, max: 0.8, color: '#66bd63', interval: '0.7 - 0.8',
  },
  {
    min: 0.8, max: 0.9, color: '#1a9850', interval: '0.8 - 0.9',
  },
  {
    min: 0.9, max: 1, color: '#006837', interval: '0.9 - 1',
  },
];

export const NDSI_COLOR_RANGES = [
  {
    min: -1, max: 0, color: '#ca0020', interval: '≤ 0 (Terreno)',
  },
  {
    min: 0, max: 0.1, color: '#dd494b', interval: '0 - 0.1',
  },
  {
    min: 0.1, max: 0.2, color: '#f09377', interval: '0.1 - 0.2',
  },
  {
    min: 0.2, max: 0.3, color: '#f5c1a9', interval: '0.2 - 0.3',
  },
  {
    min: 0.3, max: 0.4, color: '#f7e5dd', interval: '0.3 - 0.4',
  },
  {
    min: 0.4, max: 0.5, color: '#82bcd9', interval: '0.4 - 0.5',
  },
  {
    min: 0.5, max: 0.6, color: '#4396c5', interval: '0.5 - 0.6',
  },
  {
    min: 0.6, max: 0.7, color: '#376faa', interval: '0.6 - 0.7',
  },
  {
    min: 0.7, max: 0.8, color: '#2c559a', interval: '0.7 - 0.8',
  },
  {
    min: 0.8, max: 0.9, color: '#1f3b89', interval: '0.8 - 0.9',
  },
  {
    min: 0.9, max: 1, color: '#084081', interval: '0.9 - 1 (Congelado)',
  },
];

export const NDMI_COLOR_RANGES = [
  {
    min: -1, max: 0, color: '#ddac61', interval: '≤ 0 (Humedad baja)',
  },
  {
    min: 0, max: 0.1, color: '#eabf8f', interval: '0 - 0.1',
  },
  {
    min: 0.1, max: 0.2, color: '#f8e2b2', interval: '0.1 - 0.2',
  },
  {
    min: 0.2, max: 0.3, color: '#ffeed1', interval: '0.2 - 0.3',
  },
  {
    min: 0.3, max: 0.4, color: '#deebf7', interval: '0.3 - 0.4',
  },
  {
    min: 0.4, max: 0.5, color: '#c6dbef', interval: '0.4 - 0.5',
  },
  {
    min: 0.5, max: 0.6, color: '#9ecae1', interval: '0.5 - 0.6',
  },
  {
    min: 0.6, max: 0.7, color: '#6baed6', interval: '0.6 - 0.7',
  },
  {
    min: 0.7, max: 0.8, color: '#4393c3', interval: '0.7 - 0.8',
  },
  {
    min: 0.8, max: 0.9, color: '#2166ac', interval: '0.8 - 0.9',
  },
  {
    min: 0.9, max: 1, color: '#084081', interval: '1 (Humedad óptima)',
  },
];

export const COLOR_RANGES = {
  ndvi: NDVI_COLOR_RANGES,
  ndsi: NDSI_COLOR_RANGES,
  ndmi: NDMI_COLOR_RANGES,
};
