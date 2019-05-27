import React, { Component } from "react";
import { ScrollView, Text, Button } from "react-native";
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
      adMobInterstitialLogs: []
    };
  }
  _handelAdMobInterstitial = async () => {
    AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712");
    AdMobInterstitial.setTestDeviceID("EMULATOR");
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
  };
  _handelAdMobReward = async () => {
    AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917");
    AdMobRewarded.setTestDeviceID("EMULATOR");
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  };

  render() {
    return (
      <ScrollView>
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
          bannerSize="mediumRectangle"
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
          {this.state.adMobInterstitialLogs.map((log, i) => (
            <Text key={i}>{log}</Text>
          ))}
        </ScrollView>
      </ScrollView>
    );
  }
}

export default task57;
