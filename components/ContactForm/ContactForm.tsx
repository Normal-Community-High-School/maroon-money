import { useForm, ValidationError } from "@formspree/react";
import { Button, Textarea, Input, Title, Text, Grid, Container, Divider } from "@mantine/core";


export default function ContactForm() {
  const [state, handleSubmit] = useForm("xknedjzo");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <Grid>
      <Grid.Col span={6}>
        <form onSubmit={handleSubmit}>
          <Text>Email Address</Text>
          <Input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Text>Message</Text>
          <Textarea id="message" name="message" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <Divider my={'sm'}/>
          <Button type="submit" disabled={state.submitting}>
            Submit
          </Button>
          <ValidationError errors={state.errors} />
        </form>
      </Grid.Col>
      <Grid.Col span={6}>
        <Title align="center">We'd love to hear back from you!</Title>
        <Text align="center">Please send us your feedback to improve maroon money!</Text>
      </Grid.Col>
    </Grid>
  );
}