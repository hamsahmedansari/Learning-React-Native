import { AsyncStorage } from "react-native";
import { AppAuth } from "expo";
import clientId from "./api";
const config = {
  issuer: "https://accounts.google.com",
  scopes: ["openid", "profile"],
  clientId
};

const StorageKey = "@LearningReactNative:GoogleOAuthKey";

export async function signInAsync() {
  const authState = await AppAuth.authAsync(config);
  await cacheAuthAsync(authState);
  console.log("signInAsync", authState);
  return authState;
}

function cacheAuthAsync(authState) {
  return AsyncStorage.setItem(StorageKey, JSON.stringify(authState));
}

export async function getCachedAuthAsync() {
  const value = await AsyncStorage.getItem(StorageKey);
  const authState = JSON.parse(value);
  console.log("getCachedAuthAsync", authState);
  if (authState) {
    if (checkIfTokenExpired(authState)) {
      return refreshAuthAsync(authState);
    } else {
      return authState;
    }
  }
  return null;
}
function checkIfTokenExpired({ accessTokenExpirationDate }) {
  return new Date(accessTokenExpirationDate) < new Date();
}
async function refreshAuthAsync({ refreshToken }) {
  const authState = await AppAuth.refreshAsync(config, refreshToken);
  console.log("refreshAuthAsync", authState);
  await cacheAuthAsync(authState);
  return authState;
}

export async function signOutAsync({ accessToken }) {
  try {
    await AppAuth.revokeAsync(config, {
      token: accessToken,
      isClientIdProvided: true
    });
    await AsyncStorage.removeItem(StorageKey);
    return null;
  } catch ({ message }) {
    alert(`Failed to revoke token: ${message}`);
  }
}
