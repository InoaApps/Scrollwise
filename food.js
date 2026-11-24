// Scrollwise Food program: 8 modules x 10 cards. Each card: q, a (true/false), s (verdict), w (explanation), t (remember), x (try this), src [name, url], ev (0 strong consensus, 1 good evidence, 2 still debated).
const FOOD_MODULES=[
 {
  "id": 1,
  "name": "The basics",
  "sub": "Calories, protein, fat and fullness: how food really works.",
  "cards": [
   {
    "q": "Eating fat makes you fat.",
    "a": false,
    "s": "Weight gain comes from total calories, not from fat itself.",
    "w": [
     "Fat has more calories per gram (9) than carbs or protein (4), so fatty foods add up fast. But eating fat doesn't turn directly into body fat.",
     "Many “low-fat” products replaced fat with sugar. And fats from nuts, olive oil or fish help you feel full for longer."
    ],
    "t": "Watch portions of fatty foods, but don't fear fat itself.",
    "x": "Read the sugar line on a 'low-fat' product you buy.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "Eating after 8 p.m. automatically makes you gain weight.",
    "a": false,
    "s": "How much you eat matters more than the clock.",
    "w": [
     "Some studies link late eating with weight gain, mostly because late-night snacks add extra calories on top of the day.",
     "Your body doesn't turn food into fat just because it's late."
    ],
    "t": "Watch what and how much you snack at night.",
    "x": "Notice what you eat after dinner, not when you eat it.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "A tablespoon of olive oil has about 120 calories.",
    "a": true,
    "s": "About 120, like most oils.",
    "w": [
     "All oils are almost pure fat, with 9 calories per gram.",
     "Olive oil is a healthy fat, but a generous drizzle can add 300 calories or more to a salad."
    ],
    "t": "Measure oil with a spoon, not by eye.",
    "x": "Measure your usual cooking oil with a spoon, just once.",
    "src": [
     "USDA FoodData Central",
     "https://fdc.nal.usda.gov"
    ],
    "ev": 0
   },
   {
    "q": "Your body burns more calories digesting protein than fat or carbs.",
    "a": true,
    "s": "That's the “thermic effect of food”.",
    "w": [
     "Digesting protein uses about 20 to 30% of its calories, against roughly 5 to 10% for carbs and 0 to 3% for fat.",
     "Protein also keeps you full longer."
    ],
    "t": "Protein is filling and costs more to process.",
    "x": "Add a protein source to your next snack.",
    "src": [
     "NIH (NIDDK)",
     "https://www.niddk.nih.gov"
    ],
    "ev": 1
   },
   {
    "q": "Eating many small meals boosts your metabolism.",
    "a": false,
    "s": "Meal frequency barely changes calories burned.",
    "w": [
     "Digestion burns calories in proportion to how much you eat, not how often.",
     "Three meals or six, the total ends up similar."
    ],
    "t": "Choose the rhythm that keeps your hunger in check.",
    "x": "Eat when you're hungry, whether that's 3 or 5 times a day.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "Protein and carbs have the same calories per gram.",
    "a": true,
    "s": "Both have about 4 calories per gram.",
    "w": [
     "Protein and carbohydrates each give about 4 calories per gram. Fat gives about 9, and alcohol about 7.",
     "That's why fatty foods pack so many calories into small portions, and why foods rich in water or fiber feel big for few calories."
    ],
    "t": "Calories per gram explains why portions of oils and nuts are small.",
    "x": "Look at a nut butter label: how many calories are in one spoon?",
    "src": [
     "USDA Dietary Guidelines",
     "https://www.dietaryguidelines.gov"
    ],
    "ev": 0
   },
   {
    "q": "Alcohol has more calories per gram than carbs.",
    "a": true,
    "s": "About 7 calories per gram, close to fat.",
    "w": [
     "Alcohol gives about 7 calories per gram, against 4 for carbs and protein. Those calories come with almost no nutrients.",
     "Mixers add more: a cocktail can easily reach 200 to 300 calories."
    ],
    "t": "Liquid calories count, even though they don't feel like a meal.",
    "x": "Check the calories in your usual drink this week.",
    "src": [
     "NIH (NIAAA)",
     "https://www.niaaa.nih.gov"
    ],
    "ev": 0
   },
   {
    "q": "Your brain needs time after you start eating to register fullness.",
    "a": true,
    "s": "Fullness signals take a while to reach the brain.",
    "w": [
     "Hormones and stretch signals travel from your gut to your brain while you eat. They aren't instant, so very fast eating can pass the point of 'enough' before you feel it.",
     "Studies on eating speed link slower eating with a lower intake at a meal, though the effect is modest and varies between people."
    ],
    "t": "Slowing down gives your body time to say 'enough'.",
    "x": "At your next meal, put the fork down between 5 bites.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "Muscle burns more calories at rest than fat does.",
    "a": true,
    "s": "A little more, so muscle helps, but it's not a metabolism hack.",
    "w": [
     "Per pound, muscle burns roughly 6 calories a day at rest and fat about 2.",
     "So gaining 5 pounds of muscle adds only around 20 calories a day. Muscle matters for strength and health, not as a calorie trick."
    ],
    "t": "Build muscle for your health, not to burn calories.",
    "x": "Pick one strength exercise you can do twice this week.",
    "src": [
     "NIH (NIDDK)",
     "https://www.niddk.nih.gov"
    ],
    "ev": 1
   },
   {
    "q": "Fiber is a carbohydrate that your body can't fully digest.",
    "a": true,
    "s": "It passes through mostly undigested, and that's what makes it useful.",
    "w": [
     "Fiber is a carbohydrate found in plants. Your small intestine can't break it down, so it adds bulk, feeds gut bacteria and slows how fast sugar enters your blood.",
     "Adults need roughly 25 to 34 grams a day depending on age and sex, and most Americans get about half of that."
    ],
    "t": "Beans, oats, fruit and vegetables are the easiest fiber.",
    "x": "Add one high-fiber food to today's meals: beans, oats or berries.",
    "src": [
     "USDA Dietary Guidelines",
     "https://www.dietaryguidelines.gov"
    ],
    "ev": 0
   }
  ]
 },
 {
  "id": 2,
  "name": "Read a label",
  "sub": "Decode a Nutrition Facts panel in 30 seconds.",
  "cards": [
   {
    "q": "Calories on US food labels can be off by up to 20%.",
    "a": true,
    "s": "The FDA allows a margin of up to 20%.",
    "w": [
     "Nutrient content varies naturally from batch to batch, and lab methods differ.",
     "Studies find many products close to their label, but some underestimate calories."
    ],
    "t": "Use labels as a guide, not an exact count.",
    "x": "Treat label calories as a good estimate, not an exact number.",
    "src": [
     "FDA",
     "https://www.fda.gov/food"
    ],
    "ev": 0
   },
   {
    "q": "Plain frozen fruit is usually just fruit, with nothing added.",
    "a": true,
    "s": "Plain frozen fruit is just fruit.",
    "w": [
     "Most frozen fruit is picked, washed and frozen. Only some products “in syrup” add sugar.",
     "Check that the ingredient list names only the fruit."
    ],
    "t": "Frozen berries are a cheap, healthy staple.",
    "x": "Pick frozen fruit whose only ingredient is fruit.",
    "src": [
     "USDA Dietary Guidelines",
     "https://www.dietaryguidelines.gov"
    ],
    "ev": 1
   },
   {
    "q": "Sea salt has much less sodium than table salt.",
    "a": false,
    "s": "By weight, they're nearly the same.",
    "w": [
     "Both are mostly sodium chloride. Sea salt's bigger crystals mean a teaspoon holds a bit less.",
     "But gram for gram, the sodium is about the same."
    ],
    "t": "Cut the amount, not just the type.",
    "x": "Compare sodium in mg, not the type of salt.",
    "src": [
     "FDA",
     "https://www.fda.gov/food"
    ],
    "ev": 0
   },
   {
    "q": "The serving size on a label tells you how much you should eat.",
    "a": false,
    "s": "It shows what people typically eat, not a recommendation.",
    "w": [
     "The FDA sets serving sizes from what people usually eat in one sitting. It's a reference for the numbers, not advice.",
     "A bag can hold 2 or 3 servings, so eating the whole bag means multiplying every line by 2 or 3."
    ],
    "t": "Check 'servings per container' first.",
    "x": "Look at the servings per container on the next snack you pick up.",
    "src": [
     "FDA",
     "https://www.fda.gov/food"
    ],
    "ev": 0
   },
   {
    "q": "A %Daily Value of 5% or less per serving is considered low.",
    "a": true,
    "s": "5% or less is low, 20% or more is high.",
    "w": [
     "%DV shows how much a serving adds to a day's worth of that nutrient, based on a 2,000-calorie diet.",
     "Aim low for saturated fat, sodium and added sugars, and high for fiber, vitamin D, calcium, iron and potassium."
    ],
    "t": "5 is low, 20 is high.",
    "x": "Check the %DV for sodium on one canned food.",
    "src": [
     "FDA",
     "https://www.fda.gov/food"
    ],
    "ev": 0
   },
   {
    "q": "Nutrition labels show how much added sugar a product has.",
    "a": true,
    "s": "Since the label update, 'Added Sugars' has its own line.",
    "w": [
     "Large companies had to add the line by 2020 and smaller ones by 2021. It sits under Total Sugars, in grams and as a %DV.",
     "Total sugars mix natural sugars (like in milk or fruit) with added ones, so the added line is the one to watch."
    ],
    "t": "Look for 'Includes X g Added Sugars'.",
    "x": "Find the added sugar grams in your usual breakfast.",
    "src": [
     "FDA",
     "https://www.fda.gov/food"
    ],
    "ev": 0
   },
   {
    "q": "Ingredients on a label are listed from the largest amount to the smallest.",
    "a": true,
    "s": "By weight, heaviest first.",
    "w": [
     "The first ingredients make up most of the product. If sugar is in the first three, the product is mostly sugar.",
     "Sugar can hide under many names, like syrup, dextrose or maltose, so it can show up several times in the list."
    ],
    "t": "The first three ingredients tell you the most.",
    "x": "Read the first three ingredients of one packaged food today.",
    "src": [
     "FDA",
     "https://www.fda.gov/food"
    ],
    "ev": 0
   },
   {
    "q": "'Sugar-free' means a product has no calories.",
    "a": false,
    "s": "It can still have calories from other ingredients.",
    "w": [
     "'Sugar-free' means less than 0.5 grams of sugar per serving. Fat, starch and sugar alcohols still add calories.",
     "Sugar-free cookies, for example, can have about as many calories as the regular ones."
    ],
    "t": "'Sugar-free' is about sugar, not calories.",
    "x": "Compare the calories of a sugar-free product with its regular version.",
    "src": [
     "FDA",
     "https://www.fda.gov/food"
    ],
    "ev": 0
   },
   {
    "q": "'Trans fat 0 g' on a label can still hide a little trans fat.",
    "a": true,
    "s": "Under 0.5 g per serving can be rounded down to zero.",
    "w": [
     "Labels can show 0 g when a serving has less than 0.5 g. Eat several servings and it adds up.",
     "Artificial trans fats are largely gone from US foods, but 'partially hydrogenated oil' in the ingredients is the giveaway."
    ],
    "t": "The ingredient list tells the full story.",
    "x": "Scan one packaged food for 'partially hydrogenated'.",
    "src": [
     "FDA",
     "https://www.fda.gov/food"
    ],
    "ev": 0
   },
   {
    "q": "A bag labeled '2.5 servings' shows the calories for the whole bag.",
    "a": false,
    "s": "The numbers are per serving, so you multiply.",
    "w": [
     "Every number on the Nutrition Facts panel is for one serving, unless a dual-column label shows both.",
     "A 2.5-serving bag with 200 calories per serving holds 500 calories."
    ],
    "t": "Multiply by the number of servings you eat.",
    "x": "Do the multiplication on the next bag you open.",
    "src": [
     "FDA",
     "https://www.fda.gov/food"
    ],
    "ev": 0
   }
  ]
 },
 {
  "id": 3,
  "name": "Sugar and carbs",
  "sub": "What counts as added sugar, and what doesn't.",
  "cards": [
   {
    "q": "Sugar makes children hyperactive.",
    "a": false,
    "s": "Controlled studies haven't found that effect.",
    "w": [
     "In double-blind studies, children got either sugar or a sugar-free placebo, and nobody knew which. Their behavior didn't differ.",
     "But parents who believed their child had eaten sugar rated them as more hyperactive. The excitement of parties, where sugar is everywhere, is the more likely cause."
    ],
    "t": "Sugar has real downsides, but hyperactivity isn't one that's been shown.",
    "x": "At the next party, watch the excitement, not the cake.",
    "src": [
     "Wolraich et al., JAMA 1995",
     "https://jamanetwork.com"
    ],
    "ev": 1
   },
   {
    "q": "Honey is much healthier than sugar.",
    "a": false,
    "s": "Your body treats it mostly like sugar.",
    "w": [
     "Honey has tiny amounts of antioxidants and minerals, but it's about 80% sugar.",
     "A spoonful even has slightly more calories than a spoonful of table sugar."
    ],
    "t": "Treat honey as a sweetener, not a health food.",
    "x": "Use honey for taste, not as a health swap.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 0
   },
   {
    "q": "Fruit juice is as healthy as whole fruit.",
    "a": false,
    "s": "Juice loses most of the fiber.",
    "w": [
     "Without fiber, the sugar reaches your blood faster and you don't feel as full.",
     "A large glass of orange juice can hold the sugar of three or four oranges, which you'd rarely eat in one go."
    ],
    "t": "Eat your fruit, don't drink it.",
    "x": "Swap one glass of juice for a piece of fruit.",
    "src": [
     "USDA Dietary Guidelines",
     "https://www.dietaryguidelines.gov"
    ],
    "ev": 0
   },
   {
    "q": "Plain popcorn is a whole-grain snack.",
    "a": true,
    "s": "Yes, with fiber and few calories.",
    "w": [
     "Three cups of air-popped popcorn have about 100 calories and over 3 g of fiber.",
     "Movie-theater butter, salt and sugar change everything."
    ],
    "t": "Air-popped is the best version.",
    "x": "Pop plain popcorn at home with a little oil.",
    "src": [
     "USDA MyPlate",
     "https://www.myplate.gov"
    ],
    "ev": 0
   },
   {
    "q": "The natural sugar in plain milk counts as 'added sugar'.",
    "a": false,
    "s": "Added sugars are put in during processing; natural ones aren't.",
    "w": [
     "Added sugars include sugars and syrups put into foods or drinks, and also honey and fruit juice concentrates. The lactose in plain milk and the sugar in whole fruit aren't added sugars.",
     "Flavored milk and sweetened yogurt do have added sugar, and the label tells them apart."
    ],
    "t": "Plain milk and whole fruit don't count as added sugar.",
    "x": "Compare the added sugar of plain and flavored yogurt.",
    "src": [
     "FDA",
     "https://www.fda.gov/food"
    ],
    "ev": 0
   },
   {
    "q": "'Wheat bread' can be made mostly from refined white flour.",
    "a": true,
    "s": "Check that 'whole' comes first in the ingredients.",
    "w": [
     "'Wheat bread' can be made mostly of refined white flour with a little whole wheat and some caramel color.",
     "Look for 'whole wheat flour' or another whole grain as the first ingredient."
    ],
    "t": "'Whole' must come first in the ingredients.",
    "x": "Check the first ingredient of your usual bread.",
    "src": [
     "USDA MyPlate",
     "https://www.myplate.gov"
    ],
    "ev": 0
   },
   {
    "q": "Brown sugar and white sugar are nutritionally almost identical.",
    "a": true,
    "s": "Brown sugar is white sugar with some molasses.",
    "w": [
     "Brown sugar is white sugar with some molasses added. The extra minerals are in tiny amounts.",
     "Calories and effect on blood sugar are practically the same."
    ],
    "t": "Choose sugar for its taste, and use less of it.",
    "x": "Cut the sugar in one recipe or drink by a quarter.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 0
   },
   {
    "q": "The American Heart Association suggests limiting added sugar to about 25 g a day for women and 36 g for men.",
    "a": true,
    "s": "That's about 6 and 9 teaspoons.",
    "w": [
     "The AHA recommends no more than about 100 calories (6 teaspoons, 25 g) of added sugar a day for most women and 150 calories (9 teaspoons, 36 g) for most men.",
     "A 12 oz can of regular soda has around 39 g, which already goes over both limits."
    ],
    "t": "One sugary drink can use up the whole day's limit.",
    "x": "Find the grams of sugar in your usual drink.",
    "src": [
     "American Heart Association",
     "https://www.heart.org"
    ],
    "ev": 0
   },
   {
    "q": "Fiber slows how quickly sugar enters your blood.",
    "a": true,
    "s": "Especially the soluble fiber in oats, beans and fruit.",
    "w": [
     "Fiber makes digestion slower, so sugar reaches your blood more gradually. Soluble fiber, found in oats, beans and fruit, does this best.",
     "It's one reason whole fruit affects your blood sugar differently from juice."
    ],
    "t": "Pair sweet things with fiber or protein.",
    "x": "Add fiber to your next sweet snack: berries, nuts or oats.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "Artificial sweeteners are proven to help you lose weight.",
    "a": false,
    "s": "The evidence is mixed, so 'proven' is too strong.",
    "w": [
     "Swapping a sugary drink for a zero-calorie one can cut calories, and some trials show small benefits.",
     "But observational studies link regular use with weight gain, though they can't show cause. In 2023 the WHO advised against relying on non-sugar sweeteners to control weight."
    ],
    "t": "Water beats both sugar and sweeteners.",
    "x": "Replace one sweet drink with water or sparkling water.",
    "src": [
     "World Health Organization",
     "https://www.who.int"
    ],
    "ev": 2
   }
  ]
 },
 {
  "id": 4,
  "name": "Protein",
  "sub": "How much you need, and where it comes from.",
  "cards": [
   {
    "q": "Cooked lentils have more protein than cooked chicken breast, gram for gram.",
    "a": false,
    "s": "Chicken has about 3 times more protein per 100 g.",
    "w": [
     "100 g of cooked chicken breast has about 31 g of protein, and 100 g of cooked lentils about 9 g.",
     "Lentils still win elsewhere: they bring fiber, which chicken doesn't have, and they cost much less. Eating legumes and grains over the day gives a good protein balance."
    ],
    "t": "Lentils are a great protein source, just plan bigger portions.",
    "x": "Add lentils to one soup or salad this week.",
    "src": [
     "USDA FoodData Central",
     "https://fdc.nal.usda.gov"
    ],
    "ev": 0
   },
   {
    "q": "Greek yogurt usually has about twice the protein of regular yogurt.",
    "a": true,
    "s": "Straining concentrates the protein.",
    "w": [
     "Greek yogurt is strained to remove liquid whey, which makes it thicker.",
     "It typically has around 10 g of protein per 100 g, against roughly 3.5 to 5 g for regular yogurt."
    ],
    "t": "An easy protein boost at breakfast.",
    "x": "Choose plain Greek yogurt and add your own fruit.",
    "src": [
     "USDA FoodData Central",
     "https://fdc.nal.usda.gov"
    ],
    "ev": 0
   },
   {
    "q": "Most adults need about 0.8 grams of protein per kilo of body weight.",
    "a": true,
    "s": "That's the official minimum, about 0.36 g per pound.",
    "w": [
     "The Recommended Dietary Allowance is 0.8 g per kg a day, around 54 g for a 150 lb adult.",
     "Active people and older adults may need more. It's a minimum to avoid deficiency, not an upper limit."
    ],
    "t": "Most people reach it without supplements.",
    "x": "Estimate your own minimum: your weight in kg times 0.8.",
    "src": [
     "National Academies",
     "https://nap.nationalacademies.org"
    ],
    "ev": 0
   },
   {
    "q": "Most American adults already eat enough protein.",
    "a": true,
    "s": "Typical intake is above the minimum.",
    "w": [
     "Survey data show that most adults eat more protein than the minimum recommended.",
     "Exceptions are some older adults and people who eat very little overall. For most Americans, fiber is the bigger gap."
    ],
    "t": "Protein is rarely the nutrient you're missing.",
    "x": "Look at your meals: is there a protein source in at least 2 of 3?",
    "src": [
     "USDA Dietary Guidelines",
     "https://www.dietaryguidelines.gov"
    ],
    "ev": 1
   },
   {
    "q": "Your body can absorb only 30 grams of protein per meal.",
    "a": false,
    "s": "Your body absorbs the rest. The 30 g limit is a myth.",
    "w": [
     "Your body digests and absorbs essentially all the protein you eat. What may be limited is how much is used for building muscle at once, and even that isn't a hard cap.",
     "Spreading protein over the day may help some people, but protein eaten in one big meal isn't wasted."
    ],
    "t": "Don't count grams per meal.",
    "x": "Simply add some protein to your breakfast.",
    "src": [
     "International Society of Sports Nutrition",
     "https://www.sportsnutritionsociety.org"
    ],
    "ev": 1
   },
   {
    "q": "Plant proteins can't give you all the essential amino acids.",
    "a": false,
    "s": "Variety across the day covers them.",
    "w": [
     "Some plant foods are low in one essential amino acid, but beans, grains, nuts and seeds eaten over the day complement each other. Soy and quinoa are already complete.",
     "You don't have to combine them in the same meal."
    ],
    "t": "Variety over the day is enough.",
    "x": "Make one meal plant-protein based: beans, lentils or tofu.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 0
   },
   {
    "q": "A large egg has about 6 grams of protein.",
    "a": true,
    "s": "About 6 g, for around 70 calories.",
    "w": [
     "A large egg has about 6 g of protein and around 70 calories, plus vitamins and choline.",
     "That makes eggs a compact and cheap protein source."
    ],
    "t": "Eggs are cheap protein.",
    "x": "Add an egg to a meal that's low in protein.",
    "src": [
     "USDA FoodData Central",
     "https://fdc.nal.usda.gov"
    ],
    "ev": 0
   },
   {
    "q": "You need protein powder to build muscle.",
    "a": false,
    "s": "Food works just as well. Powder is mostly convenience.",
    "w": [
     "Muscle growth depends on training and enough total protein, from any source.",
     "Powders help you reach your target but aren't required. Supplements aren't reviewed by the FDA before they're sold, so check labels."
    ],
    "t": "Food first, powder if it's convenient.",
    "x": "Count the protein you get from food for one day first.",
    "src": [
     "NIH Office of Dietary Supplements",
     "https://ods.od.nih.gov"
    ],
    "ev": 0
   },
   {
    "q": "A high-protein diet damages healthy kidneys.",
    "a": false,
    "s": "No good evidence of harm in people with healthy kidneys.",
    "w": [
     "In people with kidney disease, doctors often limit protein. In people with healthy kidneys, studies haven't found that higher protein intake causes damage.",
     "Very high intakes over long periods are less studied, so extremes aren't recommended."
    ],
    "t": "If you have a kidney condition, ask your doctor first.",
    "x": "If you have a medical condition, check with your doctor before changing your protein.",
    "src": [
     "NIH (NIDDK)",
     "https://www.niddk.nih.gov"
    ],
    "ev": 1
   },
   {
    "q": "Soy foods increase breast cancer risk.",
    "a": false,
    "s": "Large reviews haven't found that for soy foods.",
    "w": [
     "Soy contains isoflavones, plant compounds similar to estrogen, which raised concern. Studies in people haven't shown that eating soy foods raises breast cancer risk, and some link it with lower risk.",
     "Evidence on concentrated soy supplements is less clear."
    ],
    "t": "Tofu, edamame and soy milk are fine foods.",
    "x": "Try one soy food this week: tofu, tempeh or edamame.",
    "src": [
     "American Cancer Society",
     "https://www.cancer.org"
    ],
    "ev": 1
   }
  ]
 },
 {
  "id": 5,
  "name": "Fats",
  "sub": "Which fats help, which don't, and how to swap.",
  "cards": [
   {
    "q": "Eggs raise blood cholesterol a lot for most people.",
    "a": false,
    "s": "For most people, the effect is modest.",
    "w": [
     "Saturated and trans fats affect blood cholesterol more than the cholesterol in food. In 2015, US dietary guidelines dropped their daily cholesterol limit.",
     "Some people do react more strongly than others."
    ],
    "t": "Eggs can fit a healthy diet; watch what you eat with them.",
    "x": "If you like eggs, one a day is fine for most healthy people.",
    "src": [
     "American Heart Association",
     "https://www.heart.org"
    ],
    "ev": 1
   },
   {
    "q": "Your body needs some fat to absorb vitamins A, D, E and K.",
    "a": true,
    "s": "Those vitamins are fat-soluble.",
    "w": [
     "Vitamins A, D, E and K dissolve in fat. Without any fat in a meal, you absorb less of them.",
     "That's why a salad with a little olive oil or nuts gives you more from its vegetables."
    ],
    "t": "A little fat helps your body use vegetables.",
    "x": "Add a little olive oil or a few nuts to a vegetable salad.",
    "src": [
     "NIH Office of Dietary Supplements",
     "https://ods.od.nih.gov"
    ],
    "ev": 0
   },
   {
    "q": "Eating fatty fish twice a week is linked with better heart health.",
    "a": true,
    "s": "The AHA recommends two servings a week.",
    "w": [
     "Fatty fish like salmon, sardines and trout are rich in omega-3 fats. The AHA recommends at least two 3.5 oz servings of fish a week.",
     "Benefits are clearest when fish replaces less healthy foods like processed or red meat."
    ],
    "t": "Fish twice a week is a simple heart-healthy habit.",
    "x": "Plan one fish meal this week.",
    "src": [
     "American Heart Association",
     "https://www.heart.org"
    ],
    "ev": 0
   },
   {
    "q": "Coconut oil is a health food.",
    "a": false,
    "s": "It's mostly saturated fat and raises LDL cholesterol.",
    "w": [
     "Coconut oil is more than 80% saturated fat, which raises LDL ('bad') cholesterol more than olive oil does.",
     "The AHA advises against using it to improve health. As a flavor in small amounts it's fine."
    ],
    "t": "Use coconut oil for taste, not for health.",
    "x": "Use olive or canola oil for everyday cooking.",
    "src": [
     "American Heart Association",
     "https://www.heart.org"
    ],
    "ev": 1
   },
   {
    "q": "Cooking with olive oil destroys its health benefits.",
    "a": false,
    "s": "It's fairly stable at normal cooking temperatures.",
    "w": [
     "Extra virgin olive oil can handle roughly 375 to 410 °F, above what most home cooking uses. Studies show it keeps most of its beneficial compounds when heated moderately.",
     "Some antioxidants fall with long, hot frying, but it's still a good choice for sautéing and roasting."
    ],
    "t": "Olive oil is fine for everyday cooking.",
    "x": "Use olive oil to sauté something tonight.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "Avocados are high in fat, but mostly unsaturated fat.",
    "a": true,
    "s": "About two thirds of it is monounsaturated.",
    "w": [
     "Avocado fat is mostly monounsaturated, the same kind found in olive oil, which supports healthy cholesterol when it replaces saturated fat.",
     "Avocados also bring fiber and potassium. A serving is about a third of a medium avocado, around 80 calories."
    ],
    "t": "Not all fat is the same.",
    "x": "Replace mayo on one sandwich with avocado.",
    "src": [
     "USDA FoodData Central",
     "https://fdc.nal.usda.gov"
    ],
    "ev": 0
   },
   {
    "q": "Nuts are too fattening to eat every day.",
    "a": false,
    "s": "Daily nuts are linked with better health, not weight gain.",
    "w": [
     "Studies find that regular nut eaters tend to weigh no more than others and have a lower risk of heart disease. Nuts are filling, and the body doesn't absorb all of their calories.",
     "A typical portion is a handful (about 1 oz, 160 to 180 calories). Salted or candied nuts are different."
    ],
    "t": "A daily handful of plain nuts is a good habit.",
    "x": "Swap one processed snack for a handful of plain nuts.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "Saturated fat is found only in animal foods.",
    "a": false,
    "s": "Coconut and palm oils are plant sources too.",
    "w": [
     "Butter, cheese and fatty meat are main sources, but coconut oil, palm oil and many baked goods and fried foods also contain a lot.",
     "The guidelines suggest keeping saturated fat under 10% of daily calories."
    ],
    "t": "Saturated fat isn't only about meat.",
    "x": "Check the saturated fat grams of your usual cooking fat.",
    "src": [
     "USDA Dietary Guidelines",
     "https://www.dietaryguidelines.gov"
    ],
    "ev": 0
   },
   {
    "q": "Fish oil supplements give the same heart benefits as eating fish.",
    "a": false,
    "s": "Trials of supplements have mostly been disappointing.",
    "w": [
     "Large trials of omega-3 supplements in the general population haven't shown clear reductions in heart attacks. Eating fish has more consistent benefits, maybe because of the whole package of nutrients and what it replaces.",
     "Prescription omega-3s are used for specific conditions under a doctor's care."
    ],
    "t": "Eat the fish; don't count on the capsule.",
    "x": "Plan fish meals before buying capsules.",
    "src": [
     "NIH Office of Dietary Supplements",
     "https://ods.od.nih.gov"
    ],
    "ev": 2
   },
   {
    "q": "Replacing saturated fat with unsaturated fat lowers heart disease risk.",
    "a": true,
    "s": "What you swap in matters more than what you remove.",
    "w": [
     "Swapping butter for olive oil or nuts lowers LDL cholesterol and heart risk. But replacing saturated fat with refined carbs and sugar doesn't give the same benefit.",
     "That's why 'low-fat' on its own isn't a good goal."
    ],
    "t": "Choose what replaces the fat, not only what you cut.",
    "x": "Swap butter for olive oil at one meal.",
    "src": [
     "American Heart Association",
     "https://www.heart.org"
    ],
    "ev": 0
   }
  ]
 },
 {
  "id": 6,
  "name": "Processed food",
  "sub": "What ultra-processed really means.",
  "cards": [
   {
    "q": "Fresh vegetables are always more nutritious than frozen ones.",
    "a": false,
    "s": "Frozen vegetables can be just as nutritious.",
    "w": [
     "Vegetables for freezing are usually picked ripe and frozen within hours, which locks in their vitamins.",
     "“Fresh” vegetables can spend days in transport, on shelves and in your fridge, slowly losing some vitamins such as vitamin C. Studies comparing the two often find similar values."
    ],
    "t": "Frozen vegetables are a cheap, healthy shortcut.",
    "x": "Keep a bag of frozen vegetables for busy days.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "Microwaving vegetables can keep more vitamins than boiling them.",
    "a": true,
    "s": "Microwaving often preserves nutrients well.",
    "w": [
     "Most nutrient loss comes from heat, cooking time and water. Some vitamins leak into boiling water.",
     "Microwaving is quick and uses little water, so it often keeps more vitamins than boiling."
    ],
    "t": "Microwave-steaming is a great way to cook vegetables.",
    "x": "Microwave your vegetables with just a splash of water.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "Cooking tomatoes makes some nutrients easier to absorb.",
    "a": true,
    "s": "Lycopene becomes more available when cooked.",
    "w": [
     "Heat breaks down the tomato's cell walls, so the antioxidant lycopene in sauce is absorbed better than from raw tomatoes, especially with a little oil.",
     "Cooking does reduce vitamin C a little."
    ],
    "t": "Raw and cooked tomatoes are both worth eating.",
    "x": "Cook tomatoes with a little olive oil.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "More than half of the calories US adults eat come from ultra-processed foods.",
    "a": true,
    "s": "About 55%, according to CDC survey data.",
    "w": [
     "Ultra-processed foods are made mostly from industrial ingredients: soft drinks, packaged snacks, instant meals and many breakfast cereals.",
     "CDC survey data show they provide about 55% of calories for US adults, and even more for children."
    ],
    "t": "Ultra-processed food is the default diet in the US.",
    "x": "Look in your pantry: how many items are ultra-processed?",
    "src": [
     "CDC (NCHS)",
     "https://www.cdc.gov/nchs"
    ],
    "ev": 0
   },
   {
    "q": "In an NIH trial, people ate about 500 more calories a day on an ultra-processed diet.",
    "a": true,
    "s": "Hall et al., 2019: about 500 more calories, and weight gain.",
    "w": [
     "In a 2-week controlled study at the NIH, 20 adults ate either ultra-processed or unprocessed meals matched for presented calories, sugar, fat and fiber. On the ultra-processed diet they ate about 500 calories a day more and gained about 2 pounds.",
     "It was small and short, so it shows an effect but not the full story. It's still the best controlled evidence we have."
    ],
    "t": "Ultra-processed meals are easier to overeat.",
    "x": "Swap one ultra-processed snack for a whole food.",
    "src": [
     "NIH (Hall et al., Cell Metabolism 2019)",
     "https://www.niddk.nih.gov"
    ],
    "ev": 1
   },
   {
    "q": "All processed foods are unhealthy.",
    "a": false,
    "s": "Canned beans and frozen vegetables are processed too.",
    "w": [
     "Processing includes freezing, canning, drying and pasteurizing, which can keep food safe and nutritious. The concern is mainly with ultra-processed products.",
     "Canned beans, plain frozen vegetables and plain yogurt are processed but useful foods."
    ],
    "t": "'Processed' isn't the same as 'bad'.",
    "x": "Keep one canned or frozen staple in your kitchen.",
    "src": [
     "USDA Dietary Guidelines",
     "https://www.dietaryguidelines.gov"
    ],
    "ev": 0
   },
   {
    "q": "Every food additive is individually reviewed by the FDA before it is used.",
    "a": false,
    "s": "Many are exempt through the 'GRAS' route.",
    "w": [
     "Under US law, ingredients 'generally recognized as safe' (GRAS) can be used without FDA approval if qualified experts judge them safe. In some cases companies can make that decision themselves.",
     "How that route should work is being debated, and the rules may change."
    ],
    "t": "Ingredients don't all go through a pre-approval.",
    "x": "Count the ingredients on one packaged food.",
    "src": [
     "FDA",
     "https://www.fda.gov/food"
    ],
    "ev": 1
   },
   {
    "q": "Pasteurized milk has fewer nutrients than raw milk.",
    "a": false,
    "s": "Pasteurization barely changes nutrition and kills dangerous germs.",
    "w": [
     "Pasteurization heats milk briefly to kill bacteria like Salmonella, E. coli and Listeria. Nutrition differences are minimal.",
     "Raw milk can cause serious illness, particularly in children, older adults and pregnant people."
    ],
    "t": "Pasteurized is the safe choice.",
    "x": "Check that the milk and cheese you buy say 'pasteurized'.",
    "src": [
     "CDC",
     "https://www.cdc.gov/foodsafety"
    ],
    "ev": 0
   },
   {
    "q": "Foods with long ingredient lists are often ultra-processed.",
    "a": true,
    "s": "Many unfamiliar ingredients is a useful signal.",
    "w": [
     "Ultra-processed foods usually contain ingredients you wouldn't cook with at home, like emulsifiers, flavorings, colors and modified starches.",
     "A long list isn't proof, since some real recipes have many ingredients, but it's a useful signal."
    ],
    "t": "Fewer and more familiar ingredients is a good rule.",
    "x": "Pick one packaged food and count its ingredients.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "Packaged bread is always ultra-processed.",
    "a": false,
    "s": "It depends on the ingredients.",
    "w": [
     "Some packaged breads have a short list: flour, water, yeast, salt. Others contain emulsifiers, added sugars and flavorings, which put them in the ultra-processed group.",
     "Read the ingredients rather than judging by the aisle."
    ],
    "t": "Judge bread by its ingredients.",
    "x": "Compare the ingredient lists of two breads.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   }
  ]
 },
 {
  "id": 7,
  "name": "Food marketing",
  "sub": "See through the claims on the front of the package.",
  "cards": [
   {
    "q": "Brown eggs are healthier than white eggs.",
    "a": false,
    "s": "Shell color depends on the hen's breed, not on nutrition.",
    "w": [
     "Hens with white feathers usually lay white eggs, and hens with red or brown feathers usually lay brown ones. Inside, the eggs are basically the same.",
     "Brown eggs often cost more because those breeds tend to be bigger and eat more. What can change nutrition is the hen's diet, for example feed enriched with omega-3."
    ],
    "t": "Judge eggs by how the hens are raised and fed, not by color.",
    "x": "Compare egg prices: you may be paying for the color.",
    "src": [
     "USDA Dietary Guidelines",
     "https://www.dietaryguidelines.gov"
    ],
    "ev": 0
   },
   {
    "q": "Detox teas and juice cleanses are needed to clean your body.",
    "a": false,
    "s": "Your liver and kidneys already do that.",
    "w": [
     "There's no good evidence that detox products remove toxins. Weight lost on a juice cleanse is mostly water.",
     "Some detox teas contain laxatives, which can be harmful if used often."
    ],
    "t": "Sleep, water and fiber help your liver more.",
    "x": "Skip the detox tea: drink water and eat fiber.",
    "src": [
     "NIH (NCCIH)",
     "https://www.nccih.nih.gov"
    ],
    "ev": 0
   },
   {
    "q": "Organic food is always more nutritious.",
    "a": false,
    "s": "Reviews find small or no differences in nutrients.",
    "w": [
     "Organic farming limits synthetic pesticides and can have environmental benefits.",
     "But large reviews of studies find little difference in vitamins and minerals."
    ],
    "t": "Eating more fruit and vegetables matters more than the label.",
    "x": "Buy organic if you like it, but never skip the produce.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "Gluten-free food is healthier for everyone.",
    "a": false,
    "s": "Only for people with celiac disease or gluten sensitivity.",
    "w": [
     "For most people, gluten causes no harm.",
     "Gluten-free products are often more processed, lower in fiber and more expensive."
    ],
    "t": "Avoid gluten for medical reasons, not as a diet.",
    "x": "Go gluten-free only if a doctor says so.",
    "src": [
     "NIH (NIDDK)",
     "https://www.niddk.nih.gov"
    ],
    "ev": 0
   },
   {
    "q": "Carrots give you better night vision.",
    "a": false,
    "s": "Only if you're lacking vitamin A.",
    "w": [
     "Vitamin A is needed for vision, and a real deficiency causes night blindness. But if you already get enough, extra carrots won't make you see better in the dark.",
     "The legend was spread in Britain during World War II, partly to hide the use of radar by night fighter pilots."
    ],
    "t": "Eat carrots for your health, not for superpowers.",
    "x": "Eat carrots for vitamin A, not for night vision.",
    "src": [
     "American Academy of Ophthalmology",
     "https://www.aao.org"
    ],
    "ev": 0
   },
   {
    "q": "'Multigrain' bread can be made entirely of refined grains.",
    "a": true,
    "s": "It only means more than one grain, refined or not.",
    "w": [
     "'Multigrain' means the product contains several types of grains, which may all be refined.",
     "Look for '100% whole grain' or 'whole' as the first ingredient."
    ],
    "t": "'Multigrain' is marketing; 'whole' is the real word.",
    "x": "Check the first ingredient of a 'multigrain' product.",
    "src": [
     "USDA MyPlate",
     "https://www.myplate.gov"
    ],
    "ev": 0
   },
   {
    "q": "'Cage-free' doesn't mean the hens go outdoors.",
    "a": true,
    "s": "It means no cages, not outdoor access.",
    "w": [
     "Cage-free hens roam inside a building. 'Free-range' suggests outdoor access, but the rules for eggs are loose.",
     "None of these labels changes the nutrition of an egg much."
    ],
    "t": "Choose eggs for price, animal welfare or taste, not for nutrition.",
    "x": "Decide what matters most to you when buying eggs.",
    "src": [
     "USDA",
     "https://www.usda.gov"
    ],
    "ev": 1
   },
   {
    "q": "A 'low-fat' product can have as many calories as the regular one.",
    "a": true,
    "s": "Often sugar replaces the fat.",
    "w": [
     "Fat is often replaced by sugar or starch to keep the taste. A low-fat cookie can have about the same calories as the regular one.",
     "Always compare the calories line, not just the claim."
    ],
    "t": "Compare calories, not claims.",
    "x": "Compare the calories of a 'low-fat' product and its regular version.",
    "src": [
     "FDA",
     "https://www.fda.gov/food"
    ],
    "ev": 0
   },
   {
    "q": "A single 'superfood' can protect you from disease.",
    "a": false,
    "s": "No single food does that.",
    "w": [
     "'Superfood' is a marketing term, not a scientific one. Blueberries, kale or turmeric are healthy, but the benefits come from your overall eating pattern.",
     "Variety across vegetables, fruit, legumes and whole grains matters more than one star ingredient."
    ],
    "t": "Your whole pattern beats any single food.",
    "x": "Add one vegetable you rarely eat to a meal.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 0
   },
   {
    "q": "Foods labeled 'healthy' or 'organic' make people eat more of them.",
    "a": true,
    "s": "The 'health halo' effect is well documented.",
    "w": [
     "In experiments, people judged the same food as lower in calories when it was labeled organic, and were more willing to indulge.",
     "A label tells you about marketing, not about your portion."
    ],
    "t": "Portions matter, whatever the label says.",
    "x": "Check the calories of one 'healthy' product you buy.",
    "src": [
     "Schuldt & Schwarz, Judgment and Decision Making 2010",
     "https://journal.sjdm.org"
    ],
    "ev": 1
   }
  ]
 },
 {
  "id": 8,
  "name": "Everyday habits",
  "sub": "Small routines that make eating better easier.",
  "cards": [
   {
    "q": "You need exactly 8 glasses of water a day.",
    "a": false,
    "s": "There's no scientific basis for that exact number.",
    "w": [
     "Needs vary with body size, activity and climate, and water in food, soup, coffee and tea counts too.",
     "For most healthy people, drinking when thirsty is enough."
    ],
    "t": "Thirst and pale urine are good guides.",
    "x": "Drink when you're thirsty, and check that your urine is pale.",
    "src": [
     "National Academies",
     "https://nap.nationalacademies.org"
    ],
    "ev": 0
   },
   {
    "q": "Moderate coffee drinking counts toward your daily fluids.",
    "a": true,
    "s": "Normal amounts count toward your daily fluids.",
    "w": [
     "Caffeine is a mild diuretic, but the water in the cup more than makes up for it.",
     "Studies show that moderate coffee drinkers stay just as hydrated as water drinkers."
    ],
    "t": "Your morning coffee counts as fluid.",
    "x": "Count your coffee as part of your daily fluids.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "Breakfast is the most important meal of the day for everyone.",
    "a": false,
    "s": "Research doesn't show it matters for everyone.",
    "w": [
     "Many studies linking breakfast to good health only observe habits, they don't prove cause and effect.",
     "Controlled trials find that skipping breakfast doesn't cause weight gain on its own. What you eat over the whole day matters more."
    ],
    "t": "Eat breakfast if it helps you, skip it if it doesn't.",
    "x": "Eat breakfast only if you're hungry.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "Most sodium in the US diet comes from the salt shaker.",
    "a": false,
    "s": "Over 70% comes from packaged and restaurant food.",
    "w": [
     "US health agencies estimate that most sodium is already in food before it reaches the table.",
     "Bread, cured meats, pizza, soups and sandwiches are among the top sources."
    ],
    "t": "Check labels before blaming your salt shaker.",
    "x": "Check the sodium on one soup or sauce.",
    "src": [
     "FDA",
     "https://www.fda.gov/food"
    ],
    "ev": 0
   },
   {
    "q": "Spinach is an exceptional source of iron.",
    "a": false,
    "s": "It's decent, but your body absorbs little of it.",
    "w": [
     "Spinach has about 2.7 mg of iron per 100 g, similar to many leafy greens, and compounds called oxalates limit how much you absorb.",
     "Its “super iron” reputation is largely a cartoon-era exaggeration."
    ],
    "t": "Pair plant iron with vitamin C, like citrus or peppers.",
    "x": "Eat spinach with a vitamin C food, like lemon or peppers.",
    "src": [
     "NIH Office of Dietary Supplements",
     "https://ods.od.nih.gov"
    ],
    "ev": 0
   },
   {
    "q": "Avocados have more potassium than bananas, gram for gram.",
    "a": true,
    "s": "About 485 mg versus about 360 mg per 100 g.",
    "w": [
     "Bananas are famous for potassium, but avocados, potatoes, beans and spinach are all strong sources too.",
     "Potassium helps regulate blood pressure, and most people in the US don't get enough."
    ],
    "t": "Bananas aren't the only potassium source.",
    "x": "Look for potassium in beans, potatoes and bananas.",
    "src": [
     "USDA FoodData Central",
     "https://fdc.nal.usda.gov"
    ],
    "ev": 0
   },
   {
    "q": "Dark chocolate contains caffeine.",
    "a": true,
    "s": "A modest amount.",
    "w": [
     "Dark chocolate has roughly 20 mg of caffeine per ounce (28 g), depending on cocoa content.",
     "A cup of coffee has about 95 mg. Milk chocolate has much less."
    ],
    "t": "A square at night is fine for most people; a whole bar may not be.",
    "x": "Notice the caffeine in your evening dessert.",
    "src": [
     "USDA FoodData Central",
     "https://fdc.nal.usda.gov"
    ],
    "ev": 0
   },
   {
    "q": "People who cook at home more often tend to have a healthier diet.",
    "a": true,
    "s": "Home cooking is linked with better diet quality.",
    "w": [
     "Studies find that people who cook dinner at home tend to eat more fruit and vegetables and less sugar and fat than people who rarely do. It's an association, so cooks may also differ in other ways.",
     "You don't need elaborate recipes. Simple meals count."
    ],
    "t": "Simple home cooking beats most takeaway.",
    "x": "Cook one simple meal at home this week.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   },
   {
    "q": "The US guideline is to eat less than 2,300 mg of sodium a day.",
    "a": true,
    "s": "That's about one teaspoon of table salt.",
    "w": [
     "The Dietary Guidelines advise adults to limit sodium to less than 2,300 mg a day, about a teaspoon of table salt. The average American eats about 3,400 mg.",
     "Most of it comes from packaged and restaurant food, not from the shaker."
    ],
    "t": "Sodium adds up fast in packaged food.",
    "x": "Add up the sodium of today's packaged foods.",
    "src": [
     "CDC",
     "https://www.cdc.gov/nutrition"
    ],
    "ev": 0
   },
   {
    "q": "Keeping vegetables visible and within reach makes you eat more of them.",
    "a": true,
    "s": "Easy-to-see food gets eaten.",
    "w": [
     "Studies on the food environment show people eat more of what is visible and within reach, at home and in cafeterias.",
     "Fruit on the counter and chips in a cupboard is a simple, free nudge."
    ],
    "t": "Change your environment before relying on willpower.",
    "x": "Put fruit on the counter and snacks out of sight.",
    "src": [
     "Harvard T.H. Chan School of Public Health",
     "https://nutritionsource.hsph.harvard.edu"
    ],
    "ev": 1
   }
  ]
 }
];
