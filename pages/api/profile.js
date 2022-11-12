import { faker } from "@faker-js/faker";

export default function handler(req, res) {
  const profile = {
    name: faker.name.fullName(),
    followers: faker.address.buildingNumber(),
    following: faker.address.buildingNumber(),
    description: faker.commerce.productDescription(),
    image: faker.image.people(),
  };

  res.status(200).json({ profile: profile });
}
