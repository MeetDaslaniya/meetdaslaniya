import { getDatabase, ref, set, child, get } from "firebase/database";
import { app } from "../Firebase";
import { useState } from "react";
const Contact = () => {
  const [text, setText] = useState("");
  const [id, setId] = useState();


  function writeUserData() {
    const db = getDatabase(app);
    set(ref(db, "users/" + id), {
      data: text,
    });
  }

  const dbRef = ref(getDatabase(app));
  get(child(dbRef, `users/1`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val().data);
        var getdata=snapshot.val().data
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <div>
      <h1>Contact</h1>
      <label>ID:</label>
      <input
        type="number"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border-2 border-black mt-2"
      />
      <br/>
      <label>Text:</label>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-2 border-black"
      />
      <br/>
      
      <button
        type="button"
        onClick={() => writeUserData()}
        class=" mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Default
      </button>
    </div>
  );
};

export default Contact;
