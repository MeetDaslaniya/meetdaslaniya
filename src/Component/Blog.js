import { getDatabase, ref, set, child, get } from "firebase/database";
import { app } from "../Firebase";
import { useEffect, useState } from "react";
const Blog = () => {
  const [getdata, setGetdata] = useState();
  const dbRef = ref(getDatabase(app));

  get(child(dbRef, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setGetdata(snapshot.val());
        // console.log(snapshot.val())
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // console.log(getdata[1].data)
  return (
    <div>
      <h1>{getdata[3].data}</h1>
    </div>
  );
};

export default Blog;
