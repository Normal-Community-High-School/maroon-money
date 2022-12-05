import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,
    gradient: theme.fn.gradient({ from: 'red', to: 'orange', deg: 45 }),
    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
}));
