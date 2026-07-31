export type PackageItem = {
  name: string;
  version: string;
  description: string;
  install: string;
  pubUrl: string;
  repoUrl?: string;
  platforms: string[];
  topics: string[];
  pubPoints?: { granted: number; max: number };
  license?: string;
  highlights?: string[];
};

export const packages: PackageItem[] = [
  {
    name: "custom_media_picker",
    version: "0.1.2",
    description:
      "A Flutter package for picking images and videos from the device gallery with a fully custom UI, native Android/iOS access, and built-in preview support.",
    install: "flutter pub add custom_media_picker",
    pubUrl: "https://pub.dev/packages/custom_media_picker",
    repoUrl: "https://github.com/Adelmostafa31/media_picker_demo",
    platforms: ["Android", "iOS", "macOS"],
    topics: ["media", "picker", "gallery", "image", "video"],
    pubPoints: { granted: 160, max: 160 },
    license: "MIT",
    highlights: [
      "Native gallery access over platform channels — no third-party picker UI",
      "Fully themeable picker so it matches the host app's design system",
      "Image and video preview before selection is confirmed",
    ],
  },
];
