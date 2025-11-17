// Solution All problems

//Solution 01 

type inputType = string | number | boolean;

const formatValue = (input: inputType): inputType => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } 
  if (typeof input === "number") {
    return input * 10;
  } 
  if (typeof input === "boolean") {
    return !input;
  }
    return input;
};


//solution 02

type paraType = string | any[];

const getLength = (input: paraType): number => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  } else {
    throw new Error("Wrong Input");
  }
};


// s3

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

//s4

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (arrayWithObj: Item[]): Item[] => {
  return arrayWithObj.filter((item) => item.rating >= 4);
};


//s5

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (arrayOfUserObj: Users[]): Users[] => {
  return arrayOfUserObj.filter((user) => user.isActive);
};


//s06

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

//s07

type ArrayType = string | number;

const getUniqueValues = (arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] => {
  const newArr: ArrayType[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr1[i] === newArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      newArr.push(arr1[i]);
    }
  }
  
  for (let i = 0; i < arr2.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr2[i] === newArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
};


//s08

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    const totalPrice = product.price * product.quantity;
    const discountedTotalPrice = product.discount
      ? totalPrice * (1 - product.discount / 100)
      : totalPrice;
    return total + discountedTotalPrice;
  }, 0);
};

