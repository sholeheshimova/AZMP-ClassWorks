import React, { useState, useEffect } from 'react';

// Yemək cardını təqdim etmək üçün komponent
const YemekCard = ({ yemek }) => {
  return (
    <div className="card" key={yemek.id} style={styles.card}>
      <img src={yemek.image} alt={yemek.name} style={styles.image} />
      <h2>{yemek.name}</h2>
      <p><strong>Difficulty:</strong> {yemek.difficulty}</p>
      <p><strong>Cuisine:</strong> {yemek.cuisine}</p>
      <p><strong>Prep Time:</strong> {yemek.prepTimeMinutes} minutes</p>
      <p><strong>Cook Time:</strong> {yemek.cookTimeMinutes} minutes</p>
      <p><strong>Servings:</strong> {yemek.servings}</p>
      <p><strong>Calories per Serving:</strong> {yemek.caloriesPerServing}</p>
      <p><strong>Tags:</strong> {yemek.tags.join(', ')}</p>
      <p><strong>Rating:</strong> {yemek.rating} ({yemek.reviewCount} reviews)</p>
      <p><strong>Meal Type:</strong> {yemek.mealType.join(', ')}</p>
      <h3>Ingredients:</h3>
      <ul>
        {yemek.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {yemek.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

const App = () => {
 
  const [yemekler, setYemekler] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  
  useEffect(() => {
    const fetchYemekler = () => {
      const yemekSiyahisi = [
        {
          "id": 1,
          "name": "Classic Margherita Pizza",
          "ingredients": [
            "Pizza dough",
            "Tomato sauce",
            "Fresh mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil",
            "Salt and pepper to taste"
          ],
          "instructions": [
            "Preheat the oven to 475°F (245°C).",
            "Roll out the pizza dough and spread tomato sauce evenly.",
            "Top with slices of fresh mozzarella and fresh basil leaves.",
            "Drizzle with olive oil and season with salt and pepper.",
            "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
            "Slice and serve hot."
          ],
          "prepTimeMinutes": 20,
          "cookTimeMinutes": 15,
          "servings": 4,
          "difficulty": "Easy",
          "cuisine": "Italian",
          "caloriesPerServing": 300,
          "tags": ["Pizza", "Italian"],
          "userId": 166,
          "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
          "rating": 4.6,
          "reviewCount": 98,
          "mealType": ["Dinner"]
        },
        {
          "id": 2,
          "name": "Vegetarian Stir-Fry",
          "ingredients": [
            "Tofu, cubed",
            "Broccoli florets",
            "Carrots, sliced",
            "Bell peppers, sliced",
            "Soy sauce",
            "Ginger, minced",
            "Garlic, minced",
            "Sesame oil",
            "Cooked rice for serving"
          ],
          "instructions": [
            "In a wok, heat sesame oil over medium-high heat.",
            "Add minced ginger and garlic, sauté until fragrant.",
            "Add cubed tofu and stir-fry until golden brown.",
            "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
            "Pour soy sauce over the stir-fry and toss to combine.",
            "Serve over cooked rice."
          ],
          "prepTimeMinutes": 15,
          "cookTimeMinutes": 20,
          "servings": 3,
          "difficulty": "Medium",
          "cuisine": "Asian",
          "caloriesPerServing": 250,
          "tags": ["Vegetarian", "Stir-fry", "Asian"],
          "userId": 143,
          "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
          "rating": 4.7,
          "reviewCount": 26,
          "mealType": ["Lunch"]
        },
        {
          "id": 3,
          "name": "Chocolate Chip Cookies",
          "ingredients": [
            "All-purpose flour",
            "Butter, softened",
            "Brown sugar",
            "White sugar",
            "Eggs",
            "Vanilla extract",
            "Baking soda",
            "Salt",
            "Chocolate chips"
          ],
          "instructions": [
            "Preheat the oven to 350°F (175°C).",
            "In a bowl, cream together softened butter, brown sugar, and white sugar.",
            "Beat in eggs one at a time, then stir in vanilla extract.",
            "Combine flour, baking soda, and salt. Gradually add to the wet ingredients.",
            "Fold in chocolate chips.",
            "Drop rounded tablespoons of dough onto ungreased baking sheets.",
            "Bake for 10-12 minutes or until edges are golden brown.",
            "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack."
          ],
          "prepTimeMinutes": 15,
          "cookTimeMinutes": 10,
          "servings": 24,
          "difficulty": "Easy",
          "cuisine": "American",
          "caloriesPerServing": 150,
          "tags": ["Cookies", "Dessert", "Baking"],
          "userId": 34,
          "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
          "rating": 4.9,
          "reviewCount": 13,
          "mealType": ["Snack", "Dessert"]
        },
        {
          "id": 4,
          "name": "Chicken Alfredo Pasta",
          "ingredients": [
          "Fettuccine pasta",
          "Chicken breast, sliced",
          "Heavy cream",
          "Parmesan cheese, grated",
          "Garlic, minced",
          "Butter",
          "Salt and pepper to taste",
          "Fresh parsley for garnish"
          ],
          "instructions": [
          "Cook fettuccine pasta according to package instructions.",
          "In a pan, sauté sliced chicken in butter until fully cooked.",
          "Add minced garlic and cook until fragrant.",
          "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
          "Season with salt and pepper to taste.",
          "Combine the Alfredo sauce with cooked pasta.",
          "Garnish with fresh parsley before serving."
          ],
          "prepTimeMinutes": 15,
          "cookTimeMinutes": 20,
          "servings": 4,
          "difficulty": "Medium",
          "cuisine": "Italian",
          "caloriesPerServing": 500,
          "tags": [
          "Pasta",
          "Chicken"
          ],
          "userId": 136,
          "image": "https://cdn.dummyjson.com/recipe-images/4.webp",
          "rating": 4.9,
          "reviewCount": 82,
          "mealType": [
          "Lunch",
          "Dinner"
          ]
          },
          {
          "id": 5,
          "name": "Mango Salsa Chicken",
          "ingredients": [
          "Chicken thighs",
          "Mango, diced",
          "Red onion, finely chopped",
          "Cilantro, chopped",
          "Lime juice",
          "Jalapeño, minced",
          "Salt and pepper to taste",
          "Cooked rice for serving"
          ],
          "instructions": [
          "Season chicken thighs with salt and pepper.",
          "Grill or bake chicken until fully cooked.",
          "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
          "Dice the cooked chicken and mix it with the mango salsa.",
          "Serve over cooked rice."
          ],
          "prepTimeMinutes": 15,
          "cookTimeMinutes": 25,
          "servings": 3,
          "difficulty": "Easy",
          "cuisine": "Mexican",
          "caloriesPerServing": 380,
          "tags": [
          "Chicken",
          "Salsa"
          ],
          "userId": 26,
          "image": "https://cdn.dummyjson.com/recipe-images/5.webp",
          "rating": 4.9,
          "reviewCount": 63,
          "mealType": [
          "Dinner"
          ]
          },
          {
          "id": 6,
          "name": "Quinoa Salad with Avocado",
          "ingredients": [
          "Quinoa, cooked",
          "Avocado, diced",
          "Cherry tomatoes, halved",
          "Cucumber, diced",
          "Red bell pepper, diced",
          "Feta cheese, crumbled",
          "Lemon vinaigrette dressing",
          "Salt and pepper to taste"
          ],
          "instructions": [
          "In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.",
          "Drizzle with lemon vinaigrette dressing and toss to combine.",
          "Season with salt and pepper to taste.",
          "Chill in the refrigerator before serving."
          ],
          "prepTimeMinutes": 20,
          "cookTimeMinutes": 15,
          "servings": 4,
          "difficulty": "Easy",
          "cuisine": "Mediterranean",
          "caloriesPerServing": 280,
          "tags": [
          "Salad",
          "Quinoa"
          ],
          "userId": 197,
          "image": "https://cdn.dummyjson.com/recipe-images/6.webp",
          "rating": 4.4,
          "reviewCount": 59,
          "mealType": [
          "Lunch",
          "Side Dish"
          ]
          }
      ];
      setYemekler(yemekSiyahisi);
    };

    fetchYemekler();
  }, []);

  return (
    <div>
      <h1>Yemək Menyusu</h1>
     <input type="text" placeholder='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={styles.searchInput} />
      <div style={styles.cardContainer}>
        {yemekler.map(yemek => (
          <YemekCard key={yemek.id} yemek={yemek} />
        ))}
      </div>
    </div>
  );
};


const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  searchInput: {
    padding: '10px',
    margin: '20px',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  }
};

export default App;
