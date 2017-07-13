export default function (content, options) {
    var html = "\n  <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n  <html xmlns=\"http://www.w3.org/1999/xhtml\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\">\n    <head>\n      <meta name=\"viewport\" content=\"width=device-width\" />\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n      <title>Actionable emails e.g. reset password</title>\n      <style type=\"text/css\">\n        " + style + "\n      </style>\n    </head>\n\n    <body itemscope itemtype=\"http://schema.org/EmailMessage\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;\" bgcolor=\"#f6f6f6\">\n      <table class=\"body-wrap\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;\" bgcolor=\"#f6f6f6\">\n        <tr style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\">\n          <td style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;\" valign=\"top\"></td>\n          <td class=\"container\" width=\"600\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;\" valign=\"top\">\n            <div class=\"content\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;\">\n              <table class=\"main\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" itemprop=\"action\" itemscope itemtype=\"http://schema.org/ConfirmAction\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;\" bgcolor=\"#fff\">\n                <tr style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\">\n                  <td class=\"content-wrap\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;\" valign=\"top\">\n                    <meta itemprop=\"name\" content=\"Confirm Email\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\" />\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\">\n                      " + content + "\n                      <tr style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\">\n                        <td class=\"content-block\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;\" valign=\"top\">\n                          <br />&mdash; " + options.fromName + "\n                        </td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n              <div class=\"footer\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;\">\n                <table width=\"100%\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\">\n                  <tr style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\">\n                    <td class=\"aligncenter content-block\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;\" align=\"center\" valign=\"top\">\n                      <a href=\"" + options.url + "\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;\">" + options.url + "</a>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </div>\n          </td>\n          <td style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;\" valign=\"top\"></td>\n        </tr>\n      </table>\n    </body>\n  </html>\n  ";
    return html;
};
var style = "\nimg {\n  max-width: 100%;\n}\nbody {\n  -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;\n}\nbody {\n  background-color: #f6f6f6;\n}\n@media only screen and (max-width: 640px) {\n  body {\n    padding: 0 !important;\n  }\n  h1 {\n    font-weight: 800 !important; margin: 20px 0 5px !important;\n  }\n  h2 {\n    font-weight: 800 !important; margin: 20px 0 5px !important;\n  }\n  h3 {\n    font-weight: 800 !important; margin: 20px 0 5px !important;\n  }\n  h4 {\n    font-weight: 800 !important; margin: 20px 0 5px !important;\n  }\n  h1 {\n    font-size: 22px !important;\n  }\n  h2 {\n    font-size: 18px !important;\n  }\n  h3 {\n    font-size: 16px !important;\n  }\n  .container {\n    padding: 0 !important; width: 100% !important;\n  }\n  .content {\n    padding: 0 !important;\n  }\n  .content-wrap {\n    padding: 10px !important;\n  }\n  .invoice {\n    width: 100% !important;\n  }\n}\n";
//# sourceMappingURL=default.js.map