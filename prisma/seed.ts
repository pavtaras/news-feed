import { faker, fakerIT, fakerFR, type Faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { imgSize } from '../src/const/statics.ts';
const prisma = new PrismaClient();

function fakePost(faker: Faker, locale: string) {
  return (_: unknown, index: number) => {
    return {
      title: faker.lorem.sentence({ min: 3, max: 8 }),
      subtitle: faker.lorem.sentence({ min: 10, max: 15 }),
      description: faker.lorem.paragraphs(5),
      imageUrl: `https://loremflickr.com/${imgSize.width}/${imgSize.height}?random=${index + 1}`,
      createdAt: faker.date.past(),
      locale,
    };
  };
}

async function main() {
  const enPosts = faker.helpers.multiple(fakePost(faker, 'en'), { count: 10 });
  const frPosts = faker.helpers.multiple(fakePost(fakerIT, 'fr'), {
    count: 13,
  });
  const itPosts = faker.helpers.multiple(fakePost(fakerFR, 'it'), {
    count: 20,
  });

  const createdPosts = await prisma.post.createMany({
    data: [...enPosts, ...frPosts, ...itPosts],
  });

  console.log('%d posts created during seed', createdPosts.count);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
