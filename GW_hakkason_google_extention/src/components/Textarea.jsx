import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

export default function EmptyTextarea() {
    const classes = useStyles();

    return (
        <Draggable handle=".textarea-title">
            <div className="textarea-flame">
                    <div className="textarea-back">
                        <TextField id="content" label="Drag" variant="standard" margin="none" className="textarea-title"/>                        
                        <TextareaAutosize className="textarea" rows={10} aria-label="empty textarea" /> {/* placeholder="Empty" */}
                    </div>
            </div>
        </Draggable>

    );
}