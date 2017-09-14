import registerWebworker from 'webworker-promise/lib/register';

registerWebworker(({ func }, emit) => Promise.resolve('pong'));
