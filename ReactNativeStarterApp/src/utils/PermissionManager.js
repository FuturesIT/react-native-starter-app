import { Alert } from 'react-native';
import Permissions from 'react-native-permissions';
import OpenAppSettings from 'react-native-app-settings';
import { Strings } from '../constants';

const PermissionsType = {
  Location: 'location',
  Camera: 'camera',
  Microphone: 'microphone',
  Photos: 'photo',
  Contacts: 'contacts',
  Events: 'event',
  Bluetooth: 'bluetooth',
  Reminders: 'reminder',
  Push_Notifications: 'notification',
  Background_Refresh: 'backgroundRefresh',
  Speech_Recognition: 'speechRecognition',
  mediaLibrary: 'mediaLibrary',
  Motion_Activity: 'motion',
  Storage: 'storage',
  Phone_Call: 'callPhone',
  Read_SMS: 'readSms',
  Receive_SMS: 'receiveSms',
};

export default class PermissionManager {

  // 'authorized', 'denied', 'restricted', or 'undetermined'
  static requestPermission = (type, title, message) => new Promise(async (resolve) => {
    const response = await Permissions.request(type);
    if (response !== 'authorized') {
      Alert.alert(title, message, [
        {
          text: Strings.Cancel,
        },
        {
          text: Strings.OpenSettings,
          onPress: () => {
            OpenAppSettings.open();
          },
        }
      ]);
      resolve(false);
    } else {
      resolve(true);
    }
  })

  static requestLocationPermission = () => PermissionManager.requestPermission(PermissionsType.Location, Strings.LocationPermissionTitle, Strings.LocationPermissionMessage);
  static requestCameraPermission = () => PermissionManager.requestPermission(PermissionsType.Camera, Strings.CameraPermissionTitle, Strings.CameraPermissionMessage);
  static requestPhotoPermission = () => PermissionManager.requestPermission(PermissionsType.Photos, Strings.PhotoPermissionTitle, Strings.PhotoPermissionMessage);

}
