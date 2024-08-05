interface Product {
  _id: string;
  title: string;
  description: string;
  features: string[];
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  reviews: Review[];
  returnPolicy: string;
  images: Image[];
  thumbnail: string;
}

interface Review {
  rating: {
    $numberInt: string;
  };
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
  reviewerPicture: string;
}

interface Image {
  big: string;
  small: string;
}
