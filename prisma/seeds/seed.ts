import { DbConnection } from '../../src/shared/db/db.connection';
import { seedUser } from './objects/user.seeder';

const $db = new DbConnection();

const main = async () => {
  await $db.user.deleteMany();

  await seedUser();
};
// const seedProducts = async () => {
// };

main();
