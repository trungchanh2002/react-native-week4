// import React, { useState } from "react";
// import App1 from "./App1";
// import App2 from "./App2";
// import App3 from "./App3";
// import App4 from "./App4";

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(null);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };
//   return (
//     <div>
//       <ul style={{ display: currentPage ? "none" : "block" }}>
//         <li onClick={() => handlePageChange("App1")}>App1</li>
//         <li onClick={() => handlePageChange("App2")}>App2</li>
//         <li onClick={() => handlePageChange("App3")}>App3</li>
//         <li onClick={() => handlePageChange("App4")}>App4</li>
//       </ul>
//       {currentPage === "App1" && <App1 />}
//       {currentPage === "App2" && <App2 />}
//       {currentPage === "App3" && <App3 />}
//       {currentPage === "App4" && <App4 />}
//     </div>
//   );
// };

// export default App;
import React from "react";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";

const App = () => {
  return <App1 />;
  return <App2 />;
  return <App3 />;
  return <App4 />;
};
export default App;
