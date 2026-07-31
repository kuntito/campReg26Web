import { Box } from "@chakra-ui/react";
import Markdown from "react-markdown";

interface Props {
    children: string;
    color?: string;
}

const MarkdownContent = ({
    children: mdText,
    color,
}: Props) => {
    return (
        <Box
            color={color}
            sx={{
                h3: {
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "12px",
                    marginBottom: "6px",
                },
                ol: {
                    paddingLeft: "20px",
                },
                li: {
                    marginBottom: "4px",
                },
                ul: {
                    paddingLeft: "20px",
                },
                blockquote: {
                    borderLeft: "3px solid #ccc",
                    paddingLeft: "12px",
                    fontStyle: "italic",
                    margin: "8px 0",
                },
                p: {
                    marginBottom: "8px",
                },
            }}
        >
            <Markdown>{mdText}</Markdown>
        </Box>
    );
};

export default MarkdownContent;