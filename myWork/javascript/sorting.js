const numbers = [5, 2, 9, 1, 5, 6];
numbers.sort(function(a, b) 
{
  return b - a;
});
console.log(numbers); 
const words = ["apple", "banana", "cherry", "date"];
words.sort(function(a, b) 
{
  return b.localeCompare(a);
});
console.log(words); 
