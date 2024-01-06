import cobbSalad from "../img/Cobb salad.png";
import caesarSalad from "../img/Caesar salad.png";
import chickenSalad from "../img/Chicken salad.png";
import greekSalad from "../img/Greek salad.png";
import tunaSalad from "../img/Tuna salad.png";
import pastaSalad from "../img/Pasta salad.png";
import waldorfSalad from "../img/Waldorf salad.png";
import potatoSalad from "../img/Potato salad.png";

const productsData = [
  {
    Image: cobbSalad,
    Name: "Cobb Salad",
    Weight: "410g",
    Description:
      "Romaine lettuce, chicken, bacon, hard-boiled eggs, tomatoes, blue cheese.",
    Price: "8,99€",
  },
  {
    Image: caesarSalad,
    Name: "Caesar Salad",
    Weight: "400g",
    Description:
      "Romaine lettuce, croutons, parmesan cheese, Caesar dressing, anchovies (optional).",
    Price: "7,99€",
  },
  {
    Image: chickenSalad,
    Name: "Chicken Salad",
    Weight: "450g",
    Description:
      "Iceberg lettuce, chicken, celery, onions, mayonnaise, mustard, salt, and pepper.",
    Price: "10,99€",
  },
  {
    Image: greekSalad,
    Name: "Greek Salad",
    Weight: "430g",
    Description:
      "Romaine lettuce, cucumbers, tomatoes, feta cheese, Olives, red onions.",
    Price: "8,99€",
  },
  {
    Image: tunaSalad,
    Name: "Tuna Salad",
    Weight: "430g",
    Description: "Tuna, celery, onions, mayonnaise, mustard, lemon juice.",
    Price: "9,99€",
  },
  {
    Image: pastaSalad,
    Name: "Pasta Salad",
    Weight: "460g",
    Description:
      "Pasta, tomatoes, cucumbers, onions, bell peppers, olives, cheese.",
    Price: "10,99€",
  },
  {
    Image: waldorfSalad,
    Name: "Waldorf Salad",
    Weight: "430g",
    Description: "Apples, celery, walnuts, mayonnaise, yogurt, lemon juice.",
    Price: "9,99€",
  },
  {
    Image: potatoSalad,
    Name: "Potato Salad",
    Weight: "450g",
    Description:
      "Potatoes, mayonnaise, celery, onions, pickles, mustard, hard-boiled eggs, parsley.",
    Price: "8,99€",
  },
];

export default productsData;
