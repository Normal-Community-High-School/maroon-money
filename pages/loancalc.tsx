import { Title, Text, Box } from '@mantine/core';
import Script from 'next/script'


export default function LoanCalcPage() {

  return (
    <>
    <Box id="iq-calculators-embed-1669734975937">
    <Script
      
      type="text/javascript"
      src="https://iqcalculators.com/calculator/student-loan/widget-v1.js?id=1669734975937&options=eyJib3JkZXIiOnRydWUsImNoYXJ0cyI6dHJ1ZSwidGl0bGUiOjAsImNvbG9ycyI6eyJwcmltYXJ5IjoiIzJhNTVhNiJ9fQ=="
      strategy="beforeInteractive"
      >
    </Script>
    </Box>
    </>
  );
}