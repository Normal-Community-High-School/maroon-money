import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" gradient={{ from: 'red.9', to: 'pink.9', deg: 45 }} component="span">
          MaroonMoney
        </Text>
      </Title>
      <Text align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
      Welcome to Maroon Money! Our goal is to help you become prepared for your college finances. Check us out!
      </Text>
    </>
  );
}
