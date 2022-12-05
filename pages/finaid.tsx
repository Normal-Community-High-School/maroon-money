import { Title, Text, List, Anchor } from '@mantine/core';

export default function FinancialAidPage() {

  return (
    <>
      <Title>Financial Aid</Title>
      <Text align="left" size="lg" mx="auto" mt="xl">
        Financial aid is an important way to help you pay for college. It might come from federal or state levels, private sources, or the school itself. According to <Anchor href='https://educationdata.org/financial-aid-statistics'>Education Data Initiative </Anchor>, "83.8% of college students benefit from some form of financial aid," and that number grows each year. Here is some brief information to help you understand the meaning of financial aid terminology and determine which forms of aid might be relevant to you.</Text>
      <List>
        <List.Item><Title order={3}>Loans</Title></List.Item>
        <List withPadding listStyleType="disc">
          <Text>Loans are simple: you are given money that you must repay, usually with interest. Federal student loans are a common and important source of aid.</Text>
        </List>
        <List.Item><Title order={3}>Grants</Title></List.Item>
        <List withPadding listStyleType="disc">
          <Text>
            As long as you fulfill your obligations, you don't have to repay grant money. Examples include Pell Grants and Federal Supplemental Educational Opportunity Grants.</Text></List>
        <List.Item><Title order={3}>Work-study jobs</Title></List.Item>
        <List withPadding listStyleType="disc">
          <Text>
            Federal programs that pay your college fees in exchange for your part-time work.</Text></List>
        <List.Item><Title order={3}>Other</Title></List.Item>
        <List withPadding listStyleType="disc">
          <Text>
            There is also aid you can obtain for more specific reasons, such as Military Family Aid and International Study Aid. Look into which types of aid are most likely to benefit you, as this page doesn't detail every type that's available.</Text></List>
        <List.Item><Title order={3}>Scholarships</Title></List.Item>
        <List withPadding listStyleType="disc">
          <Text>
            Scholarships come from nonprofit or private organizations. Students receive them based on their talents or their academic/athletic abilities. There are also scholarships given according to characteristics, such as ethnicity or whether you're a first generation college student.
            You can find information about scholarships by contacting a school's counselors or financial aid office.</Text></List>
        <List.Item><Title order={3}>Illinois Financial Aid</Title></List.Item>
        <List withPadding listStyleType="disc">
          <Text>
            The source used in the preface states that, of the 50 states, Illinois spends the 12th most money on student financial aid, nearly $400 million annually. That's $1,131 per undergraduate student, on average. Student loans are much more popular among attendees of 4-year institutions in Illinois than 2-year.</Text></List>
      </List>
    </>
  );
}