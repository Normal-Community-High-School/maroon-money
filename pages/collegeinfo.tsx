import { Title, Text, Anchor } from '@mantine/core';
import { CollegeInfoOne } from '../components/Tables/CollegeInfoOne';
import { CollegeInfoTwo } from '../components/Tables/CollegeInfoThree';
import { CollegeInfoThree } from '../components/Tables/CollegeInfoTwo';

export default function CollegeInfo() {

  return (
    <>
      <Text color="dimmed" align="left" size="lg"  mx="auto" mt="xl">
        Choosing a college is a massive feat, because there are thousands of different colleges each with their own benefits and drawbacks.  For anyone struggling to decide below is a list of some of the best colleges and the average cost after financial aid and scholarships in each state according to NICHE.
      </Text>
      <CollegeInfoOne />
      <Text color="dimmed" align="left" size="lg"  mx="auto" mt="xl">
        These are all great colleges, but there are many more amazing colleges that might be right for you. To see more colleges and go more in-depth check out https://www.niche.com/blog/the-best-college-in-each-state/.
        When picking out a college the cost is a major factor for most people. The amount it cost to go to college varies a lot between colleges and between different states.  For example, in Alabama, the average tuition to go to a public college in-state is just over $7,000, and out-of-state it is a little over $13,000.  This is way different from Indiana where the average cost of tuition for a public college in-state is $8,631 and out-of-state it is $21,753. For more details about colleges in all of the states including the average cost of tuition, and living costs check out https://www.collegetuitioncompare.com/state/.
        https://www.savingforcollege.com/article/6-ways-you-can-save-for-college
      </Text>
      <CollegeInfoTwo />
      <Text color="dimmed" align="center" size="lg"  mx="auto" mt="xl">
      The cost to go to college in the above tables might seem low, but that is because they show the average cost after financial aid and scholarships. The table below shows the cost of some colleges before financial aid and scholarships.
      </Text>
      <CollegeInfoThree />
    </>
  );
}
