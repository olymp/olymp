module.exports = {
  register: ({ email, token }) => ({ url }) => ({
    to: email,
    subject: 'Registrierung',
    markdown: `
      # Registrierung
      Bitte bestätigen Sie die Registrierung.
      [Jetzt bestätigen](${url}?confirm=${token})
    `,
  }),
  forgot: ({ email, token }) => ({ url }) => ({
    to: email,
    subject: 'Passwortänderung',
    markdown: `
      # Passwortänderung
      Bitte bestätigen Sie die Passwortänderung.
      [Jetzt bestätigen](${url}?reset=${token})
    `,
  }),
};
