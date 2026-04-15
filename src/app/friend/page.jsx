import FriendCard from '@/components/friend/FriendCard';
import React from 'react';

const FriendPage = async () => {
  const res = await fetch('http://localhost:3000/friends.json');
  const friends = await res.json();
  // console.log(friends)
  return (
    <div className='max-w-8/12 mx-auto'>
      <h2 className='text-3xl font-bold my-10'>Your Friends</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {friends.map(friend => (
          <FriendCard key={friend.id} friend={friend}></FriendCard>
        ))}
      </div>
    </div>
  );
};

export default FriendPage;