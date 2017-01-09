module.exports = (send, {email, token}) => send({
  to: email,
  subject: 'Passwortänderung',
  content: [{
    type: 'p',
    strong: true,
    content: 'Passwortänderung'
  }, {
    type: 'p',
    content: 'Bitte bestätigen Sie die Passwortänderung.'
  }, {
    type: 'link',
    link: `http://localhost:3000?reset=${token}`,
    content: 'Jetzt bestätigen'
  }]
});