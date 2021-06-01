import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import { IconButton } from '@material-ui/core';

interface IDotProps {
  index: number;
  callback: (arg0: any) => void;
  active: boolean;
}

export default function Dot({ index, callback, active }: IDotProps) {
  const onDotClick = () => {
    callback(index);
  };
  return (
    <IconButton onClick={onDotClick}>
      {active ? (
        <FiberManualRecordIcon color='primary' fontSize='small' />
      ) : (
        <FiberManualRecordOutlinedIcon color='primary' fontSize='small' />
      )}
    </IconButton>
  );
}
