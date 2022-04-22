import "./App.css";
import { useRef } from "react";
import FormInput from "./componetn/FormInput";

function App() {
  // const [username, setUsername] = useState("");  //이렇게 했을때, 계속해서 기입할때마다 재랜더링이 된다.
  // const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Username" />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="fullname" placeholder="Full name" />
        <FormInput name="sht" placeholder="Sth else" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
