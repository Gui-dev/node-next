import nodeMailer, { Transporter } from 'nodemailer'
import handlebars from 'handlebars'
import fs from 'fs'

interface ISendMailProps {
  to: string
  subject: string
  variables: {
    survey_user_id: string
    user_id: string
    name: string
    title: string
    description: string
    link: string
  }
  path: string
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

  public async execute ({ to, subject, variables, path }: ISendMailProps): Promise<void> {
    const templateFileContent = fs.readFileSync(path).toString('utf-8')

    const templateMailParse = handlebars.compile(templateFileContent)

    const html = templateMailParse(variables)

    const response = await this.client.sendMail({
      to,
      subject,
      from: 'NPS <noreplay@nps.com>',
      html
    })

    console.log('Message sent: %s', response.messageId)
    console.log('Preview URL: %s', nodeMailer.getTestMessageUrl(response))
  }
}

export default new SendMailService()
