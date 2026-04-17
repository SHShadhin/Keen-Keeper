'use client';
import { useContext, useState } from 'react';
import { FriendContext } from '@/components/context/FriendContext';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiVideoCameraBold } from 'react-icons/pi';

 const metadata = {
  title: 'Keen Keeper | Timeline',
  description: 'Keen Keeper is a Social Media Website',
};
const TimelinePage = () => {
  const {cart} = useContext(FriendContext)
  console.log('Current Cart Data:', cart);
  const [search, setSearch] = useState('');

  const config = {
    Call: {
      icon: <LuPhoneCall />,
      bg: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    Text: {
      icon: <MdOutlineTextsms />,
      bg: 'bg-green-100',
      textColor: 'text-green-600',
    },
    Video: {
      icon: <PiVideoCameraBold />,
      bg: 'bg-red-100',
      textColor: 'text-purple-600',
    },
  };

  const filteredCart = cart.filter(item =>
    item.type.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-8/12 py-10  mx-auto">
      <div className="mx-[20px] md:mx-[20px] lg:mx-[20px] lg:mx-0">
        <h1 className="text-2xl font-bold mb-6">Timeline Activities</h1>


        <input
          type="text"
          className="input mb-7"
          placeholder="Filter timeline"
          list="browsers"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="flex flex-col gap-4">
          {filteredCart.length === 0 ? (
            <p className="text-gray-500 italic">No activities recorded yet.</p>
          ) : (
            filteredCart.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md"
              >
                <div
                  className={`p-3 rounded-full ${config[item.type]?.bg || 'bg-gray-100'}`}
                >
                  {config[item.type]?.icon || <Phone size={20} />}
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">
                    {item.type}{' '}
                    <span className="text-gray-500 font-normal">
                      with {item.name}
                    </span>
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
