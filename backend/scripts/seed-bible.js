require('dotenv').config();
const { pool } = require('../src/config/db');

// Bible questions - 50 easy, 50 medium, 50 hard
const bibleQuestions = [
  // Easy - 50 questions
  {
    question: "Who built the ark?",
    options: ["Moses", "Noah", "Abraham", "David"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the first book of the Bible?",
    options: ["Exodus", "Genesis", "Matthew", "Psalms"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Who was thrown into a lions' den?",
    options: ["David", "Daniel", "Moses", "Joseph"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "How many days did God take to create the world?",
    options: ["5", "6", "7", "8"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "Who was the first man created by God?",
    options: ["Noah", "Adam", "Abraham", "Moses"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the garden where Adam and Eve lived?",
    options: ["Garden of Eden", "Garden of Gethsemane", "Garden of Paradise", "Garden of Heaven"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the mother of Jesus?",
    options: ["Mary", "Elizabeth", "Sarah", "Ruth"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "How many disciples did Jesus have?",
    options: ["10", "11", "12", "13"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What was the name of the sea that Moses parted?",
    options: ["Red Sea", "Dead Sea", "Mediterranean Sea", "Black Sea"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who betrayed Jesus?",
    options: ["Peter", "Judas", "John", "Thomas"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the giant that David defeated?",
    options: ["Goliath", "Samson", "Saul", "Solomon"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "How many books are in the New Testament?",
    options: ["25", "26", "27", "28"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "Who was swallowed by a big fish?",
    options: ["Moses", "Jonah", "Daniel", "Noah"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of Jesus' earthly father?",
    options: ["Joseph", "David", "Jacob", "Abraham"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What was the first miracle Jesus performed?",
    options: ["Walking on water", "Turning water into wine", "Feeding 5000", "Raising Lazarus"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Who was the strongest man in the Bible?",
    options: ["David", "Goliath", "Samson", "Moses"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What was the name of the city where Jesus was born?",
    options: ["Jerusalem", "Nazareth", "Bethlehem", "Galilee"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "How many days was Jesus in the tomb before rising?",
    options: ["1", "2", "3", "4"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "Who wrote most of the Psalms?",
    options: ["Solomon", "David", "Moses", "Samuel"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the first woman?",
    options: ["Sarah", "Eve", "Ruth", "Mary"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Who was the king known for his wisdom?",
    options: ["David", "Saul", "Solomon", "Herod"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What was the name of the river where Jesus was baptized?",
    options: ["Nile", "Jordan", "Euphrates", "Tigris"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Who was the first murderer mentioned in the Bible?",
    options: ["Cain", "Abel", "Adam", "Noah"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What was the name of the mountain where Moses received the Ten Commandments?",
    options: ["Mount Sinai", "Mount Zion", "Mount Olive", "Mount Carmel"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "How many plagues did God send to Egypt?",
    options: ["8", "9", "10", "12"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "Who was the father of Isaac?",
    options: ["Noah", "Abraham", "Jacob", "Moses"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the place where Jesus was crucified?",
    options: ["Golgotha", "Gethsemane", "Bethlehem", "Nazareth"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the first king of Israel?",
    options: ["David", "Saul", "Solomon", "Samuel"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the boat that saved Noah and his family?",
    options: ["The Ark", "The Ship", "The Vessel", "The Boat"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the brother of Moses?",
    options: ["Aaron", "Joshua", "Caleb", "David"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What was the name of the tree in the Garden of Eden that Adam and Eve were forbidden to eat from?",
    options: ["Tree of Life", "Tree of Knowledge", "Tree of Good and Evil", "Tree of Wisdom"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "Who was the mother of John the Baptist?",
    options: ["Mary", "Elizabeth", "Sarah", "Ruth"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the man who helped Jesus carry the cross?",
    options: ["Simon", "Peter", "John", "James"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the youngest son of Jacob?",
    options: ["Reuben", "Benjamin", "Joseph", "Judah"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the city where Jesus performed his first miracle?",
    options: ["Cana", "Jerusalem", "Bethlehem", "Nazareth"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the first person to see Jesus after his resurrection?",
    options: ["Peter", "John", "Mary Magdalene", "Thomas"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What was the name of the man who denied Jesus three times?",
    options: ["Judas", "Peter", "John", "Thomas"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "How many sons did Jacob have?",
    options: ["10", "11", "12", "13"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What was the name of the woman who became the wife of Boaz?",
    options: ["Ruth", "Esther", "Sarah", "Rebecca"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the prophet who was taken to heaven in a chariot of fire?",
    options: ["Elisha", "Elijah", "Isaiah", "Jeremiah"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the man who was thrown into a fiery furnace?",
    options: ["Daniel", "Shadrach", "Meshach", "Abednego"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Who was the mother of Samuel?",
    options: ["Hannah", "Sarah", "Rebecca", "Rachel"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What was the name of the place where Jesus prayed before his arrest?",
    options: ["Gethsemane", "Golgotha", "Bethlehem", "Nazareth"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the first person to be called a Hebrew?",
    options: ["Abraham", "Isaac", "Jacob", "Noah"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What was the name of the man who was sold into slavery by his brothers?",
    options: ["Benjamin", "Joseph", "Judah", "Reuben"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "Who was the king who ordered the killing of all baby boys in Bethlehem?",
    options: ["Herod", "Pilate", "Caesar", "Nero"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What was the name of the man who baptized Jesus?",
    options: ["John the Baptist", "Peter", "Paul", "Andrew"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the father of John the Baptist?",
    options: ["Zechariah", "Joseph", "Jacob", "David"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What was the name of the man who was raised from the dead by Jesus?",
    options: ["Lazarus", "Jairus", "Nicodemus", "Zacchaeus"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the woman at the well that Jesus spoke to?",
    options: ["Mary", "Martha", "Samaritan woman", "Mary Magdalene"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What was the name of the man who was a tax collector and became a disciple?",
    options: ["Matthew", "Mark", "Luke", "John"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the man who asked Jesus what he must do to inherit eternal life?",
    options: ["Rich young ruler", "Nicodemus", "Zacchaeus", "Pharisee"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What was the name of the man who was a Pharisee and came to Jesus at night?",
    options: ["Nicodemus", "Zacchaeus", "Jairus", "Simon"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the man who climbed a tree to see Jesus?",
    options: ["Zacchaeus", "Nicodemus", "Jairus", "Bartimaeus"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What was the name of the blind man that Jesus healed?",
    options: ["Bartimaeus", "Lazarus", "Jairus", "Nicodemus"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "Who was the man who was a Roman centurion and had great faith?",
    options: ["Cornelius", "Centurion", "Pilate", "Caesar"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What was the name of the man who was a leper and was healed by Jesus?",
    options: ["Leprous man", "Ten lepers", "Lazarus", "Jairus"],
    correct_index: 1,
    difficulty: "easy"
  },
  // Medium difficulty - 50 questions
  {
    question: "This Old Testament figure, known for his incredible patience and faithfulness despite losing everything he owned including his family and health, engaged in profound theological discussions with his friends about suffering and God's justice, ultimately receiving double restoration of all his possessions.",
    options: ["Job", "Abraham", "Moses", "David"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament apostle, originally named Saul, was a zealous persecutor of early Christians until he experienced a dramatic conversion on the road to Damascus, after which he became one of the most influential missionaries and writers in the early church, authoring many of the letters in the New Testament.",
    options: ["Peter", "Paul", "John", "James"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This Old Testament prophet, called by God at a young age, delivered messages of judgment and hope to the nation of Israel, and is known for his vision of God's throne and the calling where he responded 'Here am I, send me' when asked who would go for the Lord.",
    options: ["Jeremiah", "Isaiah", "Ezekiel", "Daniel"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This Old Testament judge and military leader, known for her wisdom and leadership, was the only female judge mentioned in the Book of Judges, and she helped deliver Israel from the oppression of the Canaanite king Jabin.",
    options: ["Deborah", "Ruth", "Esther", "Hannah"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a wealthy man from Arimathea who was a secret disciple of Jesus, provided his own tomb for Jesus' burial after the crucifixion, demonstrating courage by going to Pilate to request Jesus' body.",
    options: ["Nicodemus", "Joseph of Arimathea", "Zacchaeus", "Simon of Cyrene"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This Old Testament king, known for his wisdom that was granted by God, built the magnificent temple in Jerusalem, wrote many proverbs and songs, but later in life turned away from God due to his many foreign wives who led him into idolatry.",
    options: ["David", "Saul", "Solomon", "Rehoboam"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This New Testament woman, a close friend of Jesus along with her sister Mary, was known for her practical service and hospitality, and she is remembered for her complaint to Jesus that her sister was not helping with the household work.",
    options: ["Mary", "Martha", "Mary Magdalene", "Salome"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This Old Testament prophet, known for his dramatic calling where he was swallowed by a great fish after trying to flee from God's command, eventually preached repentance to the city of Nineveh, which resulted in the entire city turning to God.",
    options: ["Jonah", "Daniel", "Jeremiah", "Ezekiel"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament disciple, known as 'the beloved disciple' and one of the three closest to Jesus along with Peter and James, wrote the Gospel of John, three epistles, and the Book of Revelation while exiled on the island of Patmos.",
    options: ["John", "James", "Andrew", "Philip"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, the youngest son of Jacob and Rachel, was sold into slavery by his jealous brothers, rose to become the second most powerful man in Egypt after interpreting Pharaoh's dreams, and later saved his family from famine.",
    options: ["Benjamin", "Joseph", "Judah", "Reuben"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This New Testament woman, a Gentile from the region of Tyre and Sidon, demonstrated remarkable faith when she asked Jesus to heal her demon-possessed daughter, persisting even when Jesus initially seemed to reject her request.",
    options: ["Syrophoenician woman", "Samaritan woman", "Mary", "Martha"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament prophet, known for his dramatic visions including wheels within wheels and the valley of dry bones, was called to be a watchman for Israel and delivered messages of both judgment and restoration during the Babylonian exile.",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a Roman governor who presided over Jesus' trial, repeatedly found no fault in Jesus but ultimately gave in to the crowd's demands and ordered his crucifixion, famously washing his hands to show he was not responsible.",
    options: ["Herod", "Pilate", "Caiaphas", "Annas"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This Old Testament judge, known for his incredible strength that came from his long hair, was betrayed by Delilah who cut his hair while he slept, leading to his capture by the Philistines, though he regained his strength and died destroying their temple.",
    options: ["Gideon", "Samson", "Deborah", "Jephthah"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This New Testament woman, a follower of Jesus who was present at both his crucifixion and resurrection, was the first person to see the risen Christ and was instructed by him to tell the disciples about his resurrection.",
    options: ["Mary Magdalene", "Mary", "Martha", "Salome"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament king, chosen by God to replace Saul, was known as a man after God's own heart, wrote many of the Psalms, and despite his failures including adultery and murder, was forgiven and remained in God's favor, establishing a dynasty that would lead to the Messiah.",
    options: ["David", "Saul", "Solomon", "Rehoboam"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament disciple, known for his doubt when told about Jesus' resurrection, insisted on seeing and touching Jesus' wounds before he would believe, leading to Jesus' appearance and the famous declaration 'My Lord and my God'.",
    options: ["Thomas", "Peter", "John", "James"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament prophet, known for his dramatic confrontation with the prophets of Baal on Mount Carmel where he called down fire from heaven, was taken up to heaven in a whirlwind accompanied by a chariot of fire.",
    options: ["Elisha", "Elijah", "Isaiah", "Jeremiah"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a Roman centurion stationed in Capernaum, demonstrated such great faith that Jesus marveled at it, saying he had not found such faith even in Israel, and his servant was healed by Jesus' word alone.",
    options: ["Cornelius", "Centurion", "Pilate", "Caesar"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, the wife of Abraham, was known for her beauty and her laughter when told she would bear a son in her old age, and she became the mother of Isaac, through whom God's promise to Abraham would be fulfilled.",
    options: ["Sarah", "Rebecca", "Rachel", "Leah"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a Pharisee and member of the Sanhedrin, came to Jesus secretly at night to ask about being born again, and later helped prepare Jesus' body for burial, bringing a mixture of myrrh and aloes.",
    options: ["Nicodemus", "Joseph of Arimathea", "Zacchaeus", "Simon"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament prophet, known for his lamentations over the destruction of Jerusalem, was called the weeping prophet and wrote both the Book of Jeremiah and Lamentations, warning the people of coming judgment but also promising future restoration.",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This New Testament disciple, a fisherman from Bethsaida, was one of the first to follow Jesus along with his brother Andrew, and he is known for his impulsive nature, his three denials of Jesus, and later becoming a bold leader in the early church.",
    options: ["Peter", "John", "James", "Andrew"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, the grandson of Abraham, was known for wrestling with God and receiving the name Israel, and he had twelve sons who became the twelve tribes of Israel.",
    options: ["Isaac", "Jacob", "Joseph", "Benjamin"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This New Testament woman, a follower of Jesus from Magdala, was delivered from seven demons by Jesus and became one of his most devoted followers, supporting his ministry financially and being present at key moments including his death and resurrection.",
    options: ["Mary Magdalene", "Mary", "Martha", "Salome"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament judge, called by God through an angel, led Israel to victory against the Midianites using only 300 men with torches and trumpets, demonstrating that victory comes from God rather than human strength.",
    options: ["Gideon", "Samson", "Deborah", "Jephthah"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a tax collector from Jericho who was short in stature, climbed a sycamore tree to see Jesus, and after Jesus visited his home, he repented and promised to give half his goods to the poor and restore fourfold to anyone he had cheated.",
    options: ["Zacchaeus", "Matthew", "Nicodemus", "Simon"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament prophet, known for his interpretation of dreams and his ability to remain faithful to God while serving in the courts of foreign kings, was thrown into a lions' den but was miraculously protected by God.",
    options: ["Daniel", "Shadrach", "Meshach", "Abednego"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, the mother of Jesus, was visited by the angel Gabriel who told her she would conceive by the Holy Spirit, and she responded with the Magnificat, a song of praise that has become one of the most famous prayers in Christianity.",
    options: ["Mary", "Elizabeth", "Sarah", "Anna"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament king, the first king of Israel chosen by God through the prophet Samuel, started well but later disobeyed God's commands, leading to his rejection as king and his eventual death in battle against the Philistines.",
    options: ["Saul", "David", "Solomon", "Rehoboam"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament disciple, one of the sons of Zebedee and brother of John, was part of Jesus' inner circle along with Peter and John, and he was the first apostle to be martyred, killed by King Herod Agrippa.",
    options: ["James", "John", "Andrew", "Philip"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, the wife of Boaz and great-grandmother of King David, demonstrated remarkable loyalty to her mother-in-law Naomi, leaving her own people to follow Naomi back to Israel, and her story is told in one of only two books in the Bible named after women.",
    options: ["Ruth", "Esther", "Deborah", "Hannah"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a Roman centurion who was the first Gentile to receive the gospel through Peter, had a vision that led to the understanding that the gospel was for all people, not just Jews, marking a significant turning point in early church history.",
    options: ["Cornelius", "Centurion", "Pilate", "Caesar"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament prophet, the successor to Elijah, received a double portion of Elijah's spirit and performed twice as many miracles, including raising a dead child and multiplying oil for a widow, demonstrating God's power through his ministry.",
    options: ["Elisha", "Elijah", "Isaiah", "Jeremiah"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a leader in the early church in Jerusalem, was known for his wisdom and was chosen along with six others to help with the distribution of food to widows, and he became the first Christian martyr, stoned to death for his faith.",
    options: ["Stephen", "Philip", "Barnabas", "Timothy"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, the mother of Samuel, was barren for many years but prayed fervently for a child, vowing to dedicate him to God's service, and her prayer was answered, leading to the birth of one of Israel's greatest prophets and judges.",
    options: ["Hannah", "Sarah", "Rebecca", "Rachel"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a disciple who was also known as Nathanael, was initially skeptical when told about Jesus, asking if anything good could come from Nazareth, but after meeting Jesus, he declared him to be the Son of God and King of Israel.",
    options: ["Bartholomew", "Thomas", "Philip", "Andrew"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, the wife of Ahasuerus (Xerxes), risked her life to save her people from destruction, demonstrating courage and wisdom in her approach to the king, and her story is commemorated in the Jewish festival of Purim.",
    options: ["Esther", "Ruth", "Deborah", "Hannah"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a disciple and tax collector, left his profession to follow Jesus and later wrote the first Gospel, which emphasizes Jesus' fulfillment of Old Testament prophecies and his role as the promised Messiah.",
    options: ["Matthew", "Mark", "Luke", "John"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, the father of John the Baptist, was a priest who was struck mute when he doubted the angel's message about his wife Elizabeth bearing a son in her old age, and he regained his speech when he named his son John as instructed.",
    options: ["Zechariah", "Joseph", "Jacob", "David"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a disciple who was a fisherman from Bethsaida, was the first to be called by Jesus along with his brother Simon Peter, and he is known for bringing others to Jesus, including his brother and a boy with five loaves and two fish.",
    options: ["Andrew", "John", "James", "Philip"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, the successor to Moses, led the Israelites into the Promised Land after forty years of wandering in the wilderness, and he is remembered for his famous declaration 'As for me and my house, we will serve the Lord'.",
    options: ["Joshua", "Caleb", "Aaron", "Eleazar"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a disciple who was also called Levi, was a tax collector before following Jesus, and he hosted a great feast in his house where Jesus ate with tax collectors and sinners, demonstrating Jesus' mission to reach the outcasts of society.",
    options: ["Matthew", "Mark", "Luke", "John"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, the wife of Isaac and mother of Jacob and Esau, helped ensure that Jacob received his father's blessing instead of his older brother Esau, demonstrating both her faith in God's promise and her willingness to take action to see it fulfilled.",
    options: ["Rebecca", "Sarah", "Rachel", "Leah"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a disciple who was a fisherman and the brother of Andrew, was given the name Peter (meaning rock) by Jesus, who declared that upon this rock he would build his church, and he became a foundational leader in the early Christian movement.",
    options: ["Peter", "John", "James", "Andrew"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, a prophetess and judge who led Israel to victory against the Canaanites, is remembered for her song of victory alongside Barak, and she is one of only a few women in the Bible who held positions of leadership and authority.",
    options: ["Deborah", "Ruth", "Esther", "Hannah"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a man from Cyrene who was forced to carry Jesus' cross to Golgotha, represents the reality that following Jesus involves taking up one's cross, and his act of service has been remembered throughout Christian history.",
    options: ["Simon of Cyrene", "Joseph of Arimathea", "Nicodemus", "Zacchaeus"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, the father of John the Baptist and husband of Elizabeth, was a priest who served in the temple, and when he was chosen by lot to burn incense, he was visited by the angel Gabriel who announced the coming birth of his son.",
    options: ["Zechariah", "Joseph", "Jacob", "David"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a man from Bethany who was the brother of Mary and Martha, was raised from the dead by Jesus after being in the tomb for four days, demonstrating Jesus' power over death and foreshadowing his own resurrection.",
    options: ["Lazarus", "Jairus", "Nicodemus", "Bartimaeus"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, a Moabite woman who demonstrated extraordinary loyalty to her Israelite mother-in-law, left her homeland to follow Naomi, worked in the fields of Boaz, and became an ancestor of both King David and Jesus Christ.",
    options: ["Ruth", "Esther", "Deborah", "Hannah"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a blind beggar from Jericho, called out to Jesus as 'Son of David' and persisted despite being told to be quiet, demonstrating faith that resulted in his healing and his following of Jesus along the road.",
    options: ["Bartimaeus", "Lazarus", "Jairus", "Nicodemus"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, a judge of Israel known for making a rash vow that resulted in the sacrifice of his daughter, led Israel to victory against the Ammonites, but his story serves as a warning about making vows without considering the consequences.",
    options: ["Jephthah", "Gideon", "Samson", "Deborah"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a ruler of the synagogue whose daughter was raised from the dead by Jesus, demonstrated faith by coming to Jesus despite his daughter's death, believing that Jesus could still help even in the face of death.",
    options: ["Jairus", "Lazarus", "Nicodemus", "Bartimaeus"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, the mother of Moses, demonstrated courage and faith by hiding her son for three months and then placing him in a basket on the Nile River, trusting God with his safety, and she was later able to nurse him when Pharaoh's daughter found him.",
    options: ["Jochebed", "Miriam", "Zipporah", "Sarah"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a man who was paralyzed and was lowered through a roof by his friends to reach Jesus, was healed both physically and spiritually when Jesus forgave his sins and told him to take up his mat and walk.",
    options: ["Paralytic man", "Lazarus", "Jairus", "Bartimaeus"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, the sister of Moses and Aaron, was a prophetess who led the women of Israel in song and dance after crossing the Red Sea, and she is remembered for her role in the early life of Moses and in the Exodus story.",
    options: ["Miriam", "Jochebed", "Zipporah", "Sarah"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a man who had been an invalid for thirty-eight years, was healed by Jesus at the Pool of Bethesda, and when questioned by the religious leaders, he testified about Jesus, though he didn't know who had healed him at first.",
    options: ["Man at Bethesda", "Lazarus", "Jairus", "Bartimaeus"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This Old Testament figure, a prophet who was called to be a watchman for Israel, delivered messages of judgment against various nations, and his name means 'God strengthens', reflecting the source of his ability to speak difficult truths to the people.",
    options: ["Ezekiel", "Isaiah", "Jeremiah", "Daniel"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This New Testament figure, a man who was possessed by a legion of demons and lived among the tombs, was healed by Jesus who cast the demons into a herd of pigs, and he became a witness for Jesus in the Decapolis region.",
    options: ["Gerasene demoniac", "Lazarus", "Jairus", "Bartimaeus"],
    correct_index: 0,
    difficulty: "medium"
  },
  // Hard difficulty - 50 questions
  {
    question: "This Old Testament patriarch, known for his unwavering faith and obedience to God, left his homeland in Ur of the Chaldeans at God's command, journeyed to a land he did not know, and through a series of tests including the near-sacrifice of his son Isaac, became the father of many nations and the recipient of God's covenant promise that through his descendants all nations would be blessed, establishing a pattern of faith that would be referenced throughout both Old and New Testaments.",
    options: ["Abraham", "Noah", "Moses", "David"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament apostle, originally a zealous Pharisee named Saul who violently persecuted the early Christian church, experienced a dramatic conversion on the road to Damascus when he was struck blind by a heavenly light and heard the voice of Jesus, after which he became the most influential missionary in the early church, establishing churches throughout the Roman Empire, writing thirteen letters that form a significant portion of the New Testament, and ultimately being martyred in Rome, leaving behind a legacy that shaped Christian theology and practice for centuries.",
    options: ["Peter", "Paul", "John", "James"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This Old Testament prophet, called by God in a dramatic vision where he saw the Lord seated on a throne surrounded by seraphim, responded to God's question 'Whom shall I send?' with 'Here am I, send me', and throughout his long ministry spanning the reigns of four kings, he delivered messages of both judgment for Israel's sin and hope for future restoration, including detailed prophecies about the coming Messiah that would be fulfilled in Jesus Christ, making him one of the most quoted prophets in the New Testament.",
    options: ["Jeremiah", "Isaiah", "Ezekiel", "Daniel"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, known for his incredible patience and unwavering faith despite experiencing the complete loss of his wealth, the death of all his children, and severe physical affliction, engaged in profound theological discussions with three friends about the nature of suffering, God's justice, and human righteousness, ultimately receiving a direct revelation from God that humbled him, and he was restored with double of everything he had lost, becoming a symbol of perseverance through trials and God's sovereignty over all circumstances.",
    options: ["Job", "Abraham", "Moses", "David"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a wealthy member of the Sanhedrin from Arimathea who was a secret disciple of Jesus, demonstrated remarkable courage after the crucifixion by going to Pilate to request Jesus' body, providing his own new tomb cut out of rock for the burial, and along with Nicodemus, preparing the body with expensive spices and linen cloths, fulfilling the prophecy that Jesus would be buried with the rich, and his actions ensured that Jesus received a proper burial despite the circumstances of his death.",
    options: ["Nicodemus", "Joseph of Arimathea", "Zacchaeus", "Simon of Cyrene"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This Old Testament king, the son of David and Bathsheba, was granted extraordinary wisdom by God when he asked for understanding rather than wealth or long life, built the magnificent temple in Jerusalem that took seven years to complete, established Israel as a major trading power, wrote thousands of proverbs and songs including the Song of Songs and Ecclesiastes, but tragically turned away from God in his later years due to his many foreign wives who led him into idolatry, resulting in the division of the kingdom after his death.",
    options: ["David", "Saul", "Solomon", "Rehoboam"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This New Testament woman, a close friend and follower of Jesus from the village of Bethany, along with her sister Mary and brother Lazarus, was known for her practical service and hospitality, hosting Jesus in her home, and she is remembered for her complaint to Jesus that her sister was not helping with the household work, to which Jesus responded that Mary had chosen the better part, though Martha's service was also valued, and she demonstrated great faith when her brother Lazarus died, believing that Jesus could have prevented his death.",
    options: ["Mary", "Martha", "Mary Magdalene", "Salome"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This Old Testament prophet, called by God to preach repentance to the great city of Nineveh, initially tried to flee from this responsibility by boarding a ship going in the opposite direction, was thrown overboard during a storm and swallowed by a great fish, spent three days and nights in the fish's belly where he prayed and repented, was vomited onto dry land, and then fulfilled his mission, resulting in the entire city of Nineveh repenting and turning to God, though he was disappointed by God's mercy toward the city.",
    options: ["Jonah", "Daniel", "Jeremiah", "Ezekiel"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament disciple, known as 'the disciple whom Jesus loved' and one of the three closest to Jesus along with Peter and his brother James, was present at key moments including the Transfiguration, the raising of Jairus' daughter, and Jesus' agony in Gethsemane, wrote the Gospel of John emphasizing Jesus' divinity, three epistles focusing on love and truth, and the Book of Revelation while exiled on the island of Patmos, and he is traditionally believed to have been the only apostle to die a natural death, though he faced persecution and exile.",
    options: ["John", "James", "Andrew", "Philip"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, the favorite son of Jacob and Rachel, was sold into slavery by his jealous brothers at the age of seventeen, rose to prominence in Egypt through his ability to interpret dreams, became second in command to Pharaoh and saved Egypt and surrounding nations from famine, and when his brothers came seeking food, he tested them before revealing his identity and forgiving them, demonstrating God's providential care and the theme that what others meant for evil, God meant for good.",
    options: ["Benjamin", "Joseph", "Judah", "Reuben"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This New Testament woman, a Gentile from the region of Tyre and Sidon, demonstrated remarkable faith and persistence when she came to Jesus asking him to heal her demon-possessed daughter, and despite Jesus' initial response that seemed to reject her request, comparing her to a dog, she humbly accepted the analogy and turned it into a reason for Jesus to help her, showing that even the dogs eat the crumbs from the master's table, which so impressed Jesus that he declared her faith great and granted her request.",
    options: ["Syrophoenician woman", "Samaritan woman", "Mary", "Martha"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament prophet, called by God during the Babylonian exile, received dramatic visions including wheels within wheels, the valley of dry bones coming to life, and the glory of God leaving and returning to the temple, was called to be a watchman for Israel, delivering messages of both judgment for their idolatry and hope for future restoration, and his prophecies included detailed descriptions of a new temple and the restoration of Israel, making him one of the most visionary and symbolic of all the prophets.",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a Roman governor of Judea appointed by the emperor Tiberius, presided over Jesus' trial and repeatedly declared that he found no fault in Jesus, attempted to release him according to the custom of releasing a prisoner during Passover, and when the crowd demanded Jesus' crucifixion, he famously washed his hands in front of the crowd, declaring himself innocent of Jesus' blood, though he ultimately gave in to political pressure and ordered the crucifixion, demonstrating the conflict between justice and political expediency.",
    options: ["Herod", "Pilate", "Caiaphas", "Annas"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This Old Testament judge, known for his incredible physical strength that was directly connected to his Nazirite vow and his uncut hair, performed feats such as killing a lion with his bare hands, defeating a thousand Philistines with the jawbone of a donkey, and carrying away the gates of Gaza, but was betrayed by Delilah who discovered the source of his strength and cut his hair while he slept, leading to his capture, blinding, and imprisonment, though he regained his strength and died destroying the Philistine temple, killing more in his death than in his life.",
    options: ["Gideon", "Samson", "Deborah", "Jephthah"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This New Testament woman, a follower of Jesus from Magdala who had been delivered from seven demons, was one of his most devoted followers, supporting his ministry financially, was present at his crucifixion when most of the disciples had fled, was among the women who went to the tomb early on the first day of the week, and was the first person to see the risen Christ, though she initially mistook him for the gardener, and she was commissioned by Jesus to tell the disciples about his resurrection, making her 'the apostle to the apostles'.",
    options: ["Mary Magdalene", "Mary", "Martha", "Salome"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament king, chosen by God to replace Saul despite being the youngest son of Jesse, was anointed by the prophet Samuel, gained fame by defeating the giant Goliath with a sling and stone, became a skilled warrior and musician, wrote many of the Psalms expressing the full range of human emotion in relationship with God, committed serious sins including adultery with Bathsheba and the murder of her husband Uriah, but demonstrated genuine repentance and was called a man after God's own heart, establishing a dynasty that would lead to the Messiah.",
    options: ["David", "Saul", "Solomon", "Rehoboam"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament disciple, known for his skepticism when told about Jesus' resurrection, insisted that unless he could see the nail marks in Jesus' hands and put his finger where the nails were and put his hand into Jesus' side, he would not believe, and when Jesus appeared to him and invited him to do exactly that, he fell to his knees declaring 'My Lord and my God', demonstrating that doubt can lead to deeper faith when honestly confronted, and he is remembered as the one who brought the gospel to India according to tradition.",
    options: ["Thomas", "Peter", "John", "James"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament prophet, known for his dramatic confrontation with the prophets of Baal on Mount Carmel where he challenged them to call down fire from heaven, and when they failed, he repaired the altar of the Lord, drenched it with water, and called on God who sent fire that consumed not only the sacrifice but also the wood, stones, dust, and water, after which he prayed for rain ending a three-year drought, and he was later taken up to heaven in a whirlwind accompanied by a chariot of fire and horses of fire, leaving his mantle to his successor Elisha.",
    options: ["Elisha", "Elijah", "Isaiah", "Jeremiah"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a Roman centurion stationed in Capernaum whose servant was paralyzed and in terrible suffering, demonstrated such remarkable faith that when Jesus offered to come to his house, he responded that he was not worthy to have Jesus under his roof, but that Jesus only needed to say the word and his servant would be healed, comparing Jesus' authority to his own military authority where he gives orders and they are obeyed, and Jesus marveled at his faith, declaring that he had not found such great faith even in Israel, and the servant was healed at that very hour.",
    options: ["Cornelius", "Centurion", "Pilate", "Caesar"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, the wife of Abraham who was originally named Sarai, was known for her great beauty that caused Abraham to fear for his life in foreign lands, laughed when told she would bear a son in her old age at the age of ninety, gave birth to Isaac whose name means 'laughter', and she became the mother of the promised son through whom God's covenant with Abraham would be fulfilled, making her a key figure in the lineage that would lead to the Messiah, and she is remembered in the New Testament as an example of faith.",
    options: ["Sarah", "Rebecca", "Rachel", "Leah"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a Pharisee and member of the Sanhedrin who was a teacher of Israel, came to Jesus secretly at night to ask about being born again, engaged in a profound theological discussion about spiritual rebirth and the work of the Holy Spirit, and later demonstrated courage by helping Joseph of Arimathea prepare Jesus' body for burial, bringing a mixture of myrrh and aloes weighing about seventy-five pounds, showing that he had moved from secret disciple to public follower, and his story represents the journey from religious knowledge to personal faith.",
    options: ["Nicodemus", "Joseph of Arimathea", "Zacchaeus", "Simon"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament prophet, known as the weeping prophet for his deep sorrow over the destruction of Jerusalem and the suffering of his people, was called by God as a young man and served during the final years of the kingdom of Judah, warned the people of coming judgment through the Babylonians, witnessed the destruction of Jerusalem and the temple, wrote both the Book of Jeremiah containing his prophecies and the Book of Lamentations expressing his grief, but also delivered messages of hope and future restoration, including the promise of a new covenant that would be written on people's hearts.",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This New Testament disciple, a fisherman from Bethsaida who was originally named Simon, was called by Jesus along with his brother Andrew, was given the name Peter (meaning rock) by Jesus who declared that upon this rock he would build his church, was part of Jesus' inner circle along with James and John, witnessed the Transfiguration, made the great confession that Jesus is the Christ, but also denied Jesus three times on the night of his arrest, was restored by Jesus after the resurrection, became a bold leader in the early church, preached at Pentecost, and according to tradition was martyred by crucifixion upside down in Rome.",
    options: ["Peter", "John", "James", "Andrew"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, the grandson of Abraham and son of Isaac, was known for his cunning nature including tricking his brother Esau out of his birthright and blessing, wrestled with God all night and received the name Israel meaning 'he who struggles with God', had twelve sons who became the twelve tribes of Israel, demonstrated favoritism toward Joseph which caused family strife, but through his story we see God's providential care and the fulfillment of the promise made to Abraham that his descendants would be as numerous as the stars.",
    options: ["Isaac", "Jacob", "Joseph", "Benjamin"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This New Testament woman, a follower of Jesus from Magdala who had been delivered from seven demons, became one of his most devoted followers, supporting his ministry financially along with other women, was present at the crucifixion when most of the male disciples had fled, was among the women who went to the tomb early on the first day of the week to anoint Jesus' body, was the first person to see the risen Christ though she initially thought he was the gardener, and was commissioned by Jesus to go and tell the disciples about his resurrection, making her the first witness to the resurrection and earning her the title 'apostle to the apostles' in early Christian tradition.",
    options: ["Mary Magdalene", "Mary", "Martha", "Salome"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament judge, called by God through an angel who appeared to him while he was threshing wheat in a winepress to hide from the Midianites, initially doubted his calling due to his humble background, requested multiple signs from God including the famous fleece test, and led Israel to a miraculous victory against the Midianites using only 300 men armed with torches, trumpets, and empty jars, demonstrating that victory comes from God's power rather than human strength or numbers, and his story teaches that God often uses the weak and unlikely to accomplish his purposes.",
    options: ["Gideon", "Samson", "Deborah", "Jephthah"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a chief tax collector from Jericho who was short in stature and therefore climbed a sycamore tree to see Jesus when he passed through the city, was called down by Jesus who announced he would stay at his house, and after this encounter, he repented and declared that he would give half of his possessions to the poor and repay four times the amount to anyone he had cheated, demonstrating genuine transformation and the power of Jesus' acceptance to change hearts, and Jesus declared that salvation had come to his house, showing that the gospel is for all people including those considered outcasts.",
    options: ["Zacchaeus", "Matthew", "Nicodemus", "Simon"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament prophet, taken into exile in Babylon as a young man, remained faithful to God despite being in a foreign land, interpreted dreams for both Nebuchadnezzar and Belshazzar, was thrown into a lions' den for praying to God instead of the king, was miraculously protected by God, and his prophecies include detailed visions of future kingdoms and the coming of the Messiah, with his book containing some of the most specific prophecies in the Old Testament that would be fulfilled in Jesus Christ and the establishment of his eternal kingdom.",
    options: ["Daniel", "Shadrach", "Meshach", "Abednego"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a young virgin from Nazareth who was visited by the angel Gabriel and told she would conceive by the Holy Spirit and bear a son who would be called the Son of the Most High, responded with faith and submission saying 'I am the Lord's servant, may it be to me as you have said', gave birth to Jesus in Bethlehem, was present at his first miracle in Cana, stood at the foot of the cross during his crucifixion, and was present with the disciples in the upper room after his ascension, and her Magnificat, a song of praise she sang when visiting Elizabeth, has become one of the most famous prayers and hymns in Christian tradition.",
    options: ["Mary", "Elizabeth", "Sarah", "Anna"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament king, chosen by God through the prophet Samuel to be the first king of Israel, started his reign well and led Israel to military victories, but later disobeyed God's commands by offering sacrifices himself instead of waiting for Samuel, by sparing the Amalekite king and best livestock when told to destroy everything, leading to his rejection as king, and he spent the latter part of his reign tormented by an evil spirit, trying to kill David who had been anointed as his successor, and he ultimately died in battle against the Philistines along with his sons, ending his dynasty.",
    options: ["Saul", "David", "Solomon", "Rehoboam"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament disciple, one of the sons of Zebedee and brother of John, was part of Jesus' inner circle along with Peter and John, witnessed the Transfiguration and was present in Gethsemane, was ambitious asking Jesus for positions of honor in his kingdom, and he became the first apostle to be martyred, killed by King Herod Agrippa with the sword, fulfilling Jesus' prediction that he would drink the cup that Jesus drank, and his martyrdom marked the beginning of increased persecution of the early church, though it also strengthened the resolve of the believers.",
    options: ["James", "John", "Andrew", "Philip"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, a Moabite woman who demonstrated extraordinary loyalty and devotion to her Israelite mother-in-law Naomi, refused to return to her own people after her husband's death, declaring 'Where you go I will go, and where you stay I will stay', worked in the fields of Boaz where she caught his attention through her character, became his wife, and gave birth to Obed who became the grandfather of King David, making her an ancestor of Jesus Christ, and her story is told in one of only two books in the Bible named after women, emphasizing themes of loyalty, redemption, and God's providential care.",
    options: ["Ruth", "Esther", "Deborah", "Hannah"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a Roman centurion stationed in Caesarea who was a devout and God-fearing man, had a vision in which an angel told him to send for Peter, and when Peter came and preached the gospel, he and his household became the first Gentiles to receive the Holy Spirit and be baptized, marking a crucial turning point in early church history as it demonstrated that the gospel was for all people, not just Jews, and this event led to the Jerusalem council where it was decided that Gentiles did not need to follow Jewish customs to become Christians.",
    options: ["Cornelius", "Centurion", "Pilate", "Caesar"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament prophet, the successor to Elijah who received a double portion of his spirit, performed twice as many miracles including raising a dead child, multiplying oil for a widow, making poisonous stew safe to eat, feeding a hundred men with twenty loaves, and even after his death, a dead man was revived when his body touched Elisha's bones, and his ministry demonstrated that God's power was not limited to one person but could be passed on to others who were faithful, and he served as a bridge between the ministry of Elijah and the later writing prophets.",
    options: ["Elisha", "Elijah", "Isaiah", "Jeremiah"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, one of the seven men chosen to help with the distribution of food to widows in the early church, was described as full of faith and the Holy Spirit, performed great wonders and signs among the people, engaged in debates with members of the Synagogue of the Freedmen, and when brought before the Sanhedrin on false charges, delivered a powerful speech recounting Israel's history and accusing the religious leaders of resisting the Holy Spirit and killing the Righteous One, after which he became the first Christian martyr, being stoned to death while praying for his persecutors, and his death marked the beginning of increased persecution that scattered the church and spread the gospel.",
    options: ["Stephen", "Philip", "Barnabas", "Timothy"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, the wife of Elkanah who was barren for many years, prayed fervently at the tabernacle in Shiloh, vowing that if God gave her a son, she would dedicate him to God's service for his entire life as a Nazirite, and when her prayer was answered and she gave birth to Samuel, she kept her vow and brought him to serve under the priest Eli, and she sang a song of praise that foreshadowed Mary's Magnificat, emphasizing God's reversal of human circumstances and his care for the humble, and she became the mother of one of Israel's greatest prophets and judges.",
    options: ["Hannah", "Sarah", "Rebecca", "Rachel"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a disciple who was also known as Nathanael, was initially skeptical when Philip told him about Jesus, asking if anything good could come from Nazareth, but when Jesus saw him coming, he declared that here was a true Israelite in whom there was no deceit, and when Nathanael asked how Jesus knew him, Jesus revealed that he had seen him under the fig tree before Philip called him, which so impressed Nathanael that he declared Jesus to be the Son of God and King of Israel, and Jesus promised him he would see even greater things, including heaven open and angels ascending and descending on the Son of Man.",
    options: ["Bartholomew", "Thomas", "Philip", "Andrew"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, a Jewish orphan who became queen of Persia through her beauty and character, risked her life by approaching King Ahasuerus (Xerxes) without being summoned, which was punishable by death, to save her people from the genocidal plot of Haman, demonstrated wisdom and courage in her approach, and through her intervention, the Jews were saved and their enemies were destroyed, and her story is commemorated in the Jewish festival of Purim, and she represents the theme that God can use anyone, even those in seemingly powerless positions, to accomplish his purposes and save his people.",
    options: ["Esther", "Ruth", "Deborah", "Hannah"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a tax collector from Capernaum who was also called Levi, left his profession immediately when Jesus called him to follow, hosted a great feast in his house where Jesus ate with tax collectors and sinners, demonstrating Jesus' mission to reach the outcasts of society, and he later wrote the first Gospel, which emphasizes Jesus' fulfillment of Old Testament prophecies, his role as the promised Messiah, and includes the Sermon on the Mount and the Great Commission, and his Gospel was written primarily for a Jewish audience, showing how Jesus was the fulfillment of the law and the prophets.",
    options: ["Matthew", "Mark", "Luke", "John"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, a priest who was the husband of Elizabeth and father of John the Baptist, was chosen by lot to burn incense in the temple, and when he entered the Holy Place, he was visited by the angel Gabriel who announced that his prayer for a child had been heard and his wife would bear a son who would be great in the sight of the Lord, but when Zechariah expressed doubt due to their old age, he was struck mute until the child's birth, and when the child was born and he wrote that his name should be John as the angel had instructed, his speech was restored and he prophesied about his son's role in preparing the way for the Lord.",
    options: ["Zechariah", "Joseph", "Jacob", "David"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a fisherman from Bethsaida who was the first to be called by Jesus along with his brother Simon Peter, is known for bringing others to Jesus, including bringing his brother to meet Jesus and finding a boy with five loaves and two fish for the feeding of the five thousand, and though he is less prominent in the Gospels than his brother, his role as a bridge-builder and evangelist is significant, and according to tradition, he brought the gospel to various regions including Scythia and Greece, and he is remembered as the patron saint of Scotland, Russia, and Greece.",
    options: ["Andrew", "John", "James", "Philip"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, the successor to Moses who led the Israelites into the Promised Land after forty years of wandering in the wilderness, demonstrated faith as one of the twelve spies sent to explore Canaan, led the military conquest of Jericho and other cities, divided the land among the twelve tribes, and made his famous declaration 'As for me and my house, we will serve the Lord', challenging the people to choose whom they would serve, and his leadership marked the transition from the period of the Exodus to the period of settlement in the land, and he is remembered as a model of faithful leadership and commitment to God.",
    options: ["Joshua", "Caleb", "Aaron", "Eleazar"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a tax collector who was also called Levi, was sitting at his tax booth when Jesus called him to follow, and he immediately left everything and became a disciple, hosting a great banquet in his house where Jesus ate with many tax collectors and sinners, which scandalized the religious leaders but demonstrated Jesus' mission to seek and save the lost, and he later wrote the first Gospel which emphasizes Jesus as the fulfillment of Old Testament prophecy, includes detailed accounts of Jesus' teachings including the Sermon on the Mount, and ends with the Great Commission, making it a foundational document for understanding Jesus' life and ministry.",
    options: ["Matthew", "Mark", "Luke", "John"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, the wife of Isaac and mother of Jacob and Esau, received a prophecy before the twins were born that the older would serve the younger, and when Isaac was old and blind and wanted to bless Esau, she helped ensure that Jacob received the blessing instead by having him dress in Esau's clothes and covering his hands and neck with goat skin, demonstrating both her faith in God's promise and her willingness to take action to see it fulfilled, though her methods involved deception, and her story shows the complex interplay between human action and divine providence in biblical narratives.",
    options: ["Rebecca", "Sarah", "Rachel", "Leah"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a fisherman from Bethsaida who was originally named Simon, was given the name Peter (meaning rock) by Jesus who declared that upon this rock he would build his church and the gates of Hades would not overcome it, was part of Jesus' inner circle and witnessed the Transfiguration, made the great confession that Jesus is the Christ the Son of the living God, but also denied Jesus three times on the night of his arrest, was restored by Jesus after the resurrection with three affirmations of love, became a bold leader in the early church preaching at Pentecost where three thousand were converted, and according to tradition was martyred by crucifixion upside down in Rome during Nero's persecution.",
    options: ["Peter", "John", "James", "Andrew"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, a prophetess and judge who was the only female judge mentioned in the Book of Judges, held court under a palm tree between Ramah and Bethel, led Israel to victory against the Canaanite king Jabin and his commander Sisera, sang a song of victory alongside Barak, and she is remembered as one of the few women in the Bible who held positions of leadership and authority, demonstrating that God can use anyone regardless of gender to accomplish his purposes, and her story emphasizes the importance of following God's call and trusting in his power rather than human strength.",
    options: ["Deborah", "Ruth", "Esther", "Hannah"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a man from Cyrene in North Africa who was in Jerusalem for the Passover, was forced by Roman soldiers to carry Jesus' cross to Golgotha when Jesus became too weak to carry it himself, and this act of service, though initially involuntary, has been remembered throughout Christian history as symbolic of what it means to follow Jesus - taking up one's cross - and his story represents the reality that following Jesus involves sacrifice and service, and according to tradition, he and his sons became believers and were active in the early church, with his sons Alexander and Rufus being mentioned in the New Testament.",
    options: ["Simon of Cyrene", "Joseph of Arimathea", "Nicodemus", "Zacchaeus"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, a priest who served in the temple and was chosen by lot to burn incense, was visited by the angel Gabriel who announced that his wife Elizabeth would bear a son who would be great in the sight of the Lord and would go before the Lord in the spirit and power of Elijah, but when he expressed doubt due to their old age, he was struck mute until the child's birth, and when the child was born and he wrote on a tablet that his name should be John, his speech was immediately restored and he prophesied about his son's role in preparing the way for the Lord and the coming of the Messiah, demonstrating God's faithfulness to his promises.",
    options: ["Zechariah", "Joseph", "Jacob", "David"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a man from Bethany who was the brother of Mary and Martha, was a close friend of Jesus, became ill and died, and when Jesus arrived four days after his death, he was raised from the dead, demonstrating Jesus' power over death and foreshadowing his own resurrection, and this miracle was so significant that it led the religious leaders to plot Jesus' death, and Lazarus' resurrection serves as a powerful sign of Jesus' identity as the resurrection and the life, and according to tradition, he later became a bishop and was persecuted for his faith.",
    options: ["Lazarus", "Jairus", "Nicodemus", "Bartimaeus"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, a Moabite woman who demonstrated extraordinary loyalty and devotion to her Israelite mother-in-law Naomi, refused to return to her own people after her husband's death, declaring that Naomi's people would be her people and Naomi's God would be her God, worked in the fields of Boaz where she caught his attention through her character and loyalty, became his wife through the custom of the kinsman-redeemer, and gave birth to Obed who became the grandfather of King David, making her an ancestor of Jesus Christ, and her story emphasizes themes of loyalty, redemption, God's providential care, and the inclusion of Gentiles in God's plan of salvation.",
    options: ["Ruth", "Esther", "Deborah", "Hannah"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a blind beggar from Jericho who sat by the roadside, called out to Jesus as 'Son of David' when he heard that Jesus was passing by, persisted in calling out despite being told by the crowd to be quiet, and when Jesus stopped and called for him, he threw aside his cloak, jumped to his feet, and came to Jesus, and when asked what he wanted, he said 'Rabbi, I want to see', and Jesus healed him, saying 'Go, your faith has healed you', and immediately he received his sight and followed Jesus along the road, demonstrating that persistent faith and calling out to Jesus results in healing and transformation.",
    options: ["Bartimaeus", "Lazarus", "Jairus", "Nicodemus"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, a judge of Israel who made a rash vow to God that if he was given victory over the Ammonites, he would sacrifice whatever came out of his house to meet him when he returned, and tragically his daughter, his only child, came out to meet him, and he fulfilled his vow, though she asked for two months to mourn with her friends, and his story serves as a warning about making vows without considering the consequences and the importance of thinking carefully before making commitments to God, and it raises difficult questions about the nature of vows and whether God expected him to fulfill this particular vow.",
    options: ["Jephthah", "Gideon", "Samson", "Deborah"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a ruler of the synagogue whose twelve-year-old daughter was dying, came to Jesus and fell at his feet, pleading with him to come and put his hands on her so she would be healed, and while Jesus was on the way, word came that the girl had died, but Jesus told him not to be afraid, only believe, and when they arrived at the house, Jesus took the girl by the hand and said 'Talitha koum' which means 'Little girl, I say to you, get up', and immediately she stood up and walked around, demonstrating Jesus' power over death and his compassion for those who come to him in faith, even when circumstances seem hopeless.",
    options: ["Jairus", "Lazarus", "Nicodemus", "Bartimaeus"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, the mother of Moses, demonstrated remarkable courage and faith by hiding her son for three months after Pharaoh's decree to kill all Hebrew baby boys, and when she could hide him no longer, she placed him in a papyrus basket coated with tar and pitch and set it among the reeds along the bank of the Nile River, trusting God with his safety, and her faith was rewarded when Pharaoh's daughter found the baby and she was able to nurse him and raise him in his early years, teaching him about his Hebrew heritage, and her story demonstrates a mother's love and the power of trusting God even in desperate circumstances.",
    options: ["Jochebed", "Miriam", "Zipporah", "Sarah"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a man who was paralyzed and was brought to Jesus by four friends who, unable to get through the crowd, made an opening in the roof above Jesus and lowered the mat on which the man was lying, and when Jesus saw their faith, he said to the paralyzed man 'Son, your sins are forgiven', which caused controversy among the religious leaders, and then to prove he had authority to forgive sins, he told the man to get up, take his mat, and go home, and immediately the man stood up, took his mat, and walked out in full view of everyone, demonstrating both Jesus' authority to forgive sins and his power to heal, and the story emphasizes the importance of friends who bring others to Jesus.",
    options: ["Paralytic man", "Lazarus", "Jairus", "Bartimaeus"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament figure, the sister of Moses and Aaron, was a prophetess who led the women of Israel in song and dance after crossing the Red Sea, singing 'Sing to the Lord, for he is highly exalted', and she played a significant role in the early life of Moses, watching over him when he was placed in the Nile, and later she and Aaron spoke against Moses because of his Cushite wife, for which she was struck with leprosy, though Moses interceded for her and she was healed after seven days, and her story shows both the important role of women in biblical narratives and the consequences of challenging God's chosen leaders.",
    options: ["Miriam", "Jochebed", "Zipporah", "Sarah"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a man who had been an invalid for thirty-eight years, was lying by the Pool of Bethesda waiting for the water to be stirred, believing that the first person into the pool after it was stirred would be healed, and when Jesus saw him and learned he had been in this condition for a long time, he asked if he wanted to get well, and when the man explained his situation, Jesus told him to get up, pick up his mat, and walk, and immediately the man was cured, picked up his mat, and walked, though this caused controversy because it was the Sabbath, and when questioned by the religious leaders, he testified about Jesus, though he didn't know who had healed him until Jesus found him later and warned him to stop sinning.",
    options: ["Man at Bethesda", "Lazarus", "Jairus", "Bartimaeus"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This Old Testament prophet, called by God to be a watchman for Israel during the Babylonian exile, received dramatic and symbolic visions including wheels within wheels representing God's mobile throne, a valley of dry bones coming to life representing Israel's restoration, and the glory of God leaving and returning to the temple, delivered messages of judgment against various nations including Tyre, Egypt, and Edom, but also promised future restoration including detailed descriptions of a new temple and the reunification of Israel and Judah, and his name means 'God strengthens', reflecting the source of his ability to speak difficult truths and maintain hope in the midst of exile.",
    options: ["Ezekiel", "Isaiah", "Jeremiah", "Daniel"],
    correct_index: 0,
    difficulty: "hard"
  },
  {
    question: "This New Testament figure, a man from the region of the Gerasenes who was possessed by a legion of demons and lived among the tombs, cutting himself with stones and breaking chains that people tried to use to bind him, was healed by Jesus who cast the demons into a herd of pigs that then rushed down a steep bank into the lake and drowned, and after his healing, he was found sitting at Jesus' feet, dressed and in his right mind, and he wanted to follow Jesus, but Jesus told him to go home and tell how much the Lord had done for him, and he became a witness for Jesus throughout the Decapolis region, demonstrating that those who have been delivered have a powerful testimony to share.",
    options: ["Gerasene demoniac", "Lazarus", "Jairus", "Bartimaeus"],
    correct_index: 0,
    difficulty: "hard"
  }
];

async function seedBibleCategory(closePool = true) {
  const client = await pool.connect();
  
  try {
    console.log('Starting Bible category insertion...');
    
    // Create the "Bible" category
    const categoryResult = await client.query(
      `INSERT INTO categories (name, slug) 
       VALUES ($1, $2) 
       ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
       RETURNING id`,
      ['Bible', 'bible']
    );
    
    const categoryId = categoryResult.rows[0].id;
    console.log(`✓ Category "Bible" created/updated with ID: ${categoryId}`);
    
    // Insert questions
    console.log('Inserting questions...');
    let insertedCount = 0;
    
    for (const q of bibleQuestions) {
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
  seedBibleCategory(true)
    .then(() => {
      console.log('Script finished successfully');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Fatal error:', err);
      process.exit(1);
    });
}

module.exports = { seedBibleCategory, bibleQuestions };

