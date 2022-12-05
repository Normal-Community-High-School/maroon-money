import {Box} from '@mantine/core'
import Script from 'next/script'

export default async function LoanCalcPage() {




  return (
    <>
    <Box id="iq-calculators-embed-1669734975937"> </Box>
    <Script
  id="show-banner"
  dangerouslySetInnerHTML={{
    __html: `await import('../public/widget-v1')`,
  }}
/>    </>
  );
}