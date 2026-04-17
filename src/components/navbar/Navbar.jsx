'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ImStatsBars } from 'react-icons/im';
import { IoHomeOutline } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import logoImg from '../../assets/images/logo.png';

const Navbar = () => {
  const PathName = usePathname();
  const links = (
    <>
      <li>
        <Link
          className={PathName === '/' ? 'bg-[#244D3F] text-white' : ''}
          href="/"
        >
          {' '}
          <IoHomeOutline size={16} /> Home
        </Link>
      </li>
      <li>
        <Link
          className={PathName === '/timeline' ? 'bg-[#244D3F] text-white' : ''}
          href="/timeline"
        >
          {' '}
          <RiTimeLine /> Timeline
        </Link>
      </li>
      <li>
        <Link
          className={PathName === '/stats' ? 'bg-[#244D3F] text-white' : ''}
          href="/stats"
        >
          {' '}
          <ImStatsBars />
          Stats
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm ">
      <div className="navbar   max-w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>

          <Image src={logoImg} alt="KeenKeeper" width={140} height={35} />
        </div>

        <div className="navbar-end hidden md:flex lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 ">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
