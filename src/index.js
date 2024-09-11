import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IntroApp from './IntroApp';
import CrudApp from './CrudApp';
import RecipeApp from './RecipeApp';
import CrudAppC from './CrudAppC';
import { ListProvider } from './context/ListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CrudApp/> */}
    {/* < RecipeApp/> */}
    <ListProvider>
    <CrudAppC/>
    </ListProvider>
    


  </React.StrictMode>

// <>
// <h1>Hello world</h1>
// <p>Greetings from mars</p>
// <ul>
//   <li>I</li>
//   <li>like </li>
//   <li>Garri</li>
// </ul>
// <table border='3px'>
//   <td>
//   <th>Name</th>
//   <th>Age</th>
//   </td>
//   <tr>
//     <td>Dola</td>
//     <td>20</td>
//   </tr>
  

// </table>

// </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
