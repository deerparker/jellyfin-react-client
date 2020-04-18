# jellyfin-react-client

The next generation client application for Jellyfin

Project created manually, based on: https://github.com/react-everywhere/re-start/pull/60

This project uses `yarn`.

## Install
Run `yarn install` in the `jellyfinclient` directory

## Run the project on a specific platform
All the following commands are run inside the `jellyfinclient` directory
### Android/iOS
```sh
yarn run android
yarn run ios
```

Android requires the `ANDROID_HOME` variable to be set.

In case of problems, this [tutorial](https://facebook.github.io/react-native/docs/running-on-device.html) will help you to configure your environment.

## Build for production

### Android
```sh
yarn run android:release
```

### iOS
```sh
yarn run ios:release
