// 'use client';
// import { useState } from 'react';
// import { FriendContext } from './FriendContext';
// import { useRouter } from 'next/navigation';

// const Provider = ({ children }) => {
// const router = useRouter();
//   const [data, setData] = useState([]);
//   const handleDataStore = data => {
//     setData(prv => [...prv, data]);
//     router.push('/timeline');
//   };
//   console.log(data)
//   return (
//     <FriendContext.Provider value={{ data, setData, handleDataStore }}>
     
//       {children}

//     </FriendContext.Provider>
//   );
// };

// export default Provider;


'use client';
import { useState } from 'react';
import { FriendContext } from './FriendContext';

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddCart = data => {
    setCart(prevCart => [data, ...prevCart]);
  };
  return (
    <FriendContext.Provider value={{ cart, setCart, AddCart }}>
      {' '}
      {children}{' '}
    </FriendContext.Provider>
  );
};

export default Provider;
