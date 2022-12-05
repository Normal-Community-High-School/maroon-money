import { Title, Text, Box } from '@mantine/core';
import Script from 'next/script'


export default function LoanCalcPage() {

  return (
    <>
    <Script
      id="iq-calculators-embed-1669734975937"
      type="text/javascript"
      src="https://iqcalculators.com/calculator/student-loan/widget-v1.js?id=1669734975937&options=eyJib3JkZXIiOnRydWUsImNoYXJ0cyI6dHJ1ZSwidGl0bGUiOjAsImNvbG9ycyI6eyJwcmltYXJ5IjoiIzJhNTVhNiJ9fQ=="
      >
    </Script>
    <Text color="dimmed" align="left" size="lg"  mx="auto" mt="xl">
      Student Loans are an important aspect of a college education. 
It is preferable that prospective students utilize other forms of financial aid and grants, then use a properly structured loan. Choosing the right loan ensures that you can pay off the debt for a reasonable within a reasonable time-period with monthly payments that you can afford.
How They Work
To understand how Student Loans work, you must know the following terms:
Principal - this is how much money you are taking out as a loan, this is typically referenced in loan calculators as Amount or Balance.
Loan Term - this is how many years that you spend paying off the entire loan
Interest Rate - this percentages determines how much interest you will be paying on the principal or money that you took out on the loan.
Your monthly Student Loans payments begin with paying off the interest that you owe, and then gradually pay off parts of your principal. By the end of the loan, you will be paying off only principal from your loan debt.
Tips with Student Loans
Interest Rates - The cost of an additional 1% to your interest rate can cause you to pay so much more: make sure that you are getting a competitive rate!
Monthly Payments - when looking for a student loan, make sure that monthly payments are reasonable and competitive with other lenders. Also make sure that they are affordable with your monthly budget from your future occupation. 
Extra Fees - When investigating actual student loans, make sure to compare additional fees for policies such as late or missed payments because some lenders may have higher fees that impact your ability to pay future payments, while others may have options to temporarily reduce or pause payments.
    </Text>
    </>
  );
}