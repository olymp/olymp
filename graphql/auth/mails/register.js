module.exports = (send, { email, token }) => send({
  to: email,
  subject: 'Registrierungsbestätigung',
  content: [{
    type: 'p',
    strong: true,
    content: 'Registrierungsbestätigung',
  }, {
    type: 'p',
    content: 'Bitte bestätigen Sie die Registrierung.',
  }, {
    type: 'link',
    link: `http://localhost:3000?confirm=${token}`,
    content: 'Jetzt bestätigen',
  }],
});
