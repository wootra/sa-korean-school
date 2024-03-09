import Image from 'next/image';
import UserInfoButton from '@/features/UserInfoButton';
import NavLink from '@/features/NavLink';

const Header = () => {
    return (
        <header className='group sticky top-0 gap-4 z-50 flex items-center px-4 text-sm font-medium bg-white/90 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800 h-full'>
            <div className='flex md:pointer-events-none items-center font-bold w-40 flex-shrink-0 flex-grow-0 gap-2 cursor-pointer md:cursor-default'>
                <Image
                    alt='San Antonio Korean School logo'
                    className='rounded-full'
                    height='40'
                    src='/logo.png'
                    style={{
                        aspectRatio: '40/40',
                        objectFit: 'cover',
                    }}
                    width='40'
                />
                <span className='flex flex-col'>
                    <span className='text-nowrap'>San Antonio</span>
                    <span className='text-nowrap'> Korean School</span>
                </span>
            </div>
            <input type='checkbox' id='menu-toggle' className='opacity-0' />
            <nav className='h-full hidden group-has-[input:checked]:flex sm:flex flex-1 items-center justify-end gap-4 flex-col sm:flex-row absolute left-0 top-[100%] bg-red-100 shadow-lg sm:bg-transparent sm:static sm:shadow-none '>
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/about'>About</NavLink>
                <NavLink href='/courses'>Courses</NavLink>
                <NavLink href='/events'>Events</NavLink>
                <NavLink href='/payment'>Payment</NavLink>
                <NavLink href='/contacts'>Contacts</NavLink>
            </nav>
            <label
                htmlFor='menu-toggle'
                className='flex h-full items-center justify-center cursor-pointer '
            >
                <UserInfoButton />
            </label>
        </header>
    );
};

export default Header;
