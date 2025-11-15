require('dotenv').config();
const { pool } = require('../src/config/db');

// Easy history questions (20 total - keeping 15 general, adding 5 Panama-focused)
const historyQuestions = [
  // Easy - General History (15)
  {
    question: "In which year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "In which year did the American Civil War begin?",
    options: ["1860", "1861", "1862", "1863"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Who wrote the Declaration of Independence?",
    options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "In which year did World War I begin?",
    options: ["1912", "1914", "1916", "1918"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the ship that brought the Pilgrims to America in 1620?",
    options: ["Mayflower", "Santa Maria", "Titanic", "Nina"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the leader of Nazi Germany during World War II?",
    options: ["Mussolini", "Hitler", "Stalin", "Churchill"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "In which year did the French Revolution begin?",
    options: ["1787", "1789", "1791", "1793"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the ancient Egyptian queen known for her beauty?",
    options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Isis"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Who was the first person to walk on the moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "John Glenn"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "In which year did the Berlin Wall fall?",
    options: ["1987", "1989", "1991", "1993"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the first atomic bomb dropped on Japan?",
    options: ["Little Boy", "Fat Man", "Big Bertha", "Thunder"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1910", "1912", "1914", "1916"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the period of renewed interest in art and learning in Europe?",
    options: ["Reformation", "Renaissance", "Enlightenment", "Revolution"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
    correct_index: 2,
    difficulty: "easy"
  },
  // Easy - Panama History (5)
  {
    question: "In which year did Panama gain independence from Colombia?",
    options: ["1901", "1903", "1905", "1910"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the name of the famous canal located in Panama?",
    options: ["Suez Canal", "Panama Canal", "Erie Canal", "Kiel Canal"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Which ocean does the Panama Canal connect to the Atlantic?",
    options: ["Indian Ocean", "Arctic Ocean", "Pacific Ocean", "Southern Ocean"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What is the capital city of Panama?",
    options: ["Colon", "David", "Panama City", "Santiago"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "In which year did the Panama Canal officially open?",
    options: ["1912", "1914", "1916", "1920"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Who was the first emperor of Rome?",
    options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "In which year did the American Revolution begin?",
    options: ["1775", "1776", "1777", "1778"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What was the name of the ship that sank in 1912?",
    options: ["Lusitania", "Titanic", "Britannic", "Olympic"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    options: ["Marie Curie", "Rosalind Franklin", "Jane Goodall", "Dorothy Hodgkin"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "In which year did the Cold War end?",
    options: ["1987", "1989", "1991", "1993"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What was the name of the first atomic bomb dropped on Japan?",
    options: ["Little Boy", "Fat Man", "Trinity", "Gadget"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the first person to reach the South Pole?",
    options: ["Robert Scott", "Roald Amundsen", "Ernest Shackleton", "Richard Byrd"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "In which year did the Russian Revolution begin?",
    options: ["1915", "1916", "1917", "1918"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What was the name of the ancient city destroyed by a volcano?",
    options: ["Athens", "Pompeii", "Rome", "Carthage"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Who was the first female prime minister of the United Kingdom?",
    options: ["Margaret Thatcher", "Theresa May", "Indira Gandhi", "Golda Meir"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "In which year did the Vietnam War end?",
    options: ["1973", "1974", "1975", "1976"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What was the name of the first successful airplane flight?",
    options: ["Wright Flyer", "Spirit of St. Louis", "Flyer I", "Kitty Hawk"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the first person to sail around the world?",
    options: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "James Cook"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "In which year did the Great Depression begin?",
    options: ["1927", "1929", "1931", "1933"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the first successful heart transplant patient?",
    options: ["Louis Washkansky", "Christian Barnard", "Norman Shumway", "Adrian Kantrowitz"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the first person to break the sound barrier?",
    options: ["Chuck Yeager", "Neil Armstrong", "John Glenn", "Yuri Gagarin"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "In which year did the Korean War begin?",
    options: ["1948", "1950", "1952", "1954"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the first successful organ transplant?",
    options: ["Heart", "Kidney", "Liver", "Lung"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Who was the first person to win the Nobel Peace Prize?",
    options: ["Henry Dunant", "Frederic Passy", "Theodore Roosevelt", "Martin Luther King"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "In which year did the Space Race begin?",
    options: ["1955", "1957", "1959", "1961"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the first successful cloned mammal?",
    options: ["Dolly the sheep", "Polly the parrot", "Molly the mouse", "Holly the horse"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the first person to win an Olympic gold medal?",
    options: ["James Connolly", "Thomas Burke", "Ellery Clark", "Robert Garrett"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "In which year did the Internet become publicly available?",
    options: ["1989", "1991", "1993", "1995"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the first successful test-tube baby?",
    options: ["Louise Brown", "Elizabeth Carr", "Amanda Chantal Bacon", "Natalie Brown"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the first person to win the Tour de France?",
    options: ["Maurice Garin", "Lance Armstrong", "Eddy Merckx", "Miguel Indurain"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "In which year did the first World War end?",
    options: ["1916", "1917", "1918", "1919"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What was the name of the first successful human spaceflight?",
    options: ["Vostok 1", "Mercury-Redstone 3", "Freedom 7", "Friendship 7"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the first person to win the Academy Award for Best Actor?",
    options: ["Emil Jannings", "Warner Baxter", "George Arliss", "Lionel Barrymore"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "In which year did the first successful kidney transplant occur?",
    options: ["1950", "1954", "1958", "1962"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the first successful artificial heart?",
    options: ["Jarvik-7", "AbioCor", "SynCardia", "CardioWest"],
    correct_index: 0,
    difficulty: "easy"
  },
  // Medium difficulty - More text (20 total - prioritizing Panama)
  {
    question: "This monumental engineering project, completed in 1914 after decades of planning and construction efforts that cost thousands of lives, connects the Atlantic and Pacific Oceans through the narrow Isthmus of Panama, revolutionizing global maritime trade and significantly reducing travel time for ships.",
    options: ["Suez Canal", "Panama Canal", "Erie Canal", "Kiel Canal"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "On November 3, 1903, this Central American nation successfully declared its independence from Colombia after a brief but decisive revolution, largely supported by the United States, which had strategic interests in building a canal across the isthmus.",
    options: ["Costa Rica", "Panama", "Nicaragua", "Colombia"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This French engineer, who had previously worked on the Suez Canal, led the initial attempt to build a canal across Panama in the 1880s, but the project failed due to disease, financial problems, and engineering challenges.",
    options: ["Gustave Eiffel", "Ferdinand de Lesseps", "John Stevens", "George Goethals"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "The construction of the Panama Canal faced numerous challenges, including tropical diseases like yellow fever and malaria that killed thousands of workers. Which American doctor played a crucial role in controlling these diseases?",
    options: ["Dr. Walter Reed", "Dr. William Gorgas", "Dr. Carlos Finlay", "Dr. Jonas Salk"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This Panamanian military leader and politician, who served as the country's president multiple times, played a significant role in Panama's political development during the mid-20th century and was known for his populist policies.",
    options: ["Arnulfo Arias", "Omar Torrijos", "Manuel Noriega", "Ricardo Martinelli"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "The Panama Canal Zone, a strip of land surrounding the canal, was controlled by the United States from 1903 until 1979. Which Panamanian leader negotiated the treaties that would eventually return control of the canal to Panama?",
    options: ["Arnulfo Arias", "Omar Torrijos", "Manuel Noriega", "Ricardo Martinelli"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This important Panamanian city, located at the Caribbean entrance of the Panama Canal, was founded in 1850 and became a major commercial hub, though it declined in importance after the canal's construction shifted focus to Panama City.",
    options: ["David", "Colon", "Santiago", "Chitre"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "The original inhabitants of Panama, before Spanish colonization, included various indigenous groups. Which of these groups is still present in Panama today, particularly in the Darien region?",
    options: ["Maya", "Inca", "Embera", "Aztec"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "In 1989, the United States invaded Panama to remove this military dictator from power, who had been indicted in the United States for drug trafficking and had declared a state of war with the U.S.",
    options: ["Omar Torrijos", "Manuel Noriega", "Arnulfo Arias", "Ricardo Martinelli"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This expansion project of the Panama Canal, completed in 2016, added a third set of locks that allow larger ships called 'New Panamax' vessels to transit the canal, significantly increasing its capacity and revenue.",
    options: ["Canal Expansion", "New Locks Project", "Panama Canal Expansion", "Third Set of Locks"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "Which Spanish explorer, known for being the first European to see the Pacific Ocean from the Americas, crossed the Isthmus of Panama in 1513, establishing the first European settlement in the region?",
    options: ["Christopher Columbus", "Vasco Nunez de Balboa", "Hernan Cortes", "Francisco Pizarro"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This historic route across the Isthmus of Panama, used during the California Gold Rush of the 1840s and 1850s, allowed travelers to cross from the Atlantic to the Pacific side, avoiding the long and dangerous journey around South America.",
    options: ["Panama Railroad", "Camino Real", "Darien Gap", "Trans-Panama Highway"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "The Panama Canal uses a system of locks to raise and lower ships between different water levels. How many locks does a ship pass through when transiting the original canal from one ocean to the other?",
    options: ["4", "6", "8", "12"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This Panamanian province, located in the western part of the country, is known for its coffee production, mountain ranges, and is home to Panama's second-largest city.",
    options: ["Chiriqui", "Veraguas", "Los Santos", "Herrera"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "In 1977, the United States and Panama signed two important treaties that would gradually transfer control of the Panama Canal to Panama. What were these treaties collectively called?",
    options: ["Panama Canal Treaties", "Torrijos-Carter Treaties", "Canal Transfer Agreements", "Panama Independence Treaties"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This important historical event in Panama occurred in 1821, when the country joined the Republic of Gran Colombia, which included present-day Colombia, Venezuela, and Ecuador.",
    options: ["Panama's Independence", "Union with Gran Colombia", "Spanish Conquest", "Canal Construction"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "The San Blas Islands, also known as the Kuna Yala, are an archipelago off the Caribbean coast of Panama. Which indigenous group primarily inhabits these islands and maintains a high degree of autonomy?",
    options: ["Embera", "Guna", "Ngabe", "Bribri"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This Panamanian national hero, born in 1825, was a key figure in the movement for Panama's independence from Colombia and is considered one of the founding fathers of the Republic of Panama.",
    options: ["Manuel Amador Guerrero", "Belisario Porras", "Harmodio Arias", "Ricardo Adolfo de la Guardia"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "The Panama Canal's construction required the creation of one of the world's largest artificial lakes. What is the name of this lake that serves as a crucial part of the canal's waterway system?",
    options: ["Lake Gatun", "Lake Miraflores", "Lake Pedro Miguel", "Lake Chagres"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This important Panamanian holiday, celebrated on November 3rd, commemorates the country's independence from Colombia and is one of the most significant national celebrations in Panama.",
    options: ["Independence Day", "Separation Day", "Flag Day", "Canal Day"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "Which American president, who served from 1977 to 1981, signed the treaties that would eventually return control of the Panama Canal to Panama, fulfilling a promise made during his presidential campaign?",
    options: ["Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This ancient civilization, known for building massive pyramids and developing a complex writing system called hieroglyphics, flourished along the Nile River for thousands of years and left behind remarkable architectural and cultural achievements.",
    options: ["Mesopotamia", "Ancient Egypt", "Ancient Greece", "Roman Empire"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This period in European history, lasting from approximately the 5th to the 15th century, was characterized by feudalism, the dominance of the Catholic Church, and significant cultural and economic changes following the fall of the Roman Empire.",
    options: ["Renaissance", "Middle Ages", "Enlightenment", "Industrial Revolution"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This major conflict, fought between 1861 and 1865, was the deadliest war in American history and resulted in the abolition of slavery and the preservation of the Union.",
    options: ["Revolutionary War", "War of 1812", "Civil War", "Spanish-American War"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This ancient Greek city-state, known for its military prowess and emphasis on discipline and training, was one of the most powerful states in ancient Greece and played a crucial role in the Persian Wars.",
    options: ["Athens", "Sparta", "Thebes", "Corinth"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This period of renewed interest in art, literature, and learning that began in Italy in the 14th century and spread throughout Europe, marked the transition from the Middle Ages to the modern era.",
    options: ["Reformation", "Renaissance", "Enlightenment", "Romanticism"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This ancient empire, which at its height controlled much of Europe, North Africa, and the Middle East, was known for its advanced engineering, legal system, and military organization.",
    options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This major event, which occurred in 1066, resulted in the Norman conquest of England and significantly changed the course of English history, language, and culture.",
    options: ["Battle of Hastings", "Battle of Agincourt", "Battle of Bosworth", "Battle of Waterloo"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This ancient Chinese dynasty, which ruled from 206 BCE to 220 CE, is considered one of the golden ages of Chinese civilization and saw the expansion of the Silk Road trade network.",
    options: ["Qin Dynasty", "Han Dynasty", "Tang Dynasty", "Ming Dynasty"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This period of mass migration and movement of people from rural areas to cities, driven by industrialization and technological advances, transformed societies and economies around the world.",
    options: ["Agricultural Revolution", "Industrial Revolution", "Digital Revolution", "Green Revolution"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This ancient civilization, located in what is now modern-day Iraq, is often called the 'cradle of civilization' and is credited with developing the first system of writing, the wheel, and early forms of mathematics.",
    options: ["Ancient Egypt", "Mesopotamia", "Indus Valley", "Ancient China"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This major conflict, fought between 1914 and 1918, involved most of the world's great powers and resulted in the collapse of several empires and the redrawing of national boundaries.",
    options: ["World War I", "World War II", "Korean War", "Vietnam War"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This ancient Greek philosopher, a student of Socrates and teacher of Aristotle, founded the Academy in Athens and wrote extensively on topics including justice, ethics, and the ideal state.",
    options: ["Socrates", "Plato", "Aristotle", "Herodotus"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This period of European exploration and colonization, beginning in the 15th century, led to the discovery of new lands, the establishment of trade routes, and significant cultural exchanges between continents.",
    options: ["Age of Discovery", "Age of Enlightenment", "Age of Revolution", "Age of Imperialism"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This ancient empire, which controlled much of the Middle East, North Africa, and parts of Europe for centuries, was known for its tolerance of different religions and cultures, and its capital Constantinople was one of the world's greatest cities.",
    options: ["Roman Empire", "Byzantine Empire", "Ottoman Empire", "Persian Empire"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This major event, which began in 1789, overthrew the French monarchy and established a republic, inspiring revolutionary movements throughout Europe and the Americas.",
    options: ["American Revolution", "French Revolution", "Russian Revolution", "Industrial Revolution"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This ancient Chinese philosopher, whose teachings formed the basis of Confucianism, emphasized the importance of family, respect for elders, and moral behavior in creating a harmonious society.",
    options: ["Laozi", "Confucius", "Mencius", "Zhuangzi"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This period of intellectual and cultural movement in 18th-century Europe emphasized reason, science, and individual rights, and influenced the American and French Revolutions.",
    options: ["Renaissance", "Reformation", "Enlightenment", "Romanticism"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This ancient civilization, located in the Andes Mountains of South America, built an extensive road network and impressive stone structures, and was conquered by Spanish conquistadors in the 16th century.",
    options: ["Aztec", "Maya", "Inca", "Olmec"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This major conflict, fought between 1939 and 1945, was the deadliest conflict in human history and resulted in the use of atomic weapons and the establishment of the United Nations.",
    options: ["World War I", "World War II", "Korean War", "Cold War"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This ancient Greek city-state, known as the birthplace of democracy and home to philosophers like Socrates, Plato, and Aristotle, was a center of learning and culture in the ancient world.",
    options: ["Sparta", "Athens", "Thebes", "Corinth"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This period of European history, beginning in the 14th century, saw a renewed interest in classical learning, art, and literature, and produced some of the world's greatest artists and thinkers.",
    options: ["Middle Ages", "Renaissance", "Enlightenment", "Industrial Revolution"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This ancient empire, which at its height stretched from Britain to Egypt and from Spain to the Middle East, was known for its advanced engineering, including aqueducts, roads, and bridges.",
    options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This major event, which occurred in 1492, marked the beginning of European exploration and colonization of the Americas and had profound effects on both the Old and New Worlds.",
    options: ["Discovery of America", "Fall of Constantinople", "Battle of Hastings", "Protestant Reformation"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This ancient Chinese dynasty, which ruled from 618 to 907 CE, is considered a golden age of Chinese civilization and saw significant advances in art, literature, and technology.",
    options: ["Han Dynasty", "Tang Dynasty", "Song Dynasty", "Ming Dynasty"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This period of rapid industrialization and technological advancement, beginning in Britain in the 18th century, transformed economies and societies and led to the growth of cities and the development of new social classes.",
    options: ["Agricultural Revolution", "Industrial Revolution", "Digital Revolution", "Scientific Revolution"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This ancient civilization, located in what is now modern-day Mexico, built impressive pyramids and developed a complex calendar system, and was conquered by Spanish conquistadors in the 16th century.",
    options: ["Aztec", "Maya", "Inca", "Olmec"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This major conflict, fought between 1950 and 1953, involved United Nations forces led by the United States fighting against North Korean and Chinese forces, and ended in an armistice rather than a peace treaty.",
    options: ["World War II", "Korean War", "Vietnam War", "Cold War"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This ancient Greek philosopher, known for his method of questioning and his execution by drinking hemlock, was a teacher of Plato and is considered one of the founders of Western philosophy.",
    options: ["Socrates", "Plato", "Aristotle", "Herodotus"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This period of European exploration and colonization, beginning in the late 15th century, led to the establishment of European colonies in the Americas, Africa, and Asia, and had lasting effects on global trade and culture.",
    options: ["Age of Discovery", "Age of Enlightenment", "Age of Revolution", "Age of Imperialism"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This ancient empire, which controlled much of the Middle East, North Africa, and southeastern Europe for over 600 years, was known for its military prowess and its capital Istanbul (formerly Constantinople) was a major cultural and economic center.",
    options: ["Byzantine Empire", "Ottoman Empire", "Persian Empire", "Roman Empire"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This major event, which began in 1917, overthrew the Russian monarchy and established the world's first communist state, leading to the creation of the Soviet Union and influencing revolutionary movements worldwide.",
    options: ["French Revolution", "Russian Revolution", "Chinese Revolution", "Industrial Revolution"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This ancient Chinese philosopher, founder of Taoism, wrote the Tao Te Ching and emphasized living in harmony with nature and the natural order of the universe.",
    options: ["Confucius", "Laozi", "Mencius", "Zhuangzi"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This period of intellectual and cultural movement in 18th-century Europe, characterized by emphasis on reason, science, and individual rights, influenced political revolutions and the development of modern democratic ideals.",
    options: ["Renaissance", "Reformation", "Enlightenment", "Romanticism"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This ancient civilization, located in Central America, developed a sophisticated writing system, advanced mathematics including the concept of zero, and built impressive cities with pyramids and temples.",
    options: ["Aztec", "Maya", "Inca", "Olmec"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This major conflict, fought between 1955 and 1975, involved the United States and its allies supporting South Vietnam against North Vietnam and its communist allies, and resulted in the reunification of Vietnam under communist rule.",
    options: ["Korean War", "Vietnam War", "Cold War", "Gulf War"],
    correct_index: 1,
    difficulty: "medium"
  },
  // Hard difficulty - Much more text (20 total - prioritizing Panama)
  {
    question: "This monumental engineering achievement, completed in 1914 after more than a decade of intensive construction work that employed tens of thousands of workers from around the world, represents one of the greatest feats of human engineering, connecting the Atlantic and Pacific Oceans through a 48-mile waterway across the narrow Isthmus of Panama, revolutionizing global maritime transportation by eliminating the need for ships to navigate the treacherous waters around Cape Horn, reducing travel time between the east and west coasts of the Americas by thousands of miles, and establishing Panama as a crucial hub of international trade and commerce.",
    options: ["Suez Canal", "Panama Canal", "Erie Canal", "Kiel Canal"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "On November 3, 1903, this Central American nation successfully achieved its independence from Colombia through a carefully orchestrated revolution that lasted less than a day, an event that was largely facilitated by the strategic interests of the United States, which had been seeking to build a canal across the isthmus and saw Colombian control as an obstacle to this goal, leading to the establishment of the Republic of Panama and the subsequent signing of the Hay-Bunau-Varilla Treaty that granted the United States control over the Canal Zone.",
    options: ["Costa Rica", "Panama", "Nicaragua", "Colombia"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This French engineer and diplomat, who had achieved international fame for successfully completing the Suez Canal in Egypt, led the ambitious but ultimately failed French attempt to construct a sea-level canal across Panama in the 1880s, a project that was plagued by numerous challenges including devastating outbreaks of yellow fever and malaria that killed thousands of workers, financial difficulties that led to one of the largest financial scandals of the 19th century, and engineering obstacles that proved insurmountable with the technology available at the time, ultimately resulting in the project's abandonment and the company's bankruptcy.",
    options: ["Gustave Eiffel", "Ferdinand de Lesseps", "John Stevens", "George Goethals"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "The successful construction of the Panama Canal required overcoming one of the greatest obstacles faced by the earlier French attempt: the control of deadly tropical diseases, particularly yellow fever and malaria, which had claimed the lives of thousands of workers. This American physician and military officer, serving as the chief sanitary officer during the American construction period, implemented comprehensive public health measures including mosquito control programs, improved sanitation systems, and medical facilities that dramatically reduced disease rates, making the canal's completion possible and establishing principles of tropical medicine that would benefit public health efforts worldwide.",
    options: ["Dr. Walter Reed", "Dr. William Gorgas", "Dr. Carlos Finlay", "Dr. Jonas Salk"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This influential Panamanian political figure, who served as president of Panama on three separate occasions between 1940 and 1968, was a charismatic leader known for his populist policies, nationalist sentiments, and efforts to assert Panama's sovereignty over the Canal Zone, though his presidencies were marked by political instability, multiple coups, and periods of exile, reflecting the turbulent political landscape of mid-20th century Panama.",
    options: ["Arnulfo Arias", "Omar Torrijos", "Manuel Noriega", "Ricardo Martinelli"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "The Panama Canal Zone, a 10-mile-wide strip of land surrounding the canal that was controlled by the United States from 1903 until 1979, became a source of ongoing tension between Panama and the United States. This Panamanian military leader and head of state, who came to power through a military coup in 1968, played a crucial role in negotiating the Torrijos-Carter Treaties of 1977, which established a framework for the gradual transfer of the canal and Canal Zone to Panamanian control, though he died in a plane crash in 1981 before seeing the full implementation of these agreements.",
    options: ["Arnulfo Arias", "Omar Torrijos", "Manuel Noriega", "Ricardo Martinelli"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This historically significant Panamanian city, founded in 1850 as the terminus of the Panama Railroad and located at the Caribbean entrance of what would become the Panama Canal, flourished as a major commercial and transportation hub during the California Gold Rush era, when it served as a crucial transit point for thousands of fortune seekers traveling between the Atlantic and Pacific coasts, though its importance declined significantly after the canal's construction shifted economic focus to Panama City on the Pacific side, leaving it with a legacy of colonial architecture and a complex history of economic boom and decline.",
    options: ["David", "Colon", "Santiago", "Chitre"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "The indigenous peoples of Panama have a rich and complex history that predates European colonization by thousands of years. Among the various indigenous groups that still maintain their cultural identity and territories in modern Panama, particularly in the remote and ecologically diverse Darien region, this group is known for their traditional knowledge of the rainforest, their distinctive body art and traditional dress, their semi-nomadic lifestyle, and their ongoing efforts to preserve their ancestral lands and cultural practices in the face of modern development pressures.",
    options: ["Maya", "Inca", "Embera", "Aztec"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "In December 1989, the United States launched a massive military invasion of Panama, codenamed Operation Just Cause, to remove this Panamanian military dictator from power. This controversial figure, who had risen through the ranks of the Panamanian Defense Forces to become the de facto ruler of the country, had been indicted in the United States on charges of drug trafficking and money laundering, had declared a state of war with the United States following increased tensions, and was captured during the invasion, tried in the United States, and sentenced to prison, marking a significant moment in U.S.-Panama relations and the end of an era in Panamanian politics.",
    options: ["Omar Torrijos", "Manuel Noriega", "Arnulfo Arias", "Ricardo Martinelli"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This ambitious expansion project of the Panama Canal, completed in 2016 after nearly a decade of construction work, added a third set of locks that are significantly larger than the original locks, allowing the transit of much larger vessels known as 'New Panamax' ships that can carry up to 14,000 containers, nearly three times the capacity of ships that could previously use the canal, dramatically increasing the waterway's capacity, revenue potential, and importance in global maritime trade, while also requiring extensive environmental mitigation measures and representing one of the largest infrastructure projects in Latin America.",
    options: ["Canal Expansion", "New Locks Project", "Panama Canal Expansion", "Third Set of Locks"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This Spanish conquistador and explorer, who arrived in the New World in 1500 and became the first European to see the Pacific Ocean from the Americas when he crossed the Isthmus of Panama in 1513, established the first permanent European settlement on the American mainland at Santa Maria la Antigua del Darien, played a crucial role in the early Spanish exploration and colonization of Central America, but ultimately fell victim to political intrigue and was executed by his former ally Francisco Pizarro, leaving behind a legacy as one of the most important figures in the early European exploration of the Americas.",
    options: ["Christopher Columbus", "Vasco Nunez de Balboa", "Hernan Cortes", "Francisco Pizarro"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This historic transportation route, completed in 1855 and representing the first transcontinental railroad in the Americas, was built across the Isthmus of Panama to facilitate travel between the Atlantic and Pacific coasts, becoming particularly important during the California Gold Rush when tens of thousands of fortune seekers used it to avoid the long and dangerous sea journey around Cape Horn, revolutionizing transportation in the region, contributing to the economic development of Panama, and demonstrating the feasibility of large-scale engineering projects in the challenging tropical environment, while also playing a crucial role in the eventual decision to build the Panama Canal.",
    options: ["Panama Railroad", "Camino Real", "Darien Gap", "Trans-Panama Highway"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "The Panama Canal operates using a sophisticated system of locks that raise and lower ships between different water levels, allowing vessels to traverse the significant elevation difference between the two oceans. When a ship transits the original canal from one ocean to the other, it must pass through a total of six locks - three sets of locks, with each set consisting of two parallel lock chambers - that work in pairs to accommodate ships traveling in opposite directions, a system that was revolutionary when implemented and remains one of the most impressive engineering achievements in maritime history.",
    options: ["4", "6", "8", "12"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This important Panamanian province, located in the western highlands of the country and bordered by Costa Rica to the west, is renowned for its diverse geography that includes both Pacific and Caribbean coastlines, mountain ranges that reach elevations of over 11,000 feet, fertile valleys that support extensive coffee cultivation making it one of Panama's primary agricultural regions, and is home to David, the country's second-largest city and an important commercial and cultural center for the western region of Panama.",
    options: ["Chiriqui", "Veraguas", "Los Santos", "Herrera"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "In 1977, after years of negotiations and diplomatic efforts, the United States and Panama signed two landmark treaties that would fundamentally change the relationship between the two countries regarding the Panama Canal. These treaties, collectively known by the names of the two leaders who signed them, established a framework for the gradual transfer of control of the Panama Canal and the Canal Zone from the United States to Panama, set a specific date for the complete transfer of sovereignty, guaranteed the canal's permanent neutrality, and represented a significant step toward resolving one of the most contentious issues in U.S.-Latin American relations, though their implementation faced political opposition in both countries.",
    options: ["Panama Canal Treaties", "Torrijos-Carter Treaties", "Canal Transfer Agreements", "Panama Independence Treaties"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This significant historical event in Panamanian history occurred in 1821, when Panama, which had been part of the Spanish Empire's Viceroyalty of New Granada, joined the newly formed Republic of Gran Colombia, a federation that included present-day Colombia, Venezuela, and Ecuador. This union, which lasted until 1830 when Gran Colombia dissolved, represented Panama's first experience with independence from Spanish rule, though the country would remain part of Colombia (as the successor state to Gran Colombia) until achieving full independence in 1903, creating a complex historical relationship between Panama and its larger neighbor.",
    options: ["Panama's Independence", "Union with Gran Colombia", "Spanish Conquest", "Canal Construction"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "The San Blas Islands, also known as Guna Yala, form an archipelago of approximately 365 islands off the Caribbean coast of Panama, of which only about 50 are inhabited. This indigenous group, which primarily inhabits these islands and maintains a high degree of political and cultural autonomy through a comarca (semi-autonomous territory), is renowned for their vibrant traditional culture including distinctive molas (intricate textile art), their matriarchal social structure, their successful resistance to Spanish colonization, their ongoing efforts to preserve their language and traditions, and their unique relationship with the Panamanian government that allows them significant self-governance.",
    options: ["Embera", "Guna", "Ngabe", "Bribri"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This Panamanian national hero and physician, born in 1825 in what was then part of Gran Colombia, emerged as a key figure in the movement for Panama's independence from Colombia in the early 20th century, serving as one of the primary architects of the independence movement, becoming the first president of the Republic of Panama after independence was achieved in 1903, and is widely regarded as one of the founding fathers of the modern Panamanian nation, with his legacy commemorated throughout the country.",
    options: ["Manuel Amador Guerrero", "Belisario Porras", "Harmodio Arias", "Ricardo Adolfo de la Guardia"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "The successful operation of the Panama Canal relies heavily on an extensive system of artificial lakes and reservoirs that provide the vast quantities of fresh water needed to operate the locks. The largest and most important of these is this artificial lake, created by damming the Chagres River, which covers an area of approximately 164 square miles, stores billions of gallons of water, serves as a crucial navigable waterway for ships transiting the canal, provides hydroelectric power, and represents one of the largest artificial lakes in the world, playing an absolutely essential role in the canal's daily operations.",
    options: ["Lake Gatun", "Lake Miraflores", "Lake Pedro Miguel", "Lake Chagres"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This important Panamanian national holiday, celebrated annually on November 3rd with parades, ceremonies, and festivities throughout the country, commemorates Panama's successful separation from Colombia and the establishment of the Republic of Panama in 1903, marking one of the most significant events in the nation's history, symbolizing Panamanian sovereignty and independence, and serving as a day of national pride and reflection on the country's journey toward self-determination and its role as an independent nation in the international community.",
    options: ["Independence Day", "Separation Day", "Flag Day", "Canal Day"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This American president, who served from 1977 to 1981, made the return of the Panama Canal to Panamanian control a key priority of his administration, viewing it as essential for improving U.S. relations with Latin America and addressing what many in the region saw as a symbol of American imperialism. Despite facing significant political opposition, particularly from conservative politicians who criticized the treaties as a surrender of American interests, this president successfully negotiated and signed the Torrijos-Carter Treaties in 1977, which established the framework for transferring control of the canal to Panama, fulfilling a campaign promise and marking a significant shift in U.S. foreign policy toward Latin America.",
    options: ["Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This ancient civilization, which flourished along the banks of the Nile River for over three thousand years, developed one of the world's first writing systems known as hieroglyphics, built massive pyramids and temples that still stand today as testaments to their architectural prowess, created a complex religious and social system centered around pharaohs who were considered divine rulers, developed advanced mathematics and astronomy, preserved their dead through mummification in elaborate tombs filled with treasures, and left behind a rich cultural legacy that continues to fascinate scholars and tourists alike, making it one of the most enduring and influential civilizations in human history.",
    options: ["Mesopotamia", "Ancient Egypt", "Ancient Greece", "Roman Empire"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This period in European history, spanning approximately from the fall of the Western Roman Empire in the 5th century to the beginning of the Renaissance in the 15th century, was characterized by the fragmentation of political power into feudal systems where local lords controlled territories, the dominance of the Catholic Church as the primary unifying force in Western Europe, the development of Gothic architecture in magnificent cathedrals, the preservation and transmission of classical knowledge through monastic scriptoria, the Crusades that brought Europeans into contact with Islamic and Byzantine cultures, and significant social, economic, and cultural transformations that laid the groundwork for the modern world.",
    options: ["Renaissance", "Middle Ages", "Enlightenment", "Industrial Revolution"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This major conflict in American history, fought between 1861 and 1865, was the deadliest war in the nation's history with over 600,000 casualties, pitted the industrial North against the agricultural South over issues including states' rights, economic differences, and most fundamentally the institution of slavery, resulted in the abolition of slavery through the Emancipation Proclamation and the 13th Amendment, preserved the Union and strengthened the federal government's authority, transformed the United States from a collection of states into a unified nation, and left lasting social, economic, and political consequences that continue to influence American society today.",
    options: ["Revolutionary War", "War of 1812", "American Civil War", "Spanish-American War"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This ancient Greek city-state, located in the Peloponnese region, was renowned throughout the ancient world for its military excellence, its unique social system that emphasized discipline, physical fitness, and military training from childhood, its dual monarchy system with two kings ruling simultaneously, its emphasis on collective welfare over individual interests, its role as a dominant military power in ancient Greece that defeated Athens in the Peloponnesian War, and its legendary warriors who were considered among the finest soldiers in the ancient world, though its rigid social structure and focus on military might came at the cost of cultural and intellectual development.",
    options: ["Athens", "Sparta", "Thebes", "Corinth"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This period of cultural and intellectual rebirth that began in Italy in the 14th century and spread throughout Europe over the next three centuries, marked a transition from the medieval to the modern world, saw a renewed interest in classical Greek and Roman art, literature, and philosophy, produced some of the world's greatest artists including Leonardo da Vinci, Michelangelo, and Raphael, witnessed the development of new techniques in art including perspective and chiaroscuro, saw the invention of the printing press that revolutionized the spread of knowledge, and laid the intellectual foundations for the Scientific Revolution and the Age of Exploration, fundamentally changing European society and culture.",
    options: ["Reformation", "Renaissance", "Enlightenment", "Romanticism"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This ancient empire, which at its height controlled territory stretching from Britain in the northwest to Egypt in the southeast and from Spain in the west to the Middle East in the east, was renowned for its advanced engineering including aqueducts that brought fresh water to cities, extensive road networks that facilitated trade and military movement, sophisticated legal system that influenced Western jurisprudence, highly organized military that maintained order across vast territories, architectural achievements including the Colosseum and Pantheon, and its ability to integrate diverse cultures and peoples into a unified political system, leaving a lasting legacy that continues to influence modern Western civilization.",
    options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This decisive battle, fought on October 14, 1066, between the Norman forces of William the Conqueror and the English army of King Harold II, resulted in the Norman conquest of England and fundamentally changed the course of English history, language, and culture. The battle marked the end of Anglo-Saxon rule in England, introduced Norman French influences that would eventually merge with Old English to create Middle English, established a new ruling class that would shape English society for centuries, and connected England more closely with continental Europe, while also demonstrating the effectiveness of combined arms tactics including archers, infantry, and cavalry working together.",
    options: ["Battle of Hastings", "Battle of Agincourt", "Battle of Bosworth", "Battle of Waterloo"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This ancient Chinese dynasty, which ruled from 206 BCE to 220 CE and is considered one of the golden ages of Chinese civilization, saw the expansion of Chinese territory through military conquests, the establishment of the Silk Road trade network that connected China with Central Asia, the Middle East, and Europe, the development of Confucianism as the state ideology, significant advances in technology including papermaking, the compass, and improved agricultural techniques, the creation of a centralized bureaucratic system that would influence Chinese governance for millennia, and a period of cultural flourishing that produced great works of literature, art, and philosophy, establishing patterns that would define Chinese civilization for centuries to come.",
    options: ["Qin Dynasty", "Han Dynasty", "Tang Dynasty", "Ming Dynasty"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This transformative period in human history, beginning in Britain in the mid-18th century and spreading throughout Europe and eventually the world, was characterized by the transition from agrarian, handcraft-based economies to industrial, machine-based production, the development of new technologies including the steam engine, spinning jenny, and power loom, the growth of cities as people migrated from rural areas seeking factory work, the emergence of new social classes including industrial capitalists and urban proletariat, significant changes in family structure and gender roles, environmental impacts including pollution and resource depletion, and the creation of unprecedented wealth alongside new forms of poverty and social inequality, fundamentally reshaping human society and the relationship between humans and their environment.",
    options: ["Agricultural Revolution", "Industrial Revolution", "Digital Revolution", "Scientific Revolution"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This ancient civilization, located in the fertile region between the Tigris and Euphrates rivers in what is now modern-day Iraq, is often called the 'cradle of civilization' because it was one of the first places where humans developed agriculture, built cities, and created complex societies. This civilization is credited with developing the world's first system of writing known as cuneiform, inventing the wheel which revolutionized transportation, creating early forms of mathematics including a base-60 number system that we still use for measuring time and angles, developing sophisticated irrigation systems that allowed agriculture to flourish in an arid environment, establishing some of the world's first legal codes including the famous Code of Hammurabi, and creating epic literature including the Epic of Gilgamesh, one of the oldest surviving works of literature.",
    options: ["Ancient Egypt", "Mesopotamia", "Indus Valley", "Ancient China"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This global conflict, fought between 1914 and 1918, involved most of the world's great powers organized into two opposing alliances, resulted in the deaths of over 16 million people including both military personnel and civilians, saw the introduction of new and devastating weapons including machine guns, poison gas, tanks, and aircraft, led to the collapse of four major empires including the Russian, German, Austro-Hungarian, and Ottoman empires, redrew national boundaries across Europe and the Middle East, created conditions that would lead to World War II, and marked a fundamental shift in warfare from limited conflicts to total war involving entire societies, forever changing the political, social, and cultural landscape of the 20th century.",
    options: ["World War I", "World War II", "Korean War", "Vietnam War"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This ancient Greek philosopher, who was a student of Socrates and teacher of Aristotle, founded the Academy in Athens which was one of the first institutions of higher learning in the Western world, wrote extensively in the form of dialogues exploring topics including justice, ethics, politics, and the nature of reality, developed the theory of Forms which posited that abstract concepts have a real existence beyond the physical world, wrote The Republic which describes his vision of an ideal state ruled by philosopher-kings, and his work has had an immeasurable influence on Western philosophy, mathematics, science, and political theory, making him one of the most important figures in the history of Western thought.",
    options: ["Socrates", "Plato", "Aristotle", "Herodotus"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This period of European exploration and colonization, beginning in the late 15th century with voyages sponsored by European monarchs seeking new trade routes to Asia, led to the 'discovery' of the Americas by European explorers, the establishment of European colonies in the Americas, Africa, and Asia, the creation of global trade networks that connected continents for the first time, the exchange of plants, animals, diseases, and cultures between the Old and New Worlds known as the Columbian Exchange, the subjugation and exploitation of indigenous peoples, the transatlantic slave trade that forcibly transported millions of Africans to the Americas, and the beginning of European global dominance that would shape world history for the next five centuries, creating both opportunities and immense suffering.",
    options: ["Age of Discovery", "Age of Enlightenment", "Age of Revolution", "Age of Imperialism"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This ancient empire, which emerged as the continuation of the Eastern Roman Empire after the fall of the Western Roman Empire in 476 CE, controlled much of the Middle East, North Africa, and parts of Europe for over a thousand years, was known for its tolerance of different religions and cultures which allowed it to govern diverse populations, preserved and transmitted classical Greek and Roman knowledge to both the Islamic world and later to Western Europe, developed a sophisticated legal system based on Roman law, created magnificent art and architecture including the Hagia Sophia, served as a buffer between Europe and expanding Islamic powers, and its capital Constantinople was one of the world's greatest cities and a center of trade, culture, and learning until its fall to the Ottomans in 1453.",
    options: ["Roman Empire", "Byzantine Empire", "Ottoman Empire", "Persian Empire"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This major revolutionary event, which began in 1789 with the storming of the Bastille and continued through a series of radical phases until 1799, overthrew the French monarchy that had ruled for centuries, established a republic based on principles of liberty, equality, and fraternity, executed King Louis XVI and Queen Marie Antoinette, saw the rise and fall of the Reign of Terror under Maximilien Robespierre, inspired revolutionary movements throughout Europe and the Americas, led to the rise of Napoleon Bonaparte who would reshape European politics, fundamentally changed French society by abolishing feudal privileges, and established ideals of democracy and human rights that would influence political movements worldwide for centuries to come.",
    options: ["American Revolution", "French Revolution", "Russian Revolution", "Industrial Revolution"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This ancient Chinese philosopher, who lived during the Spring and Autumn period of Chinese history, developed a system of ethical and social philosophy that would become known as Confucianism, emphasized the importance of family relationships and respect for elders, advocated for moral behavior and proper conduct in all aspects of life, believed that a harmonious society could be achieved through education and moral cultivation, taught that rulers should lead by example and govern with benevolence, and his teachings became the foundation of Chinese education, government, and social structure for over two thousand years, profoundly influencing Chinese culture, values, and way of life, and spreading to other East Asian countries including Korea, Japan, and Vietnam.",
    options: ["Laozi", "Confucius", "Mencius", "Zhuangzi"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This period of intellectual and cultural movement in 18th-century Europe, characterized by emphasis on reason, science, individual rights, and skepticism of traditional authority, produced influential thinkers including Voltaire, Rousseau, Montesquieu, and Kant, challenged the authority of the Catholic Church and absolute monarchies, promoted ideas of democracy, separation of powers, and human rights, influenced the American Revolution with its emphasis on natural rights and government by consent, inspired the French Revolution with its calls for liberty and equality, contributed to the development of modern science and the scientific method, and established intellectual foundations for modern Western democracy, human rights, and secular government, fundamentally changing how people thought about politics, society, and human nature.",
    options: ["Renaissance", "Reformation", "Enlightenment", "Romanticism"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This ancient civilization, which flourished in the Andes Mountains of South America from the 13th to the 16th century, built an extensive road network spanning over 25,000 miles that connected their vast empire, constructed impressive stone structures including Machu Picchu using advanced engineering techniques without mortar, developed a sophisticated agricultural system using terraces and irrigation, created a complex administrative system using knotted strings called quipus for record-keeping, organized their society into a rigid hierarchical structure with the emperor at the top, and was conquered by Spanish conquistadors led by Francisco Pizarro in the 16th century, bringing an end to one of the largest and most sophisticated empires in pre-Columbian America.",
    options: ["Aztec", "Maya", "Inca", "Olmec"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This global conflict, fought between 1939 and 1945, was the deadliest conflict in human history with an estimated 70-85 million fatalities including both military personnel and civilians, involved most of the world's nations organized into two opposing military alliances, saw the use of new and devastating weapons including atomic bombs, resulted in the Holocaust in which six million Jews and millions of others were systematically murdered by Nazi Germany, led to the division of Europe and the beginning of the Cold War, resulted in the establishment of the United Nations to prevent future global conflicts, decolonization movements that would reshape the world map, and marked a fundamental shift in global power from Europe to the United States and Soviet Union, creating a new world order that would dominate international relations for the next half century.",
    options: ["World War I", "World War II", "Korean War", "Cold War"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This ancient Greek city-state, located in Attica, is widely regarded as the birthplace of democracy, where citizens participated directly in government decisions, was home to some of history's greatest philosophers including Socrates, Plato, and Aristotle, produced magnificent art and architecture including the Parthenon, developed a sophisticated legal system, was a center of learning and culture that attracted scholars and artists from throughout the Mediterranean, played a crucial role in defeating the Persian Empire in the Persian Wars, established an empire through the Delian League, and despite its eventual defeat in the Peloponnesian War, left behind a cultural and intellectual legacy that has profoundly influenced Western civilization for over two millennia, establishing ideals of democracy, philosophy, art, and learning that continue to inspire people today.",
    options: ["Sparta", "Athens", "Thebes", "Corinth"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This period of European history, beginning in Italy in the 14th century and spreading throughout Europe over the next three centuries, marked a transition from the medieval to the modern world, saw a renewed interest in classical Greek and Roman art, literature, and philosophy that had been largely forgotten during the Middle Ages, produced some of the world's greatest artists including Leonardo da Vinci whose works like the Mona Lisa and The Last Supper remain iconic, Michelangelo whose David and Sistine Chapel ceiling are masterpieces of human achievement, and Raphael whose paintings exemplify Renaissance ideals of beauty and harmony, witnessed the development of new artistic techniques including linear perspective that created the illusion of depth, chiaroscuro that used light and shadow for dramatic effect, and sfumato that created soft transitions between colors, saw the invention of the printing press by Johannes Gutenberg that revolutionized the spread of knowledge and made books accessible to ordinary people, and laid the intellectual foundations for the Scientific Revolution and the Age of Exploration, fundamentally changing European society, culture, and worldview.",
    options: ["Middle Ages", "Renaissance", "Enlightenment", "Industrial Revolution"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This ancient empire, which at its height stretched from Britain in the northwest to Egypt in the southeast and from Spain in the west to the Middle East in the east, covering approximately 5 million square kilometers and ruling over an estimated 60-70 million people, was renowned for its advanced engineering achievements including aqueducts that brought fresh water to cities over long distances, extensive road networks totaling over 250,000 miles that facilitated trade and military movement, sophisticated legal system based on the Twelve Tables that influenced Western jurisprudence for centuries, highly organized military legions that maintained order across vast territories, architectural achievements including the Colosseum which could seat 50,000 spectators, the Pantheon with its revolutionary dome, and numerous forums and temples, and its ability to integrate diverse cultures and peoples into a unified political system through a combination of military force, legal frameworks, infrastructure development, and cultural assimilation, leaving a lasting legacy that continues to influence modern Western civilization in areas including law, government, engineering, architecture, language, and culture.",
    options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This major historical event, which occurred in 1492 when Christopher Columbus, sailing under the sponsorship of the Spanish monarchs Ferdinand and Isabella, reached the islands of the Caribbean, marked the beginning of sustained European contact with the Americas, initiated a process of exploration, conquest, and colonization that would transform both the Old and New Worlds, led to the Columbian Exchange which involved the transfer of plants, animals, diseases, technologies, and cultures between Europe, Africa, and the Americas, introduced crops like potatoes, tomatoes, and corn to Europe while bringing wheat, horses, and cattle to the Americas, brought devastating diseases like smallpox and measles to indigenous populations who had no immunity, resulted in the deaths of millions of Native Americans, established European colonies throughout the Americas, initiated the transatlantic slave trade that would forcibly transport millions of Africans to the Americas, and fundamentally reshaped global trade, politics, and demographics, creating the modern world as we know it.",
    options: ["Discovery of America", "Fall of Constantinople", "Battle of Hastings", "Protestant Reformation"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This ancient Chinese dynasty, which ruled from 618 to 907 CE and is considered a golden age of Chinese civilization, saw significant territorial expansion through military conquests that extended Chinese influence into Central Asia, witnessed remarkable advances in art including the development of landscape painting and poetry that reached new heights of sophistication, saw the flourishing of literature with poets like Li Bai and Du Fu creating works that are still considered masterpieces, experienced technological innovations including the development of woodblock printing that made books more accessible, improvements in agriculture that increased food production, and advances in medicine, established a sophisticated civil service examination system that selected government officials based on merit rather than birth, created a cosmopolitan culture that welcomed foreign influences including Buddhism which flourished, and maintained a period of relative peace and prosperity that allowed culture and learning to thrive, making it one of the most culturally rich periods in Chinese history.",
    options: ["Han Dynasty", "Tang Dynasty", "Song Dynasty", "Ming Dynasty"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This transformative period in human history, beginning in Britain in the mid-18th century with the development of new manufacturing processes and spreading throughout Europe, North America, and eventually the world, was characterized by the transition from agrarian, handcraft-based economies to industrial, machine-based production systems, the development and application of new technologies including James Watt's improved steam engine that provided reliable power for factories and transportation, the spinning jenny and power loom that revolutionized textile production, the development of iron and steel production techniques that enabled the construction of railways, bridges, and buildings on an unprecedented scale, the growth of cities as millions of people migrated from rural areas seeking factory work, creating urban centers that were both centers of opportunity and places of overcrowding, pollution, and social problems, the emergence of new social classes including industrial capitalists who owned the means of production and urban proletariat who worked in factories, significant changes in family structure as work moved from the home to factories, environmental impacts including air and water pollution, deforestation, and resource depletion, and the creation of unprecedented wealth alongside new forms of poverty and social inequality, fundamentally reshaping human society, the relationship between humans and their environment, and establishing patterns of economic development that would dominate the modern world.",
    options: ["Agricultural Revolution", "Industrial Revolution", "Digital Revolution", "Scientific Revolution"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This ancient civilization, located in what is now modern-day central Mexico, built an impressive capital city called Tenochtitlan on an island in Lake Texcoco that was larger and more populous than most European cities of the time, developed a complex calendar system that combined a 260-day ritual calendar with a 365-day solar calendar, created a sophisticated writing system using pictographs and ideograms, built massive pyramids including the Templo Mayor that served as religious and political centers, established a tribute system that extracted resources from conquered territories, practiced human sacrifice as part of their religious ceremonies believing it was necessary to maintain the cosmic order, and was conquered by Spanish conquistadors led by Hernán Cortés in the early 16th century, bringing an end to one of the most powerful empires in Mesoamerica and marking the beginning of Spanish colonial rule in the region.",
    options: ["Aztec", "Maya", "Inca", "Olmec"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This major conflict, fought between 1950 and 1953, began when North Korean forces invaded South Korea in an attempt to reunify the Korean Peninsula under communist rule, involved United Nations forces led by the United States fighting to defend South Korea, saw the intervention of Chinese forces on the side of North Korea after UN forces approached the Chinese border, resulted in millions of casualties including both military personnel and civilians, saw the use of new military technologies including jet aircraft and helicopters, ended in an armistice rather than a peace treaty leaving the Korean Peninsula divided along roughly the same line where the war began, established the Demilitarized Zone (DMZ) that continues to separate North and South Korea today, demonstrated the willingness of the United States to use military force to contain communism during the Cold War, and left a legacy of division and tension that continues to affect international relations in East Asia.",
    options: ["World War II", "Korean War", "Vietnam War", "Cold War"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This ancient Greek philosopher, who lived in Athens during the 5th century BCE, is known for his Socratic method of questioning that sought to expose contradictions in people's beliefs and lead them to discover truth through critical thinking, never wrote any philosophical works himself but is known through the writings of his students especially Plato, was sentenced to death by drinking hemlock after being convicted of corrupting the youth and impiety, chose to accept his death sentence rather than escape because he believed in the importance of obeying the laws of the state even when they were unjust, and is considered one of the founders of Western philosophy, establishing a tradition of critical inquiry, ethical examination, and the pursuit of wisdom that has influenced philosophical thought for over two millennia.",
    options: ["Socrates", "Plato", "Aristotle", "Herodotus"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This period of European exploration and colonization, beginning in the late 15th century with voyages sponsored by European monarchs seeking new trade routes to Asia to bypass the Ottoman-controlled overland routes, led to the 'discovery' of the Americas by European explorers including Christopher Columbus, Vasco da Gama's voyage around Africa to India, and Ferdinand Magellan's circumnavigation of the globe, the establishment of European colonies throughout the Americas, Africa, and Asia, the creation of global trade networks that connected continents for the first time in history, the exchange of plants, animals, diseases, and cultures between the Old and New Worlds known as the Columbian Exchange which had profound ecological and demographic consequences, the subjugation and exploitation of indigenous peoples through conquest, forced labor, and cultural destruction, the transatlantic slave trade that forcibly transported millions of Africans to the Americas to work on plantations, and the beginning of European global dominance that would shape world history for the next five centuries, creating both unprecedented opportunities for economic growth and cultural exchange, and immense suffering through exploitation, disease, and violence.",
    options: ["Age of Discovery", "Age of Enlightenment", "Age of Revolution", "Age of Imperialism"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This ancient empire, which controlled much of the Middle East, North Africa, and southeastern Europe for over 600 years from the 14th to the early 20th century, was known for its military prowess and innovative tactics including the use of gunpowder weapons and highly organized infantry units called janissaries, its sophisticated administrative system that governed diverse populations across three continents, its capital Istanbul (formerly Constantinople) which was one of the world's greatest cities and a major center of trade, culture, and learning, its architectural achievements including magnificent mosques and palaces, its role as a bridge between Europe and Asia facilitating trade and cultural exchange, its gradual decline due to economic problems, military defeats, and internal conflicts, and its eventual dissolution after World War I, leaving behind a complex legacy that continues to influence the politics and culture of the regions it once controlled.",
    options: ["Byzantine Empire", "Ottoman Empire", "Persian Empire", "Roman Empire"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This major revolutionary event, which began in 1917 with the February Revolution that overthrew the Russian monarchy and continued with the October Revolution that brought the Bolsheviks to power, overthrew the Romanov dynasty that had ruled Russia for over 300 years, established the world's first communist state based on Marxist-Leninist ideology, led to a brutal civil war between the Red Army and White Army that resulted in millions of deaths, created the Soviet Union which would become a superpower and major force in world politics for most of the 20th century, inspired revolutionary movements and communist parties throughout the world, established a totalitarian system that suppressed political opposition and controlled all aspects of society, implemented radical economic policies including the collectivization of agriculture and rapid industrialization, and fundamentally changed the course of Russian and world history, creating a new model of government and society that would compete with Western democracy for ideological dominance throughout the Cold War.",
    options: ["French Revolution", "Russian Revolution", "Chinese Revolution", "Industrial Revolution"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This ancient Chinese philosopher, who is traditionally credited with founding Taoism and writing the Tao Te Ching, emphasized living in harmony with the natural order of the universe known as the Tao, advocated for simplicity, spontaneity, and non-action (wu wei) as the path to wisdom and effectiveness, believed that the best government was one that governed least and allowed people to follow their natural inclinations, taught that strength comes from flexibility and that the soft and yielding will ultimately overcome the hard and rigid, and his philosophy has had a profound influence on Chinese culture, religion, art, and medicine, complementing Confucianism and Buddhism to form the three main philosophical and religious traditions of China, and his ideas about harmony with nature and the importance of balance continue to resonate in modern environmental and holistic health movements.",
    options: ["Confucius", "Laozi", "Mencius", "Zhuangzi"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This period of intellectual and cultural movement in 18th-century Europe, characterized by emphasis on reason, science, individual rights, and skepticism of traditional authority including the Catholic Church and absolute monarchies, produced influential thinkers including Voltaire who championed freedom of speech and religious tolerance, Rousseau who wrote about the social contract and the general will, Montesquieu who developed the theory of separation of powers, and Kant who explored the limits of human reason, challenged established institutions and beliefs, promoted ideas of democracy, separation of powers, and human rights that would influence political revolutions, influenced the American Revolution with its emphasis on natural rights and government by consent of the governed, inspired the French Revolution with its calls for liberty, equality, and fraternity, contributed to the development of modern science and the scientific method, and established intellectual foundations for modern Western democracy, human rights, and secular government, fundamentally changing how people thought about politics, society, human nature, and the relationship between individuals and the state.",
    options: ["Renaissance", "Reformation", "Enlightenment", "Romanticism"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This ancient civilization, which flourished in Central America and southern Mexico from approximately 2000 BCE to 1500 CE, developed one of the most sophisticated writing systems in the pre-Columbian Americas using hieroglyphs that recorded historical events, religious ceremonies, and astronomical observations, made significant advances in mathematics including the concept of zero which was independently developed and used in complex calculations, created an accurate calendar system that tracked both solar and lunar cycles, built impressive cities with massive pyramids, temples, and plazas including Tikal, Palenque, and Chichen Itza, developed advanced agricultural techniques including terracing and irrigation, and experienced a mysterious collapse around 900 CE in which many of their cities were abandoned, though the reasons for this collapse remain debated among scholars, with theories including environmental degradation, warfare, drought, and social upheaval.",
    options: ["Aztec", "Maya", "Inca", "Olmec"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This major conflict, fought between 1955 and 1975, began as a civil war between communist North Vietnam and anti-communist South Vietnam but escalated into a major international conflict when the United States and its allies intervened to support South Vietnam, involved extensive use of new military technologies including helicopters, jet aircraft, and chemical weapons like Agent Orange, saw the implementation of counterinsurgency strategies and the strategic hamlet program, resulted in millions of casualties including over 58,000 American soldiers and hundreds of thousands of Vietnamese civilians, became deeply divisive in American society leading to massive anti-war protests and social unrest, saw the use of television to bring the realities of war into American homes for the first time, ended with the withdrawal of American forces and the eventual reunification of Vietnam under communist rule in 1975, left lasting physical and psychological scars on veterans and civilians, and fundamentally changed American foreign policy and public attitudes toward military intervention, creating a legacy that continues to influence American politics and military decision-making.",
    options: ["Korean War", "Vietnam War", "Cold War", "Gulf War"],
    correct_index: 1,
    difficulty: "hard"
  }
];

async function seedHistoryCategory(closePool = true) {
  const client = await pool.connect();
  
  try {
    console.log('Starting History category insertion...');
    
    // Create the "History" category
    const categoryResult = await client.query(
      `INSERT INTO categories (name, slug) 
       VALUES ($1, $2) 
       ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
       RETURNING id`,
      ['History', 'history']
    );
    
    const categoryId = categoryResult.rows[0].id;
    console.log(`✓ Category "History" created/updated with ID: ${categoryId}`);
    
    // Insert questions
    console.log('Inserting questions...');
    let insertedCount = 0;
    
    for (const q of historyQuestions) {
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
  seedHistoryCategory(true)
    .then(() => {
      console.log('Script finished successfully');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Fatal error:', err);
      process.exit(1);
    });
}

module.exports = { seedHistoryCategory, historyQuestions };
