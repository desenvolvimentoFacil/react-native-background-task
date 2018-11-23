'use strict';

import { Platform } from "react-native";
import BackgroundTaskAndroid from "./index.android.js";
import BackgroundTaskIOS from "./index.ios.js";

const BackgroundTask = (Platform.OS === 'android') ? BackgroundTaskAndroid.BackgroundTask : BackgroundTaskIOS.BackgroundTask;

module.exports = { BackgroundTask };