import * as process from 'process';

export default () => ({
  database: {
    url: process.env.SERVER_URL,
    name: process.env.DATABASE_NAME,
  },
});
