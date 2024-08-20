import { Resend } from "resend";
import RespondEmail from "../../../emails/Welcome";
const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(){
    const mail = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'fravalo.killian2@gmail.com',
        subject: 'hello world',
        react: RespondEmail(),
      });

      return (<>{mail.data?.id}</>)
}