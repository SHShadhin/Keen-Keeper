'use client';
import { toast } from 'react-toastify';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiVideoCameraBold } from 'react-icons/pi';
import { useContext } from 'react';
import { FriendContext } from '../context/FriendContext';

const CheckInSection = ({ friendName }) => {
    const { AddCart } = useContext(FriendContext);

    const handleAdd = type => {
      const newData = {
        id: Date.now(),
        name: friendName,
        type: type,
        date: new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      };

      AddCart(newData);

       toast.success(`${type} with ${friendName}!`, {
         position: 'top-right',
         autoClose: 1000,
       });

    };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 ">
        <div
          onClick={() => handleAdd('Call')}
          className="bg-gray-50 p-4 shadow-sm rounded-lg flex justify-center items-center flex-col pb-5"
        >
          <LuPhoneCall />
          Call
        </div>
        <div
          onClick={() => handleAdd('Text')}
          className="bg-gray-50 p-4 shadow-sm rounded-lg flex justify-center items-center flex-col"
        >
          <MdOutlineTextsms />
          Text
        </div>
        <div
          onClick={() => handleAdd('Video')}
          className="bg-gray-50 p-4 shadow-sm rounded-lg flex justify-center items-center flex-col"
        >
          <PiVideoCameraBold />
          Video
        </div>
      </div>
    </div>
  );
};

export default CheckInSection;
