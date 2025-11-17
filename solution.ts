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