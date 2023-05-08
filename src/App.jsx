import "./App.css";

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    getAllTasks()
      .then((data) => {
        setTask(data);
      })
      .catch(console.error);
  }, [third]);

  async function getAllTasks() {
    const response = await fetch(`http://localhost:3000/tasks`);
    return response.json();
  }

  return <></>;
}

export default App;
