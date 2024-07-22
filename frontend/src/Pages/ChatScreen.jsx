import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/Miscellanous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const ChatScreen = () => {
    const [fetchAgain, setFetchAgain] = useState(false);
    const { user } = ChatState();

    return (
        <div className="w-full">
            {user && <SideDrawer />}
            <Box className="flex justify-between w-full p-2.5 h-[91.5vh]">
                {user && <MyChats fetchAgain={fetchAgain} />}
                {user && (
                    <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
                )}
            </Box>
        </div>
    );
};

export default ChatScreen;