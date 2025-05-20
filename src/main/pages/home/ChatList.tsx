import List from '@mui/material/List';
import { ChatListItem, IChatListItem } from './ChatListItem';

export const ChatList = ({ value = [] }: { value: IChatListItem[] }) => {
  return (
    <List>
      {value.map((item: IChatListItem, idx) => (
        <ChatListItem {...item} key={idx} />
      ))}
    </List>
  );
};
