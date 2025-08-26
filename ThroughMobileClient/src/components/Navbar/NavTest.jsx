import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import LogoWhite from '../ui/LogoWhite';
// } from '@/components/ui/navigation-menu';

const NavTest = () => {
    return (
        <NavigationMenu
            className={
                'fixed top-0 right-0 w-full z-50 flex justify-between items-center bg-nav/90 backdrop-blur-sm text-white border-b border-b-gray-500 py-2 px-24 max-sm:px-8'
            }
        >
            <LogoWhite />
            <NavigationMenuList className={'max-sm:hidden flex gap-6 text-sm'}>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link1</NavigationMenuLink>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default NavTest;
