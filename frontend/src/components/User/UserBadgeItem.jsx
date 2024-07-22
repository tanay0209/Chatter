import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/layout";


const UserBadgeItem = ({ user, handleFunction, admin }) => {
    return (
        <Badge
            className="px-2 py-2 rounded-lg m-1 mb-2 text-base cursor-pointer"
            variant="solid"
            colorScheme="purple"
            cursor="pointer"
            onClick={handleFunction}
        >
            {user.name}
            {admin === user._id && <span> (Admin)</span>}
            <CloseIcon pl={1} />
        </Badge>
    );
};

export default UserBadgeItem;