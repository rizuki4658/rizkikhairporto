export const VisitorRules = {
  name: { required: true, message: 'Your name is required.' },
  email: { required: true, email: true, message: 'Your email is required.' },
  message: { required: true, maxLength: 200, message: 'Your message is required.' }
}