import Card from "../Card";
import Count from "../Count";
import Header from "../Header";
const course = "Frontend Pro"

export const lessonCourse = [
  {id: 1, part: "Вводные занятия по React",tasks: 10},
  {id: 2,  part: "Использование React хуков", tasks: 5 },
  {id: 3, part: "Использование библиотеки react-router-dom", tasks: 15 },
];

function App() {
  return (
    <div>
      <Header course = {course} />
      <Card />
      <Count />
    </div>
  );
}

export default App;
