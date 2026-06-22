import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
    
}

const AppButton = ({ ...buttonProps }: Props) => {
    return (
        <Button 
            bg={"palette.room"}
            color={"palette.life"}
            borderRadius={100} 
            _hover={{
                bg: "palette.roomAlpha",
            }}
            _active={{
                opacity: 0.5,
            }}
            flexShrink={0}
            {...buttonProps} 
        />
    );
};

export default AppButton;
