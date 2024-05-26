// @ts-check
/* eslint-disable no-console */
import {app} from 'electron/main';

app.whenReady()
    .then(() => console.log('Electron app is ready'))
    .catch(console.error);
