require('dotenv').config();
const { pool } = require('../src/config/db');

// One Piece questions - 30 easy, 30 medium, 30 hard
const onePieceQuestions = [
  // Easy - 30 questions
  {
    question: "What is the name of the main character in One Piece?",
    options: ["Zoro", "Luffy", "Sanji", "Nami"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is Luffy's dream?",
    options: ["To become the strongest", "To become the Pirate King", "To find treasure", "To defeat all pirates"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What type of fruit did Luffy eat?",
    options: ["Fire Fruit", "Gum-Gum Fruit", "Lightning Fruit", "Ice Fruit"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the name of Luffy's ship?",
    options: ["Going Merry", "Thousand Sunny", "Red Force", "Moby Dick"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "How many crew members does Luffy want?",
    options: ["8", "9", "10", "11"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What is Zoro's role in the crew?",
    options: ["Cook", "Navigator", "Swordsman", "Doctor"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What is Sanji's role in the crew?",
    options: ["Cook", "Navigator", "Swordsman", "Doctor"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is Nami's role in the crew?",
    options: ["Cook", "Navigator", "Swordsman", "Doctor"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the name of the world government organization?",
    options: ["Marines", "World Government", "Revolutionary Army", "Pirates"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What are the three types of Haki?",
    options: ["Fire, Water, Earth", "Observation, Armament, Conqueror's", "Speed, Strength, Defense", "Attack, Defense, Support"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the name of the Grand Line?",
    options: ["Paradise", "New World", "Both", "Neither"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What is a Devil Fruit?",
    options: ["A regular fruit", "A magical fruit that gives powers", "A weapon", "A treasure"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What happens when a Devil Fruit user touches water?",
    options: ["Nothing", "They lose their powers", "They become stronger", "They can swim"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the name of Luffy's hat?",
    options: ["Straw Hat", "Pirate Hat", "Adventure Hat", "Treasure Hat"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who gave Luffy his hat?",
    options: ["Shanks", "Ace", "Garp", "Dragon"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the name of the currency in One Piece?",
    options: ["Berries", "Gold", "Silver", "Coins"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is Zoro's dream?",
    options: ["To become the strongest", "To become the world's greatest swordsman", "To find treasure", "To become Pirate King"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is Sanji's dream?",
    options: ["To become the strongest", "To find the All Blue", "To become a great cook", "To find treasure"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the name of the sea that separates the four blues?",
    options: ["Grand Line", "Calm Belt", "Red Line", "Blue Sea"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What are the four seas called?",
    options: ["North, South, East, West Blue", "Red, Blue, Green, Yellow Blue", "Alpha, Beta, Gamma, Delta Blue", "First, Second, Third, Fourth Blue"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the name of the organization that hunts pirates?",
    options: ["World Government", "Marines", "Revolutionary Army", "CP9"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is a Log Pose?",
    options: ["A weapon", "A navigation device", "A treasure", "A fruit"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the name of Luffy's brother?",
    options: ["Sabo", "Ace", "Both", "Neither"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What is the name of the island where Luffy grew up?",
    options: ["Dawn Island", "Dressrosa", "Alabasta", "Water 7"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the name of the first island Luffy visits?",
    options: ["Shells Town", "Orange Town", "Syrup Village", "Baratie"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the name of the first major enemy Luffy defeats?",
    options: ["Buggy", "Arlong", "Crocodile", "Don Krieg"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the name of the first crew member Luffy recruits?",
    options: ["Zoro", "Nami", "Usopp", "Sanji"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the name of the second crew member Luffy recruits?",
    options: ["Zoro", "Nami", "Usopp", "Sanji"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the name of the third crew member Luffy recruits?",
    options: ["Zoro", "Nami", "Usopp", "Sanji"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What is the name of the fourth crew member Luffy recruits?",
    options: ["Zoro", "Nami", "Usopp", "Sanji"],
    correct_index: 3,
    difficulty: "easy"
  },
  {
    question: "What is the name of the fifth crew member Luffy recruits?",
    options: ["Chopper", "Robin", "Franky", "Brook"],
    correct_index: 0,
    difficulty: "easy"
  },
  // Medium difficulty - 30 questions
  {
    question: "This powerful pirate, known as 'Red-Haired' Shanks, is one of the Four Emperors of the Sea, was a member of Gol D. Roger's crew, lost his left arm saving Luffy from a sea king, gave Luffy his iconic straw hat, and is considered one of the strongest characters in the series.",
    options: ["Shanks", "Mihawk", "Rayleigh", "Whitebeard"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This legendary pirate, known as the 'King of the Pirates', was the only person to successfully reach the end of the Grand Line, found the legendary treasure known as One Piece, started the Great Pirate Era with his final words, and was executed by the World Government.",
    options: ["Gol D. Roger", "Edward Newgate", "Shanks", "Rayleigh"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This powerful pirate, known as 'Whitebeard' Edward Newgate, was one of the Four Emperors, had the power of the Tremor-Tremor Fruit, considered his crew members as his sons, and died protecting his crew during the Marineford War.",
    options: ["Gol D. Roger", "Whitebeard", "Kaido", "Big Mom"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This powerful ability, which allows users to sense the presence of others, predict attacks, and see into the future at advanced levels, is one of the three types of Haki and is particularly useful in combat for avoiding attacks.",
    options: ["Armament Haki", "Observation Haki", "Conqueror's Haki", "Devil Fruit power"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This powerful ability, which allows users to harden their body or weapons with an invisible armor, is one of the three types of Haki and is essential for fighting against Logia-type Devil Fruit users who can turn their bodies into natural elements.",
    options: ["Observation Haki", "Armament Haki", "Conqueror's Haki", "Devil Fruit power"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This rare and powerful ability, possessed by only one in a million people, allows users to knock out weak-willed individuals with their willpower alone, is one of the three types of Haki, and is often associated with those who have the qualities of a king.",
    options: ["Observation Haki", "Armament Haki", "Conqueror's Haki", "Devil Fruit power"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This type of Devil Fruit allows users to transform their body into a natural element like fire, ice, or light, making them nearly invulnerable to physical attacks unless their opponent uses Haki or their element's weakness.",
    options: ["Paramecia", "Zoan", "Logia", "Mythical Zoan"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This type of Devil Fruit allows users to transform into an animal or hybrid form, giving them enhanced physical abilities and animal characteristics, with some being able to transform into mythical creatures.",
    options: ["Paramecia", "Zoan", "Logia", "Ancient Zoan"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This type of Devil Fruit gives users various superhuman abilities that don't fit into the other categories, such as Luffy's ability to stretch like rubber, and is the most common type of Devil Fruit.",
    options: ["Paramecia", "Zoan", "Logia", "Mythical Zoan"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This powerful organization, consisting of the strongest pirates in the world, controls the second half of the Grand Line known as the New World, and includes characters like Shanks, Big Mom, Kaido, and Whitebeard.",
    options: ["Seven Warlords", "Four Emperors", "Marine Admirals", "Revolutionary Army"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This organization, consisting of seven powerful pirates who work with the World Government in exchange for amnesty, was created to balance power against the Four Emperors, though members like Crocodile and Doflamingo were later removed.",
    options: ["Four Emperors", "Seven Warlords", "Marine Admirals", "CP0"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This powerful marine, known as 'Hawk-Eyes' Mihawk, is considered the world's greatest swordsman, was one of the Seven Warlords, trained Zoro during the time skip, and wields the black blade Yoru.",
    options: ["Mihawk", "Shanks", "Rayleigh", "Zoro"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This character, known as 'Dark King' Silvers Rayleigh, was the first mate of Gol D. Roger's crew, is incredibly powerful, trained Luffy in Haki during the time skip, and can use all three types of Haki.",
    options: ["Rayleigh", "Shanks", "Garp", "Sengoku"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This character, known as 'Hero of the Marines' Monkey D. Garp, is Luffy's grandfather, was a rival to Gol D. Roger, raised Luffy and Ace, and is one of the strongest marines despite never wanting to become an admiral.",
    options: ["Garp", "Sengoku", "Akainu", "Aokiji"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This character, known as 'Fire Fist' Portgas D. Ace, was Luffy's adopted brother, had the power of the Flame-Flame Fruit, was the second division commander of Whitebeard's crew, and was executed at Marineford.",
    options: ["Ace", "Sabo", "Luffy", "Garp"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This character, known as 'Soul King' Brook, is a skeleton musician who ate the Revive-Revive Fruit, was the first to die and come back to life, can use his soul to leave his body, and is the oldest member of the Straw Hat crew.",
    options: ["Brook", "Franky", "Chopper", "Robin"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This character, known as 'Cyborg' Franky, is a shipwright who modified his body with various weapons and tools, built the Thousand Sunny, the Straw Hats' second ship, and has the power of the Cola-Cola Fruit.",
    options: ["Franky", "Usopp", "Chopper", "Brook"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This character, known as 'Devil Child' Nico Robin, is an archaeologist who can read Poneglyphs, has the power of the Flower-Flower Fruit which allows her to sprout body parts anywhere, and is the only survivor of Ohara.",
    options: ["Robin", "Nami", "Vivi", "Hancock"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This character, known as 'Cotton Candy Lover' Tony Tony Chopper, is a reindeer who ate the Human-Human Fruit, is the crew's doctor, can transform into different forms, and is often mistaken for a pet or mascot.",
    options: ["Chopper", "Carrot", "Bepo", "Pekoms"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This character, known as 'God' Usopp, is the crew's sniper, is known for his lies that often come true, has incredible accuracy with his slingshot, and dreams of becoming a brave warrior of the sea.",
    options: ["Usopp", "Sogeking", "Yasopp", "Van Augur"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This character, known as 'Pirate Hunter' Roronoa Zoro, uses three swords in his unique fighting style, dreams of becoming the world's greatest swordsman, trained with Mihawk during the time skip, and can use Armament and Observation Haki.",
    options: ["Zoro", "Mihawk", "Tashigi", "Kuina"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This character, known as 'Black Leg' Sanji, is an excellent cook who only fights with his legs, has the power of invisibility through the Raid Suit, dreams of finding the All Blue, and can use Observation Haki to predict attacks.",
    options: ["Sanji", "Zeff", "Judge", "Reiju"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This character, known as 'Cat Burglar' Nami, is an expert navigator and cartographer, can sense weather changes, wields a climate-controlling weapon called the Clima-Tact, and dreams of drawing a complete map of the world.",
    options: ["Nami", "Robin", "Vivi", "Hancock"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This powerful pirate, known as 'Straw Hat' Monkey D. Luffy, has the power of the Gum-Gum Fruit which makes his body rubber-like, can use all three types of Haki, has developed various powerful techniques including Gear transformations, and is determined to become the Pirate King.",
    options: ["Luffy", "Ace", "Sabo", "Roger"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This location, known as the 'Pirate Island', is where the final battle of the Summit War took place, where Ace was executed, and where many powerful characters clashed in one of the series' most epic battles.",
    options: ["Marineford", "Impel Down", "Enies Lobby", "Dressrosa"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This location, known as the world's greatest prison, is located in the middle of the Calm Belt, has multiple levels with increasing security, and is where Luffy broke in to rescue Ace.",
    options: ["Impel Down", "Marineford", "Enies Lobby", "Alabasta"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This location, known as the judicial island, is one of the three government facilities connected by the Gates of Justice, was destroyed by the Buster Call, and is where the Straw Hats fought CP9 to rescue Robin.",
    options: ["Enies Lobby", "Marineford", "Impel Down", "Dressrosa"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This powerful technique, developed by Luffy, increases his blood flow and heart rate to boost his speed and power, turning his skin red and producing steam, but puts a great strain on his body.",
    options: ["Gear Second", "Gear Third", "Gear Fourth", "Gear Fifth"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This powerful technique, developed by Luffy, involves blowing air into his bones to inflate his limbs to giant size, giving him tremendous striking power but making him smaller afterward.",
    options: ["Gear Second", "Gear Third", "Gear Fourth", "Gear Fifth"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This powerful technique, developed by Luffy, combines his rubber powers with Haki to create a bouncy, powerful form that allows him to fight against the strongest opponents, with different variations like Boundman and Snakeman.",
    options: ["Gear Second", "Gear Third", "Gear Fourth", "Gear Fifth"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This powerful technique, awakened by Luffy, allows him to turn his surroundings into rubber, gives him complete freedom in his movements, and represents the true power of the Gum-Gum Fruit, making him one of the most powerful characters in the series.",
    options: ["Gear Second", "Gear Third", "Gear Fourth", "Gear Fifth"],
    correct_index: 3,
    difficulty: "medium"
  },
  // Hard difficulty - 30 questions
  {
    question: "This legendary pirate, known as Gol D. Roger and the 'King of the Pirates', was the captain of the Roger Pirates, the only crew to successfully navigate the entire Grand Line and reach the final island Laugh Tale, discovered the legendary treasure known as One Piece, started the Great Pirate Era with his final words before his execution, revealing the location of his treasure and inspiring countless people to become pirates, was executed by the World Government at Loguetown, had a son named Portgas D. Ace who was raised by Garp and later joined Whitebeard's crew, and his legacy continues to shape the world of One Piece, with his former crew members like Rayleigh and Shanks playing crucial roles in the current era.",
    options: ["Gol D. Roger", "Edward Newgate", "Shanks", "Silvers Rayleigh"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This powerful pirate, known as 'Red-Haired' Shanks, is one of the current Four Emperors of the Sea who control the New World, was a member of Gol D. Roger's crew as an apprentice, lost his left arm saving a young Luffy from a sea king, gave Luffy his iconic straw hat which once belonged to Roger, is considered one of the strongest characters in the series despite rarely showing his full power, can use all three types of Haki including advanced Conqueror's Haki, stopped the Marineford War with his mere presence, and is known for his laid-back personality and strong sense of justice, making him one of the most respected figures in the pirate world.",
    options: ["Shanks", "Mihawk", "Rayleigh", "Whitebeard"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This powerful ability, known as Observation Haki or Kenbunshoku Haki, allows users to sense the presence, emotions, and intentions of others, predict incoming attacks before they happen, see into the future at advanced levels as demonstrated by characters like Katakuri, sense the strength of opponents, and is particularly useful in combat for avoiding attacks and reading opponents' movements, with advanced users able to see several seconds into the future, making it an essential skill for high-level combatants in the New World.",
    options: ["Armament Haki", "Observation Haki", "Conqueror's Haki", "Devil Fruit awakening"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This powerful ability, known as Armament Haki or Busoshoku Haki, allows users to create an invisible armor around their body or weapons, harden their attacks to increase damage, defend against powerful attacks, is essential for fighting against Logia-type Devil Fruit users who can turn their bodies into natural elements, can be used to damage opponents from the inside at advanced levels, manifests as a black coating when used at its highest level, and is considered one of the most important abilities for surviving in the New World where powerful enemies are common.",
    options: ["Observation Haki", "Armament Haki", "Conqueror's Haki", "Devil Fruit power"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This rare and powerful ability, known as Conqueror's Haki or Haoshoku Haki, is possessed by only one in a million people, allows users to knock out weak-willed individuals with their willpower alone, cannot be learned and must be awakened naturally, is often associated with those who have the qualities of a king or leader, can be used to intimidate and control others, can be infused into attacks at advanced levels to create devastating blows, and is possessed by many of the strongest characters in the series including Luffy, Zoro, Shanks, Whitebeard, and the Four Emperors.",
    options: ["Observation Haki", "Armament Haki", "Conqueror's Haki", "Devil Fruit awakening"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This type of Devil Fruit, known as Logia, allows users to transform their body into a natural element like fire, ice, light, darkness, sand, or lightning, making them nearly invulnerable to physical attacks unless their opponent uses Haki or exploits their element's weakness, allows users to create and control their element, regenerate their body from attacks, and is considered one of the most powerful types of Devil Fruits, with users like Ace, Aokiji, Akainu, Kizaru, and Crocodile demonstrating incredible destructive capabilities.",
    options: ["Paramecia", "Zoan", "Logia", "Mythical Zoan"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This type of Devil Fruit, known as Zoan, allows users to transform into an animal form, a hybrid form combining human and animal characteristics, or remain in human form with enhanced physical abilities, gives users increased strength, speed, durability, and animal instincts, includes regular Zoans that transform into real animals, Ancient Zoans that transform into extinct animals like dinosaurs, and Mythical Zoans that transform into legendary creatures like phoenixes or dragons, with users like Chopper, Marco, and Kaido demonstrating the various capabilities of this fruit type.",
    options: ["Paramecia", "Zoan", "Logia", "Ancient Zoan"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This type of Devil Fruit, known as Paramecia, gives users various superhuman abilities that don't fit into the Logia or Zoan categories, is the most common type of Devil Fruit, includes abilities like Luffy's rubber body, Whitebeard's ability to create earthquakes, Doflamingo's ability to create and control strings, and Law's ability to create a room where he can manipulate anything within it, with some Paramecia fruits being so powerful they rival Logia fruits, and advanced users can awaken their fruits to affect their surroundings.",
    options: ["Paramecia", "Zoan", "Logia", "Mythical Zoan"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This powerful organization, known as the Four Emperors or Yonko, consists of the four strongest pirates in the world who control the second half of the Grand Line known as the New World, each commands massive fleets and territories, maintains a delicate balance of power with the World Government and Marines, includes characters like Shanks known for his crew's quality over quantity, Big Mom who rules Totto Land with her family, Kaido known as the 'Strongest Creature' who rules Wano Country, and formerly Whitebeard who was considered the strongest man in the world, with their power being so great that the World Government created the Seven Warlords system to help balance against them.",
    options: ["Seven Warlords", "Four Emperors", "Marine Admirals", "Revolutionary Army"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This organization, known as the Seven Warlords of the Sea or Shichibukai, consists of seven powerful pirates who work with the World Government in exchange for amnesty and the right to plunder, was created to balance power against the Four Emperors, includes members like Mihawk the world's greatest swordsman, Doflamingo who controlled Dressrosa, Crocodile who was defeated by Luffy in Alabasta, Hancock who rules Amazon Lily, and others, though the system was eventually abolished by the World Government after the events of the Reverie, leading to the creation of the SSG as a replacement.",
    options: ["Four Emperors", "Seven Warlords", "Marine Admirals", "CP0"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This powerful marine, known as 'Hawk-Eyes' Dracule Mihawk, is considered the world's greatest swordsman, was one of the Seven Warlords before the system was abolished, wields the black blade Yoru which is one of the twelve supreme grade swords, can cut through anything with his incredible sword skills, trained Zoro during the two-year time skip, was a rival to Shanks before Shanks lost his arm, rarely shows emotion and maintains a calm demeanor even in battle, and represents the pinnacle of swordsmanship that Zoro aspires to reach.",
    options: ["Mihawk", "Shanks", "Rayleigh", "Zoro"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This legendary character, known as 'Dark King' Silvers Rayleigh, was the first mate and right-hand man of Gol D. Roger's crew, is incredibly powerful and can use all three types of Haki, trained Luffy in Haki during the two-year time skip on Sabaody Archipelago, can coat his body with Armament Haki to incredible levels, has incredible Observation Haki, retired from piracy after Roger's execution and became a coating mechanic, is one of the few people who knows the true history of the world, and is respected by both pirates and marines for his strength and wisdom.",
    options: ["Rayleigh", "Shanks", "Garp", "Sengoku"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This powerful marine, known as 'Hero of the Marines' Monkey D. Garp, is Luffy's grandfather and Ace's adoptive grandfather, was a rival to Gol D. Roger and fought him numerous times, raised Luffy and Ace after their parents left them, is one of the strongest marines despite never wanting to become an admiral, can use all three types of Haki, has incredible physical strength even in his old age, was offered the position of admiral multiple times but refused, and represents the old generation of marines who fought against the legendary pirates.",
    options: ["Garp", "Sengoku", "Akainu", "Aokiji"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This character, known as 'Fire Fist' Portgas D. Ace, was Luffy's adopted brother who shared sake cups with him and Sabo, had the power of the Flame-Flame Fruit which allowed him to create and control fire, was the second division commander of Whitebeard's crew and considered Whitebeard his true father, was the son of Gol D. Roger though he never knew him, was captured by the Marines and sentenced to execution, was rescued by Luffy and Whitebeard at Marineford, but ultimately sacrificed himself to save Luffy from Akainu's attack, dying in Luffy's arms and leaving a lasting impact on the series.",
    options: ["Ace", "Sabo", "Luffy", "Garp"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This character, known as 'Soul King' Brook, is a living skeleton who ate the Revive-Revive Fruit which allowed his soul to return to his body after death, was the first person to die and come back to life in the series, is a skilled musician who can use music to affect people's emotions, can use his soul to leave his body and interact with the environment, is over 90 years old making him the oldest member of the Straw Hat crew, was a member of a pirate crew that was wiped out, spent 50 years alone on a ship in the Florian Triangle, and joined the Straw Hats after Luffy helped him recover his shadow.",
    options: ["Brook", "Franky", "Chopper", "Robin"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This character, known as 'Cyborg' Franky, is a shipwright who modified his body with various weapons and mechanical enhancements after a near-fatal accident, built the Thousand Sunny which is the Straw Hats' second ship and one of the most advanced ships in the world, has the power of the Cola-Cola Fruit though this was a joke, can fire various weapons from his body including cannons and lasers, is incredibly strong and durable due to his cyborg body, was a member of Tom's Workers who built the sea train, was framed for attacking the judicial ship, and dreams of building a ship that can sail around the world.",
    options: ["Franky", "Usopp", "Chopper", "Brook"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This character, known as 'Devil Child' Nico Robin, is an archaeologist who can read the ancient language of Poneglyphs which is crucial for understanding the Void Century and finding the One Piece, has the power of the Flower-Flower Fruit which allows her to sprout body parts anywhere within her range, is the only survivor of Ohara where all the archaeologists were killed by the World Government, was hunted by the World Government since she was a child, joined the Straw Hats after they saved her from CP9, can create giant limbs using her Devil Fruit power, and her knowledge of history makes her a target for those seeking to learn the true history of the world.",
    options: ["Robin", "Nami", "Vivi", "Hancock"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This character, known as 'Cotton Candy Lover' Tony Tony Chopper, is a reindeer who ate the Human-Human Fruit which gave him human intelligence and the ability to transform, is the crew's doctor and can diagnose and treat various illnesses and injuries, can transform into different forms including his small form, heavy point, guard point, and monster point, was rejected by his herd for eating the Devil Fruit, was taken in by Dr. Hiriluk who taught him medicine, continued Dr. Hiriluk's work after his death, is often mistaken for a pet or mascot due to his cute appearance, and dreams of becoming a doctor who can cure any disease.",
    options: ["Chopper", "Carrot", "Bepo", "Pekoms"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This character, known as 'God' Usopp and formerly 'Sogeking', is the crew's sniper with incredible accuracy using his slingshot and various special ammunition, is known for his lies and tall tales that often come true in unexpected ways, has developed Observation Haki which allows him to see far distances and sense enemies, was initially a coward but has grown braver throughout the series, dreams of becoming a brave warrior of the sea like his father Yasopp, can create various special attacks using different types of ammunition, and his lies have become so famous that they're considered prophecies by some.",
    options: ["Usopp", "Sogeking", "Yasopp", "Van Augur"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This character, known as 'Pirate Hunter' Roronoa Zoro, uses a unique three-sword style where he wields one sword in each hand and one in his mouth, dreams of becoming the world's greatest swordsman to fulfill a promise to his childhood friend Kuina, trained with Mihawk during the two-year time skip, can use Armament Haki to harden his swords and Observation Haki to sense attacks, has incredible physical strength and endurance, is the first mate of the Straw Hat crew, has never lost a fight against another swordsman since joining the crew, and is considered one of the strongest members of the Straw Hats.",
    options: ["Zoro", "Mihawk", "Tashigi", "Kuina"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This character, known as 'Black Leg' Sanji, is an excellent cook who only fights with his legs to protect his hands for cooking, has the power of invisibility through the Raid Suit given to him by his family, can use Observation Haki to predict attacks and sense emotions, dreams of finding the All Blue which is a legendary sea where all four seas meet, was trained by Zeff who taught him both cooking and fighting, is a member of the Vinsmoke family though he rejected them, can create fire with his legs through friction, and is known for his chivalry and refusal to fight women.",
    options: ["Sanji", "Zeff", "Judge", "Reiju"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This character, known as 'Cat Burglar' Nami, is an expert navigator and cartographer who can sense weather changes and navigate through the most dangerous seas, wields a climate-controlling weapon called the Clima-Tact which she uses to create various weather attacks, dreams of drawing a complete map of the world, was forced to work for Arlong to buy back her village's freedom, joined the Straw Hats after Luffy freed her village, has incredible intelligence and strategic thinking, can predict weather patterns with incredible accuracy, and is considered one of the best navigators in the world.",
    options: ["Nami", "Robin", "Vivi", "Hancock"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This powerful pirate, known as 'Straw Hat' Monkey D. Luffy, has the power of the Gum-Gum Fruit which makes his body rubber-like and immune to blunt attacks, can use all three types of Haki including advanced Conqueror's Haki, has developed various powerful techniques including Gear Second which increases his speed, Gear Third which increases his size and power, Gear Fourth which combines his rubber powers with Haki, and Gear Fifth which awakens his Devil Fruit allowing him to turn his surroundings into rubber, is determined to become the Pirate King, has a crew of ten members each with their own dreams, and has defeated numerous powerful enemies including Warlords, Emperors, and World Government agents.",
    options: ["Luffy", "Ace", "Sabo", "Roger"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This location, known as Marineford, is the headquarters of the Marines and one of the three government facilities connected by the Gates of Justice, was the site of the Summit War where Whitebeard and his allies fought against the Marines and Warlords to rescue Ace, saw the deaths of both Whitebeard and Ace, witnessed Luffy's arrival and his use of Conqueror's Haki, was partially destroyed during the battle, and marked a turning point in the series as it led to the end of an era and the beginning of a new one, with the consequences of this war still affecting the world years later.",
    options: ["Marineford", "Impel Down", "Enies Lobby", "Dressrosa"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This location, known as Impel Down, is the world's greatest and most secure prison located in the middle of the Calm Belt where sea kings live, has six levels with increasing security and punishment, level one being the least severe and level six being reserved for the most dangerous criminals, is where Luffy broke in to rescue Ace, saw the escape of numerous dangerous criminals including Crocodile, Mr. 1, and Buggy, is guarded by Magellan who has the power of the Venom-Venom Fruit, and is considered nearly impossible to escape from, though both Shiki and Luffy have managed to break out.",
    options: ["Impel Down", "Marineford", "Enies Lobby", "Alabasta"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This location, known as Enies Lobby, is one of the three government facilities connected by the Gates of Justice along with Marineford and Impel Down, serves as the judicial island where criminals are tried and sentenced, was the site of the Straw Hats' battle against CP9 to rescue Robin, saw the destruction of the island by the Buster Call, witnessed Luffy's declaration of war against the World Government, saw the development of new techniques by the Straw Hats including Luffy's Gear Second and Third, Zoro's new sword techniques, and Sanji's Diable Jambe, and marked a major turning point in the series as the Straw Hats officially became enemies of the World Government.",
    options: ["Enies Lobby", "Marineford", "Impel Down", "Dressrosa"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This powerful technique, known as Gear Second, was developed by Luffy to increase his speed and power by pumping more blood through his body at an accelerated rate, increases his heart rate dramatically, turns his skin red and produces steam, allows him to move so fast that his movements become invisible to most opponents, puts a great strain on his body and shortens his lifespan, was first used against Blueno of CP9, and represents Luffy's understanding of how to use his rubber body in creative ways to overcome powerful enemies.",
    options: ["Gear Second", "Gear Third", "Gear Fourth", "Gear Fifth"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This powerful technique, known as Gear Third, was developed by Luffy by blowing air into his bones to inflate his limbs to giant size, gives him tremendous striking power capable of destroying large structures, makes him smaller and weaker for a period after use due to the air being released, was first used against Rob Lucci of CP9, allows him to create attacks like Giant Pistol and Elephant Gun, and demonstrates Luffy's ability to think creatively about how to use his Devil Fruit power in new ways.",
    options: ["Gear Second", "Gear Third", "Gear Fourth", "Gear Fifth"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This powerful technique, known as Gear Fourth, was developed by Luffy by combining his rubber powers with Haki to create a bouncy, powerful form, inflates his muscles with air and coats them with Armament Haki, creates a form that looks like a sumo wrestler with steam coming from his body, allows him to fight against the strongest opponents including Doflamingo and Katakuri, has different variations including Boundman for balanced power and speed, Snakeman for extreme speed, and Tankman for defense, puts an even greater strain on his body than previous gears, and represents Luffy's mastery of combining his Devil Fruit power with Haki.",
    options: ["Gear Second", "Gear Third", "Gear Fourth", "Gear Fifth"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This ultimate technique, known as Gear Fifth, was awakened by Luffy during his battle against Kaido on Wano Country, represents the true power of the Gum-Gum Fruit which is actually a Mythical Zoan type fruit called the Human-Human Fruit Model: Nika, allows Luffy to turn his surroundings into rubber giving him complete freedom in his movements, makes him nearly invincible as he can bounce back from any attack, gives him the ability to fight in creative and comical ways, transforms his appearance with white hair and clothes, represents the awakening of the Sun God Nika's power, and makes Luffy one of the most powerful characters in the series, capable of fighting on equal terms with the strongest pirates in the world.",
    options: ["Gear Second", "Gear Third", "Gear Fourth", "Gear Fifth"],
    correct_index: 3,
    difficulty: "hard"
  },
  {
    question: "This powerful pirate, known as 'Straw Hat' Monkey D. Luffy, has the power of what was believed to be the Gum-Gum Fruit but is actually the Human-Human Fruit Model: Nika, a Mythical Zoan type fruit that gives him the powers of the Sun God Nika, can stretch his body like rubber, has awakened his Devil Fruit to achieve Gear Fifth which allows him to turn his surroundings into rubber, can use all three types of Haki including advanced Conqueror's Haki that can be infused into attacks, has developed various powerful techniques through his gears, is the captain of the Straw Hat Pirates with ten crew members, has declared war against the World Government, has defeated numerous powerful enemies including Warlords, Emperors, and World Government agents, and is determined to become the Pirate King, following in the footsteps of Gol D. Roger and carrying on the will of the previous generation.",
    options: ["Luffy", "Ace", "Sabo", "Roger"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This powerful organization, known as the Four Emperors or Yonko, consists of the four strongest pirates in the world who control the second half of the Grand Line known as the New World, each commands massive fleets numbering in the thousands, controls vast territories and islands, maintains a delicate balance of power with the World Government and Marines that has existed for decades, includes Shanks known as 'Red-Haired' who values quality over quantity and has a relatively small but incredibly powerful crew, Big Mom Charlotte Linlin who rules Totto Land with her massive family and has the power to extract lifespan from people, Kaido known as the 'Strongest Creature' who rules Wano Country and can transform into a dragon, and formerly Whitebeard Edward Newgate who was considered the strongest man in the world and had the power to create earthquakes, with their combined power being so great that the World Government created the Seven Warlords system specifically to help balance against them, and any disruption to this balance can cause massive changes in the world's power structure.",
    options: ["Seven Warlords", "Four Emperors", "Marine Admirals", "Revolutionary Army"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This powerful ability, known as Conqueror's Haki or Haoshoku Haki, is possessed by only one in a million people and cannot be learned but must be awakened naturally, allows users to knock out weak-willed individuals with their willpower alone, is often associated with those who have the qualities of a king or leader and possess an indomitable will, can be used to intimidate and control others, can be infused into physical attacks at advanced levels to create devastating blows that can damage opponents from the inside, creates black lightning effects when clashing with other Conqueror's Haki users, is possessed by many of the strongest characters in the series including Luffy, Zoro, Shanks, Whitebeard, Big Mom, Kaido, and Roger, and represents the pinnacle of willpower in the One Piece world, with only the strongest individuals able to use it effectively in combat.",
    options: ["Observation Haki", "Armament Haki", "Conqueror's Haki", "Devil Fruit awakening"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This type of Devil Fruit, known as Logia, allows users to transform their body into a natural element like fire, ice, light, darkness, sand, lightning, smoke, or magma, making them nearly invulnerable to physical attacks unless their opponent uses Haki or exploits their element's specific weakness, allows users to create and control their element in various ways, regenerate their body from attacks by reforming their element, move at incredible speeds by transforming into their element, and is considered one of the most powerful types of Devil Fruits, with users like Ace who could create massive fire attacks, Aokiji who could freeze entire oceans, Akainu who could create volcanic eruptions, Kizaru who could move at the speed of light, Crocodile who could control sand and create sandstorms, and Enel who could control lightning and read minds through his electrical powers, making Logia users some of the most feared and powerful individuals in the One Piece world.",
    options: ["Paramecia", "Zoan", "Logia", "Mythical Zoan"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This type of Devil Fruit, known as Zoan, allows users to transform into an animal form, a hybrid form combining human and animal characteristics, or remain in human form with enhanced physical abilities, gives users increased strength, speed, durability, and animal instincts, includes regular Zoans that transform into real animals like Chopper's Human-Human Fruit, Ancient Zoans that transform into extinct animals like dinosaurs as seen in the Beasts Pirates, and Mythical Zoans that transform into legendary creatures like Marco's Phoenix form, Kaido's dragon form, or Luffy's Nika form, with Mythical Zoans being the rarest and most powerful type, often granting additional abilities beyond simple transformation, and Zoan users typically have three forms: their base form, full animal form, and hybrid form that combines the best of both.",
    options: ["Paramecia", "Zoan", "Logia", "Ancient Zoan"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This type of Devil Fruit, known as Paramecia, gives users various superhuman abilities that don't fit into the Logia or Zoan categories, is the most common type of Devil Fruit, includes abilities like Luffy's rubber body, Whitebeard's ability to create earthquakes and tremors, Doflamingo's ability to create and control strings that can cut through almost anything, Law's ability to create a room where he can manipulate anything within it including performing surgery without cutting, Big Mom's ability to extract and manipulate souls, Kidd's ability to control magnetism, and countless other unique abilities, with some Paramecia fruits being so powerful they rival or even surpass Logia fruits, and advanced users can awaken their fruits to affect their surroundings beyond their own body, making Paramecia fruits incredibly diverse and unpredictable in their applications.",
    options: ["Paramecia", "Zoan", "Logia", "Mythical Zoan"],
    correct_index: 0,
    difficulty: "hard"
  }
];

async function seedOnePieceCategory(closePool = true) {
  const client = await pool.connect();
  
  try {
    console.log('Starting One Piece category insertion...');
    
    // Create the "One Piece" category
    const categoryResult = await client.query(
      `INSERT INTO categories (name, slug) 
       VALUES ($1, $2) 
       ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
       RETURNING id`,
      ['One Piece', 'onepiece']
    );
    
    const categoryId = categoryResult.rows[0].id;
    console.log(`✓ Category "One Piece" created/updated with ID: ${categoryId}`);
    
    // Insert questions
    console.log('Inserting questions...');
    let insertedCount = 0;
    
    for (const q of onePieceQuestions) {
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
  seedOnePieceCategory(true)
    .then(() => {
      console.log('Script finished successfully');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Fatal error:', err);
      process.exit(1);
    });
}

module.exports = { seedOnePieceCategory, onePieceQuestions };

