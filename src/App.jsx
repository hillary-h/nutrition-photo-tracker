
import React, { useState } from "react";

function App() {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState({ name: "", kcal: "", protein: "", salt: "", sugar: "" });

  const handleAddMeal = () => {
    if (meal.name && meal.kcal && meal.protein && meal.salt && meal.sugar) {
      setMeals([...meals, meal]);
      setMeal({ name: "", kcal: "", protein: "", salt: "", sugar: "" });
    }
  };

  const getTotal = (key) =>
    meals.reduce((acc, m) => acc + parseFloat(m[key] || 0), 0).toFixed(1);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif", maxWidth: 600, margin: "0 auto" }}>
      <h1>饮食记录 App</h1>

      <div style={{ marginBottom: 20 }}>
        <input placeholder="食物名" value={meal.name} onChange={(e) => setMeal({ ...meal, name: e.target.value })} /><br/>
        <input placeholder="热量 (kcal)" type="number" value={meal.kcal} onChange={(e) => setMeal({ ...meal, kcal: e.target.value })} /><br/>
        <input placeholder="蛋白质 (g)" type="number" value={meal.protein} onChange={(e) => setMeal({ ...meal, protein: e.target.value })} /><br/>
        <input placeholder="盐分 (g)" type="number" value={meal.salt} onChange={(e) => setMeal({ ...meal, salt: e.target.value })} /><br/>
        <input placeholder="糖分 (g)" type="number" value={meal.sugar} onChange={(e) => setMeal({ ...meal, sugar: e.target.value })} /><br/>
        <button onClick={handleAddMeal}>添加</button>
        <button style={{ marginLeft: 10 }} onClick={() => window.open("https://chat.openai.com/g/g-Fgys35Irw-nutrition-photo-assist", "_blank")}>
          📸 拍照识别
        </button>
      </div>

      <div style={{ background: '#eee', padding: 10 }}>
        <h3>今日总摄入</h3>
        <p>热量：{getTotal("kcal")} kcal</p>
        <p>蛋白质：{getTotal("protein")} g</p>
        <p>盐分：{getTotal("salt")} g</p>
        <p>糖分：{getTotal("sugar")} g</p>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>记录历史</h3>
        {meals.map((m, i) => (
          <div key={i}>✅ {m.name}：{m.kcal} kcal / {m.protein}g 蛋白 / {m.salt}g 盐 / {m.sugar}g 糖</div>
        ))}
      </div>
    </div>
  );
}

export default App;
