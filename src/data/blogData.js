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
  {
    title: "The Lessons My Mother Taught Me That I'll Never Forget",
    slug: "the-lessons-my-mother-taught-me-that-ill-never-forget",
    category: "Tributes",
    date: "May 1, 2025",
    readingTime: "5 min",
    excerpt: "My mother wasn't one for long lectures, but the quiet lessons she taught through her actions have shaped who I am today...",
    content: `
      <p>My mother wasn't one for long lectures, but the quiet lessons she taught through her actions have shaped who I am today. Her wisdom was often subtle, tucked away in everyday moments that most people might overlook. These lessons, though not spoken aloud, are deeply embedded in my heart and continue to guide me every day.</p>
      <p>One of the most powerful lessons my mother imparted was the importance of kindness. Whether she was helping a neighbor or volunteering her time at the local shelter, her selflessness was a constant reminder that small acts of kindness can make a big difference in the world. She taught me that you don't need to be famous or wealthy to have an impact — it's the little things, the quiet gestures, that matter most.</p>
      <p>Another lesson my mother instilled in me was resilience. She faced many hardships in her life, but never once did I see her give up or lose hope. Even in the toughest times, she remained strong and determined. She showed me that it's okay to stumble, but it's important to get back up and keep moving forward.</p>
      <p>Perhaps the most significant lesson she taught me was the power of love and family. No matter how busy or challenging life became, my mother always made time for her loved ones. She taught me that family isn't just about blood relations — it's about the people who support you, lift you up, and walk alongside you through life's journey.</p>
      <p>Today, as I navigate the ups and downs of life, I carry these lessons with me. They guide me, ground me, and remind me of the incredible woman who shaped me into who I am today. Thank you, Mom, for all the quiet lessons you gave me, and for being the greatest teacher I could have ever asked for.</p>
    `,
    tags: ["Mother", "Lessons", "Kindness", "Resilience", "Family", "Tribute"],
    author: "Sarah Johnson",
    image: "/images/mother-tribute.jpg", // Optional: add an image of your choice
    relatedPosts: [
      {
        slug: "a-tribute-to-my-mother",
        title: "A Tribute to My Mother"
      },
      {
        slug: "the-greatest-gift-my-mother-gave-me",
        title: "The Greatest Gift My Mother Gave Me"
      }
    ]
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
  {
    title: "Celebrating My Grandmother: The Matriarch of Our Family",
    slug: "celebrating-my-grandmother-the-matriarch-of-our-family",
    category: "Tributes",
    date: "May 1, 2025",
    readingTime: "10 min",
    excerpt: "My grandmother raised eight children during times of hardship, yet she never lost her smile or her ability to make everyone feel special...",
    content: `
      <p>My grandmother was the heart and soul of our family. She raised eight children during times of hardship, yet she never lost her smile or her ability to make everyone feel special. Her presence was like a beacon of love, warmth, and wisdom, and she had an uncanny way of making even the most ordinary moments feel extraordinary.</p>
      <p>Growing up, I would often sit at her feet as she told stories about the past — tales of perseverance, love, and sacrifice. My grandmother lived through some of the most challenging periods in history, but she always found a way to keep her family together. Her strength was quiet, but unwavering. She taught us the value of resilience, the importance of family, and how to love unconditionally.</p>
      <p>One of the most memorable lessons she taught me was the importance of kindness. No matter how tough things got, my grandmother always made time to listen, to comfort, and to help those around her. Her door was always open, and her heart was always ready to welcome anyone in need. She showed me that kindness is a strength, not a weakness, and that by lifting others, we uplift ourselves.</p>
      <p>My grandmother was also a woman of great faith. Her belief in God guided every aspect of her life, and she instilled that same faith in all of us. Her prayers were powerful, and her unwavering faith was a constant source of inspiration. Through her, I learned that faith is not just about words, but about living your life in a way that reflects your beliefs.</p>
      <p>As I reflect on my grandmother's life, I realize how much she shaped who I am today. She was more than just a grandmother; she was the glue that held our family together. Her legacy lives on in each of us, and we are forever grateful for the lessons she imparted. She may no longer be with us in body, but her spirit will always be with us, guiding us and reminding us of the importance of love, family, and resilience.</p>
    `,
    tags: ["Grandmother", "Family", "Love", "Resilience", "Faith", "Tribute"],
    author: "Elena Rodriguez",
    image: "/images/grandmother-tribute.jpg", // Optional: add an image of your choice
    relatedPosts: [
      {
        slug: "a-tribute-to-my-mother",
        title: "A Tribute to My Mother"
      },
      {
        slug: "the-lessons-my-mother-taught-me-that-ill-never-forget",
        title: "The Lessons My Mother Taught Me That I'll Never Forget"
      }
    ]
  },
  // — (plus your existing posts…) —
];

export default blogData;

