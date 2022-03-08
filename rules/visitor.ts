export const VisitorRules = {
  name: { required: true },
  email: { required: true, email: true },
  message: { required: true, maxLength: 200 }
}