import React, { Component } from "react";
import { ScrollView, Text, Button, View } from "react-native";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from "expo";

class task57 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adMobBannerLogs: [],
      adMobInterstitialLogs: [],
      adMobPublisherBannerLogs: [],
      adMobRewardLogs: []
    };
  }
  _handelAdMobInterstitial = async () => {
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
  };
  _handelAdMobReward = async () => {
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  };
  componentDidMount = async () => {
    AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712");
    AdMobInterstitial.setTestDeviceID("EMULATOR");
    AdMobInterstitial.addEventListener("interstitialDidLoad", () => {
      this.setState(per => ({
        ...per,
        adMobInterstitialLogs: [
          ...per.adMobInterstitialLogs,
          "New Ad is loaded"
        ]
      }));
    });
    AdMobInterstitial.addEventListener("interstitialDidFailToLoad", err => {
      console.error(err);
      this.setState(per => ({
        ...per,
        adMobInterstitialLogs: [
          ...per.adMobInterstitialLogs,
          "New Ad is Failed"
        ]
      }));
    });

    AdMobInterstitial.addEventListener("interstitialDidOpen", () => {
      this.setState(per => ({
        ...per,
        adMobInterstitialLogs: [...per.adMobInterstitialLogs, "Ad is Open"]
      }));
    });
    AdMobInterstitial.addEventListener("interstitialDidClose", () => {
      this.setState(per => ({
        ...per,
        adMobInterstitialLogs: [...per.adMobInterstitialLogs, "Ad is Closed"]
      }));
    });
    AdMobInterstitial.addEventListener(
      "interstitialWillLeaveApplication",
      () => {
        this.setState(per => ({
          ...per,
          adMobInterstitialLogs: [
            ...per.adMobInterstitialLogs,
            "Ad is leaving the application"
          ]
        }));
      }
    );
    await AdMobInterstitial.requestAdAsync();

    //
    AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917");
    AdMobRewarded.setTestDeviceID("EMULATOR");
    AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", d => {
      console.log(d);

      this.setState(per => ({
        ...per,
        adMobRewardLogs: [
          ...per.adMobRewardLogs,
          "Ad is leaving the application"
        ]
      }));
    });
    AdMobRewarded.addEventListener("rewardedVideoDidLoad", d => {
      console.log(d);

      this.setState(per => ({
        ...per,
        adMobRewardLogs: [...per.adMobRewardLogs, "Ad is Loaded"]
      }));
    });

    AdMobRewarded.addEventListener("rewardedVideoDidFailToLoad", d => {
      console.log(d);

      this.setState(per => ({
        ...per,
        adMobRewardLogs: [...per.adMobRewardLogs, "Ad is Failed to load"]
      }));
    });
    AdMobRewarded.addEventListener("rewardedVideoDidOpen", d => {
      console.log(d);

      this.setState(per => ({
        ...per,
        adMobRewardLogs: [...per.adMobRewardLogs, "Ad is open"]
      }));
    });
    AdMobRewarded.addEventListener("rewardedVideoDidComplete", d => {
      console.log(d);

      this.setState(per => ({
        ...per,
        adMobRewardLogs: [...per.adMobRewardLogs, "Ad is complete"]
      }));
    });
    AdMobRewarded.addEventListener("rewardedVideoDidClose", d => {
      console.log(d);

      this.setState(per => ({
        ...per,
        adMobRewardLogs: [...per.adMobRewardLogs, "Ad is close"]
      }));
    });
    AdMobRewarded.addEventListener("rewardedVideoWillLeaveApplication", d => {
      console.log(d);

      this.setState(per => ({
        ...per,
        adMobRewardLogs: [
          ...per.adMobRewardLogs,
          "Ad is leavening the application"
        ]
      }));
    });
  };
  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
    AdMobRewarded.removeAllListeners();
  }

  render() {
    return (
      <View>
        <Text>Banner</Text>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          onAdViewDidReceiveAd={() => {
            this.setState(per => ({
              ...per,
              adMobBannerLogs: [...per.adMobBannerLogs, "New Ad is loaded"]
            }));
          }}
          onDidFailToReceiveAdWithError={err => {
            console.error(err);
            this.setState(per => ({
              ...per,
              adMobBannerLogs: [...per.adMobBannerLogs, "Got Some Error"]
            }));
          }}
          onAdViewWillPresentScreen={data => {
            console.error(data);
            this.setState(per => ({
              ...per,
              adMobBannerLogs: [...per.adMobBannerLogs, "Ad will Present"]
            }));
          }}
          onAdViewWillDismissScreen={data => {
            console.error(data);
            this.setState(per => ({
              ...per,
              adMobBannerLogs: [...per.adMobBannerLogs, "Ad will Dismiss"]
            }));
          }}
          onAdViewDidDismissScreen={data => {
            console.error(data);
            this.setState(per => ({
              ...per,
              adMobBannerLogs: [...per.adMobBannerLogs, "Ad did Dismiss"]
            }));
          }}
          onAdViewWillLeaveApplication={data => {
            console.error(data);
            this.setState(per => ({
              ...per,
              adMobBannerLogs: [
                ...per.adMobBannerLogs,
                "Ad will Leave Application"
              ]
            }));
          }}
        />
        <Text>---logs---</Text>
        <ScrollView
          style={{
            margin: 10,
            padding: 10,
            width: "100%",
            maxHeight: 50,
            backgroundColor: "#cccccc",
            borderWidth: 2,
            borderColor: "black"
          }}
        >
          {this.state.adMobBannerLogs.map((log, i) => (
            <Text key={i}>{log}</Text>
          ))}
        </ScrollView>
        <Text>Publisher Banner</Text>
        <PublisherBanner
          bannerSize="leaderboard"
          adUnitID="ca-app-pub-3940256099942544/6300978111" //
          testDeviceID="EMULATOR "
          onAdViewDidReceiveAd={() => {
            this.setState(per => ({
              ...per,
              adMobPublisherBannerLogs: [
                ...per.adMobPublisherBannerLogs,
                "New Ad is loaded"
              ]
            }));
          }}
          onDidFailToReceiveAdWithError={err => {
            console.error(err);
            this.setState(per => ({
              ...per,
              adMobPublisherBannerLogs: [
                ...per.adMobPublisherBannerLogs,
                "Got Some Error"
              ]
            }));
          }}
          onAdViewWillPresentScreen={data => {
            console.error(data);
            this.setState(per => ({
              ...per,
              adMobPublisherBannerLogs: [
                ...per.adMobPublisherBannerLogs,
                "Ad will Present"
              ]
            }));
          }}
          onAdViewWillDismissScreen={data => {
            console.error(data);
            this.setState(per => ({
              ...per,
              adMobPublisherBannerLogs: [
                ...per.adMobPublisherBannerLogs,
                "Ad will Dismiss"
              ]
            }));
          }}
          onAdViewDidDismissScreen={data => {
            console.error(data);
            this.setState(per => ({
              ...per,
              adMobPublisherBannerLogs: [
                ...per.adMobPublisherBannerLogs,
                "Ad did Dismiss"
              ]
            }));
          }}
          onAdViewWillLeaveApplication={data => {
            console.error(data);
            this.setState(per => ({
              ...per,
              adMobPublisherBannerLogs: [
                ...per.adMobPublisherBannerLogs,
                "Ad will Leave Application"
              ]
            }));
          }}
        />

        <Text>---logs---</Text>
        <ScrollView
          style={{
            margin: 10,
            padding: 10,
            width: "100%",
            maxHeight: 50,
            backgroundColor: "#cccccc",
            borderWidth: 2,
            borderColor: "black"
          }}
        >
          {this.state.adMobPublisherBannerLogs.map((log, i) => (
            <Text key={i}>{log}</Text>
          ))}
        </ScrollView>
        <Text>Interstitial</Text>
        <Button
          title="Show Interstitial"
          onPress={this._handelAdMobInterstitial}
        />

        <Text>---logs---</Text>
        <ScrollView
          style={{
            margin: 10,
            padding: 10,
            width: "100%",
            maxHeight: 50,
            backgroundColor: "#cccccc",
            borderWidth: 2,
            borderColor: "black"
          }}
        >
          {this.state.adMobInterstitialLogs.map((log, i) => (
            <Text key={i}>{log}</Text>
          ))}
        </ScrollView>
        <Text>Reward</Text>
        <Button title="Show Reward" onPress={this._handelAdMobReward} />

        <Text>---logs---</Text>
        <ScrollView
          style={{
            margin: 10,
            padding: 10,
            width: "100%",
            maxHeight: 50,
            backgroundColor: "#cccccc",
            borderWidth: 2,
            borderColor: "black"
          }}
        >
          {this.state.adMobRewardLogs.map((log, i) => (
            <Text key={i}>{log}</Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default task57;
