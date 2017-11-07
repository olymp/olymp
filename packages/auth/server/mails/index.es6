export default {
  register: `
    #h1 Registrierung#
    Ein Benutzerkonto wurde mit dieser E-Mail Adresse auf {url} erstellt.

    Um die Registrierung abzuschließen, musst du innerhalb von 7 Tagen das Konto mithilfe des Links unten bestätigen. Später ist der Link ungültig und die Registrierung muss erneut beantragt werden.

    #link Jetzt bestätigen href={url}?confirm={token}#
  `,
  forgot: `
    #h1 Passwortänderung#
    Das Zurücksetzen deines Passworts für {url} wurde beantragt.

    Um das Zurücksetzen abzuschließen, musst du innerhalb von 7 Tagen den Link unterhalb des Textes anklicken. Später ist der Link ungültig und das Zurücksetzen des Passworts muss erneut beantragt werden.

    #link Jetzt bestätigen href={url}?reset={token}#
  `,
  invite: `
    #h1 Einladung#
    Du wurdest eingeladen dich bei {url} zu registrieren.

    Mittels des Links unten kannst du innerhalb von 7 Tagen ein Benutzerkonto anlegen. Später ist der Link ungültig und du brauchst erneut eine Einladung.

    #link Jetzt bestätigen href={url}?register={token}#

    Bei Problemen mit dem Link, kopieren Sie die folgende Adresse in die Browser Adressleiste:
    {url}?register={token}
  `,
};
