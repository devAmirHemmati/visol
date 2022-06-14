export interface ILocale {
  android: string;
  ios: string;
  registerToApp: string;
  loginToApp: string;
  landingIntroductionTitle: string;
  landingIntroductionDescriptionHTML: string;
  landingIntroductionCountryTitle: string;
  landingGreatServiceTitle: string;
  landingGreatServiceDescription: string;
  landingGreatServiceItems: {
    title: string;
    description: string;
    imageName: string;
  }[];
}
