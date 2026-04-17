
import FriendCard from "@/components/friend/FriendCard";
import Banner from "@/components/navbar/banner/Banner";

export default async function Home() {

  const res = await fetch('https://keen-keeper-sand.vercel.app/friends.json');
  const friends = await res.json();
  console.log(friends)
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-8/12 mx-auto">
        <h2 className="text-3xl font-bold my-10">Your Friends</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          {friends.map(friend => (
            <FriendCard key={friend.id} friend={friend}></FriendCard>
          ))}
        </div>
      </div>
    </div>
  );
}
