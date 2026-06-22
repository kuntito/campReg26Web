import { Box, Text, Select, SelectProps } from "@chakra-ui/react";
import { useState } from "react";

interface Props extends SelectProps {

}

const AppDropdownField = ({
    ...selectProps
}: Props) => {
    return (
        <div>AppDropdownField</div>
    )
}

export default AppDropdownField