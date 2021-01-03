import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import axios from 'axios';

const func_getInformationUser = (token, resolve) => {
  axios({
    method: 'GET',
    url: `https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=${token}`,
    headers: {
      'Cache-Control': 'no-cache',
    },
  })
    .then((res) => {
      // user.user_friends = json.friends
      // user.email = json.email
      // user.loading = false
      // user.loggedIn = true
      // user.avatar = setAvatar(json.id)
      // let idUserFace = ress.data.id;
      // let nameUserFace = ress.data.name;
      resolve({status: true, dataPromise: res});      
    })
    .catch((error) => {
      resolve({status: false});
      LoginManager.logOut();
    });
};
export const func_LoginFace = () => {
  return new Promise((resolve, reject) => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          resolve({status: false});
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            func_getInformationUser(data.accessToken.toString(), resolve);
          });
        }
      },
      function (error) {
        LoginManager.logOut();
        resolve({status: false});
      },
    );
  });
};
