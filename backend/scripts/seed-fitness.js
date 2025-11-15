require('dotenv').config();
const { pool } = require('../src/config/db');

// Fitness questions - 30 easy, 30 medium, 30 hard
const fitnessQuestions = [
  // Easy - 30 questions
  {
    question: "How many minutes of exercise per day is recommended for adults?",
    options: ["15 minutes", "30 minutes", "60 minutes", "90 minutes"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the most important nutrient for hydration during exercise?",
    options: ["Sports drinks", "Water", "Energy drinks", "Juice"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What type of exercise is best for building muscle strength?",
    options: ["Cardio", "Weight training", "Yoga", "Stretching"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "How many days a week should you exercise?",
    options: ["1-2 days", "3-5 days", "6-7 days", "Every day"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the best time to stretch?",
    options: ["Before exercise", "After exercise", "During exercise", "Anytime"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What does BMI stand for?",
    options: ["Body Mass Index", "Body Muscle Index", "Basic Metabolic Index", "Body Movement Index"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the recommended amount of sleep for adults?",
    options: ["4-5 hours", "6-7 hours", "7-9 hours", "10-12 hours"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What type of exercise improves heart health?",
    options: ["Weight lifting", "Cardiovascular exercise", "Stretching", "Balance exercises"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "How many calories are in one gram of protein?",
    options: ["2 calories", "4 calories", "6 calories", "9 calories"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the main benefit of warming up before exercise?",
    options: ["Burns more calories", "Prevents injury", "Builds muscle", "Increases flexibility"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the recommended daily water intake for adults?",
    options: ["4-6 cups", "6-8 cups", "8-10 cups", "10-12 cups"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What type of exercise is running?",
    options: ["Strength training", "Cardiovascular exercise", "Flexibility training", "Balance training"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "How many muscles are in the human body?",
    options: ["Over 400", "Over 500", "Over 600", "Over 700"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What is the largest muscle in the human body?",
    options: ["Biceps", "Quadriceps", "Gluteus maximus", "Hamstrings"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What does 'reps' stand for in exercise?",
    options: ["Repetitions", "Repairs", "Reports", "Repositions"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the best way to lose weight?",
    options: ["Only exercise", "Only diet", "Exercise and healthy diet", "Skip meals"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "How long should you rest between sets when weight training?",
    options: ["10-30 seconds", "30-90 seconds", "2-5 minutes", "5-10 minutes"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the main purpose of protein in the diet?",
    options: ["Provides energy", "Builds and repairs muscle", "Stores fat", "Digests food"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What type of exercise is swimming?",
    options: ["Low impact", "High impact", "No impact", "Medium impact"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "How many calories are in one gram of fat?",
    options: ["4 calories", "6 calories", "7 calories", "9 calories"],
    correct_index: 3,
    difficulty: "easy"
  },
  {
    question: "What is the recommended number of steps per day?",
    options: ["5,000 steps", "7,500 steps", "10,000 steps", "15,000 steps"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What is the best way to improve flexibility?",
    options: ["Weight training", "Cardio", "Stretching", "Running"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What does 'HIIT' stand for?",
    options: ["High Intensity Interval Training", "High Impact Interval Training", "Heavy Intensity Interval Training", "Healthy Interval Interval Training"],
    correct_index: 0,
    difficulty: "easy"
  },
  {
    question: "What is the main benefit of strength training?",
    options: ["Improves flexibility", "Builds muscle and bone strength", "Improves balance", "Increases speed"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "How many calories are in one gram of carbohydrates?",
    options: ["2 calories", "4 calories", "6 calories", "9 calories"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the best time to eat before exercise?",
    options: ["Immediately before", "1-2 hours before", "3-4 hours before", "Right after"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What type of exercise is yoga?",
    options: ["Cardiovascular", "Strength training", "Flexibility and balance", "High intensity"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What is the main benefit of regular exercise?",
    options: ["Only weight loss", "Only muscle gain", "Improved health and fitness", "Only flexibility"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "How many times should you breathe per minute during rest?",
    options: ["8-12 times", "12-20 times", "20-30 times", "30-40 times"],
    correct_index: 1,
    difficulty: "easy"
  },
  {
    question: "What is the best way to track your fitness progress?",
    options: ["Only by weight", "Only by appearance", "Multiple methods", "Only by strength"],
    correct_index: 2,
    difficulty: "easy"
  },
  {
    question: "What does 'BMR' stand for?",
    options: ["Body Mass Rate", "Basic Metabolic Rate", "Body Movement Rate", "Basic Muscle Rate"],
    correct_index: 1,
    difficulty: "easy"
  },
  // Medium difficulty - 30 questions
  {
    question: "This type of exercise, which involves alternating periods of high-intensity activity with periods of rest or low-intensity activity, has been shown to be highly effective for improving cardiovascular fitness, burning calories, and building endurance in a shorter amount of time compared to traditional steady-state cardio.",
    options: ["Steady-state cardio", "High-Intensity Interval Training", "Low-intensity training", "Flexibility training"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This essential macronutrient, found in foods like meat, fish, eggs, and legumes, is crucial for muscle repair and growth, plays a vital role in maintaining healthy bones and skin, and should be consumed in adequate amounts especially after strength training workouts to support recovery.",
    options: ["Carbohydrates", "Protein", "Fats", "Fiber"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This principle of fitness training states that to improve, you must gradually increase the intensity, duration, or frequency of your workouts over time, as your body adapts to the current level of stress placed upon it.",
    options: ["Specificity principle", "Progressive overload", "Recovery principle", "Balance principle"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This type of stretching, which involves holding a stretch position for 15-60 seconds without movement, is best performed after a workout when muscles are warm, and helps improve flexibility and reduce muscle tension.",
    options: ["Dynamic stretching", "Static stretching", "Ballistic stretching", "PNF stretching"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This measurement, calculated by dividing your weight in kilograms by your height in meters squared, is commonly used as a screening tool to assess whether a person has a healthy body weight, though it doesn't directly measure body fat or account for muscle mass.",
    options: ["Body fat percentage", "Body Mass Index", "Waist-to-hip ratio", "Basal metabolic rate"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This type of exercise, which includes activities like running, cycling, and swimming, primarily targets the cardiovascular system, improves heart and lung function, and is essential for maintaining overall health and endurance.",
    options: ["Strength training", "Cardiovascular exercise", "Flexibility training", "Balance training"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This important component of fitness, which refers to the ability of your muscles to exert force against resistance, can be improved through weight training, resistance exercises, and bodyweight exercises, and is crucial for daily activities and preventing injuries.",
    options: ["Cardiovascular endurance", "Muscular strength", "Flexibility", "Balance"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This recovery period between workouts is essential for muscle repair and growth, as it allows your body to adapt to the stress of exercise, rebuild damaged muscle tissue, and restore energy stores, with most experts recommending 24-48 hours of rest between intense strength training sessions.",
    options: ["Active recovery", "Rest day", "Warm-up period", "Cool-down period"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This type of training, which involves using your own body weight as resistance, includes exercises like push-ups, pull-ups, and squats, requires minimal equipment, and is an effective way to build strength and improve fitness.",
    options: ["Weight training", "Bodyweight training", "Machine training", "Free weight training"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This essential nutrient, which makes up about 60% of your body weight, is crucial for regulating body temperature, transporting nutrients, removing waste, and maintaining proper bodily functions, and you should drink it regularly throughout the day, especially before, during, and after exercise.",
    options: ["Electrolytes", "Water", "Sports drinks", "Protein shakes"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This type of exercise, which involves moving your joints through their full range of motion, helps improve flexibility, reduce muscle stiffness, and can be performed as part of a warm-up or cool-down routine.",
    options: ["Static stretching", "Dynamic stretching", "Ballistic stretching", "Resistance stretching"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This important fitness component, which refers to the ability of your heart and lungs to supply oxygen to your muscles during sustained physical activity, can be improved through regular aerobic exercise like running, cycling, or swimming.",
    options: ["Muscular strength", "Cardiovascular endurance", "Flexibility", "Power"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This training principle states that your body will adapt specifically to the type of training you perform, meaning that to improve in a particular activity or skill, you must practice that specific activity or skill.",
    options: ["Progressive overload", "Specificity principle", "Reversibility principle", "Individuality principle"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This type of exercise, which involves contracting your muscles without changing their length, such as holding a plank position, can help improve strength and stability, though it's less effective for building muscle size compared to dynamic exercises.",
    options: ["Isotonic exercise", "Isometric exercise", "Isokinetic exercise", "Eccentric exercise"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This important macronutrient, found in foods like bread, rice, pasta, and fruits, is your body's primary source of energy, especially important for fueling high-intensity workouts and replenishing glycogen stores after exercise.",
    options: ["Protein", "Carbohydrates", "Fats", "Fiber"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This type of training, which combines elements of strength training and cardiovascular exercise, involves performing a series of exercises in quick succession with minimal rest, and is effective for burning calories and improving both strength and endurance.",
    options: ["Circuit training", "Powerlifting", "Bodybuilding", "Pilates"],
    correct_index: 0,
    difficulty: "medium"
  },
  {
    question: "This important fitness component, which refers to the ability of your muscles to perform repeated contractions over an extended period, can be improved through exercises with lighter weights and higher repetitions, and is important for daily activities and athletic performance.",
    options: ["Muscular strength", "Muscular endurance", "Power", "Speed"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This type of stretching technique, which involves contracting a muscle before stretching it, is considered one of the most effective methods for improving flexibility and is often used by athletes and physical therapists.",
    options: ["Static stretching", "Dynamic stretching", "PNF stretching", "Ballistic stretching"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This important principle of fitness states that if you stop training, your fitness gains will gradually decrease and eventually return to pre-training levels, emphasizing the importance of consistency in your exercise routine.",
    options: ["Progressive overload", "Specificity", "Reversibility principle", "Individuality"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This type of exercise, which involves slow, controlled movements and focuses on core strength, flexibility, and body awareness, was developed in the early 20th century and has become popular for rehabilitation and general fitness.",
    options: ["Yoga", "Pilates", "Tai Chi", "Calisthenics"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This essential macronutrient, found in foods like avocados, nuts, and olive oil, is important for hormone production, vitamin absorption, and providing long-lasting energy, and should make up about 20-35% of your daily caloric intake.",
    options: ["Carbohydrates", "Protein", "Fats", "Fiber"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This type of training, which involves gradually increasing the weight or resistance used in your workouts, is essential for continued muscle growth and strength gains, as your body adapts to the current level of stress.",
    options: ["Periodization", "Progressive overload", "Deloading", "Maintenance training"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This important fitness component, which refers to the ability to maintain your body's position while stationary or moving, is crucial for preventing falls, improving coordination, and is especially important as we age.",
    options: ["Flexibility", "Balance", "Coordination", "Agility"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This type of exercise, which involves moving your body through space, such as running or jumping, is important for improving bone density, coordination, and cardiovascular health, though it may not be suitable for people with joint problems.",
    options: ["Low-impact exercise", "High-impact exercise", "No-impact exercise", "Isometric exercise"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This important recovery practice, which involves light physical activity on rest days, such as walking or gentle stretching, can help improve blood flow, reduce muscle soreness, and speed up recovery without placing additional stress on your body.",
    options: ["Passive rest", "Active recovery", "Complete rest", "Cross-training"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This type of training, which involves varying your workout intensity and volume over time, helps prevent plateaus, reduces the risk of overtraining, and allows for optimal recovery and adaptation.",
    options: ["Linear progression", "Periodization", "Deloading", "Maintenance training"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This important fitness component, which refers to the ability of your joints to move through their full range of motion, can be improved through regular stretching and is important for preventing injuries and maintaining mobility as you age.",
    options: ["Strength", "Endurance", "Flexibility", "Power"],
    correct_index: 2,
    difficulty: "medium"
  },
  {
    question: "This type of exercise, which involves contracting your muscles while they lengthen, such as lowering a weight slowly, has been shown to be particularly effective for building muscle strength and size.",
    options: ["Concentric exercise", "Eccentric exercise", "Isometric exercise", "Isokinetic exercise"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This important nutrient, which includes minerals like sodium, potassium, and magnesium, is essential for maintaining fluid balance, nerve function, and muscle contractions, and can be lost through sweat during exercise, making it important to replenish during and after intense workouts.",
    options: ["Vitamins", "Electrolytes", "Antioxidants", "Minerals"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This type of training, which involves performing exercises that work multiple muscle groups at once, such as squats or deadlifts, is more efficient and functional than isolation exercises, and mimics movements you perform in daily life.",
    options: ["Isolation training", "Compound exercises", "Machine training", "Bodyweight training"],
    correct_index: 1,
    difficulty: "medium"
  },
  {
    question: "This important fitness principle recognizes that everyone responds differently to exercise based on factors like genetics, age, gender, and fitness level, meaning that training programs should be individualized to achieve the best results.",
    options: ["Specificity", "Progressive overload", "Individuality principle", "Reversibility"],
    correct_index: 2,
    difficulty: "medium"
  },
  // Hard difficulty - 30 questions
  {
    question: "This advanced training methodology, which involves alternating periods of high-intensity exercise with short recovery periods, has been extensively researched and shown to produce superior improvements in cardiovascular fitness, metabolic health, and fat loss compared to traditional steady-state cardio, while requiring less total time commitment, making it an efficient and effective training approach for individuals with limited time who want to maximize their fitness gains.",
    options: ["Low-Intensity Steady State", "High-Intensity Interval Training", "Moderate Continuous Training", "Long Slow Distance Training"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This essential macronutrient, composed of amino acids that serve as the building blocks for muscle tissue, plays a crucial role in muscle protein synthesis which is the process by which your body repairs and builds new muscle fibers after exercise, is necessary for the production of enzymes and hormones, supports immune function, helps maintain healthy skin, hair, and nails, and should be consumed in adequate amounts throughout the day, with particular importance placed on consuming high-quality sources within the post-workout window to optimize recovery and muscle growth.",
    options: ["Carbohydrates", "Protein", "Dietary fats", "Fiber"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This fundamental principle of exercise science, which states that to continue making progress, you must systematically and progressively increase the demands placed on your body over time, can be achieved by increasing the weight lifted, the number of repetitions performed, the number of sets completed, the frequency of training sessions, or decreasing rest periods, and is essential for continued adaptation and improvement in strength, endurance, and overall fitness, as the human body is remarkably adaptable and will only improve when challenged beyond its current capabilities.",
    options: ["Specificity principle", "Progressive overload principle", "Recovery principle", "Balance principle"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This type of stretching technique, which involves holding a stretch position for an extended period typically ranging from 15 seconds to several minutes without any movement, is most effective when performed after a workout when muscles are warm and pliable, helps improve flexibility by gradually lengthening muscle fibers and connective tissue, can reduce muscle tension and soreness, and is considered safer than ballistic stretching for most individuals, though it should be performed carefully to avoid overstretching and potential injury.",
    options: ["Dynamic stretching", "Static stretching", "Ballistic stretching", "Proprioceptive Neuromuscular Facilitation"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This widely used anthropometric measurement, calculated by dividing an individual's weight in kilograms by their height in meters squared, is commonly employed as a screening tool to assess potential health risks associated with body weight, though it has significant limitations including the fact that it doesn't directly measure body fat percentage, doesn't distinguish between muscle mass and fat mass, doesn't account for bone density or body composition, and may not be accurate for certain populations including athletes with high muscle mass, elderly individuals, or people of different ethnicities, making it important to use in conjunction with other health assessments.",
    options: ["Body fat percentage", "Body Mass Index", "Waist-to-hip ratio", "Basal metabolic rate"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This category of exercise, which encompasses activities that primarily target the cardiovascular and respiratory systems including running, cycling, swimming, rowing, and brisk walking, works by increasing your heart rate and breathing rate to deliver oxygen-rich blood to working muscles, improves the efficiency of your heart and lungs, strengthens your cardiovascular system, increases your body's ability to utilize oxygen, helps lower blood pressure and cholesterol levels, reduces the risk of heart disease and stroke, and is essential for maintaining overall health and longevity, with most health organizations recommending at least 150 minutes of moderate-intensity or 75 minutes of vigorous-intensity cardiovascular exercise per week.",
    options: ["Resistance training", "Cardiovascular exercise", "Flexibility training", "Balance and coordination training"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This critical component of physical fitness, which refers to the maximum amount of force that a muscle or group of muscles can generate in a single effort, is distinct from muscular endurance and power, can be developed through resistance training including weightlifting, bodyweight exercises, and resistance band training, is essential for performing daily activities with ease, helps prevent injuries by supporting joints and maintaining proper posture, becomes increasingly important as we age to prevent sarcopenia and maintain independence, and should be trained progressively with proper form to maximize benefits while minimizing injury risk.",
    options: ["Cardiovascular endurance", "Muscular strength", "Flexibility", "Balance and stability"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This essential component of any well-designed training program, which refers to the period of time between intense workout sessions when your body repairs damaged muscle tissue, replenishes energy stores, adapts to the stress of exercise, and becomes stronger, is crucial for preventing overtraining, reducing the risk of injury, and maximizing performance improvements, with most fitness experts recommending 24-48 hours of rest between intense strength training sessions targeting the same muscle groups, though active recovery activities like light walking or stretching can be beneficial during this period.",
    options: ["Active recovery", "Rest and recovery period", "Warm-up phase", "Cool-down phase"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This form of resistance training, which utilizes your own body weight as the primary source of resistance rather than external weights or machines, includes exercises such as push-ups, pull-ups, dips, squats, lunges, planks, and burpees, offers numerous advantages including requiring minimal or no equipment making it accessible and cost-effective, improving functional strength that translates to daily activities, enhancing body awareness and coordination, allowing for training anywhere and anytime, and providing a solid foundation for more advanced training, though it may have limitations for individuals seeking maximum muscle hypertrophy.",
    options: ["Free weight training", "Bodyweight training", "Machine-based training", "Cable training"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This essential nutrient, which constitutes approximately 60% of total body weight in adults, plays numerous critical roles in human physiology including regulating body temperature through sweating and evaporation, transporting nutrients and oxygen to cells throughout the body, removing waste products and toxins through urine and sweat, lubricating joints and protecting organs, facilitating digestion and nutrient absorption, maintaining blood volume and pressure, and supporting cellular function, making adequate hydration crucial for optimal health and exercise performance, with recommendations varying based on individual factors including body size, activity level, climate, and overall health.",
    options: ["Electrolytes", "Water", "Sports beverages", "Protein solutions"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This type of stretching, which involves moving your joints and muscles through their full range of motion in a controlled, deliberate manner, typically performed before exercise as part of a warm-up routine, helps prepare your body for physical activity by increasing blood flow to muscles, raising body temperature, improving joint mobility, activating the nervous system, and reducing the risk of injury, and includes movements like leg swings, arm circles, walking lunges, and torso rotations that mimic the activities you're about to perform.",
    options: ["Static stretching", "Dynamic stretching", "Ballistic stretching", "Proprioceptive Neuromuscular Facilitation"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This vital component of physical fitness, which refers to the ability of your cardiovascular and respiratory systems to supply oxygen to your muscles during sustained physical activity, is developed through regular aerobic exercise, improves the efficiency of your heart, lungs, and circulatory system, increases your VO2 max which is the maximum amount of oxygen your body can utilize during exercise, enhances your body's ability to recover from physical exertion, reduces fatigue during daily activities, and is associated with numerous health benefits including reduced risk of chronic diseases, improved mental health, and increased longevity.",
    options: ["Muscular strength", "Cardiovascular endurance", "Flexibility", "Muscular power"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This important training principle, which states that your body will adapt specifically to the type of training stimulus you provide, means that improvements in fitness are specific to the mode, intensity, and duration of exercise performed, so to improve performance in a particular activity, you must practice that specific activity or closely related activities, explaining why a runner needs to run to improve running performance, a cyclist needs to cycle to improve cycling performance, and why cross-training while beneficial for overall fitness may not directly improve performance in a specific sport or activity.",
    options: ["Progressive overload principle", "Specificity principle", "Reversibility principle", "Individuality principle"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This type of muscle contraction, which occurs when your muscles generate force without changing length, such as when holding a plank position, pushing against an immovable object, or maintaining a static position, can help improve strength and stability, is useful for rehabilitation purposes, can be performed anywhere without equipment, but is generally less effective for building muscle size compared to dynamic exercises that involve movement through a full range of motion.",
    options: ["Isotonic contraction", "Isometric contraction", "Eccentric contraction", "Concentric contraction"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This essential macronutrient, which serves as your body's primary and most efficient source of energy, is broken down into glucose which fuels your brain, muscles, and other tissues, is stored as glycogen in your muscles and liver for quick energy access during exercise, is particularly important for high-intensity workouts and endurance activities, helps preserve muscle protein by providing an alternative energy source, and should be consumed in appropriate amounts based on your activity level, with timing around workouts being important for optimal performance and recovery.",
    options: ["Protein", "Carbohydrates", "Dietary fats", "Fiber"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This efficient training method, which involves performing a series of different exercises in sequence with minimal rest between exercises, typically completing multiple rounds or circuits, combines elements of strength training and cardiovascular exercise, allows you to work multiple muscle groups in a single session, is time-efficient making it ideal for busy schedules, can be adapted to any fitness level, helps improve both muscular strength and cardiovascular fitness simultaneously, and is effective for burning calories and improving overall fitness, though proper form and progression are important to prevent injury.",
    options: ["Powerlifting", "Circuit training", "Bodybuilding", "Olympic lifting"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This important component of muscular fitness, which refers to the ability of your muscles to perform repeated contractions or sustain a contraction over an extended period of time, is distinct from muscular strength which is the maximum force a muscle can produce, can be improved through exercises performed with lighter weights and higher repetitions, is essential for daily activities like carrying groceries, climbing stairs, or maintaining posture, is important for athletic performance in endurance sports, and helps prevent muscle fatigue during prolonged activities.",
    options: ["Muscular strength", "Muscular endurance", "Muscular power", "Muscular speed"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This advanced stretching technique, which stands for Proprioceptive Neuromuscular Facilitation, involves a combination of contracting and relaxing muscles to achieve greater flexibility gains, typically performed with a partner or using resistance, works by taking advantage of the body's natural reflexes to allow muscles to stretch further than they would with static stretching alone, is considered one of the most effective methods for improving flexibility, is commonly used by athletes, dancers, and physical therapists, and involves techniques like contract-relax and hold-relax that manipulate the muscle's stretch reflex.",
    options: ["Static stretching", "Dynamic stretching", "PNF stretching", "Ballistic stretching"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This important principle of exercise science, also known as the 'use it or lose it' principle, states that fitness gains achieved through regular exercise will gradually decline and eventually be lost if training is discontinued, with cardiovascular fitness declining more rapidly than strength gains, emphasizing the critical importance of consistency in your exercise routine, and explaining why taking extended breaks from training requires gradually rebuilding fitness rather than immediately returning to previous intensity levels.",
    options: ["Progressive overload", "Specificity", "Reversibility principle", "Individuality"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This comprehensive exercise system, developed by Joseph Pilates in the early 20th century, focuses on developing core strength, improving flexibility, enhancing body awareness and alignment, and promoting controlled, precise movements, emphasizes the connection between mind and body, can be performed on a mat or using specialized equipment like the Reformer, has become popular for rehabilitation purposes, is beneficial for improving posture and reducing back pain, and appeals to people of all fitness levels from beginners to elite athletes.",
    options: ["Yoga", "Pilates", "Tai Chi", "Calisthenics"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This essential macronutrient, which provides 9 calories per gram making it the most calorie-dense macronutrient, plays crucial roles in hormone production including testosterone and estrogen, aids in the absorption of fat-soluble vitamins A, D, E, and K, provides long-lasting energy and helps you feel satiated, protects vital organs, maintains healthy skin and hair, and should comprise approximately 20-35% of your daily caloric intake, with emphasis on consuming healthy unsaturated fats from sources like avocados, nuts, seeds, and olive oil while limiting saturated and trans fats.",
    options: ["Carbohydrates", "Protein", "Dietary fats", "Fiber"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This systematic approach to training, which involves strategically varying your workout intensity, volume, and exercise selection over time, typically organized into cycles or phases, helps prevent training plateaus by continuously challenging your body in different ways, reduces the risk of overtraining and burnout, allows for optimal recovery and adaptation, can be structured in various ways including daily, weekly, monthly, or even yearly cycles, and is used by athletes and fitness enthusiasts to achieve peak performance while maintaining long-term progress and motivation.",
    options: ["Linear progression", "Periodization", "Deloading", "Maintenance training"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This critical component of physical fitness, which refers to the ability of your joints to move freely through their full range of motion without restriction or pain, is influenced by factors including muscle length, joint structure, connective tissue elasticity, and nervous system control, can be improved through regular stretching and mobility work, is important for maintaining functional movement patterns, helps prevent injuries by allowing your body to move efficiently, becomes increasingly important as we age to maintain independence and quality of life, and should be addressed as part of a well-rounded fitness program.",
    options: ["Muscular strength", "Cardiovascular endurance", "Flexibility", "Balance and coordination"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This type of muscle contraction, which occurs when your muscles lengthen while generating force, such as when slowly lowering a weight during a bicep curl or descending into a squat, has been shown to be particularly effective for building muscle strength and size, creates more muscle damage which stimulates greater adaptation and growth, requires significant control and coordination, and is often emphasized in training programs designed for hypertrophy and strength development.",
    options: ["Concentric contraction", "Eccentric contraction", "Isometric contraction", "Isokinetic contraction"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This group of essential minerals, including sodium, potassium, chloride, calcium, magnesium, and phosphate, play crucial roles in maintaining fluid balance within and between cells, facilitating nerve impulse transmission, regulating muscle contractions including those of the heart, maintaining proper pH levels in the body, and supporting numerous metabolic processes, are lost through sweat during exercise making replenishment important during and after intense or prolonged physical activity, and imbalances can lead to muscle cramps, fatigue, and impaired performance.",
    options: ["Vitamins", "Electrolytes", "Antioxidants", "Macronutrients"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This category of exercises, which involve multiple joints and muscle groups working together simultaneously, such as squats, deadlifts, bench presses, pull-ups, and overhead presses, are considered more functional and efficient than isolation exercises, mimic movements performed in daily life and sports, allow you to lift heavier weights and burn more calories, improve coordination and balance, strengthen stabilizer muscles, and should form the foundation of most strength training programs, with isolation exercises serving as supplementary work for specific muscle groups.",
    options: ["Isolation exercises", "Compound exercises", "Machine exercises", "Assisted exercises"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This important principle of exercise science recognizes that individuals respond differently to the same training stimulus due to factors including genetics, age, gender, training history, nutrition, sleep, stress levels, and overall health, meaning that what works for one person may not work for another, emphasizing the importance of individualizing training programs, listening to your body, adjusting programs based on progress and response, and understanding that there is no one-size-fits-all approach to fitness, making it important to experiment and find what works best for your unique circumstances and goals.",
    options: ["Specificity principle", "Progressive overload", "Individuality principle", "Reversibility"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This important fitness component, which refers to the ability to maintain your body's center of gravity over its base of support whether stationary or moving, is crucial for preventing falls and injuries, becomes increasingly important as we age when balance naturally declines, can be improved through specific balance exercises, is enhanced by strength training especially in the core and lower body, is important for athletic performance in sports requiring stability and coordination, and can be trained through exercises like single-leg stands, balance board work, and yoga poses.",
    options: ["Flexibility", "Balance", "Coordination", "Agility"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This category of exercise, which involves activities where both feet leave the ground simultaneously such as running, jumping, and plyometric exercises, places significant stress on joints particularly the knees, ankles, and hips, can help improve bone density which is beneficial for preventing osteoporosis, improves coordination and power, is effective for cardiovascular fitness and calorie burning, but may not be suitable for individuals with joint problems, arthritis, or those recovering from certain injuries, making low-impact alternatives like swimming or cycling better choices for some people.",
    options: ["Low-impact exercise", "High-impact exercise", "No-impact exercise", "Isometric exercise"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This important recovery strategy, which involves engaging in light physical activity on rest days or between intense training sessions, such as walking, gentle cycling, yoga, or light stretching, can help improve blood circulation which delivers nutrients to muscles and removes waste products, reduces muscle stiffness and soreness, promotes faster recovery without placing additional stress on your body, helps maintain mobility and flexibility, and can be more beneficial than complete rest for some individuals, though the intensity should be low enough that it doesn't interfere with recovery.",
    options: ["Passive rest", "Active recovery", "Complete rest", "Cross-training"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This systematic approach to organizing training, which involves dividing your training program into distinct phases or periods with varying goals, intensities, and volumes, helps prevent overtraining and burnout, allows for optimal recovery and adaptation, helps break through plateaus, can be structured in various ways including daily undulating periodization, linear periodization, or block periodization, and is used by athletes and serious fitness enthusiasts to achieve peak performance at specific times while maintaining long-term progress and preventing stagnation.",
    options: ["Linear progression", "Periodization", "Deloading", "Maintenance training"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This critical component of physical fitness, which refers to the ability of your joints and muscles to move through their full range of motion without restriction, pain, or compensation, is influenced by multiple factors including muscle length and tension, joint capsule mobility, connective tissue elasticity, and nervous system control, can be improved through various stretching techniques including static, dynamic, and PNF stretching, is important for maintaining functional movement patterns and preventing injuries, becomes increasingly important as we age when flexibility naturally declines, and should be addressed regularly as part of a comprehensive fitness program to maintain mobility and quality of life.",
    options: ["Muscular strength", "Cardiovascular endurance", "Flexibility", "Balance and stability"],
    correct_index: 2,
    difficulty: "hard"
  },
  {
    question: "This type of muscle contraction, which occurs when your muscles generate force while lengthening, such as when slowly lowering a weight during a bicep curl, descending into a squat, or landing from a jump, has been extensively researched and shown to be particularly effective for building muscle strength and size, creates more muscle damage and micro-tears which stimulate greater protein synthesis and adaptation, requires significant neuromuscular control and coordination, generates more force than concentric contractions, and is often emphasized in training programs designed for hypertrophy and strength development, though it should be performed with control to minimize injury risk.",
    options: ["Concentric contraction", "Eccentric contraction", "Isometric contraction", "Isokinetic contraction"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This group of essential minerals, including sodium, potassium, chloride, calcium, magnesium, and phosphate, that carry an electrical charge and are dissolved in body fluids, play numerous critical roles in human physiology including maintaining proper fluid balance within and between cells through osmosis, facilitating nerve impulse transmission which allows your brain to communicate with your muscles, regulating muscle contractions including the critical contractions of your heart muscle, maintaining proper acid-base balance and pH levels in your body, supporting numerous metabolic processes and enzyme functions, and are lost through sweat during exercise making their replenishment particularly important during and after intense or prolonged physical activity, with imbalances potentially leading to muscle cramps, fatigue, dizziness, impaired performance, and in severe cases, dangerous medical conditions.",
    options: ["Vitamins", "Electrolytes", "Antioxidants", "Macronutrients"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This category of exercises, which involve multiple joints and muscle groups working together in coordinated movements, such as squats that involve the hips, knees, and ankles working together with the quadriceps, glutes, hamstrings, and core muscles, deadlifts that engage the entire posterior chain, bench presses that work the chest, shoulders, and triceps simultaneously, and pull-ups that engage the back, biceps, and core, are considered more functional and efficient than isolation exercises that target single muscle groups, mimic movements performed in daily life and athletic activities, allow you to lift heavier weights and burn more calories per exercise, improve coordination, balance, and proprioception, strengthen stabilizer muscles that support primary movers, and should form the foundation of most strength training programs, with isolation exercises serving as supplementary work to address specific weaknesses or aesthetic goals.",
    options: ["Isolation exercises", "Compound exercises", "Machine-based exercises", "Assisted exercises"],
    correct_index: 1,
    difficulty: "hard"
  },
  {
    question: "This fundamental principle of exercise science and sports training, which recognizes that individuals respond differently to identical training stimuli due to a complex interplay of factors including genetic predisposition which determines your potential for strength, endurance, and muscle growth, chronological age which affects recovery capacity and hormonal levels, biological sex which influences muscle mass, bone density, and fat distribution, training history and current fitness level which determine your starting point and rate of improvement, nutritional status and dietary habits which provide the building blocks for adaptation, sleep quality and quantity which affects recovery and hormone production, stress levels both physical and psychological which can impact performance and recovery, overall health status and any existing medical conditions, and individual psychological factors including motivation and adherence, meaning that what produces excellent results for one person may produce mediocre or even negative results for another, emphasizing the critical importance of individualizing training programs based on personal response, listening to your body's signals, adjusting programs based on progress and feedback, understanding that there is no universal one-size-fits-all approach to fitness, and recognizing the value of experimentation and self-awareness in finding what works best for your unique circumstances, goals, and genetic makeup.",
    options: ["Specificity principle", "Progressive overload principle", "Individuality principle", "Reversibility principle"],
    correct_index: 2,
    difficulty: "hard"
  }
];

async function seedFitnessCategory(closePool = true) {
  const client = await pool.connect();
  
  try {
    console.log('Starting Fitness category insertion...');
    
    // Create the "Fitness" category
    const categoryResult = await client.query(
      `INSERT INTO categories (name, slug) 
       VALUES ($1, $2) 
       ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
       RETURNING id`,
      ['Fitness', 'fitness']
    );
    
    const categoryId = categoryResult.rows[0].id;
    console.log(`✓ Category "Fitness" created/updated with ID: ${categoryId}`);
    
    // Insert questions
    console.log('Inserting questions...');
    let insertedCount = 0;
    
    for (const q of fitnessQuestions) {
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
  seedFitnessCategory(true)
    .then(() => {
      console.log('Script finished successfully');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Fatal error:', err);
      process.exit(1);
    });
}

module.exports = { seedFitnessCategory, fitnessQuestions };

