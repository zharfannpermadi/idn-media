import { faker } from "@faker-js/faker";

export default function handler(req, res) {
  const quiz = [...new Array(12)].map((_, index) => {
    return {
      id: index + 1,
      title: faker.lorem.lines(2),
      type: faker.commerce.department(),
      plays: faker.address.buildingNumber(),
      image: faker.image.fashion(),
    };
  });

  res.status(200).json({ quiz: quiz });
}
