import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import Link from 'next/link';
import { MantineProvider, ColorScheme, ColorSchemeProvider, Header, AppShell, Group, ActionIcon } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <AppShell
              padding="md"
              fixed={false}
              header={
                <Header height={60}>
                  <Group sx={{ height: '100%' }} px={20} position="right">
                    <Link href="/">Home</Link>
                    <Link href="/collegeinfo">College Info</Link>
                    <Link href="/finaid">Financial Aid</Link>
                    <Link href="/loancalc">Loan Calculator</Link>
                    <Link href="/dictionary">Dictionary</Link>
                    <Link href="/feedback">Feedback</Link>
                    <Link href="/about">About Us</Link>
                    <ColorSchemeToggle />
                  </Group>
                </Header>
              }
            >
              <Component {...pageProps} />
            </AppShell>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
