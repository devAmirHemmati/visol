export interface ILocale {
  android: string;
  ios: string;
  registerToApp: string;
  loginToApp: string;
  landingIntroductionTitle: string;
  landingIntroductionDescriptionHTML: string;
  landingIntroductionCountryTitle: string;
  landingIntroductionSliderItems: string[];
  landingGreatServiceTitle: string;
  landingGreatServiceDescription: string;
  landingGreatServiceItems: {
    title: string;
    description: string;
    imageName: string;
  }[];
  landingStatisticsTitle: string;
  landingStatisticsItems: {
    title: string;
    value: string;
  }[];
  landingVideoURL: string;
  landingVideoTitle: string;
  landingCommentsTitle: string;
  landingCommentsItems: {
    os: 'Android' | 'IOS';
    osName: string;
    storeRate: number;
    title: string;
    avatarURL: string;
    description: string;
    fullName: string;
    userRate: number;
  }[];
  landingServicesTitle: string;
  landingServicesDescription: string;
  landingServicesItems: {
    title: string;
    description: string;
  }[];
  landingLetterNewsTitle: string;
  landingLetterNewsItems: {
    imageURL: string;
    description: string;
  }[];
  landingLearningStepsTitle: string;
  landingLearningStepsItems: {
    title: string;
    description: string;
  }[];
  footerItems: {
    title: string;
    to: string;
    isBlank: boolean;
  }[][];
  socialNetworks: {
    instagramURL: string;
    youtubeURL: string;
    linkedinURL: string;
    whatsappURL: string;
    telegramURL: string;
  };
}
