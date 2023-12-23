const server = {};
const logger = {
  trace: (info: string) => {
    console.log(info);
  },
};
logger.trace('app starting...');

export { server };
