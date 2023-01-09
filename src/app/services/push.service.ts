import { Injectable } from '@angular/core';
import OneSignal from 'onesignal-cordova-plugin';


@Injectable({
  providedIn: 'root',
})
export class PushService {
  constructor() {
    // this.OneSignalInit();
  }

  OneSignalInit(): void {
    console.log('Entra servicio push');
    
    OneSignal.setAppId('c7d0750f-678f-4652-aa52-9e53e2b02988');
    OneSignal.setNotificationOpenedHandler(function (jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });

    // Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
    OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
      console.log('User accepted notifications: ' + accepted);
    });
  }

  serviceFunction() {
    return new Promise((resolve, reject) => {
      OneSignal.getDeviceState((response) => {
        resolve(response.userId);
      });
    });
  }

  OneSignalInitV2(): void {
    // NOTE: Update the setAppId value below with your OneSignal
    OneSignal.setAppId('c7d0750f-678f-4652-aa52-9e53e2b02988');
    OneSignal.setNotificationOpenedHandler(function (jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });
  }
}
