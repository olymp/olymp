export default (typeof window !== 'undefined' && window.navigator.standalone) || process.env.IS_ELECTRON;
