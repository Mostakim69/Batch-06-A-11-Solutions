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