const products = [
  {
    name: "T-Shirt",
    image: "/images/women/f1.webp",
    description:
      "Swiss-made quality at reasonable prices is the name of the game at Tissot, which has been making old-school mechanical watches in Le Locle, Switzerland since 1853.",
    brand: "Sitara",
    category: "women",
    price: 599.99,
    countInStock: 10,
    rating: 4.0,
    numReviews: 4,
  },
  {
    name: "T-Shirt",
    image: "/images/male/m1.jpg",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "men",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Suite",
    image: "/images/kid/k1.webp",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "kid",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Abaya",
    image: "/images/islamic/h1.png",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "islamic",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "T-Shirt",
    image: "/images/women/f2.jpg",
    description:
      "Swatch changed the game in the early 1980s by proving that Switzerland could make inexpensive quartz (i.e. battery-powered) watches as well as high-end mechanical ones.",
    brand: "Sitara",
    category: "women",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 3,
  },
  {
    name: "T-Shirt",
    image: "/images/women/f3.jpg",
    description:
      "Your dad probably had a Timex (and his dad, too) but the brand has come a long way since the days of “It Takes a Licking and Keeps on Ticking.”",
    brand: "Sitara",
    category: "women",
    price: 89.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: "T-Shirt",
    image: "/images/women/f4.png",
    description:
      "Swiss-made quality at reasonable prices is the name of the game at Tissot, which has been making old-school mechanical watches in Le Locle, Switzerland since 1853.",
    brand: "Sitara",
    category: "women",
    price: 599.99,
    countInStock: 10,
    rating: 4.0,
    numReviews: 4,
  },
  {
    name: "T-Shirt",
    image: "/images/women/f5.png",
    description:
      "Swiss-made quality at reasonable prices is the name of the game at Tissot, which has been making old-school mechanical watches in Le Locle, Switzerland since 1853.",
    brand: "Sitara",
    category: "women",
    price: 599.99,
    countInStock: 10,
    rating: 4.0,
    numReviews: 4,
  },

  {
    name: "T-Shirt",
    image: "/images/male/m2.png",
    description:
      "Built like Formula 1 cars out of carbon nanotubes, titanium cables, and other such space-age materials, this Swiss brand brought haute horology into the 21st century. Yes, you read the price correctly.",
    brand: "Sitara",
    category: "men",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "T-Shirt",
    image: "/images/male/m3.png",
    description:
      "In the Venn diagram of affordability, dependability and stylishness, Seiko’s sports watches are dead-center.",
    brand: "Sitara",
    category: "men",
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 2,
  },
  {
    name: "T-Shirt",
    image: "/images/male/m4.jpg",
    description:
      "In the same vein as Uniqlo and their famously excellent selvedge denim, this under-the-radar Japanese watchmaker specializes in good looking mechanical wristwatches at budget-friendly prices.",
    brand: "Sitara",
    category: "men",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "T-Shirt",
    image: "/images/male/m5.webp",
    description:
      "In the same vein as Uniqlo and their famously excellent selvedge denim, this under-the-radar Japanese watchmaker specializes in good looking mechanical wristwatches at budget-friendly prices.",
    brand: "Sitara",
    category: "men",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 4,
  },

  {
    name: "Suite",
    image: "/images/kid/k2.png",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "kid",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Suite",
    image: "/images/kid/k3.webp",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "kid",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Suite",
    image: "/images/kid/k4.png",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "kid",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Abaya",
    image: "/images/islamic/h2.png",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "islamic",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Abaya",
    image: "/images/islamic/h3.png",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "islamic",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Cap",
    image: "/images/islamic/t1.webp",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "islamic",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Tasbeeh",
    image: "/images/islamic/t2.png",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "islamic",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Cap",
    image: "/images/islamic/t3.webp",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "islamic",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Summer Sale",
    image: "/images/sales/s1.jpg",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "sale",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Summer Sale",
    image: "/images/sales/s2.jpg",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "sale",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Summer Sale",
    image: "/images/sales/s3.jpg",
    description:
      "Aspiring multi-hyphenates take note: this Japanese brand’s offering spans hundreds of G-Shock models and solar-powered analog wristwatches",
    brand: "Sitara",
    category: "sale",
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
];

export default products;
