import nodeMailer, { Transporter } from 'nodemailer'

interface ISendMailProps {
  to: string
  subject: string
  body: string
}

class SendMailService {
  private client: Transporter

  constructor () {
    nodeMailer.createTestAccount()
      .then(account => {
        const transporter = nodeMailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure, // true for 465, false for other ports
          auth: {
            user: account.user, // generated ethereal user
            pass: account.pass // generated ethereal password
          },
          tls: {
            rejectUnauthorized: false
          }
        })

        this.client = transporter
      })
  }

  public async execute ({ to, subject, body }: ISendMailProps): Promise<void> {
    const response = await this.client.sendMail({
      to,
      subject,
      from: 'NPS <noreplay@nps.com>',
      html: body
    })

    console.log('Message sent: %s', response.messageId)
    console.log('Preview URL: %s', nodeMailer.getTestMessageUrl(response))
  }
}

export default new SendMailService()
