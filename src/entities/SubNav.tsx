import NavLink from '@/features/NavLink';
type Props = { navList: { title: string; href: string; exact?: boolean }[] };
const SubNav = ({ navList }: Props) => {
    return (
        <header className='sticky top-0 gap-4 z-50 flex flex-row items-center px-4 text-sm font-medium bg-white/90 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800'>
            <nav className='flex flex-row gap-4'>
                {navList.map(nav => (
                    <NavLink
                        href={nav.href}
                        key={nav.href}
                        exact={nav.exact}
                        onlyHorizontal={true}
                    >
                        {nav.title}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default SubNav;
