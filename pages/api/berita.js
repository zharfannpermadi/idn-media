import { faker } from "@faker-js/faker";

export default function getNews(req, res) {
  const news = [...new Array(10)].map((_, index) => {
    return {
      id: index + 1,
      datePosted: faker.datatype.datetime(),
      title: faker.lorem.lines(2),
      type: faker.commerce.department(),
      image: faker.image.business(),
    };
  });

  res.status(200).json({ news: news });
}
