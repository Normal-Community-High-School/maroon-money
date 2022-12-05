import { Title, Text, Image, List, Flex} from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Text align="left" size="lg" mx="auto" mt="xl">
        Hey! We are currently seniors at Normal Community High School creating a neat project. Our goal is to help high school seniors become prepared for college finances.
      </Text>
      <Flex align="center">
      <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto', padding: '20px' }}>
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1607941561567-bf187df5d5e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
        alt="Elf Adam"
        caption="Adam Blumhardt"
        width={200}
        height={200}
      />
    </div>
    <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto', padding: '20px' }}>
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1607173283793-4aefda66852a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
        alt="Elf Vervin"
        caption="Vervin Fernandes"
        width={200}
        height={200}
      />
    </div>
    <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto', padding: '20px' }}>
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1604868461178-fba95d11da37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
        alt="Elf Tyler"
        caption="Tyler Herren"
        width={200}
        height={200}
      />
    </div>
    </Flex>
      <Title>Credits</Title>
      <List>
      <List.Item><b>Research and Website Production:</b> Vervin Fernandes, Tyler Herren, and Adam Blumhardt</List.Item>
      <List.Item><b>Mentors:</b> Nick Cooper and Zac Correll</List.Item>
      <List.Item><b>Additional Research:</b> Sam Babcock and Harika Paturivenkata</List.Item>
      <List.Item><b>Associate Degree Program Coordinators:</b> Amy Feeney and Brittany Bergmann</List.Item>
      </List>
    </>
  );
}
