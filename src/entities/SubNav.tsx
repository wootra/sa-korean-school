import NavLink from '@/features/NavLink';
export type SubNavInfo<TITLE_TYPE = string> = {
    title: TITLE_TYPE;
    href: string;
    exact?: boolean;
    notReady?: boolean;
};
type Props<T extends string = string> = {
    navList: SubNavInfo[];
    titles?: Record<T, string>;
};
const SubNav = <T extends string = string>({ navList, titles }: Props<T>) => {
    return (
        <nav className='sticky top-14 sm:top-16 md:top-20 gap-4 z-50 flex flex-row flex-wrap text-white items-center px-4 text-sm font-medium bg-black/80 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800'>
            {navList.map(nav => (
                <NavLink
                    href={nav.href}
                    key={nav.href}
                    exact={nav.exact}
                    onlyHorizontal={true}
                    notReady={nav.notReady}
                >
                    {titles ? titles[nav.title as T] : nav.title}
                </NavLink>
            ))}
        </nav>
    );
};

export default SubNav;
