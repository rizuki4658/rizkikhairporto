import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const esc = (s = '') =>
  s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!))

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  const { name, email, message } = req.body ?? {}
  if (!name || !email || !message) return res.status(400).json({ message: 'All fields are required' })

  const port = Number(process.env.EMAIL_PORT || 465)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port,
    secure: port === 465,
    auth: { user: process.env.EMAIL_USER!, pass: process.env.EMAIL_PASS! },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM!,       // contoh: "Portfolio Contact" <you@gmail.com>
      to: process.env.EMAIL_TO!,           // inbox kamu
      replyTo: email,                      // biar “Reply” ke pengirim
      subject: `📬 New Message From: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`, // fallback
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial">
          <h2 style="margin:0 0 12px">New Message</h2>
          <p><b>Name:</b> ${esc(name)}</p>
          <p><b>Email:</b> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
          <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
          <pre style="white-space:pre-wrap;margin:0">${esc(message)}</pre>
        </div>
      `.trim()
    })
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('SMTP ERROR', err)
    return res.status(500).json({ message: 'Send failed' })
  }
}
