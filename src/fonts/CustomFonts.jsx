import { Global } from '@mantine/core';

import regular from './figtree-v7-latin-300.woff2';
import medium from './figtree-v7-latin-500.woff2';
import bold from './figtree-v7-latin-700.woff2';
import heavy from './figtree-v7-latin-900.woff2';

export default function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Figtree',
            src: `url('${regular}') format("woff2")`,
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Figtree',
            src: `url('${medium}') format("woff2")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Figtree',
            src: `url('${bold}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Figtree',
            src: `url('${heavy}') format("woff2")`,
            fontWeight: 900,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}