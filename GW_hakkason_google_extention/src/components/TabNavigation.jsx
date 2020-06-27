import React, {setState, setEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// for TextField
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


 
export const TabNavigation = () => {
    // for TextField
    const classes = useStyles();

    // for Input
    // const [value, setValue] = setState('');

    return (
        <Tabs>
            <TabList>
                <Tab> <TextField color="secondary" /> </Tab>
                <Tab> <TextField color="secondary" /> </Tab>
                <Tab> <TextField color="secondary" /> </Tab>
                <Tab> <TextField color="secondary" /> </Tab>
                <Tab> <TextField color="secondary" /> </Tab>
                <Tab> <TextField color="secondary" /> </Tab>
            </TabList>
        </Tabs>
    )
}
  
export default TabNavigation;






{/* <Tabs forceRenderTabPanel defaultIndex={1}>
    <TabList>                           //一行目
        <Tab> <TextField /> </Tab>
        <Tab> <TextField /> </Tab>
        <Tab> <TextField /> </Tab>
        <Tab> <TextField /> </Tab>
        <Tab> <TextField /> </Tab>
        <Tab> <TextField /> </Tab>
    </TabList>

            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList>                           //二行目
                        <Tab> <TextField /> </Tab>
                        <Tab> <TextField /> </Tab>
                        <Tab> <TextField /> </Tab>
                        <Tab> <TextField /> </Tab>
                        <Tab> <TextField /> </Tab>
                    </TabList>
                </Tabs>
            </TabPanel>

            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList>                           //二行目
                        <Tab> <TextField /> </Tab>
                        <Tab> <TextField /> </Tab>
                        <Tab> <TextField /> </Tab>
                        <Tab> <TextField /> </Tab>
                        <Tab> <TextField /> </Tab>
                    </TabList>
                </Tabs>
            </TabPanel>
</Tabs> */}
