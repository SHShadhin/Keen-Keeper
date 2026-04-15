import React from 'react';
import { FaRegBell } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiVideoCameraBold } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const FriendDetailsPage = async ({params}) => {
  const { id } = await params;
  
  const res = await fetch('http://localhost:3000/friends.json')
  const data = await res.json()
  console.log(data)

  const friend = data.find(f => f.id == id);
  console.log(friend, 'Friend')

  const statusColors = {
    Overdue: 'bg-[#EF4444] text-white',
    'Almost Due': 'bg-[#EFAD44] text-white',
    'On-track': 'bg-[#244D3F] text-white',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-8/12 mx-auto gap-6 py-15">
      <div className="flex flex-col gap-6 ">
        <div className="card bg-base-100 card-md shadow-sm text-center p-10 space-y-4">
          <div className="flex justify-center ">
            <img
              className="rounded-full w-[100px] h-[100px] "
              src={friend.picture}
              alt=""
            />
          </div>

          <div className="">
            <h1 className="text-[20px] font-semibold"> {friend.name} </h1>
          </div>

          <div className="">
            {/* {friend.status} */}

            <div
              className={`badge ${statusColors[friend.status] || 'bg-gray-400 text-white'} text-center`}
            >
              {friend.status}
            </div>
          </div>

          <div className=" flex justify-center gap-2 ">
            <div className="badge badge-success">{friend.tags[0]}</div> <br />
            <div className="badge badge-success">{friend.tags[1]}</div> <br />
          </div>

          <div className="text-[#64748B] italic">{friend.bio}</div>
          <div className="text-[#64748B] flex justify-center gap-2 ">
            <div className="italic">Preferred:</div>
            <span className="text-black">{friend.email}</span>
          </div>
        </div>
        <div className="flex flex-col gap-6 ">
          <div className="bg-base-100 p-5 shadow-sm rounded-xl flex gap-2 items-center justify-center font-medium">
            <FaRegBell /> Snooze 2 weeks
          </div>
          <div className="bg-base-100 p-5 shadow-sm rounded-xl flex gap-2 items-center justify-center font-medium">
            <FiArchive /> Archive
          </div>
          <div className="bg-base-100 p-5 shadow-sm rounded-xl flex gap-2 items-center justify-center text-red-500 font-medium">
            <RiDeleteBin6Line /> Delete
          </div>
        </div>
      </div>

      <div className="">
        <div className="space-y-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-base-100 h-[140] flex items-center justify-center flex-col p-4 shadow-sm rounded-xl text-center">
              <h2 className="text-xl font-bold ">
                {' '}
                {friend.days_since_contact}{' '}
              </h2>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-base-100 p-4 h-[140] flex items-center justify-center flex-col shadow-sm rounded-xl text-center">
              <h2 className="text-xl font-bold">{friend.goal}</h2>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-base-100 p-4 h-[140] flex items-center justify-center flex-col shadow-sm rounded-xl text-center">
              <h2 className="text-xl font-bold">{friend.next_due_date}</h2>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="bg-base-100 h-[140] p-4 shadow-sm rounded-xl">
            <div className="flex justify-between items-center pt-5">
              <h3 className="font-semibold">Relationship Goal</h3>
              <button className="text-sm border px-2 py-1 rounded">Edit</button>
            </div>

            <p className="mt-2 text-sm ">
              Connect every <strong>{friend.days_since_contact} days</strong>
            </p>
          </div>

          <div className="bg-base-100 p-4 h-[170] shadow-sm rounded-xl">
            <h3 className="font-semibold mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4 ">
              <div className="bg-gray-50 p-4 shadow-sm rounded-lg flex justify-center items-center flex-col pb-5">
                <LuPhoneCall />
                Call
              </div>
              <div className="bg-gray-50 p-4 shadow-sm rounded-lg flex justify-center items-center flex-col">
                <MdOutlineTextsms />
                Text
              </div>
              <div className="bg-gray-50 p-4 shadow-sm rounded-lg flex justify-center items-center flex-col">
                <PiVideoCameraBold />
                Video
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};;

export default FriendDetailsPage;