import React from 'react';

const Banner = () => {
  return (
    <div className="max-w-8/12 mx-auto">
      <div className="text-center space-y-4 mt-20">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold">
          Friends to keep close in your life
        </h2>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white">+ Add a Friend</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <div className="card bg-base-100 card-md shadow-sm">
          <div className="card-body flex items-center flex-col justify-center">
            <h2 className="card-title text-2xl font-medium">10</h2>
            <p>Total Friends</p>
          </div>
        </div>
        <div className="card bg-base-100 card-md shadow-sm">
          <div className="card-body  flex items-center flex-col justify-center">
            <h2 className="card-title text-2xl font-medium">3</h2>
            <p>On Track</p>
          </div>
        </div>
        <div className="card bg-base-100 card-md shadow-sm">
          <div className="card-body  flex items-center flex-col justify-center">
            <h2 className="card-title text-2xl font-medium">6</h2>
            <p>Need Attention</p>
          </div>
        </div>
        <div className="card bg-base-100 card-md shadow-sm">
          <div className="card-body  flex items-center flex-col justify-center">
            <h2 className="card-title text-2xl font-medium">12</h2>
            <p>Interactions This Month</p>
          </div>
        </div>
      </div>

      <div className="h-0.5 bg-[#dce0e04a] mt-13"></div>
    </div>
  );
};

export default Banner;