import { Text, Title, Flex, Container, List, Grid } from '@mantine/core'
import Script from 'next/script'

export default function LoanCalcPage() {

  return (
    <>
      <Grid justify='center'>
        <Grid.Col span={6}>
        <iframe src='https://www.easycalculation.com/mortgage/embedded_student-loan-calculator.php' width={500} height={800}></iframe>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text>Student Loans are an important aspect of a college education. It is preferable that prospective students utilize other forms of financial aid and grants, then use a properly structured loan. Choosing the right loan ensures that you can pay off the debt for a reasonable within a reasonable time-period with monthly payments that you can afford. </Text>
          <Title>How They Work</Title>
          <Text>
            To understand how Student Loans work, you must know the following terms:
          </Text>
          <List>
            <List.Item><Text fw={700}>Principal:</Text>This is how much money you are taking out as a loan, this is typically referenced in loan calculators as Amount or Balance.</List.Item>
            <List.Item><Text fw={700}>Loan Term:</Text>This is how many years that you spend paying off the entire loan</List.Item>
            <List.Item><Text fw={700}>Interest Rate:</Text>This percentages determines how much interest you will be paying on the principal or money that you took out on the loan.</List.Item>
          </List>
          <Text>
            Your monthly Student Loans payments begin with paying off the interest that you owe, and then gradually pay off parts of your principal. By the end of the loan, you will be paying off only principal from your loan debt.</Text>
          <Title>Tips with Student Loans</Title>
          <Text>
            <List>
              <List.Item><Text fw={700}>Interest Rates:</Text>The cost of an additional 1% to your interest rate can cause you to pay so much more: make sure that you are getting a competitive rate!</List.Item>
              <List.Item><Text fw={700}>Monthly Payments:</Text>When looking for a student loan, make sure that monthly payments are reasonable and competitive with other lenders. Also make sure that they are affordable with your monthly budget from your future occupation.</List.Item>
              <List.Item><Text fw={700}>Extra Fees:</Text>When investigating actual student loans, make sure to compare additional fees for policies such as late or missed payments because some lenders may have higher fees that impact your ability to pay future payments, while others may have options to temporarily reduce or pause payments.</List.Item>
            </List>
          </Text>
          </Grid.Col>
      </Grid>

    </>
  );
}