// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Alert = () => {
//   const [swalShown, setSwalShown] = useState(false);

//   const showSwal = () => {
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: "Your work has been saved",
//       showConfirmButton: false,
//       timer: 1500
//     });
//   };

//   return (
//     <>
//       <h1>Home</h1>
//       <button onClick={showSwal()}>Show SweetAlert2 modal</button>
//       {swalShown && (
//         <Link to="/about" onClick={() => Swal.close()}>
//           Go to About
//         </Link>
//       )}
//     </>
//   );
// };

// export default Alert
