# Blog Answers

## **1. What are some differences between interfaces and types in TypeScript?**

TypeScript-এ ইন্টারফেস এবং টাইপ উভয়ই ডেটা স্ট্রাকচার বর্ণনা করতে ব্যবহৃত হয়। তবে তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে। ইন্টারফেস সাধারণত অবজেক্ট এবং ক্লাসের জন্য ব্যবহৃত হয়, যেখানে type অবজেক্ট ছাড়াও প্রিমিটিভ বা অন্যান্য টাইপের জন্য ব্যবহার করা যেতে পারে।

ইন্টারফেস (Interface): ইন্টারফেস extends কীওয়ার্ড ব্যবহার করে অন্য একটি ইন্টারফেস কে এক্সটেন্ড বা প্রসারিত করতে পারে। boolean টাইপের ডাটার জন্য interface ব্যবহার করা যায় না, কারণ interface-এ সমান চিহ্ন (=) ব্যবহার করা যায় না।

### পার্থক্যগুলো:

-- Interface সাধারণত object-এর কাঠামো define করতে ব্যবহৃত হয়।

Type আরও flexible — object, union, function type, primitives— সবকিছু define করতে পারে।

-- Interface extend করা যায়

  `interface A extends B {}`
-- Type সহজে union বা combination তৈরি করতে পারে:
  `type Result = A | B`

-- Interface দিয়া multiple বার declare করলে merge হয়।  Type merge হয় না একবার define মানে শেষ।


### Example

**Interface Example:**

```ts
interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Cat",
  age: 23,
};
```

**Type Alias Example:**

```ts
type Status = "success" | "error";

type Product = {
  title: string;
  price: number;
};

const laptop: Product = {
  title: "MacBook",
  price: 1500,
};
```

টাইপস্ক্রিপ্ট শিখতে গেলে Interface এবং Type দুটোই অপরিহার্য। Interface প্রধানত অবজেক্টের কাঠামো বা ডিজাইন বর্ণনা করে, আর Type বিভিন্ন ডেটা টাইপের নামকরণ করতে পারে। কখন কোনটি ব্যবহার করতে হবে, সেই ধারণা থাকলে কোড আরও পরিচ্ছন্ন এবং সহজে বোধগম্য হয়।

---