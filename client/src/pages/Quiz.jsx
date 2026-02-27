import { useState } from "react";

export default function Quiz() {
  // 🎮 Game states
  const [level, setLevel] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // 🎯 50 Questions (10 per level × 5 levels)
  const questions = [
    // LEVEL 1 – BASIC SAFETY
    { q: "During earthquake what should you do?", a: "Drop, Cover, Hold", o: ["Run outside", "Drop, Cover, Hold", "Use lift", "Stand near window"] },
    { q: "Emergency number in India?", a: "112", o: ["100", "101", "112", "108"] },
    { q: "Fire starts from?", a: "Heat", o: ["Water", "Heat", "Wind", "Dust"] },
    { q: "Flood water may contain?", a: "Electric current", o: ["Fish", "Electric current", "Flowers", "Mud only"] },
    { q: "Cyclone warning color?", a: "Red", o: ["Blue", "Green", "Red", "White"] },
    { q: "First aid box should contain?", a: "Bandage", o: ["Bandage", "Laptop", "Phone", "TV"] },
    { q: "Earthquake safest place?", a: "Under table", o: ["Balcony", "Under table", "Stairs", "Lift"] },
    { q: "Fire extinguisher color?", a: "Red", o: ["Blue", "Red", "Green", "Black"] },
    { q: "During lightning stay?", a: "Indoors", o: ["Tree", "Open field", "Indoors", "Roof"] },
    { q: "Disaster kit must have?", a: "Water", o: ["TV", "Water", "Laptop", "Speaker"] },

    // LEVEL 2
    { q: "Flood safest action?", a: "Move to higher ground", o: ["Swim", "Move to higher ground", "Drive car", "Stand bridge"] },
    { q: "Gas leak smell?", a: "Rotten egg", o: ["Perfume", "Rotten egg", "Smoke", "Dust"] },
    { q: "Wildfire cause?", a: "Dry leaves", o: ["Water", "Dry leaves", "Snow", "Rain"] },
    { q: "Earthquake aftershocks?", a: "Yes", o: ["No", "Yes", "Never", "Rare"] },
    { q: "Safe drinking water storage?", a: "Clean bottles", o: ["Open bucket", "Clean bottles", "Tank", "Pond"] },
    { q: "Fire triangle?", a: "Fuel Heat Oxygen", o: ["Water Air Smoke", "Fuel Heat Oxygen", "Wood Wind Rain", "Fire Smoke Heat"] },
    { q: "Cyclone causes?", a: "Strong winds", o: ["Snow", "Strong winds", "Heat", "Dust"] },
    { q: "Earthquake scale?", a: "Richter", o: ["Celsius", "Richter", "Fahrenheit", "Meter"] },
    { q: "Flood electricity risk?", a: "High", o: ["Low", "None", "High", "Medium"] },
    { q: "Emergency bag ready?", a: "Yes", o: ["No", "Maybe", "Yes", "Never"] },

    // LEVEL 3
    { q: "Fire exit sign color?", a: "Green", o: ["Red", "Blue", "Green", "Black"] },
    { q: "During flood avoid?", a: "Walking water", o: ["High ground", "Boat", "Walking water", "Shelter"] },
    { q: "Earthquake happens at?", a: "Fault lines", o: ["Mountains", "Fault lines", "Sea only", "Air"] },
    { q: "Tsunami warning?", a: "Sea recedes", o: ["Rain", "Sea recedes", "Clouds", "Wind"] },
    { q: "Emergency light?", a: "Torch", o: ["Torch", "Fan", "AC", "TV"] },
    { q: "Fire spread fast by?", a: "Wind", o: ["Water", "Wind", "Mud", "Sand"] },
    { q: "Emergency contact list?", a: "Important", o: ["Optional", "Important", "No need", "Later"] },
    { q: "Flood vehicle drive?", a: "No", o: ["Yes", "No", "Sometimes", "Always"] },
    { q: "Earthquake indoors?", a: "Stay inside", o: ["Run outside", "Stay inside", "Lift", "Jump"] },
    { q: "Emergency whistle?", a: "Useful", o: ["Useless", "Useful", "Danger", "Waste"] },

    // LEVEL 4
    { q: "First aid CPR?", a: "Life saving", o: ["Dangerous", "Life saving", "Useless", "Slow"] },
    { q: "Cyclone shelters?", a: "Safe", o: ["Unsafe", "Safe", "Closed", "Optional"] },
    { q: "Disaster alert apps?", a: "Helpful", o: ["Bad", "Helpful", "No need", "Waste"] },
    { q: "Flood insurance?", a: "Important", o: ["Not needed", "Important", "Waste", "Optional"] },
    { q: "Emergency meeting point?", a: "Yes", o: ["No", "Yes", "Later", "Maybe"] },
    { q: "Fire alarm?", a: "Install", o: ["Ignore", "Install", "Break", "Hide"] },
    { q: "Emergency radio?", a: "Useful", o: ["Old", "Useful", "Waste", "Heavy"] },
    { q: "Flash flood?", a: "Sudden", o: ["Slow", "Sudden", "Weak", "Dry"] },
    { q: "Prepared family?", a: "Safer", o: ["Risky", "Safer", "No change", "Late"] },
    { q: "Emergency plan?", a: "Essential", o: ["Optional", "Essential", "Ignore", "Later"] },

    // LEVEL 5 – EXPERT
    { q: "Preparedness reduces?", a: "Risk", o: ["Fun", "Risk", "Travel", "Games"] },
    { q: "Emergency drills?", a: "Practice", o: ["Waste", "Practice", "Ignore", "Delay"] },
    { q: "Disaster awareness?", a: "Saves lives", o: ["Boring", "Saves lives", "Optional", "Ignore"] },
    { q: "Preparedness kit?", a: "Must", o: ["No need", "Must", "Later", "Ignore"] },
    { q: "Emergency exit map?", a: "Important", o: ["Waste", "Important", "Later", "Ignore"] },
    { q: "Stay calm during disaster?", a: "Yes", o: ["No", "Yes", "Run", "Panic"] },
    { q: "Community awareness?", a: "Helps", o: ["No help", "Helps", "Waste", "Later"] },
    { q: "Prepared people?", a: "Survive more", o: ["Less", "Survive more", "No change", "Ignore"] },
    { q: "Mock drills?", a: "Train brain", o: ["Waste", "Train brain", "Slow", "Ignore"] },
    { q: "Final goal?", a: "Save lives", o: ["Travel", "Money", "Save lives", "Games"] }
  ];

  const currentQuestion = questions[(level - 1) * 10 + questionIndex];

  const answerQuestion = (option) => {
    if (option === currentQuestion.a) {
      setScore(score + 1);
    }

    if (questionIndex < 9) {
      setQuestionIndex(questionIndex + 1);
    } else {
      if (level < 5) {
        alert(`Level ${level} Completed! 🎉`);
        setLevel(level + 1);
        setQuestionIndex(0);
      } else {
        setGameOver(true);
      }
    }
  };

  if (gameOver) {
    return (
      <div className="container">
        <h1>🏁 Quiz Completed</h1>
        <h2>Your Score: {score} / 50</h2>
        <h3>You reached Level 5 🎉</h3>
        <button onClick={() => window.location.reload()}>Play Again 🔁</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>🧠 Disaster Quiz</h1>
      <h2>Level {level}</h2>
      <h3>Question {questionIndex + 1} / 10</h3>

      <div className="quiz-box">
        <h2>{currentQuestion.q}</h2>

        {currentQuestion.o.map((option, index) => (
          <button key={index} onClick={() => answerQuestion(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
