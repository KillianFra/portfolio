import { Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text, Tailwind } from "@react-email/components";

export const RespondEmail = () => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>Thanks For Reaching me out</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading>Killian.dev</Heading>
          <Heading style={heading}>Thanks you for reaching me out, i'll respond as soon as possible !</Heading>
          <Section>
            <Button href="https://linear.app" className="bg-red-900 w-2/3 px-4 py-3 rounded-2xl text-white font-bold text-center my-4">
              Check My Website
            </Button>
          </Section>
          <Text style={paragraph}>If you have any questions, feel free to contact me again, i'll respond to everything.</Text>
          <Hr style={hr} />
          <Text style={reportLink}>Killian - "Can't see faces, Hope it's not related to your Project"</Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);


export default RespondEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const reportLink = {
  fontSize: "14px",
  color: "#b4becc",
};

const hr = {
  borderColor: "#dfe1e4",
  margin: "42px 0 26px",
};