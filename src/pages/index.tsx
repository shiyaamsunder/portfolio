import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import Head from 'next/head';

const Index = () => (
  <Container height="100vh">
    <Head>
      <title>Shiyaam Sunder</title>
    </Head>
    <Hero />

    <DarkModeSwitch />
  </Container>
);

export default Index;
