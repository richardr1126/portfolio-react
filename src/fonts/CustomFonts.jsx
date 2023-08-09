import { Global } from '@mantine/core';

import regular from './GreycliffCF-Regular.woff2';
import medium from './GreycliffCF-Medium.woff2';
import bold from './GreycliffCF-Bold.woff2'
import heavy from './GreycliffCF-Heavy.woff2'

export default function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${regular}') format("woff2")`,
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${medium}') format("woff2")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${bold}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Greycliff CF',
            src: `url('${heavy}') format("woff2")`,
            fontWeight: 900,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}