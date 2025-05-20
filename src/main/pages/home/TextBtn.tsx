import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { observer } from 'mobx-react';
import { useDeferredValue } from 'react';
import { homeStore } from './homeStore';
import * as styles from './TextBtn.scss';

export const TextBtn = observer(({ onClick, value }) => {
  const handleClick = () => {
    // onClick(data)
    const {
      // chatList,
      textValue,
    } = homeStore;
    const value = {
      role: 'user',
      content: textValue,
    };
    onClick(value);
    // chatList.push()
  };

  const { textValue } = homeStore;
  // const deferValue = useDeferredValue(textValue);
  const deferValue = textValue;
  const { flex, flexAuto, icon } = styles;
  return (
    <div className={flex}>
      <TextField
        id="outlined-multiline-flexible"
        label="提问"
        multiline
        maxRows={4}
        value={deferValue}
        onChange={(evt) => {
          const value = evt.target.value;
          homeStore.textValue = value;
        }}
        className={flexAuto}
      />
      <Button
        //   variant="contained"
        size={'large'}
        endIcon={<SendIcon className={icon} />}
        // className=''
        onClick={handleClick}
      />
    </div>
  );
});
