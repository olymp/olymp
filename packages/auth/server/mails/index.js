export default {
  register: ({ email, token }) => ({ url }) => ({
    to: email,
    subject: 'Registrierung',
    markdown: `
      # Registrierung
      Ein Benutzerkonto wurde mit dieser E-Mail Adresse auf ${url} erstellt.

      Um die Registrierung abzuschließen, müssen Sie innerhalb 1 Stunde das Konto mithilfe des Links unten bestätigen. Später ist der Link ungültig und die Registrierung muss erneut beantragt werden.

      [Jetzt bestätigen](${url}?confirm=${token})
    `,
  }),
  forgot: ({ email, token }) => ({ url }) => ({
    to: email,
    subject: 'Passwortänderung',
    markdown: `
      # Passwortänderung
      Das Zurücksetzen Ihres Passworts für ${url} wurde beantragt.

      Um das Zurücksetzen abzuschließen, müssen Sie innerhalb 1 Stunde den Link unterhalb des Textes anklicken. Später ist der Link ungültig und das Zurücksetzen des Passworts muss erneut beantragt werden.

      [Jetzt bestätigen](${url}?reset=${token})
    `,
  }),
  invite: ({ email, token }) => ({ url }) => ({
    to: email,
    subject: 'Einladung',
    markdown: `
      # Einladung
      Sie wurden auf ${url} eingeladen.

      Mittels des Links unten können Sie innerhalb von 1 Stunde ein Benutzerkonto registrieren. Später ist der Link ungültig und Sie brauchen erneut eine Einladung.

      [Jetzt bestätigen](${url}?register=${token})
    `,
  }),
};
