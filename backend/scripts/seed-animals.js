require('dotenv').config();
const { pool } = require('../src/config/db');

// Simple animal questions
const animalQuestions = [
  {
    question: "What animal is known as the 'king of the jungle'?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "How many legs does a spider have?",
    options: ["4", "6", "8", "10"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What is the largest animal in the world?",
    options: ["Elephant", "Blue whale", "Giraffe", "Rhinoceros"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal can change color to camouflage?",
    options: ["Crocodile", "Chameleon", "Snake", "Frog"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the fastest land animal?",
    options: ["Lion", "Cheetah", "Horse", "Dog"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal sleeps upside down?",
    options: ["Dog", "Cat", "Bat", "Bear"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What animal has the longest tongue relative to its body?",
    options: ["Giraffe", "Chameleon", "Anteater", "Woodpecker"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its exceptional memory?",
    options: ["Dolphin", "Elephant", "Chimpanzee", "Crow"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal can regenerate its limbs?",
    options: ["Lizard", "Starfish", "Crab", "Octopus"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the only mammal that can fly?",
    options: ["Bird", "Bat", "Flying squirrel", "Flying fish"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal has three hearts?",
    options: ["Octopus", "Squid", "Jellyfish", "Starfish"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the most venomous animal in the world?",
    options: ["Cobra", "Black widow spider", "Box jellyfish", "Scorpion"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What animal can live over 100 years?",
    options: ["Tortoise", "Elephant", "Whale", "Eagle"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What animal has teeth that never stop growing?",
    options: ["Mouse", "Beaver", "Rabbit", "All of the above"],
    correct_index: 3,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its melodious singing?",
    options: ["Crow", "Nightingale", "Rooster", "Owl"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Which marine animal is known for its intelligence and playful behavior?",
    options: ["Shark", "Dolphin", "Whale", "Seal"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the smallest bird in the world?",
    options: ["Sparrow", "Hummingbird", "Finch", "Wren"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Which animal is known as man's best friend?",
    options: ["Cat", "Dog", "Horse", "Rabbit"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal is famous for its black and white stripes?",
    options: ["Tiger", "Zebra", "Panda", "Skunk"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the largest type of bear?",
    options: ["Grizzly Bear", "Polar Bear", "Black Bear", "Brown Bear"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal is known for building dams?",
    options: ["Muskrat", "Beaver", "Otter", "Badger"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the smallest mammal in the world?",
    options: ["Mouse", "Shrew", "Bumblebee Bat", "Hamster"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its long neck and spots?",
    options: ["Zebra", "Giraffe", "Leopard", "Cheetah"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the national bird of the United States?",
    options: ["Eagle", "Hawk", "Falcon", "Owl"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its pouch?",
    options: ["Kangaroo", "Koala", "Platypus", "Echidna"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the fastest bird in the world?",
    options: ["Eagle", "Falcon", "Hawk", "Ostrich"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its black and white coloring and lives in China?",
    options: ["Panda", "Zebra", "Skunk", "Penguin"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the largest type of penguin?",
    options: ["Emperor Penguin", "King Penguin", "Adelie Penguin", "Gentoo Penguin"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its ability to spray a foul-smelling liquid?",
    options: ["Skunk", "Badger", "Raccoon", "Opossum"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the largest type of deer?",
    options: ["Elk", "Moose", "Reindeer", "Deer"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its ability to change colors?",
    options: ["Chameleon", "Gecko", "Iguana", "Anole"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the largest type of cat?",
    options: ["Lion", "Tiger", "Jaguar", "Leopard"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its hump?",
    options: ["Camel", "Bison", "Buffalo", "Yak"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the smallest type of dog?",
    options: ["Chihuahua", "Pomeranian", "Yorkshire Terrier", "Shih Tzu"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its long trunk?",
    options: ["Elephant", "Tapir", "Anteater", "Aardvark"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the largest type of turtle?",
    options: ["Green Sea Turtle", "Leatherback Turtle", "Loggerhead Turtle", "Hawksbill Turtle"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its ability to roll into a ball?",
    options: ["Armadillo", "Hedgehog", "Porcupine", "Pangolin"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the largest type of snake?",
    options: ["Python", "Anaconda", "Boa", "Cobra"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its ability to fly backwards?",
    options: ["Hummingbird", "Bee", "Butterfly", "Dragonfly"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the largest type of lizard?",
    options: ["Iguana", "Komodo Dragon", "Monitor Lizard", "Gecko"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its ability to produce milk?",
    options: ["All mammals", "Only cows", "Only goats", "Only sheep"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the largest type of bird?",
    options: ["Eagle", "Ostrich", "Emu", "Albatross"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its ability to hibernate?",
    options: ["Bear", "Squirrel", "Hedgehog", "All of the above"],
    correct_index: 3,
    difficulty: "easy"
  },
  {
    question: "What is the largest type of fish?",
    options: ["Bluefin Tuna", "Whale Shark", "Great White Shark", "Marlin"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its ability to see in the dark?",
    options: ["Owl", "Cat", "Bat", "All of the above"],
    correct_index: 3,
    difficulty: "easy"
  },
  {
    question: "What is the largest type of rodent?",
    options: ["Beaver", "Capybara", "Porcupine", "Marmot"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What animal is known for its ability to jump very high?",
    options: ["Kangaroo", "Rabbit", "Flea", "Grasshopper"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the largest type of whale?",
    options: ["Blue Whale", "Sperm Whale", "Humpback Whale", "Killer Whale"],
    correct_index: 0,
    difficulty: "easy"
  },
  // Medium difficulty - More text
  {
    question: "In the animal kingdom, which large mammal is known for its incredible memory and strong family bonds, often traveling in matriarchal herds across the African savanna?",
    options: ["African Elephant", "Rhinoceros", "Hippopotamus", "Giraffe"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which marine creature, despite being called a 'fish', is actually a mammal that breathes air and can hold its breath for extended periods while diving deep into the ocean?",
    options: ["Dolphin", "Whale", "Shark", "Seal"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This large cat species, native to the Americas, is an excellent climber and swimmer, and is known for its powerful roar that can be heard from miles away in the jungle.",
    options: ["Lion", "Tiger", "Jaguar", "Leopard"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "Which bird species is known for its remarkable ability to mimic human speech and sounds, making it one of the most intelligent avian species in the world?",
    options: ["Crow", "Parrot", "Raven", "Magpie"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This small but highly intelligent marine animal has three hearts, blue blood, and the ability to change both color and texture to blend perfectly with its surroundings.",
    options: ["Squid", "Octopus", "Cuttlefish", "Nautilus"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "Which large herbivorous mammal, found primarily in Africa, spends most of its day in water to keep cool and protect its sensitive skin from the sun?",
    options: ["Elephant", "Rhinoceros", "Hippopotamus", "Water Buffalo"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This flightless bird, native to Australia, is the second-largest bird in the world and is known for its powerful legs that can deliver dangerous kicks.",
    options: ["Ostrich", "Emu", "Cassowary", "Rhea"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "Which primate species, found in the rainforests of Central and South America, has a prehensile tail that acts like a fifth limb and is known for its slow, deliberate movements?",
    options: ["Monkey", "Sloth", "Lemur", "Gibbon"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This large marine predator, despite its fearsome reputation, is actually a filter feeder that consumes tiny plankton and small fish by swimming with its mouth open.",
    options: ["Great White Shark", "Whale Shark", "Tiger Shark", "Hammerhead Shark"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "Which small mammal, known for its ability to glide through the air using a membrane between its limbs, is often mistaken for a bird but is actually a type of rodent?",
    options: ["Flying Squirrel", "Sugar Glider", "Flying Lemur", "Bat"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This large bear species, native to the Arctic regions, has black skin under its white fur and is an excellent swimmer, capable of traveling long distances in icy waters.",
    options: ["Grizzly Bear", "Polar Bear", "Black Bear", "Brown Bear"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "Which large reptile, found in tropical regions, is known for its powerful jaws, ability to stay submerged for long periods, and its role as an apex predator in freshwater ecosystems?",
    options: ["Alligator", "Crocodile", "Caiman", "Gharial"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This small but highly adaptable mammal, found on every continent except Antarctica, is known for its intelligence, problem-solving abilities, and tendency to wash food before eating.",
    options: ["Raccoon", "Opossum", "Skunk", "Badger"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which large herbivorous mammal, native to the Arctic tundra, has long, curved tusks and a thick coat of fur that helps it survive in extremely cold temperatures?",
    options: ["Moose", "Elk", "Muskox", "Caribou"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This marine mammal, known for its playful nature and intelligence, uses echolocation to navigate and hunt, and is often seen performing acrobatic leaps out of the water.",
    options: ["Porpoise", "Dolphin", "Orca", "Beluga"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "Which large bird of prey, found in various habitats worldwide, has exceptional eyesight that allows it to spot prey from great distances and is known for its powerful talons?",
    options: ["Hawk", "Eagle", "Falcon", "Owl"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This small marsupial, native to Australia, is known for its ability to sleep up to 20 hours a day and has a very slow metabolism that helps it conserve energy.",
    options: ["Koala", "Wombat", "Tasmanian Devil", "Bandicoot"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which large marine mammal, despite its name suggesting it's a fish, is actually warm-blooded, gives birth to live young, and must surface regularly to breathe air?",
    options: ["Dolphin", "Whale", "Shark", "Ray"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This small but highly venomous marine animal, found in the waters around Australia, has tentacles that can deliver a potentially fatal sting and is considered one of the most dangerous creatures in the ocean.",
    options: ["Portuguese Man o' War", "Box Jellyfish", "Sea Anemone", "Coral"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "Which large herbivorous mammal, native to Africa, has a long neck that allows it to reach leaves high in trees and a unique pattern of spots that helps it blend into its environment?",
    options: ["Zebra", "Giraffe", "Antelope", "Gazelle"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This large marine mammal, found in both Arctic and Antarctic waters, is known for its distinctive black and white coloring, its role as an apex predator that feeds on seals and other marine animals, and its complex social structure with matriarchal pods.",
    options: ["Orca", "Dolphin", "Beluga", "Narwhal"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which large herbivorous mammal, native to the grasslands of Africa, is known for its distinctive black and white striped pattern that serves as camouflage, its strong social bonds within herds, and its ability to run at high speeds to escape predators?",
    options: ["Zebra", "Wildebeest", "Gazelle", "Antelope"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This small but highly intelligent bird, found in various habitats worldwide, is known for its problem-solving abilities, its use of tools, its complex social structures, and its ability to recognize individual human faces.",
    options: ["Crow", "Raven", "Magpie", "Jay"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which large herbivorous mammal, native to the Arctic regions, has a thick white coat that provides excellent camouflage in snow, large hooves that help it walk on ice, and migrates long distances in search of food?",
    options: ["Muskox", "Caribou", "Reindeer", "Elk"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This small but highly venomous snake, found in various regions worldwide, is known for its distinctive rattle at the end of its tail, its heat-sensing pits that help it locate prey, and its ability to strike with incredible speed.",
    options: ["Cobra", "Rattlesnake", "Viper", "Mamba"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "Which large herbivorous mammal, native to the grasslands of North America, was nearly driven to extinction in the 19th century but has since recovered through conservation efforts, and is known for its massive head, humped shoulders, and shaggy coat?",
    options: ["Bison", "Buffalo", "Elk", "Moose"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This small but highly adaptable mammal, found in urban and rural areas worldwide, is known for its intelligence, its ability to solve complex problems, its dexterous paws that function like hands, and its distinctive black mask and ringed tail.",
    options: ["Raccoon", "Opossum", "Skunk", "Badger"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which large marine mammal, found in cold waters worldwide, is known for its distinctive tusks (in males), its blubber that provides insulation, its ability to dive deep for food, and its role as a keystone species in Arctic ecosystems?",
    options: ["Walrus", "Seal", "Sea Lion", "Sea Otter"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This large herbivorous mammal, native to the savannas of Africa, is known for its distinctive horn (or horns), its thick skin that provides protection, its poor eyesight but excellent sense of smell, and its aggressive nature when threatened.",
    options: ["Rhinoceros", "Hippopotamus", "Elephant", "Buffalo"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which small but highly intelligent primate, found in the rainforests of Central and South America, is known for its prehensile tail, its ability to use tools, its complex social structures, and its remarkable problem-solving abilities?",
    options: ["Capuchin Monkey", "Spider Monkey", "Howler Monkey", "Squirrel Monkey"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This large bird, found in various habitats worldwide, is known for its exceptional eyesight, its powerful talons, its ability to soar at great heights, and its role as an apex predator in many ecosystems.",
    options: ["Hawk", "Eagle", "Falcon", "Owl"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "Which large herbivorous mammal, native to the grasslands and forests of Asia, is known for its distinctive single horn, its thick skin that forms plates, its poor eyesight, and its endangered status due to poaching?",
    options: ["Indian Rhinoceros", "Javan Rhinoceros", "Sumatran Rhinoceros", "Black Rhinoceros"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This small but highly venomous spider, found in various regions worldwide, is known for its distinctive red hourglass marking, its neurotoxic venom, and its role as one of the most dangerous spiders to humans.",
    options: ["Black Widow", "Brown Recluse", "Tarantula", "Wolf Spider"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which large marine mammal, found in cold waters worldwide, is known for its distinctive whiskers, its ability to use tools (such as rocks) to break open shellfish, its dense fur that provides insulation, and its role in maintaining kelp forest ecosystems?",
    options: ["Sea Otter", "River Otter", "Seal", "Sea Lion"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This large herbivorous mammal, native to the grasslands of Africa, is known for its distinctive mane (in males), its role as an apex predator, its social structure with prides, and its powerful roar that can be heard from miles away.",
    options: ["Lion", "Tiger", "Leopard", "Cheetah"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which small but highly intelligent bird, found in various habitats worldwide, is known for its problem-solving abilities, its use of tools, its complex social structures, and its ability to recognize individual human faces and remember them for years?",
    options: ["Raven", "Crow", "Magpie", "Jay"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This large herbivorous mammal, native to the grasslands of Africa, is known for its distinctive horns, its migration in large herds, its role as a keystone species in savanna ecosystems, and its importance to many predators.",
    options: ["Wildebeest", "Zebra", "Gazelle", "Antelope"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which large marine mammal, found in cold waters worldwide, is known for its distinctive tusks (in males), its blubber that provides insulation, its ability to dive deep for food, and its role as a keystone species in Arctic ecosystems?",
    options: ["Narwhal", "Beluga", "Walrus", "Seal"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This small but highly venomous snake, found in various regions worldwide, is known for its distinctive hood that it spreads when threatened, its neurotoxic venom, and its role as one of the most dangerous snakes to humans.",
    options: ["Cobra", "Rattlesnake", "Viper", "Mamba"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which large herbivorous mammal, native to the grasslands of North America, was nearly driven to extinction in the 19th century but has since recovered through conservation efforts, and is known for its massive head, humped shoulders, and shaggy coat that provides insulation?",
    options: ["American Bison", "Water Buffalo", "Yak", "Muskox"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This large bird, found in various habitats worldwide, is known for its exceptional eyesight that allows it to spot prey from great distances, its powerful talons, its ability to soar at great heights, and its role as an apex predator in many ecosystems.",
    options: ["Golden Eagle", "Bald Eagle", "Harpy Eagle", "Martial Eagle"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "Which large herbivorous mammal, native to the savannas of Africa, is known for its distinctive horn (or horns), its thick skin that provides protection, its poor eyesight but excellent sense of smell, and its aggressive nature when threatened, making it one of the most dangerous animals in Africa?",
    options: ["Black Rhinoceros", "White Rhinoceros", "Indian Rhinoceros", "Javan Rhinoceros"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This small but highly intelligent primate, found in the rainforests of Central and South America, is known for its prehensile tail that functions as a fifth limb, its ability to use tools, its complex social structures with strong family bonds, and its remarkable problem-solving abilities.",
    options: ["Spider Monkey", "Capuchin Monkey", "Howler Monkey", "Squirrel Monkey"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which large marine mammal, found in cold waters worldwide, is known for its distinctive whiskers, its ability to use tools such as rocks to break open shellfish, its dense fur that provides excellent insulation, and its crucial role in maintaining the health of kelp forest ecosystems?",
    options: ["Northern Sea Otter", "Southern Sea Otter", "River Otter", "Giant Otter"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This large herbivorous mammal, native to the grasslands of Africa, is known for its distinctive mane (in males), its role as an apex predator that hunts in groups, its social structure with prides led by females, and its powerful roar that can be heard from up to five miles away.",
    options: ["African Lion", "Asiatic Lion", "Mountain Lion", "Jaguar"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which small but highly intelligent bird, found in various habitats worldwide, is known for its exceptional problem-solving abilities, its use of tools including sticks and wires, its complex social structures with strong family bonds, and its ability to recognize and remember individual human faces for extended periods?",
    options: ["New Caledonian Crow", "American Crow", "Carrion Crow", "Hooded Crow"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This large herbivorous mammal, native to the grasslands of Africa, is known for its distinctive horns that curve backward, its migration in massive herds that can number in the hundreds of thousands, its role as a keystone species in savanna ecosystems, and its importance as a food source for many predators including lions and hyenas.",
    options: ["Blue Wildebeest", "Black Wildebeest", "Zebra", "Gazelle"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which large marine mammal, found in the Arctic Ocean, is known for its distinctive spiral tusk (actually an elongated tooth) that can grow up to 10 feet long, its ability to dive deep for food, its role in Arctic ecosystems, and its unique appearance that has led to legends about unicorns?",
    options: ["Narwhal", "Beluga", "Walrus", "Seal"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This small but highly venomous snake, found in various regions worldwide, is known for its distinctive hood that it spreads when threatened, its ability to spit venom at threats, its neurotoxic venom that affects the nervous system, and its role as one of the most dangerous snakes to humans.",
    options: ["King Cobra", "Indian Cobra", "Egyptian Cobra", "Mozambique Spitting Cobra"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "Which large herbivorous mammal, native to the grasslands of North America, was nearly driven to extinction in the 19th century due to overhunting but has since recovered through conservation efforts, and is known for its massive head, humped shoulders, shaggy coat that provides insulation, and its importance to Native American cultures?",
    options: ["Plains Bison", "Wood Bison", "Water Buffalo", "Yak"],
    correct_index: 0,
    difficulty: "medium"
  },
  // Hard difficulty - Much more text
  {
    question: "In the complex ecosystem of the African savanna, which large herbivorous mammal, characterized by its distinctive trunk that serves multiple purposes including breathing, smelling, touching, grasping, and producing sounds, plays a crucial role in maintaining the biodiversity of its habitat through seed dispersal and creating pathways for other animals?",
    options: ["African Elephant", "Rhinoceros", "Hippopotamus", "Water Buffalo"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This highly intelligent marine mammal, belonging to the cetacean family, possesses an advanced communication system involving clicks, whistles, and body language, demonstrates self-awareness through mirror tests, forms complex social structures with strong bonds between individuals, and has been observed displaying behaviors such as tool use and cooperative hunting strategies that suggest remarkable cognitive abilities.",
    options: ["Dolphin", "Whale", "Porpoise", "Seal"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large predatory cat species, native to the dense rainforests and grasslands of Central and South America, is distinguished by its powerful build, exceptional swimming abilities, distinctive rosette-patterned coat that provides excellent camouflage, and its role as the largest big cat species found in the Americas, playing a vital role as an apex predator in maintaining the ecological balance of its habitat?",
    options: ["Lion", "Tiger", "Jaguar", "Leopard"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This remarkable bird species, found primarily in tropical and subtropical regions, possesses an extraordinary ability to mimic human speech and various environmental sounds with remarkable accuracy, demonstrates advanced problem-solving skills and tool use in laboratory settings, forms lifelong pair bonds with their mates, and exhibits complex social behaviors including cooperative breeding and sophisticated communication systems that rival those of some primates.",
    options: ["Crow", "Parrot", "Raven", "Magpie"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "Which highly intelligent cephalopod, inhabiting the world's oceans from shallow coral reefs to the deep abyssal plains, possesses three hearts that pump blue, copper-based blood throughout its body, has the remarkable ability to change both color and texture instantaneously for camouflage and communication purposes, demonstrates problem-solving abilities and tool use in laboratory experiments, and can escape from enclosures through small openings due to its boneless, flexible body structure?",
    options: ["Squid", "Octopus", "Cuttlefish", "Nautilus"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This massive semi-aquatic mammal, native to sub-Saharan Africa, spends the majority of its day submerged in rivers and lakes to protect its sensitive, hairless skin from the intense African sun, emerges at night to graze on grasses, possesses incredibly powerful jaws capable of crushing small boats, plays a crucial role in maintaining aquatic ecosystems by creating pathways in waterways, and is considered one of the most dangerous animals in Africa despite its herbivorous diet.",
    options: ["Elephant", "Rhinoceros", "Hippopotamus", "Water Buffalo"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "Which large flightless bird, endemic to the Australian continent and surrounding islands, stands as the second-tallest bird species in the world after the ostrich, possesses powerful legs equipped with sharp claws capable of delivering devastating kicks to potential threats, has a unique ability to run at high speeds for extended periods, plays an important role in seed dispersal across the Australian outback, and has adapted remarkably well to the harsh, arid conditions of its native habitat?",
    options: ["Ostrich", "Emu", "Cassowary", "Rhea"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This slow-moving arboreal mammal, found exclusively in the tropical rainforests of Central and South America, possesses a unique metabolism that operates at an extremely low rate, allowing it to survive on a diet of leaves that would be insufficient for most other mammals, has a specialized digestive system with multiple stomach compartments that slowly break down tough plant material, spends up to 20 hours per day sleeping or resting, moves so slowly that algae can grow on its fur, and has a prehensile tail that functions as an additional limb for navigating the forest canopy.",
    options: ["Monkey", "Sloth", "Lemur", "Gibbon"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This enormous filter-feeding shark species, despite being the largest fish in the ocean, feeds primarily on microscopic plankton, small fish, and other tiny marine organisms by swimming with its massive mouth wide open, filtering thousands of gallons of water per hour through specialized gill rakers, migrates thousands of miles following plankton blooms, possesses a distinctive pattern of white spots and stripes on its dark back that serves as a unique identifier for each individual, and despite its enormous size, poses no threat to humans and is often approached by divers and snorkelers.",
    options: ["Great White Shark", "Whale Shark", "Tiger Shark", "Hammerhead Shark"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "Which small nocturnal gliding mammal, found in the forests of North America and parts of Asia, possesses a specialized membrane called a patagium that extends between its front and hind limbs, allowing it to glide distances of up to 90 meters between trees, has large eyes adapted for low-light vision, feeds primarily on nuts, seeds, fruits, and insects, builds nests in tree cavities, and despite its name suggesting it can fly, actually glides using its membrane as a parachute-like structure.",
    options: ["Flying Squirrel", "Sugar Glider", "Flying Lemur", "Bat"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This massive bear species, perfectly adapted to life in the harsh Arctic environment, possesses a thick layer of blubber beneath its skin and dense, water-repellent fur that provides insulation against freezing temperatures, has black skin that helps absorb heat from sunlight, possesses large paws that function like snowshoes for walking on ice, is an exceptional swimmer capable of covering long distances in frigid waters, primarily hunts seals by waiting at breathing holes in the ice, and faces significant challenges due to climate change affecting its sea ice habitat.",
    options: ["Grizzly Bear", "Polar Bear", "Black Bear", "Brown Bear"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "Which large semi-aquatic reptile, inhabiting tropical and subtropical regions across Africa, Asia, the Americas, and Australia, possesses one of the most powerful bite forces in the animal kingdom, has specialized salt glands that allow it to excrete excess salt from its body, can remain submerged underwater for extended periods by slowing its heart rate, plays a crucial role as an apex predator in maintaining the balance of aquatic ecosystems, and has remained relatively unchanged in form for millions of years, representing a successful evolutionary design.",
    options: ["Alligator", "Crocodile", "Caiman", "Gharial"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This highly adaptable and intelligent mammal, native to North America but now found in urban areas worldwide due to its remarkable ability to thrive in human-altered environments, possesses dexterous front paws that function almost like hands, allowing it to manipulate objects and open containers, has a distinctive black mask and ringed tail, demonstrates remarkable problem-solving abilities including opening latches and solving complex puzzles, washes food in water before eating (though this behavior may be related to improving tactile sensitivity rather than cleanliness), and has become a common sight in cities where it has learned to exploit human food sources.",
    options: ["Raccoon", "Opossum", "Skunk", "Badger"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large herbivorous mammal, perfectly adapted to survive in the extreme cold of the Arctic tundra, possesses a thick, shaggy coat consisting of long guard hairs and dense underfur that provides exceptional insulation, has curved horns that both males and females use for defense and dominance displays, forms herds that huddle together for warmth during blizzards, feeds on grasses, sedges, and other tundra vegetation, and has a unique ability to lower its metabolic rate during harsh weather conditions to conserve energy.",
    options: ["Moose", "Elk", "Muskox", "Caribou"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This highly social and intelligent marine mammal, found in oceans worldwide, possesses a sophisticated echolocation system that allows it to navigate and locate prey in murky waters, forms complex social groups called pods with strong family bonds that can last for decades, demonstrates remarkable cooperative behaviors including coordinated hunting strategies and care for injured or sick pod members, has been observed using tools such as sponges to protect their snouts while foraging, and exhibits behaviors that suggest advanced cognitive abilities including self-recognition and cultural learning.",
    options: ["Porpoise", "Dolphin", "Orca", "Beluga"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "Which majestic bird of prey, found on every continent except Antarctica, possesses exceptional eyesight that is estimated to be four to eight times stronger than human vision, allowing it to spot small prey from distances of over a mile away, has powerful talons capable of exerting tremendous pressure to grasp and kill prey, builds massive nests called eyries in high locations such as cliffs or tall trees, forms lifelong pair bonds with mates, and plays a crucial role as an apex predator in maintaining the health of ecosystems by controlling populations of smaller animals.",
    options: ["Hawk", "Eagle", "Falcon", "Owl"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This arboreal marsupial, endemic to the eucalyptus forests of eastern Australia, possesses a specialized digestive system that can detoxify the poisonous compounds found in eucalyptus leaves, which make up nearly its entire diet, sleeps for up to 20 hours per day due to the low nutritional value of its food source, has fingerprints that are remarkably similar to human fingerprints, carries its young in a pouch for several months after birth, and faces significant conservation challenges due to habitat loss and disease, making it a vulnerable species.",
    options: ["Koala", "Wombat", "Tasmanian Devil", "Bandicoot"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This enormous marine mammal, despite its name suggesting it belongs to the fish family, is actually a warm-blooded mammal that must surface regularly to breathe air, gives birth to live young and nurses them with milk, possesses a complex communication system involving songs that can travel for hundreds of miles underwater, migrates thousands of miles annually between feeding and breeding grounds, plays a vital role in marine ecosystems by consuming vast quantities of krill and small fish, and faces numerous threats including ship strikes, entanglement in fishing gear, and the impacts of climate change on its food sources.",
    options: ["Dolphin", "Whale", "Shark", "Ray"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This extremely venomous marine creature, found primarily in the waters of northern Australia and throughout the Indo-Pacific region, possesses tentacles that can extend up to 10 feet in length and contain thousands of specialized cells called cnidocytes, each equipped with a microscopic harpoon-like structure that injects a potent neurotoxin capable of causing cardiac arrest and death within minutes, has a nearly transparent bell-shaped body that makes it difficult to see in water, lacks a centralized brain but possesses a complex nervous system, and is considered one of the most dangerous marine animals to humans despite its delicate appearance.",
    options: ["Portuguese Man o' War", "Box Jellyfish", "Sea Anemone", "Coral"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This magnificent herbivorous mammal, native to the savannas and open woodlands of sub-Saharan Africa, possesses the longest neck of any living animal, which can measure up to 6 feet in length and contains the same number of vertebrae as a human neck (seven), has a unique cardiovascular system with an extremely powerful heart and specialized valves in its neck to prevent blood from rushing to its head when it bends down, possesses a distinctive pattern of irregular brown spots on a lighter background that serves as camouflage in its dappled woodland habitat, uses its long, prehensile tongue (which can be up to 20 inches long) to strip leaves from thorny acacia trees, and plays an important role in seed dispersal across the African landscape.",
    options: ["Zebra", "Giraffe", "Antelope", "Gazelle"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This large marine mammal, found in both Arctic and Antarctic waters, is known as the apex predator of the oceans, possessing a distinctive black and white coloring that provides excellent camouflage, a complex social structure with matriarchal pods that can include multiple generations, sophisticated hunting strategies including coordinated attacks on large prey, and a diverse diet that ranges from fish to seals and even other whales, making it one of the most successful and adaptable predators in the marine environment.",
    options: ["Orca", "Dolphin", "Beluga", "Narwhal"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large herbivorous mammal, native to the grasslands and savannas of Africa, is characterized by its distinctive black and white striped pattern that serves multiple purposes including confusing predators through a phenomenon called motion dazzle, its strong social bonds within herds that provide protection, its ability to run at speeds of up to 40 miles per hour to escape predators, and its role as a keystone species in maintaining the health of grassland ecosystems through grazing patterns?",
    options: ["Plains Zebra", "Mountain Zebra", "Grevy's Zebra", "Quagga"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This small but remarkably intelligent bird, found in various habitats worldwide including urban environments, possesses cognitive abilities that rival those of some primates, demonstrates advanced problem-solving skills including the use of tools such as sticks and wires to obtain food, forms complex social structures with strong family bonds and cooperative behaviors, recognizes and remembers individual human faces for extended periods, and has been observed engaging in behaviors that suggest planning, deception, and even play, making it one of the most intelligent non-mammalian species on Earth.",
    options: ["New Caledonian Crow", "American Crow", "Carrion Crow", "Hooded Crow"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large herbivorous mammal, native to the Arctic tundra and boreal forests of North America, Europe, and Asia, possesses a thick white coat that provides excellent insulation and camouflage in snow, large hooves that function like snowshoes and help it dig through snow to reach vegetation, migrates in herds that can travel thousands of miles annually in search of food, and plays a crucial role in Arctic ecosystems by creating trails, dispersing seeds, and serving as a food source for predators, while also facing significant challenges due to climate change affecting its habitat?",
    options: ["Muskox", "Caribou", "Reindeer", "Elk"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This small but highly venomous snake, found primarily in the Americas, is characterized by its distinctive rattle at the end of its tail that serves as a warning to potential threats, its heat-sensing pits located between its eyes and nostrils that allow it to detect warm-blooded prey even in complete darkness, its ability to strike with incredible speed and accuracy, its hemotoxic venom that destroys tissue and prevents blood clotting, and its role as an important predator in controlling rodent populations, though it poses a significant danger to humans if provoked.",
    options: ["Western Diamondback Rattlesnake", "Eastern Diamondback Rattlesnake", "Timber Rattlesnake", "Sidewinder"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large herbivorous mammal, native to the grasslands and prairies of North America, was nearly driven to extinction in the 19th century when its population dropped from an estimated 60 million to fewer than 1,000 individuals due to overhunting and habitat destruction, but has since recovered through extensive conservation efforts, and is characterized by its massive head with a thick skull, humped shoulders that support powerful neck muscles, shaggy coat that provides insulation against harsh weather, and its crucial role in maintaining grassland ecosystems through grazing patterns that promote biodiversity?",
    options: ["Plains Bison", "Wood Bison", "Water Buffalo", "Yak"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This small but highly adaptable mammal, found in urban and rural areas throughout North America and increasingly in Europe and Asia due to human introduction, possesses remarkable intelligence and problem-solving abilities that allow it to thrive in human-altered environments, has dexterous front paws that function almost like hands enabling it to manipulate objects and open containers, demonstrates complex behaviors including washing food in water (though this may be related to improving tactile sensitivity), recognizes and remembers solutions to problems for extended periods, and has become so successful in urban environments that it is often considered a pest despite its fascinating cognitive abilities.",
    options: ["Common Raccoon", "Crab-eating Raccoon", "Coatimundi", "Kinkajou"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large marine mammal, found in the cold waters of the Arctic and sub-Arctic regions, is characterized by its distinctive tusks (actually elongated upper canine teeth) that can grow up to 3 feet long in males and are used for fighting, establishing dominance, and helping the animal haul itself onto ice, its thick blubber layer that provides insulation against freezing temperatures, its ability to dive to depths of over 300 feet in search of food, its sensitive whiskers that help it locate prey on the ocean floor, and its role as a keystone species in Arctic ecosystems, though it faces threats from climate change affecting its sea ice habitat?",
    options: ["Pacific Walrus", "Atlantic Walrus", "Narwhal", "Beluga"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This large herbivorous mammal, native to the savannas and grasslands of Africa, is characterized by its distinctive horn (or horns depending on the species) made of keratin, its thick skin that can be up to 2 inches thick providing protection from thorns and predators, its poor eyesight but excellent sense of smell and hearing, its aggressive nature when threatened making it one of the most dangerous animals in Africa despite being herbivorous, and its critically endangered status due to poaching for its horn, which is falsely believed to have medicinal properties, making conservation efforts crucial for its survival.",
    options: ["Black Rhinoceros", "White Rhinoceros", "Indian Rhinoceros", "Javan Rhinoceros"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which small but highly intelligent primate, found in the rainforests of Central and South America, is characterized by its prehensile tail that functions as a fifth limb and can support its entire body weight, its remarkable problem-solving abilities and tool use including using stones to crack nuts, its complex social structures with strong family bonds and cooperative behaviors, its ability to recognize themselves in mirrors indicating self-awareness, and its role in seed dispersal that helps maintain the health and diversity of rainforest ecosystems?",
    options: ["White-faced Capuchin", "Tufted Capuchin", "Spider Monkey", "Howler Monkey"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This large bird of prey, found in various habitats throughout North America, is characterized by its exceptional eyesight that is estimated to be four to eight times stronger than human vision, allowing it to spot small prey from distances of over a mile away, its powerful talons capable of exerting tremendous pressure to grasp and kill prey, its ability to soar at great heights using thermal updrafts, its role as an apex predator that helps control populations of smaller animals, and its status as a national symbol of the United States, representing freedom and strength, though it faced near-extinction due to pesticide use before successful conservation efforts.",
    options: ["Bald Eagle", "Golden Eagle", "Harpy Eagle", "Martial Eagle"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large herbivorous mammal, native to the grasslands and forests of the Indian subcontinent, is characterized by its distinctive single horn (in most individuals), its thick skin that forms prominent folds giving it an armored appearance, its poor eyesight but excellent sense of smell and hearing, its semi-aquatic lifestyle spending much of its time in water to keep cool and protect its skin, and its vulnerable status due to habitat loss and poaching, though conservation efforts have helped stabilize some populations?",
    options: ["Indian Rhinoceros", "Javan Rhinoceros", "Sumatran Rhinoceros", "Black Rhinoceros"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This small but highly venomous spider, found in various regions worldwide but most commonly in North America, is characterized by its distinctive red hourglass marking on its black abdomen (though markings can vary), its neurotoxic venom that affects the nervous system and can cause severe pain, muscle cramps, and in rare cases death, its preference for dark, secluded areas where it builds irregular webs, its role in controlling insect populations, and its reputation as one of the most dangerous spiders to humans, though fatalities are rare with modern medical treatment.",
    options: ["Southern Black Widow", "Northern Black Widow", "Western Black Widow", "Redback Spider"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large marine mammal, found in the cold waters of the northern Pacific Ocean, is characterized by its distinctive whiskers (vibrissae) that are highly sensitive and help it locate prey, its remarkable ability to use tools such as rocks to break open hard-shelled prey like clams and sea urchins, its incredibly dense fur that provides excellent insulation (the densest of any mammal), its crucial role in maintaining the health of kelp forest ecosystems by controlling sea urchin populations, and its near-extinction in the 19th and early 20th centuries due to fur hunting, though conservation efforts have helped some populations recover?",
    options: ["Northern Sea Otter", "Southern Sea Otter", "River Otter", "Giant Otter"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This large carnivorous mammal, native to the grasslands and savannas of sub-Saharan Africa, is characterized by its distinctive mane (in males) that varies in color and size and serves as both protection and a signal of fitness, its role as an apex predator that hunts in coordinated groups called prides, its social structure where females do most of the hunting and males defend the territory, its powerful roar that can be heard from up to five miles away and serves to communicate with other lions, and its status as a symbol of strength and courage, though it faces threats from habitat loss and human-wildlife conflict.",
    options: ["African Lion", "Asiatic Lion", "Mountain Lion", "Jaguar"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which small but remarkably intelligent bird, found primarily on the island of New Caledonia in the South Pacific, is characterized by its exceptional problem-solving abilities that have been extensively studied in laboratory settings, its sophisticated tool use including crafting hooks from twigs and bending wires to retrieve food, its ability to solve multi-step problems that require planning and foresight, its complex social structures with strong family bonds, and its status as one of the most intelligent non-mammalian species, with cognitive abilities that rival those of great apes in some tasks?",
    options: ["New Caledonian Crow", "American Crow", "Carrion Crow", "Hooded Crow"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This large herbivorous mammal, native to the grasslands and savannas of eastern and southern Africa, is characterized by its distinctive horns that curve backward and can grow up to 33 inches long, its massive annual migration that is one of the greatest wildlife spectacles on Earth involving hundreds of thousands of individuals traveling hundreds of miles in search of fresh grazing, its role as a keystone species that shapes savanna ecosystems through grazing patterns that promote plant diversity, its importance as a food source for numerous predators including lions, hyenas, and crocodiles, and its contribution to nutrient cycling through its movements and waste.",
    options: ["Blue Wildebeest", "Black Wildebeest", "Zebra", "Gazelle"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large marine mammal, found exclusively in the Arctic Ocean, is characterized by its distinctive spiral tusk (actually an elongated upper left canine tooth) that can grow up to 10 feet long and is found primarily in males, its ability to dive to depths of over 5,000 feet in search of food, its role in Arctic ecosystems as both predator and prey, its unique appearance that has inspired legends about unicorns throughout history, its sensitivity to climate change affecting its sea ice habitat, and its status as one of the most specialized and least understood marine mammals?",
    options: ["Narwhal", "Beluga", "Walrus", "Seal"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This small but highly venomous snake, found primarily in forests and agricultural areas of South and Southeast Asia, is characterized by its distinctive hood that it spreads when threatened, its ability to raise up to one-third of its body length off the ground, its neurotoxic venom that affects the nervous system and can cause respiratory failure, its role as one of the longest venomous snakes in the world reaching lengths of up to 18 feet, and its status as a species of significant cultural and medical importance, though it faces threats from habitat loss and persecution.",
    options: ["King Cobra", "Indian Cobra", "Egyptian Cobra", "Mozambique Spitting Cobra"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large herbivorous mammal, native to the grasslands and prairies of North America, was nearly driven to extinction in the 19th century when its population plummeted from an estimated 30-60 million individuals to fewer than 1,000 due to systematic overhunting, commercial exploitation for hides and meat, and deliberate efforts to eliminate them as part of campaigns against Native American tribes, but has since recovered through extensive conservation efforts including the establishment of protected herds, and is characterized by its massive head with a thick skull, humped shoulders that support powerful neck muscles, shaggy dark brown coat that provides insulation, and its crucial role in maintaining grassland ecosystems?",
    options: ["Plains Bison", "Wood Bison", "Water Buffalo", "Yak"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This large bird of prey, found in various habitats throughout North America, is characterized by its exceptional eyesight that allows it to spot small prey from distances of over a mile away, its powerful talons capable of exerting tremendous pressure to grasp and kill prey, its ability to soar at great heights using thermal updrafts and air currents, its role as an apex predator that helps control populations of smaller animals including rodents and rabbits, and its status as the national bird and symbol of the United States, representing freedom, strength, and independence, though it faced near-extinction in the mid-20th century due to pesticide use before successful conservation efforts led to its recovery.",
    options: ["Bald Eagle", "Golden Eagle", "Harpy Eagle", "Martial Eagle"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large herbivorous mammal, native to the savannas and grasslands of Africa, is characterized by its distinctive horn (or horns depending on the species) made of keratin that grows continuously throughout its life, its thick skin that can be up to 2 inches thick providing protection from thorns, predators, and the harsh African sun, its poor eyesight but excellent sense of smell and hearing that compensate for visual limitations, its aggressive and unpredictable nature when threatened making it one of the most dangerous animals in Africa despite being herbivorous, and its critically endangered status due to poaching for its horn, which is falsely believed to have medicinal and aphrodisiac properties in some cultures, making conservation efforts crucial for its survival?",
    options: ["Black Rhinoceros", "White Rhinoceros", "Indian Rhinoceros", "Javan Rhinoceros"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This small but highly intelligent primate, found in the rainforests of Central and South America, is characterized by its prehensile tail that functions as a fifth limb and can support its entire body weight, allowing it to hang from branches while using its hands and feet to manipulate objects, its remarkable problem-solving abilities and tool use including using stones to crack nuts and sticks to probe for insects, its complex social structures with strong family bonds, cooperative behaviors, and sophisticated communication systems, its ability to recognize themselves in mirrors indicating self-awareness, and its crucial role in seed dispersal that helps maintain the health, diversity, and regeneration of rainforest ecosystems.",
    options: ["White-faced Capuchin", "Tufted Capuchin", "Spider Monkey", "Howler Monkey"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large marine mammal, found in the cold waters of the northern Pacific Ocean along the coasts of Alaska, Canada, Russia, and Japan, is characterized by its distinctive whiskers (vibrissae) that are highly sensitive and help it locate prey even in murky water, its remarkable ability to use tools such as rocks to break open hard-shelled prey like clams, mussels, and sea urchins, its incredibly dense fur that provides excellent insulation (the densest of any mammal with up to one million hairs per square inch), its crucial role in maintaining the health of kelp forest ecosystems by controlling sea urchin populations that would otherwise overgraze kelp, and its near-extinction in the 18th and 19th centuries due to intensive fur hunting that reduced its population from hundreds of thousands to just a few thousand individuals, though conservation efforts have helped some populations recover?",
    options: ["Northern Sea Otter", "Southern Sea Otter", "River Otter", "Giant Otter"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This large carnivorous mammal, native to the grasslands and savannas of sub-Saharan Africa, is characterized by its distinctive mane (in males) that varies in color from blond to black and serves as both protection during fights and a signal of fitness and testosterone levels, its role as an apex predator that hunts in coordinated groups called prides typically consisting of related females and their offspring along with one or more males, its social structure where females do most of the hunting using sophisticated cooperative strategies, its powerful roar that can be heard from up to five miles away and serves multiple functions including communication with other pride members and territorial defense, and its status as a symbol of strength, courage, and royalty throughout human history, though it faces threats from habitat loss, human-wildlife conflict, and declining prey populations.",
    options: ["African Lion", "Asiatic Lion", "Mountain Lion", "Jaguar"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which small but remarkably intelligent bird, found primarily on the island of New Caledonia in the South Pacific, is characterized by its exceptional problem-solving abilities that have been extensively studied in laboratory settings and have revealed cognitive capacities that rival those of great apes, its sophisticated tool use including crafting hooks from twigs and bending wires into tools to retrieve food from containers, its ability to solve multi-step problems that require planning, foresight, and the ability to remember and apply solutions learned in previous situations, its complex social structures with strong family bonds and cooperative behaviors, and its status as one of the most intelligent non-mammalian species on Earth, providing important insights into the evolution of intelligence and tool use?",
    options: ["New Caledonian Crow", "American Crow", "Carrion Crow", "Hooded Crow"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This large herbivorous mammal, native to the grasslands and savannas of eastern and southern Africa, is characterized by its distinctive horns that curve backward and can grow up to 33 inches long in males, its massive annual migration that is considered one of the greatest wildlife spectacles on Earth involving hundreds of thousands of individuals traveling hundreds of miles in a circular pattern following seasonal rains in search of fresh grazing, its role as a keystone species that shapes savanna ecosystems through its grazing patterns that promote plant diversity and prevent any single plant species from dominating, its importance as a food source for numerous predators including lions, hyenas, leopards, cheetahs, and crocodiles, and its contribution to nutrient cycling and ecosystem health through its movements, grazing, and waste that fertilizes the soil.",
    options: ["Blue Wildebeest", "Black Wildebeest", "Zebra", "Gazelle"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large marine mammal, found exclusively in the Arctic Ocean in the waters around Greenland, Canada, and Russia, is characterized by its distinctive spiral tusk (actually an elongated upper left canine tooth) that can grow up to 10 feet long and is found primarily in males, though some females also develop smaller tusks, its ability to dive to depths of over 5,000 feet in search of food including fish, squid, and shrimp, its role in Arctic ecosystems as both predator and prey for polar bears and orcas, its unique appearance that has inspired legends about unicorns throughout history and made it a subject of fascination, its sensitivity to climate change affecting its sea ice habitat and food sources, and its status as one of the most specialized and least understood marine mammals, with much of its behavior and biology remaining mysterious?",
    options: ["Narwhal", "Beluga", "Walrus", "Seal"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This small but highly venomous snake, found primarily in forests and agricultural areas of South and Southeast Asia including India, China, and Indonesia, is characterized by its distinctive hood that it spreads when threatened, its ability to raise up to one-third of its body length off the ground, its neurotoxic venom that affects the nervous system and can cause respiratory failure and death if not treated promptly, its role as one of the longest venomous snakes in the world reaching lengths of up to 18 feet, its unique behavior of building nests for its eggs (unusual among snakes), its status as a species of significant cultural and medical importance in its native range, and its vulnerability to habitat loss and persecution despite its important role in controlling rodent populations.",
    options: ["King Cobra", "Indian Cobra", "Egyptian Cobra", "Mozambique Spitting Cobra"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "Which large herbivorous mammal, native to the grasslands and prairies of North America, was nearly driven to extinction in the 19th century when its population plummeted from an estimated 30-60 million individuals to fewer than 1,000 due to systematic overhunting by European settlers, commercial exploitation for hides and meat, deliberate efforts to eliminate them as part of campaigns against Native American tribes who depended on them for survival, and the introduction of diseases from domestic cattle, but has since recovered through extensive conservation efforts including the establishment of protected herds in national parks and wildlife refuges, and is characterized by its massive head with a thick skull, humped shoulders that support powerful neck muscles, shaggy dark brown coat that provides insulation against harsh weather, and its crucial role in maintaining grassland ecosystems through grazing patterns that promote biodiversity?",
    options: ["Plains Bison", "Wood Bison", "Water Buffalo", "Yak"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This large bird of prey, found in various habitats throughout North America from Alaska to northern Mexico, is characterized by its exceptional eyesight that is estimated to be four to eight times stronger than human vision, allowing it to spot small prey such as fish, waterfowl, and small mammals from distances of over a mile away, its powerful talons capable of exerting tremendous pressure to grasp and kill prey, its ability to soar at great heights using thermal updrafts and air currents, its role as an apex predator that helps control populations of smaller animals, its distinctive white head and tail that develop after reaching maturity at around five years of age, and its status as the national bird and symbol of the United States, representing freedom, strength, and independence, though it faced near-extinction in the mid-20th century due to pesticide use, habitat loss, and hunting before successful conservation efforts including the banning of DDT and the establishment of breeding programs led to its remarkable recovery.",
    options: ["Bald Eagle", "Golden Eagle", "Harpy Eagle", "Martial Eagle"],
    correct_index: 0,
    difficulty: "hard"
  }
];

async function seedAnimalsCategory(closePool = true) {
  const client = await pool.connect();
  
  try {
    console.log('Starting Animals category insertion...');
    
    // Create the "Animals" category
    const categoryResult = await client.query(
      `INSERT INTO categories (name, slug) 
       VALUES ($1, $2) 
       ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
       RETURNING id`,
      ['Animals', 'animals']
    );
    
    const categoryId = categoryResult.rows[0].id;
    console.log(`✓ Category "Animals" created/updated with ID: ${categoryId}`);
    
    // Insert questions
    console.log('Inserting questions...');
    let insertedCount = 0;
    
    for (const q of animalQuestions) {
      try {
        await client.query(
          `INSERT INTO questions (category_id, question, options, correct_index, difficulty)
           VALUES ($1, $2, $3, $4, $5)`,
          [categoryId, q.question, JSON.stringify(q.options), q.correct_index, q.difficulty]
        );
        insertedCount++;
        console.log(`  ✓ Question inserted: "${q.question.substring(0, 50)}..."`);
      } catch (err) {
        console.error(`  ✗ Error inserting question: ${q.question}`, err.message);
      }
    }
    
    console.log(`\n✓ Process completed! ${insertedCount} questions inserted.`);
    
  } catch (err) {
    console.error('Error in process:', err);
    throw err;
  } finally {
    client.release();
    if (closePool) {
      await pool.end();
    }
  }
}

// Execute the script if run directly
if (require.main === module) {
  seedAnimalsCategory(true)
    .then(() => {
      console.log('Script finished successfully');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Fatal error:', err);
      process.exit(1);
    });
}

module.exports = { seedAnimalsCategory, animalQuestions };

