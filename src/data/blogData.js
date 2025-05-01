// src/data/blogData.js
const blogData = [
  // — Letters —
  {
    title: "A Letter to My Mom: Thank You for Everything",
    slug: "letter-to-mom-thank-you",
    category: "Letters",
    excerpt:
      "Mom, words cannot express how grateful I am for all the sacrifices you've made and the love you've shown me throughout my life...",
    image: "/images/mother-letter.jpg",
    content: `
      <p>Dear Mom,</p>
      <p>On this Mother's Day, I want to pause and say thank you—for your endless love, sacrifices, and unwavering belief in me. From the little things like your warm meals to the big lessons in kindness and strength, you've been my silent support through every stage of life.</p>
      <p>Thank you for being my first friend, best teacher, and forever cheerleader. I love you more than words can express.</p>
      <p>With all my heart,<br/>Your child</p>
    `,
    date: "May 12, 2025",
    readingTime: "4 minutes",
    tags: ["Letters", "Mother's Day", "Gratitude"],
    relatedPosts: [
      { title: "10 Lessons My Mother Taught Me", slug: "life-lessons-from-mom", image: "/images/coventry.jpg" },
      { title: "Why Moms Are Everyday Superheroes", slug: "moms-are-superheroes", image: "/images/mom-superhero.jpg" },
    ],
  },

  // — Stories —
  {
    title: "Heartwarming Stories of Mothers Around the World",
    slug: "mothers-around-world",
    category: "Stories",
    excerpt:
      "This Mother's Day, explore inspiring stories of maternal strength and sacrifice from different cultures...",
    image: "/images/global-moms.jpg",
    content: `
      <p>In Japan, children lovingly serve tea to their mothers in the morning. In Mexico, families gather for a serenade called 'Las Mañanitas'. Each culture weaves its own tapestry of appreciation for the women who raised us.</p>
      <p>These stories remind us that a mother's love truly knows no borders.</p>
    `,
    date: "May 5, 2025",
    readingTime: "6 minutes",
    tags: ["Stories", "Global", "Motherhood"],
    relatedPosts: [
      { title: "Why We Celebrate Mother's Day Around the World", slug: "global-mothers-day", image: "/images/mothers-day-global.jpg" },
    ],
  },

  // — Poems —
  {
    title: "A Poem for the Woman Who Raised Me",
    slug: "poem-for-mom",
    category: "Poems",
    excerpt:
      "In the quiet moments of dawn, I think of you. Your hands, weathered by time but gentle in their touch, have guided me through life's storms...",
    image: "/images/mother-poem.jpg",
    content: `
      <blockquote>
        <p>Your love is the river<br/>
        That carves valleys of hope<br/>
        Guiding me onward,<br/>
        With every gentle slope.</p>
      </blockquote>
      <p>This poem is my humble attempt to mirror the kindness you've shown me.</p>
    `,
    date: "May 14, 2025",
    readingTime: "3 minutes",
    tags: ["Poems", "Mother's Day", "Tribute"],
    relatedPosts: [
      { title: "A Letter to My Mom: Thank You for Everything", slug: "letter-to-mom-thank-you", image: "/images/mother-letter.jpg" },
    ],
  },

  // — Memories —
  {
    title: "Childhood Memories: Messy Pancakes and Morning Hugs",
    slug: "childhood-memories-with-mom",
    category: "Memories",
    excerpt:
      "From spilled pancake batter on the counter to sleepy hugs before school, these memories remind me of the small moments that meant the world...",
    image: "/images/pancakes.jpg",
    content: `
      <p>Every Sunday morning, my mom and I would don our aprons and flip pancakes. They never looked perfect, but they tasted like home.</p>
      <p>Those sticky countertops and flour-dusted floors are some of my favorite snapshots of growing up.</p>
    `,
    date: "May 8, 2025",
    readingTime: "5 minutes",
    tags: ["Memories", "Family", "Childhood"],
    relatedPosts: [
      { title: "The Most Beautiful Things My Mom Taught Me", slug: "beautiful-things-my-mom-taught-me", image: "/images/beautiful-lessons.jpg" },
    ],
  },

  // — Recipes —
  {
    title: "Mom’s Famous Apple Pie Recipe",
    slug: "moms-apple-pie-recipe",
    category: "Recipes",
    excerpt:
      "Crisp apples, buttery crust, and a hint of cinnamon—this is the pie that defined every family gathering. Here’s Mom’s secret recipe...",
    image: "/images/apple-pie.jpg",
    content: `
      <h3>Ingredients:</h3>
      <ul>
        <li>6 cups thinly sliced apples</li>
        <li>3/4 cup sugar</li>
        <li>2 tbsp flour</li>
        <li>1 tsp cinnamon</li>
        <li>Pie crust (homemade or store-bought)</li>
      </ul>
      <h3>Instructions:</h3>
      <ol>
        <li>Preheat oven to 375°F (190°C).</li>
        <li>Mix apples, sugar, flour, and cinnamon. Fill crust.</li>
        <li>Cover with top crust, crimp edges, and bake 50 minutes.</li>
      </ol>
    `,
    date: "May 18, 2025",
    readingTime: "4 minutes",
    tags: ["Recipes", "Food", "Family"],
    relatedPosts: [
      { title: "Creative Ways to Celebrate Mother's Day at Home", slug: "celebrate-at-home", image: "/images/mothers-day-home.jpg" },
    ],
  },

  // — Tributes —
  {
    title: "Tribute to My Supermom: Strength, Grace, and Love",
    slug: "supermom-tribute",
    category: "Tributes",
    excerpt:
      "There’s no love quite like a mother’s. This is my tribute to the woman whose quiet strength and unwavering faith lifted our family through every storm.",
    image: "/images/supermom-tribute.jpg",
    content: `
      <p>She never wore a cape.</p>
      <p>But every day, she saved my world with her courage, her kindness, and her endless love.</p>
    `,
    date: "May 10, 2025",
    readingTime: "3 minutes",
    tags: ["Tributes", "Motherhood", "Strength"],
    relatedPosts: [
      { title: "Why Moms Are Everyday Superheroes", slug: "moms-are-superheroes", image: "/images/mom-superhero.jpg" },
    ],
  },

  // — (plus your existing posts…) —
];

export default blogData;

