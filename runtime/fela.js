import { createRenderer } from 'fela';
import monolithic from 'fela-monolithic';
import extend from 'fela-plugin-extend';
import customProperty from 'fela-plugin-custom-property';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import removeUndefined from 'fela-plugin-remove-undefined';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import namedMediaQuery from 'fela-plugin-named-media-query';

export default () => {
  const renderer = createRenderer({
    selectorPrefix: 'o',
    plugins: [ unit(), fallbackValue(), removeUndefined(), prefixer(), namedMediaQuery({
      // From
      fromWide: '@media (min-width: 1200px)',
      fromDesktop: '@media (min-width: 992px)',
      fromTablet: '@media (min-width: 768px)',
      fromPhone: '@media (min-width: 480px)',
      // To
      toDesktop: '@media (max-width: 1199px)',
      toTablet: '@media (max-width: 991px)',
      toPhone: '@media (max-width: 767px)',
      toMini: '@media (max-width: 479px)',
      // On
      onWide: '@media (min-width: 1200px)',
      onDesktop: '@media (max-width: 1199px, min-width: 992)',
      onTablet: '@media (max-width: 991px, min-width: 768)',
      onPhone: '@media (max-width: 767px, min-width: 480)',
      onMini: '@media (max-width: 479px)',
    }), friendlyPseudoClass(), customProperty({
      size: size => ({
        width: size,
        height: size,
      })
    }) ],
    enhancers: [ monolithic() ]
  });

  const base = `
  html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:0.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}*{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}*:before,*:after{box-sizing:border-box}html,body{height:100%;width:100%}body{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:15px;line-height:1.5;color:rgba(0, 0, 0, 0.65);background-color:white}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit}ul,ol{list-style:none}input::-ms-clear,input::-ms-reveal{display:none}::selection{background:#43b74d;color:#fff}a{background:transparent;text-decoration:none;outline:none;cursor:pointer;transition:color .3s ease}a:active,a:hover{outline:0;text-decoration:none}a[disabled]{color:rgba(0, 0, 0, 0.25);cursor:not-allowed;pointer-events:none}.divider{margin:0 6px;display:inline-block;height:8px;width:1px;background:#ccc}code,kbd,pre,samp{font-family:Consolas, Menlo, Courier, monospace}.clearfix{overflow:auto;zoom:1}
  `.trim();

  renderer.renderStatic(base);
  return renderer;
};
