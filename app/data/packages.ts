export type PackageItem = {
  name: string;
  version: string;
  description: string;
  install: string;
  pubUrl: string;
  repoUrl?: string;
  platforms: string[];
  topics: string[];
  license?: string;
  highlights?: string[];
  /** Shown as a badge, e.g. "Team project · Colada" */
  team?: string;
  /** Multi-platform SDKs: rendered as tabs, one per platform */
  variants?: PackageVariant[];
};

export type PackageVariant = {
  platform: string;
  name: string;
  version: string;
  install: string;
  registryUrl: string;
  registryLabel: string;
  repoUrl?: string;
};

export const packages: PackageItem[] = [
  {
    name: "Colada SDK",
    version: "0.2.7",
    description:
      "Mobile attribution SDK that ties every install and in-app event back to the ad campaign that drove it, and forwards post-install events to Meta, TikTok, Google, Snapchat and more. Shipped natively for Android and iOS, with Flutter and React Native bridges.",
    install: "flutter pub add colada_sdk",
    pubUrl: "https://pub.dev/packages/colada_sdk",
    repoUrl: "https://github.com/3laween/colada-sdk-flutter",
    platforms: ["Flutter", "Android", "iOS", "React Native"],
    topics: ["attribution", "marketing", "analytics", "deep-links"],
    team: "Team project · Colada",
    highlights: [
      "One consistent API across Android, iOS, Flutter and React Native",
      "Automatic deep-link attribution for first installs and re-engagement",
      "Typed errors and attribution results delivered as a replayable stream",
    ],
    variants: [
      {
        platform: "Flutter",
        name: "colada_sdk",
        version: "0.2.7",
        install: "flutter pub add colada_sdk",
        registryUrl: "https://pub.dev/packages/colada_sdk",
        registryLabel: "View on pub.dev",
        repoUrl: "https://github.com/3laween/colada-sdk-flutter",
      },
      {
        platform: "Android · Kotlin",
        name: "io.coladaapp:colada-core",
        version: "0.2.2",
        install: 'implementation("io.coladaapp:colada-core:0.2.2")',
        registryUrl: "https://mvnrepository.com/artifact/io.coladaapp/colada-core",
        registryLabel: "View on Maven",
      },
      {
        platform: "iOS · Swift",
        name: "colada-sdk-ios",
        version: "0.2.7",
        install:
          '.package(url: "https://github.com/3laween/colada-sdk-ios.git", from: "0.2.7")',
        registryUrl: "https://github.com/3laween/colada-sdk-ios",
        registryLabel: "View Swift Package",
      },
      {
        platform: "React Native",
        name: "@colada_app/react-native-sdk",
        version: "0.1.1",
        install: "npm install @colada_app/react-native-sdk",
        registryUrl: "https://www.npmjs.com/package/@colada_app/react-native-sdk",
        registryLabel: "View on npm",
      },
    ],
  },
  {
    name: "custom_media_picker",
    version: "0.1.3",
    description:
      "A Flutter package for picking images and videos from the device gallery with a fully custom UI, native Android/iOS access, and built-in preview support.",
    install: "flutter pub add custom_media_picker",
    pubUrl: "https://pub.dev/packages/custom_media_picker",
    repoUrl: "https://github.com/Adelmostafa31/media_picker_demo",
    platforms: ["Android", "iOS", "macOS"],
    topics: ["media", "picker", "gallery", "image", "video"],
    license: "MIT",
    highlights: [
      "Native gallery access over platform channels — no third-party picker UI",
      "Fully themeable picker so it matches the host app's design system",
      "Image and video preview before selection is confirmed",
    ],
  },
];
