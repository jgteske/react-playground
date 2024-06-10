import Image from 'next/image';
import Link from 'next/link';
import HeaderNavLink from './HeaderNavLink';
import SearchField from './SearchField';

interface MenuItem {
  label: string;
  url: string;
}

const menuItems: MenuItem[] = [
  { label: `Home`, url: `/` },
  { label: `Buttons`, url: `/buttons` },
  { label: `Animations`, url: `/animations` },
  { label: `Mui`, url: `/muitestpage` },
  { label: `Forms`, url: `/form` },
  { label: `About`, url: `/about` },
];

const Header: React.FC = () => {
  return (
    <header className='flex flex-col gap-5'>
      <div className='py-4 flex items-center'>
        <Link href='/'>
          <Image
            width={36}
            height={36}
            src='/favicon.ico'
            className='w-8 md:w-9'
            alt='logo'
          />
        </Link>
        <nav className='ml-8'>
          <ul className='flex flex-wrap gap-x-8 text-gray-900 '>
            {menuItems.map(({ url, label }, index) => (
              <li key={index}>
                <HeaderNavLink href={url}>{label}</HeaderNavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <SearchField />
    </header>
  );
};

export default Header;
