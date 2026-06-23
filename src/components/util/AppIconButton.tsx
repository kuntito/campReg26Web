import { IconButton } from "@chakra-ui/react";
import { forwardRef, ReactElement } from "react";

interface Props {
    icon: ReactElement;
    iconColor: string;
    iconColorWhenHovered?: string;
    onClick: () => void;
}


const AppIconButtonInner = (
    {
        icon,
        iconColor,
        iconColorWhenHovered = iconColor,
        onClick
    }: Props,
    ref: React.Ref<HTMLButtonElement>
) => {
    return <IconButton
        aria-label="some icon"
        variant={"ghost"} 
        icon={icon}
        _hover={{ 
            bg: "palette.telliTransparent",
        }}
        _active={{
            opacity: 0.5,
        }}
        sx={{
            '& svg': {
                color: iconColor,
            },
            '&:hover svg': {
                color: iconColorWhenHovered,
            }
        }}
        onClick={onClick}
        ref={ref}
    />
}

/**
 * a wrapper around ChakraUI's `IconButton`.
 * allows you to define the icon color when hovered.
 * 
 * it requires the icon to be an `svg`
 * the icons created with 
 * 
 * `import { createIcon } from "@chakra-ui/react";`
 * 
 * are rendered as svg.
 * 
 * it can also be owned by other button components i.e. `MenuButton`
 * <MenuButton
 *      as={AppIconButton}
 *      icon={<AddTagIcon boxSize={"24px"}/>}
 *      ...
 *  />
 * 
 * this way `MenuButton` takes on the hover effects but still acts as a menu button.
 * it achieves this using the `forwardRef` hook.
 */
const AppIconButton = forwardRef<HTMLButtonElement, Props>(AppIconButtonInner);

export default AppIconButton;