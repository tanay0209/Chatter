import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { ChatState } from "../../Context/ChatProvider";

const UserListItem = ({ handleFunction, user }) => {
    return (
        <Box
            onClick={handleFunction}
            className="cursor-pointer bg-[#e8e8e8] hover:bg-[#38b2ac] hover:text-white w-full flex items-center text-black px-[3px] py-0.5 mb-1 rounded-lg"
        >
            <Avatar
                className="mr-0.5 cursor-pointer"
                name={user.name}
                src={user.pic}
            />
            <Box>
                <Text>{user.name}</Text>
                <Text fontSize="xs">
                    <b>Email : </b>
                    {user.email}
                </Text>
            </Box>
        </Box>
    );
};

export default UserListItem;