import NavLink from '@/features/NavLink';
export type SubNavInfo = {
    title: string;
    href: string;
    exact?: boolean;
    notReady?: boolean;
};
type Props = { navList: SubNavInfo[] };
const SubNav = ({ navList }: Props) => {
    return (
        <header className='sticky top-0 gap-4 z-50 flex flex-row items-center px-4 text-sm font-medium bg-black/80 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800'>
            <nav className='flex flex-row gap-4 text-white'>
                {navList.map(nav => (
                    <NavLink
                        href={nav.href}
                        key={nav.href}
                        exact={nav.exact}
                        onlyHorizontal={true}
                        notReady={nav.notReady}
                    >
                        {nav.title}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default SubNav;
