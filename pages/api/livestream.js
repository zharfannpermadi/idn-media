import { faker } from "@faker-js/faker";

export default function handler(req, res) {
  const live = [...new Array(9)].map((_, index) => {
    return {
      id: index + 1,
      subtitle: faker.lorem.word(5),
      title: faker.lorem.words(),
      type: faker.commerce.department(),
      image: faker.image.city(),
    };
  });

  res.status(200).json({ live: live });
}
