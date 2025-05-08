const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);

const Li1 = () => {
    // return React.createElement("li", { className: " i1" }, "Item 1");
    return <li className="i1">Item 1</li>;
};

const Li2 = () => {
    return <li className="i2">Item 2</li>;
};

const A1 = () => {
    return <a href="https://www.google.com" className="link">Google</a>;
};

const Ul = () => {
    return (
        <ul>
            <Li1 />
            <Li2></Li2>
            <li><A1 /></li>
            {[...Array(70)].map((_, i) => (
                <li key={i}>Extra Item {i + 1}</li>
            ))}
        </ul>
    );
};

root.render(<Ul />);

//-------------------------------------------------------------------------------------------------------------------------------------------------

/*Awesome — here's a simple and reusable React list rendering template using .map() to generate dynamic items:

✅ Basic List Rendering Template in React

const MyList = () => {
  const items = ["Apple", "Banana", "Cherry", "Date"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
✅ If You Just Want Numbered Items (1 to N)

const NumberedList = () => {
  return (
    <ul>
      {[...Array(10)].map((_, index) => (
        <li key={index}>Item {index + 1}</li>
      ))}
    </ul>
  );
};

⚠️ Why key={index} is used
In React, each list item should have a unique key to help React track changes efficiently when rerendering.

If you have real data (like from an API), use a unique ID instead of index, like:


<li key={user.id}>{user.name}</li>*/


// import React, { useEffect, useState } from "react";

// const UserList = () => {
//   const [users, setUsers] = useState([]);       // store fetched users
//   const [loading, setLoading] = useState(true); // loading state

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);         // update user list
//         setLoading(false);      // stop loading
//       })
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//         setLoading(false);
//       });
//   }, []); // empty dependency array means run only once on mount

//   if (loading) return <p>Loading users...</p>;

//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>
//           {user.name} — {user.email}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default UserList;

/*
    📌 Summary:

    useEffect() runs once when the component loads.

    fetch() gets the user data.

    setUsers() updates the users state.

    The list is rendered with .map().
*/