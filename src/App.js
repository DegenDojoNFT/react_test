import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const showEmployees = true;
  const [role, setRole] = useState("dev");

  // return (
  //   <div className="bg-sky-500/100">
  //     {showEmployees ? (
  //       <>
  //         <input
  //           type="text"
  //           onChange={(e) => {
  //             console.log(e.target.value);
  //             setRole(e.target.value);
  //           }}
  //         />
  //         <Employee name="Degen" role="intern" />
  //         <Employee name="John" role={role} />
  //         <Employee name="Alice" />
  //       </>
  //     ) : (
  //       <p>you cannot see</p>
  //     )}
  //   </div>
  // );

    return (
    <div className="bg-sky-500/100">
      {showEmployees ? (
        <>
          <input
            type="text"
            id="test"
            
          />
          <button onClick={async () => {
            let mint_id = document.getElementById('test').value;
            let ME_Fetch_URL = "http://api-mainnet.magiceden.dev/v2/tokens/";
            ME_Fetch_URL += mint_id;

            let response = fetch(ME_Fetch_URL);

            console.log(response);

          }}>SEARCH</button>
        </>
      ) : (
        <p>you cannot see</p>
      )}
    </div>
  );
}

// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//       currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }

export default App;
