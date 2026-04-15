import Link from 'next/link';
import React from 'react';

const FriendCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, status, tags } = friend;

  const statusColors = {
    Overdue: 'bg-[#EF4444] text-white',
    'Almost Due': 'bg-[#EFAD44] text-white',
    'On-track': 'bg-[#244D3F] text-white',
  };
  // console.log(friend, 'Friend From FriendCard');
  return (
    <Link href={`/${id}`}>
      <div>
        <div className=" card bg-base-100 card-md shadow-sm">
          <div className="card-body flex items-center flex-col justify-center">
            <div className=" text-center space-y-2">
              <div className="flex justify-center ">
                <img className="rounded-full" src={picture} alt="" />
              </div>
              <div className="text-[20px] font-semibold text-black">
                <h1> {name} </h1>
              </div>
              <div className="text-[18px] text-[#64748B]">
                <p> {days_since_contact}d ago </p>
              </div>
              <div className="badge badge-success">{tags[1]}</div> <br />
              <div
                className={`badge ${statusColors[status] || 'bg-gray-400 text-white'}`}
              >
                {status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
