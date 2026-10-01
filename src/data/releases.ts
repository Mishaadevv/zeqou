/**
 * GENERATED FILE — do not edit by hand.
 *
 * The latest releases of the Zeqou applications, with their files and the
 * SHA-256 GitHub reports for each one — what /downloads links to and what
 * /changelog reads. Regenerated before every deploy, so a new release appears
 * on the site without anyone editing it.
 *
 *   npm run releases:sync   read the GitHub releases API and rewrite this file
 */

export interface ReleaseAsset {
  name: string;
  url: string;
  /** Size in bytes. */
  size: number;
  /** Hex digest, or null when the release predates GitHub reporting one. */
  sha256: string | null;
}

export interface Release {
  tag: string;
  name: string;
  /** ISO date (YYYY-MM-DD) of publication. */
  date: string;
  url: string;
  /** Release notes as published on GitHub. */
  notes: string;
  assets: ReleaseAsset[];
}

/** Newest first, keyed by product slug. */
export const releases: Record<string, Release[]> = {
  "harness": [
    {
      "tag": "v1.4.0",
      "name": "Zeqou Harness v1.4.0",
      "date": "2026-09-25",
      "url": "https://github.com/Mishaadevv/harness/releases/tag/v1.4.0",
      "notes": "Cross-platform release.\n\n**Windows:** Setup .exe (installer) and portable .exe\n**macOS:** .dmg and .zip (arm64 Apple Silicon)\n**Linux:** .AppImage and .deb (x64)\n\nLicensed under PolyForm Strict 1.0.0 (see the repository).",
      "assets": [
        {
          "name": "zeqou-harness_1.4.0_amd64.deb",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.4.0/zeqou-harness_1.4.0_amd64.deb",
          "size": 75871810,
          "sha256": "442d78743dec0193f269b510d0b76eefdde18e5e1bc19009a90ec04a3f3368b2"
        },
        {
          "name": "Zeqou.Harness-1.4.0-arm64-mac.zip",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.4.0/Zeqou.Harness-1.4.0-arm64-mac.zip",
          "size": 97075657,
          "sha256": "1ba0d32f19217c6f79460d7fd52911028b058e0ab26079f3f4cae5539e513361"
        },
        {
          "name": "Zeqou.Harness-1.4.0-arm64.dmg",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.4.0/Zeqou.Harness-1.4.0-arm64.dmg",
          "size": 101707382,
          "sha256": "8b7de22b706989dbc8466274c1915a2d43dd3820bf84a966ae908cd12cf51ce0"
        },
        {
          "name": "Zeqou.Harness-1.4.0-mac.zip",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.4.0/Zeqou.Harness-1.4.0-mac.zip",
          "size": 101702850,
          "sha256": "7907a535ddb6d2ce29994bbf9bf6c8d8d52fa4676d22492c37290626ca3e2404"
        },
        {
          "name": "Zeqou.Harness-1.4.0.AppImage",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.4.0/Zeqou.Harness-1.4.0.AppImage",
          "size": 109843338,
          "sha256": "e9b293974592fb41c9e839afcf969a292ed0105783a99bc8bd6bcdf3c0aaf0fa"
        },
        {
          "name": "Zeqou.Harness-1.4.0.dmg",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.4.0/Zeqou.Harness-1.4.0.dmg",
          "size": 106331572,
          "sha256": "098cb1f349d71b0993af386e2f7f2d646c62889ca6bbf4c80918d44bb0ac2b9b"
        },
        {
          "name": "Zeqou.Harness.1.4.0.exe",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.4.0/Zeqou.Harness.1.4.0.exe",
          "size": 82529189,
          "sha256": "01aa48a984782120d3cb00ef81e6b648e816613e1d587f8a8e51aec84180987e"
        },
        {
          "name": "Zeqou.Harness.Setup.1.4.0.exe",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.4.0/Zeqou.Harness.Setup.1.4.0.exe",
          "size": 82787671,
          "sha256": "5ea39905f7e9c765f17cecd3acb179fa4144a8ec4b881bfedf0489276604e4a5"
        }
      ]
    },
    {
      "tag": "v1.3.2",
      "name": "Zeqou Harness v1.3.2",
      "date": "2026-09-20",
      "url": "https://github.com/Mishaadevv/harness/releases/tag/v1.3.2",
      "notes": "Cross-platform release.\n\n**Windows:** Setup .exe (installer) and portable .exe\n**macOS:** .dmg and .zip (arm64 Apple Silicon)\n**Linux:** .AppImage and .deb (x64)\n\nLicensed under PolyForm Strict 1.0.0 (see the repository).",
      "assets": [
        {
          "name": "zeqou-harness_1.3.2_amd64.deb",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.2/zeqou-harness_1.3.2_amd64.deb",
          "size": 76563202,
          "sha256": "8e97869fc8cba8a9a7d308056e26f86496fb1f83723396a17c2e3f8d755d3285"
        },
        {
          "name": "Zeqou.Harness-1.3.2-arm64-mac.zip",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.2/Zeqou.Harness-1.3.2-arm64-mac.zip",
          "size": 97064297,
          "sha256": "066507b8df7c850d5b7e9df002adf448557475d36fdc284b4fe12c06368d9392"
        },
        {
          "name": "Zeqou.Harness-1.3.2-arm64.dmg",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.2/Zeqou.Harness-1.3.2-arm64.dmg",
          "size": 101693054,
          "sha256": "af68af834b2652d1340bdbcfb4737a7d1570c22761985ed469771a3d6105e537"
        },
        {
          "name": "Zeqou.Harness-1.3.2-mac.zip",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.2/Zeqou.Harness-1.3.2-mac.zip",
          "size": 101691490,
          "sha256": "be0927eaff510fb59890423cb40a683bbd2d5037ba92c71a18544691ad88c742"
        },
        {
          "name": "Zeqou.Harness-1.3.2.AppImage",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.2/Zeqou.Harness-1.3.2.AppImage",
          "size": 109831033,
          "sha256": "e6fe03e07f5da1b928b88ea195b0bbb4f4cf544e8b90970a47d968768c877640"
        },
        {
          "name": "Zeqou.Harness-1.3.2.dmg",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.2/Zeqou.Harness-1.3.2.dmg",
          "size": 106307194,
          "sha256": "e263ce324cd7b18621cbb2513bbbb1d99ae6762b69064701b4089af8b678ed30"
        },
        {
          "name": "Zeqou.Harness.1.3.2.exe",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.2/Zeqou.Harness.1.3.2.exe",
          "size": 82519486,
          "sha256": "685d7db9a368683d0a3e409849638aae30addfedefaff4bf1a88f24fb3642bc8"
        },
        {
          "name": "Zeqou.Harness.Setup.1.3.2.exe",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.2/Zeqou.Harness.Setup.1.3.2.exe",
          "size": 82777967,
          "sha256": "32b6e940d907f28316262e6c7c22933db5765b9079a3057ef77c5273bb1bdc20"
        }
      ]
    },
    {
      "tag": "v1.3.1",
      "name": "Zeqou Harness v1.3.1",
      "date": "2026-09-20",
      "url": "https://github.com/Mishaadevv/harness/releases/tag/v1.3.1",
      "notes": "Cross-platform release.\n\n**Windows:** Setup .exe (installer) and portable .exe\n**macOS:** .dmg and .zip (arm64 Apple Silicon)\n**Linux:** .AppImage and .deb (x64)\n\nLicensed under PolyForm Strict 1.0.0 (see the repository).",
      "assets": [
        {
          "name": "zeqou-harness_1.3.1_amd64.deb",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.1/zeqou-harness_1.3.1_amd64.deb",
          "size": 76589020,
          "sha256": "3a5de48a0340f2afed63ec13e966a15f6b66c0199e2db74f0708d3bcba4e0d4f"
        },
        {
          "name": "Zeqou.Harness-1.3.1-arm64-mac.zip",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.1/Zeqou.Harness-1.3.1-arm64-mac.zip",
          "size": 97062074,
          "sha256": "7e8e93eea8858f44dc10bce3a0818da1c7037ac4c18d6a2d29c51391e0518da2"
        },
        {
          "name": "Zeqou.Harness-1.3.1-arm64.dmg",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.1/Zeqou.Harness-1.3.1-arm64.dmg",
          "size": 101709223,
          "sha256": "abb9655e7b6633a8f91c2eba6e9467f0cf00d80487319105ed4b104aab828a7a"
        },
        {
          "name": "Zeqou.Harness-1.3.1-mac.zip",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.1/Zeqou.Harness-1.3.1-mac.zip",
          "size": 101689267,
          "sha256": "cbc50501506848586d6dfc55e1d7c02b93eb78b1fb15ed018a9205493d06f6e1"
        },
        {
          "name": "Zeqou.Harness-1.3.1.AppImage",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.1/Zeqou.Harness-1.3.1.AppImage",
          "size": 109827016,
          "sha256": "cc140392ddfd62ab364fbee091a582d4fc1c2d1dc5d46b34f804b37baff41db0"
        },
        {
          "name": "Zeqou.Harness-1.3.1.dmg",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.1/Zeqou.Harness-1.3.1.dmg",
          "size": 106318857,
          "sha256": "c8d2c9e968c6f362dca2572c1bba231330848c31d0baa9defa49781fa710b865"
        },
        {
          "name": "Zeqou.Harness.1.3.1.exe",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.1/Zeqou.Harness.1.3.1.exe",
          "size": 82517735,
          "sha256": "459af917e49600b351c14d6285d5e844c717dd9a93c85ae09e8a5dc7a3f0c53b"
        },
        {
          "name": "Zeqou.Harness.Setup.1.3.1.exe",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.1/Zeqou.Harness.Setup.1.3.1.exe",
          "size": 82776226,
          "sha256": "69d79f48aa6af38ac3ea12feefe62459534bbd02427630d960e55bff5fd43847"
        }
      ]
    },
    {
      "tag": "v1.3.0",
      "name": "Zeqou Harness v1.3.0",
      "date": "2026-09-19",
      "url": "https://github.com/Mishaadevv/harness/releases/tag/v1.3.0",
      "notes": "Cross-platform release.\n\n**Windows:** Setup .exe (installer) and portable .exe\n**macOS:** .dmg and .zip (arm64 Apple Silicon)\n**Linux:** .AppImage and .deb (x64)\n\nLicensed under PolyForm Strict 1.0.0 (see the repository).",
      "assets": [
        {
          "name": "zeqou-harness_1.3.0_amd64.deb",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.0/zeqou-harness_1.3.0_amd64.deb",
          "size": 76599732,
          "sha256": "f8b17b66d654c54871259761b3bc5afd9b0b0770140668f7d2cc6861acd48b1e"
        },
        {
          "name": "Zeqou.Harness-1.3.0-arm64-mac.zip",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.0/Zeqou.Harness-1.3.0-arm64-mac.zip",
          "size": 97061463,
          "sha256": "08387ab41f5f4039111fd300118b7f1a6505ce827c23f1336fcc5751430879a4"
        },
        {
          "name": "Zeqou.Harness-1.3.0-arm64.dmg",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.0/Zeqou.Harness-1.3.0-arm64.dmg",
          "size": 101707737,
          "sha256": "92f06058269c0fface5401eebc7acfc9c2775f5c937d43741ff26a085873ebd1"
        },
        {
          "name": "Zeqou.Harness-1.3.0-mac.zip",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.0/Zeqou.Harness-1.3.0-mac.zip",
          "size": 101688656,
          "sha256": "f91f483aba1a0300bf3326bbaa5d753f426d0a879bcf9321b18c56b4b14f30c9"
        },
        {
          "name": "Zeqou.Harness-1.3.0.AppImage",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.0/Zeqou.Harness-1.3.0.AppImage",
          "size": 109826972,
          "sha256": "8e5fe164d3e7ec07e397916dba86fdf54c6eb08d3a3706e42536c4499f98afd6"
        },
        {
          "name": "Zeqou.Harness-1.3.0.dmg",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.0/Zeqou.Harness-1.3.0.dmg",
          "size": 106306890,
          "sha256": "8b63dbb60557ef6128a7e599e4d86ce90eceac202556d15fb0a7830aecfe6cb3"
        },
        {
          "name": "Zeqou.Harness.1.3.0.exe",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.0/Zeqou.Harness.1.3.0.exe",
          "size": 82517109,
          "sha256": "20f80159cdb0174c755b6125617695a94ccab919096fc2fe549435734ee137d9"
        },
        {
          "name": "Zeqou.Harness.Setup.1.3.0.exe",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.3.0/Zeqou.Harness.Setup.1.3.0.exe",
          "size": 82706408,
          "sha256": "4c5105a246025efbd6e09c9566c36c24bc6447fe22dd42741317eb9ea9bd60ba"
        }
      ]
    },
    {
      "tag": "v1.2.0",
      "name": "Zeqou Harness v1.2.0",
      "date": "2026-09-18",
      "url": "https://github.com/Mishaadevv/harness/releases/tag/v1.2.0",
      "notes": "Cross-platform release.\n\n**Windows:** Setup .exe (installer) and portable .exe\n**macOS:** .dmg and .zip (arm64 Apple Silicon)\n**Linux:** .AppImage and .deb (x64)\n\nLicensed under PolyForm Strict 1.0.0 (see the repository).",
      "assets": [
        {
          "name": "zeqou-harness_1.2.0_amd64.deb",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.2.0/zeqou-harness_1.2.0_amd64.deb",
          "size": 76562760,
          "sha256": "5c0b290ab6ce35b94c0a78ff4d8ebb47d7b5fafe918b1eac5ae03d901db5e3fb"
        },
        {
          "name": "Zeqou.Harness-1.2.0-arm64-mac.zip",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.2.0/Zeqou.Harness-1.2.0-arm64-mac.zip",
          "size": 97058682,
          "sha256": "2f23207dd5a2bb20f8f43d750aea9bd4fb023398de5a09810dd3515b21a50b57"
        },
        {
          "name": "Zeqou.Harness-1.2.0-arm64.dmg",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.2.0/Zeqou.Harness-1.2.0-arm64.dmg",
          "size": 101717621,
          "sha256": "158ca799b967996901b5ef2eda06176b2019d41d38f02fb581a0a8742a801e79"
        },
        {
          "name": "Zeqou.Harness-1.2.0-mac.zip",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.2.0/Zeqou.Harness-1.2.0-mac.zip",
          "size": 101685875,
          "sha256": "44b7794ff89ddc4d29a2ca6b66c642e33c691cb17c02376d690b917b57b93f53"
        },
        {
          "name": "Zeqou.Harness-1.2.0.AppImage",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.2.0/Zeqou.Harness-1.2.0.AppImage",
          "size": 109826944,
          "sha256": "b31cb83cd035566b014f54584e826236e635b7a6c032a6137fe4327465d916ff"
        },
        {
          "name": "Zeqou.Harness-1.2.0.dmg",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.2.0/Zeqou.Harness-1.2.0.dmg",
          "size": 106295071,
          "sha256": "4aadb93f71e07838f8b3f9f1769e54b10c0036ee5d305b86cdd451c2cf009b2e"
        },
        {
          "name": "Zeqou.Harness.1.2.0.exe",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.2.0/Zeqou.Harness.1.2.0.exe",
          "size": 82514694,
          "sha256": "9ea701dd47914255b3d2b9613c4bada4d7ce342c6750790d0a492a0ffca18e4a"
        },
        {
          "name": "Zeqou.Harness.Setup.1.2.0.exe",
          "url": "https://github.com/Mishaadevv/harness/releases/download/v1.2.0/Zeqou.Harness.Setup.1.2.0.exe",
          "size": 82703996,
          "sha256": "ca65ab5a65c93a160c27fba8085488b46f46a0944ca4e3b354dc10ad7d763367"
        }
      ]
    }
  ],
  "xchat": [
    {
      "tag": "v0.3.1",
      "name": "ZeqouXChat v0.3.1",
      "date": "2026-09-19",
      "url": "https://github.com/Mishaadevv/xchat/releases/tag/v0.3.1",
      "notes": "Cross-platform release. Windows: NSIS setup .exe and .msi. macOS: .dmg and .app. Linux: .AppImage and .deb. Licensed under PolyForm Strict 1.0.0 (see the repository).",
      "assets": [
        {
          "name": "ZeqouXChat-0.3.1-1.x86_64.rpm",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.1/ZeqouXChat-0.3.1-1.x86_64.rpm",
          "size": 7634556,
          "sha256": "af438e355f9a60c003e7d5037b2f0a325852eb2935be919980ca383f71ae53da"
        },
        {
          "name": "ZeqouXChat_0.3.1_aarch64.dmg",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.1/ZeqouXChat_0.3.1_aarch64.dmg",
          "size": 7612403,
          "sha256": "441990aa9c4e2c28a3996f8b439fb52e57ea6e20a893f6219a398d96f07e7a37"
        },
        {
          "name": "ZeqouXChat_0.3.1_amd64.AppImage",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.1/ZeqouXChat_0.3.1_amd64.AppImage",
          "size": 82270712,
          "sha256": "84c19777208f7d850c0166e2468283c38ccd47ed2ec81b7cd5c697f200b7bc37"
        },
        {
          "name": "ZeqouXChat_0.3.1_amd64.deb",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.1/ZeqouXChat_0.3.1_amd64.deb",
          "size": 7637090,
          "sha256": "37824230a9e757affab4bdcf61e3aad5b22ff18063753b4eb9c8bf87ec0721b2"
        },
        {
          "name": "ZeqouXChat_0.3.1_x64-setup.exe",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.1/ZeqouXChat_0.3.1_x64-setup.exe",
          "size": 4874144,
          "sha256": "da9840a689efa1b51d5aec2be4500f6b7c43a238db8c428bc92941cb18b27a1f"
        },
        {
          "name": "ZeqouXChat_0.3.1_x64.dmg",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.1/ZeqouXChat_0.3.1_x64.dmg",
          "size": 7812197,
          "sha256": "c3e99afb8873be6c4e2b1d3a312029cc595814a87c5d1b6101d2f413608db280"
        },
        {
          "name": "ZeqouXChat_0.3.1_x64_en-US.msi",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.1/ZeqouXChat_0.3.1_x64_en-US.msi",
          "size": 6508544,
          "sha256": "5a96cc05678e87d55a20c31bd4e38962a7cb46fa61898db30d95b43d71dd12c4"
        }
      ]
    },
    {
      "tag": "v0.3.0",
      "name": "ZeqouXChat v0.3.0",
      "date": "2026-09-19",
      "url": "https://github.com/Mishaadevv/xchat/releases/tag/v0.3.0",
      "notes": "Cross-platform release. Windows: NSIS setup .exe and .msi. macOS: .dmg and .app. Linux: .AppImage and .deb. Licensed under PolyForm Strict 1.0.0 (see the repository).",
      "assets": [
        {
          "name": "ZeqouXChat-0.3.0-1.x86_64.rpm",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.0/ZeqouXChat-0.3.0-1.x86_64.rpm",
          "size": 7633945,
          "sha256": "5323a4870a8f3e4dc45f6bf1c3766fe8a83891f2b2d69499c940d3dfa55bde54"
        },
        {
          "name": "ZeqouXChat_0.3.0_aarch64.dmg",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.0/ZeqouXChat_0.3.0_aarch64.dmg",
          "size": 7611978,
          "sha256": "d87527dfc512c8019d39b2e50277506be22875df1ec97be923c318489641a043"
        },
        {
          "name": "ZeqouXChat_0.3.0_amd64.AppImage",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.0/ZeqouXChat_0.3.0_amd64.AppImage",
          "size": 82274808,
          "sha256": "84cc547e111f163d7515477c79f2e719dde378c55b4c6fa6c5f427424d7c1b31"
        },
        {
          "name": "ZeqouXChat_0.3.0_amd64.deb",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.0/ZeqouXChat_0.3.0_amd64.deb",
          "size": 7636582,
          "sha256": "d1b4c44ff33ba849a7d4b96564707e7f085c1bd2bcfe51affc0140bb502f9863"
        },
        {
          "name": "ZeqouXChat_0.3.0_x64-setup.exe",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.0/ZeqouXChat_0.3.0_x64-setup.exe",
          "size": 4874125,
          "sha256": "f4162076167226852e9cd793af71f052a2565ecb3f61e567ad74533cb4f8235d"
        },
        {
          "name": "ZeqouXChat_0.3.0_x64.dmg",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.0/ZeqouXChat_0.3.0_x64.dmg",
          "size": 7811088,
          "sha256": "465fa76846aa3ce2a463fa1cded7c6193c3b3afad342485505aa780f56594ec5"
        },
        {
          "name": "ZeqouXChat_0.3.0_x64_en-US.msi",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.3.0/ZeqouXChat_0.3.0_x64_en-US.msi",
          "size": 6508544,
          "sha256": "1fa6db47dced304497dd519c2da7933bd6ec38f0230733d42ddbee8af85e3b97"
        }
      ]
    },
    {
      "tag": "v0.2.0",
      "name": "ZeqouXChat v0.2.0",
      "date": "2026-09-18",
      "url": "https://github.com/Mishaadevv/xchat/releases/tag/v0.2.0",
      "notes": "Cross-platform release. Windows: NSIS setup .exe and .msi. macOS: .dmg and .app. Linux: .AppImage and .deb. Licensed under PolyForm Strict 1.0.0 (see the repository).",
      "assets": [
        {
          "name": "ZeqouXChat-0.2.0-1.x86_64.rpm",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.2.0/ZeqouXChat-0.2.0-1.x86_64.rpm",
          "size": 7372064,
          "sha256": "3ce47b929b976ae8178cfe212b625de9a646306f96b3884ac49c13bc5bddbc9d"
        },
        {
          "name": "ZeqouXChat_0.2.0_aarch64.dmg",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.2.0/ZeqouXChat_0.2.0_aarch64.dmg",
          "size": 7418499,
          "sha256": "a249f3d41ee79db561769ad360916188d23daf70ccb6b32d5a6288d84a34e354"
        },
        {
          "name": "ZeqouXChat_0.2.0_amd64.AppImage",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.2.0/ZeqouXChat_0.2.0_amd64.AppImage",
          "size": 82024952,
          "sha256": "ee5ede96c218c6111b3cb17244ebde81435b4ddd27338a1191064d558fcf3cdc"
        },
        {
          "name": "ZeqouXChat_0.2.0_amd64.deb",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.2.0/ZeqouXChat_0.2.0_amd64.deb",
          "size": 7374688,
          "sha256": "5ad1b78cb46691fb0de31a6db5e3b8a1d1c90f3121bf13475299a06aa7c9d7a0"
        },
        {
          "name": "ZeqouXChat_0.2.0_x64-setup.exe",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.2.0/ZeqouXChat_0.2.0_x64-setup.exe",
          "size": 4620648,
          "sha256": "66def03a3679e2ca4b4cfcf458b98152a5b730b05fca8739542aa10c44f213d9"
        },
        {
          "name": "ZeqouXChat_0.2.0_x64.dmg",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.2.0/ZeqouXChat_0.2.0_x64.dmg",
          "size": 7531970,
          "sha256": "db536789e0bcc1efe273126743354506c99eb30e5c33bc58f0da4a5937647a2b"
        },
        {
          "name": "ZeqouXChat_0.2.0_x64_en-US.msi",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.2.0/ZeqouXChat_0.2.0_x64_en-US.msi",
          "size": 6189056,
          "sha256": "bddc94663bab893c79d2f3a1e8f7b5b382d3193c93003a894b46a5d70f14c466"
        }
      ]
    },
    {
      "tag": "v0.1.0",
      "name": "ZeqouXChat 0.1.0",
      "date": "2026-09-18",
      "url": "https://github.com/Mishaadevv/xchat/releases/tag/v0.1.0",
      "notes": "First public release.\n\n- **ZeqouXChat_0.1.0_x64-setup.exe** - Windows installer (recommended)\n- **ZeqouXChat_0.1.0_x64_en-US.msi** - MSI installer for system administrators\n\nLicensed under PolyForm Strict 1.0.0 (see the repository).",
      "assets": [
        {
          "name": "ZeqouXChat_0.1.0_x64-setup.exe",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.1.0/ZeqouXChat_0.1.0_x64-setup.exe",
          "size": 4708206,
          "sha256": "931dc383922c5e84b868e7e6dfe18c1c1b87e29d4475914de94d4fd0581b765a"
        },
        {
          "name": "ZeqouXChat_0.1.0_x64_en-US.msi",
          "url": "https://github.com/Mishaadevv/xchat/releases/download/v0.1.0/ZeqouXChat_0.1.0_x64_en-US.msi",
          "size": 6463488,
          "sha256": "3cb011e8e61848998ac2d74dbc709cf716a0dadca04a213df8b0f3284269d396"
        }
      ]
    }
  ],
  "xtraining": [
    {
      "tag": "v2.0.0",
      "name": "v2.0.0",
      "date": "2026-09-24",
      "url": "https://github.com/Mishaadevv/xtraining/releases/tag/v2.0.0",
      "notes": "**Full Changelog**: https://github.com/Mishaadevv/xtraining/compare/v1.0.1...v2.0.0",
      "assets": [
        {
          "name": "ZeqouXTraining-2.0.0-arm64-mac.zip",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v2.0.0/ZeqouXTraining-2.0.0-arm64-mac.zip",
          "size": 101301746,
          "sha256": "d3d88b1c6f406c772470d13f33b1caa4830c0a12dbb7b3b7a984151a3722c928"
        },
        {
          "name": "ZeqouXTraining-2.0.0-arm64.dmg",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v2.0.0/ZeqouXTraining-2.0.0-arm64.dmg",
          "size": 105234232,
          "sha256": "48035129736baa0ab6893b047837b5e7d0dc709fde2ca7b9e440a479f99967e4"
        },
        {
          "name": "ZeqouXTraining-2.0.0-mac.zip",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v2.0.0/ZeqouXTraining-2.0.0-mac.zip",
          "size": 105928939,
          "sha256": "df710f572e9c06fe81b39edee3e1701dce6b2a49845d2f0178da99c9497b3415"
        },
        {
          "name": "ZeqouXTraining-2.0.0-portable.exe",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v2.0.0/ZeqouXTraining-2.0.0-portable.exe",
          "size": 85717029,
          "sha256": "131b6c44c7ad965204eeaff7f563cdca9f499a92536e1bd20fc1c1e10ac617ca"
        },
        {
          "name": "ZeqouXTraining-2.0.0.AppImage",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v2.0.0/ZeqouXTraining-2.0.0.AppImage",
          "size": 114787629,
          "sha256": "31b90ea8ddee1639077c2a519fb33d14aaa40cc0ffcbcdef4ede76bcac0f880b"
        },
        {
          "name": "ZeqouXTraining-2.0.0.dmg",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v2.0.0/ZeqouXTraining-2.0.0.dmg",
          "size": 109835482,
          "sha256": "631b619014d9cef9446b399110c9fc732563452374d39b02b5e57338ea90824f"
        },
        {
          "name": "ZeqouXTraining-Setup-2.0.0.exe",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v2.0.0/ZeqouXTraining-Setup-2.0.0.exe",
          "size": 85943493,
          "sha256": "4e76ce0d080b37df3ac8b4752d5e8623b51d78a08737a4a6c51b758365b41e3e"
        },
        {
          "name": "zeqouxtraining_2.0.0_amd64.deb",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v2.0.0/zeqouxtraining_2.0.0_amd64.deb",
          "size": 77417836,
          "sha256": "460dfb990a0168e14c3d6ba99fecb57ea7ad0e65c54ff2170c6ab892be757b9c"
        }
      ]
    },
    {
      "tag": "v1.0.1",
      "name": "ZeqouXTraining v1.0.1",
      "date": "2026-09-22",
      "url": "https://github.com/Mishaadevv/xtraining/releases/tag/v1.0.1",
      "notes": "Cross-platform release.\n\n**Windows:** Setup .exe (installer) and portable .exe\n**macOS:** .dmg and .zip (x64 and Apple Silicon)\n**Linux:** .AppImage and .deb (x64)\n\nTraining and inference need an ML runtime, which is **not** bundled — it is\nmachine-specific and several gigabytes. The app detects what is missing and\ngenerates the exact install command in Settings → Environment.\n\nLicensed under PolyForm Strict 1.0.0 (see the repository).",
      "assets": [
        {
          "name": "ZeqouXTraining-1.0.1-arm64-mac.zip",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v1.0.1/ZeqouXTraining-1.0.1-arm64-mac.zip",
          "size": 99609782,
          "sha256": "18b887884c99a668f46b51972f2799bcb9e72694f70b0d8c1b78011f0bcd1e27"
        },
        {
          "name": "ZeqouXTraining-1.0.1-arm64.dmg",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v1.0.1/ZeqouXTraining-1.0.1-arm64.dmg",
          "size": 103510903,
          "sha256": "270c31d426ace58ba92d77bb9437a3ae9dbcd7d8b98cae741490c7963dc6f424"
        },
        {
          "name": "ZeqouXTraining-1.0.1-mac.zip",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v1.0.1/ZeqouXTraining-1.0.1-mac.zip",
          "size": 104236975,
          "sha256": "e9d91b6e3a34f3e55338242ed93e73422f9e4a8e9db3c47e5cdaa7506f60f8dc"
        },
        {
          "name": "ZeqouXTraining-1.0.1.AppImage",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v1.0.1/ZeqouXTraining-1.0.1.AppImage",
          "size": 113053968,
          "sha256": "571eb23ba924263d80ca68e6b7a4ab47f56236abafd4ddfd0d1b6d0f7ec1967e"
        },
        {
          "name": "ZeqouXTraining-1.0.1.dmg",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v1.0.1/ZeqouXTraining-1.0.1.dmg",
          "size": 108108344,
          "sha256": "25a1ca955d3e640acad5ef037a3cdf1003d60bfc49cd7b35bacc81f8453ac3d4"
        },
        {
          "name": "ZeqouXTraining.1.0.1.exe",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v1.0.1/ZeqouXTraining.1.0.1.exe",
          "size": 84596115,
          "sha256": "0ddf8652dc92e391ae3529698c5fed1b7545873832f79de2724b9d244646c12e"
        },
        {
          "name": "ZeqouXTraining.Setup.1.0.1.exe",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v1.0.1/ZeqouXTraining.Setup.1.0.1.exe",
          "size": 84822064,
          "sha256": "9529e7a2bdf79624226cdfea1a648da404cd14002f0402c21cb4c68a9fb0379d"
        },
        {
          "name": "zeqouxtraining_1.0.1_amd64.deb",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v1.0.1/zeqouxtraining_1.0.1_amd64.deb",
          "size": 77026226,
          "sha256": "fd4fa3e352ab6171768598916d32dd1d1ba190240f8523a6c2e6d03cbf7ceba2"
        }
      ]
    },
    {
      "tag": "v0.4.0",
      "name": "ZeqouXTraining v0.4.0",
      "date": "2026-09-19",
      "url": "https://github.com/Mishaadevv/xtraining/releases/tag/v0.4.0",
      "notes": "Cross-platform release.\n\n**Windows:** Setup .exe (installer) and portable .exe\n**macOS:** .dmg and .zip (x64 and Apple Silicon)\n**Linux:** .AppImage and .deb (x64)\n\nTraining and inference need an ML runtime, which is **not** bundled — it is\nmachine-specific and several gigabytes. The app detects what is missing and\ngenerates the exact install command in Settings → Environment.\n\nLicensed under PolyForm Strict 1.0.0 (see the repository).",
      "assets": [
        {
          "name": "ZeqouXTraining-0.4.0-arm64-mac.zip",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.4.0/ZeqouXTraining-0.4.0-arm64-mac.zip",
          "size": 99650854,
          "sha256": "6993e0a10899468b4c0cf2dec52ea291e266f84b28563b763d1dfb715bfda0a9"
        },
        {
          "name": "ZeqouXTraining-0.4.0-arm64.dmg",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.4.0/ZeqouXTraining-0.4.0-arm64.dmg",
          "size": 103538705,
          "sha256": "fec7c8f6e6fceb8c0a501f110368e4cb528de0a46397d440347debd8e791a96f"
        },
        {
          "name": "ZeqouXTraining-0.4.0-mac.zip",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.4.0/ZeqouXTraining-0.4.0-mac.zip",
          "size": 104278047,
          "sha256": "9730816c44b472cd67b28f3f63dbe5fd972fc2984c1411edf355bcebc00bb49e"
        },
        {
          "name": "ZeqouXTraining-0.4.0.AppImage",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.4.0/ZeqouXTraining-0.4.0.AppImage",
          "size": 113103362,
          "sha256": "b190699f8a5c7f0ffbf111c7137e9d022a53e7fe4bbf2d23bc6af2c54abdae86"
        },
        {
          "name": "ZeqouXTraining-0.4.0.dmg",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.4.0/ZeqouXTraining-0.4.0.dmg",
          "size": 108183054,
          "sha256": "961f13171e149f83c4a610399c640622bc370710f3eaec1315a81f4499bd600b"
        },
        {
          "name": "ZeqouXTraining.0.4.0.exe",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.4.0/ZeqouXTraining.0.4.0.exe",
          "size": 84630357,
          "sha256": "9b8530f07abf3a8b3dd26546c8a6b6b3996397020408d88cdd0d5ddc94f97a40"
        },
        {
          "name": "ZeqouXTraining.Setup.0.4.0.exe",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.4.0/ZeqouXTraining.Setup.0.4.0.exe",
          "size": 84787068,
          "sha256": "13b584c034ee595b71178fdb7857b5cce0547a237b6c7d27d5d1065cedc40136"
        },
        {
          "name": "zeqouxtraining_0.4.0_amd64.deb",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.4.0/zeqouxtraining_0.4.0_amd64.deb",
          "size": 76997054,
          "sha256": "814261c2c0532cc715a34b483fc1fef0dae9f6dac75aa572afeadf0a18aec58f"
        }
      ]
    },
    {
      "tag": "v0.3.0",
      "name": "ZeqouXTraining v0.3.0",
      "date": "2026-09-19",
      "url": "https://github.com/Mishaadevv/xtraining/releases/tag/v0.3.0",
      "notes": "Cross-platform release.\n\n**Windows:** Setup .exe (installer) and portable .exe\n**macOS:** .dmg and .zip (x64 and Apple Silicon)\n**Linux:** .AppImage and .deb (x64)\n\nTraining and inference need an ML runtime, which is **not** bundled — it is\nmachine-specific and several gigabytes. The app detects what is missing and\ngenerates the exact install command in Settings → Environment.\n\nLicensed under PolyForm Strict 1.0.0 (see the repository).",
      "assets": [
        {
          "name": "ZeqouXTraining-0.3.0-arm64-mac.zip",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.3.0/ZeqouXTraining-0.3.0-arm64-mac.zip",
          "size": 99646948,
          "sha256": "b4f1230652201801f5cccfdb3f5bdefd68e9f128ea040986115c12dd062b1736"
        },
        {
          "name": "ZeqouXTraining-0.3.0-arm64.dmg",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.3.0/ZeqouXTraining-0.3.0-arm64.dmg",
          "size": 103520023,
          "sha256": "f6934d572f0aa3268531d91e2ddd789309590cac752205debe9c2e436c15cb7c"
        },
        {
          "name": "ZeqouXTraining-0.3.0-mac.zip",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.3.0/ZeqouXTraining-0.3.0-mac.zip",
          "size": 104274141,
          "sha256": "fc6c85a98f0054d379500c171b135e38f954afb72e1a8493c3d8517ace44c441"
        },
        {
          "name": "ZeqouXTraining-0.3.0.AppImage",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.3.0/ZeqouXTraining-0.3.0.AppImage",
          "size": 113099139,
          "sha256": "dc108112a5a22d3b62a9ee4cd406e39b8509ffc97edf5d12d39e1b88bcd2ea83"
        },
        {
          "name": "ZeqouXTraining-0.3.0.dmg",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.3.0/ZeqouXTraining-0.3.0.dmg",
          "size": 108164189,
          "sha256": "5b7ae5ef3137e1fd9072c4b6bf4acbcb1acad87482b308e67fd418bb0317e773"
        },
        {
          "name": "ZeqouXTraining.0.3.0.exe",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.3.0/ZeqouXTraining.0.3.0.exe",
          "size": 84626768,
          "sha256": "b67c21b2996f5c294ec1992a21aab603b5f3a9c5d3b2d6ce797e2d8a873d7d9b"
        },
        {
          "name": "ZeqouXTraining.Setup.0.3.0.exe",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.3.0/ZeqouXTraining.Setup.0.3.0.exe",
          "size": 84783474,
          "sha256": "7c581a5c3d8c0f968520532770a7c48728bf3048b67bd5ffab239db89b4f4d08"
        },
        {
          "name": "zeqouxtraining_0.3.0_amd64.deb",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.3.0/zeqouxtraining_0.3.0_amd64.deb",
          "size": 76998112,
          "sha256": "f26f8ddc3408c883e617be46bf9cf9ea455d9d1f189ecdec7f8f3f867f6277bb"
        }
      ]
    },
    {
      "tag": "v0.2.0",
      "name": "ZeqouXTraining v0.2.0",
      "date": "2026-09-19",
      "url": "https://github.com/Mishaadevv/xtraining/releases/tag/v0.2.0",
      "notes": "Cross-platform release.\n\n**Windows:** Setup .exe (installer) and portable .exe\n**macOS:** .dmg and .zip (x64 and Apple Silicon)\n**Linux:** .AppImage and .deb (x64)\n\nTraining and inference need an ML runtime, which is **not** bundled — it is\nmachine-specific and several gigabytes. The app detects what is missing and\ngenerates the exact install command in Settings → Environment.\n\nLicensed under PolyForm Strict 1.0.0 (see the repository).",
      "assets": [
        {
          "name": "ZeqouXTraining-0.2.0-arm64-mac.zip",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.2.0/ZeqouXTraining-0.2.0-arm64-mac.zip",
          "size": 99645596,
          "sha256": "4b9c4198d87635cb1b3126d8d04090a9d323feeb69e3a8ee884c05e324777ce8"
        },
        {
          "name": "ZeqouXTraining-0.2.0-arm64.dmg",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.2.0/ZeqouXTraining-0.2.0-arm64.dmg",
          "size": 103527470,
          "sha256": "04d2fea7ac9f27e43f42146811a38573a1543bed4e24e049eb486f5826b1ba78"
        },
        {
          "name": "ZeqouXTraining-0.2.0-mac.zip",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.2.0/ZeqouXTraining-0.2.0-mac.zip",
          "size": 104272789,
          "sha256": "6a93b93a641334cbe129041619b2865533843b1ce493bb7abb8c6891137f2b7e"
        },
        {
          "name": "ZeqouXTraining-0.2.0.AppImage",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.2.0/ZeqouXTraining-0.2.0.AppImage",
          "size": 113099027,
          "sha256": "369e2489d81d6f9baa31a8d101be5d96410df090b90d77a16870d160b30880c0"
        },
        {
          "name": "ZeqouXTraining-0.2.0.dmg",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.2.0/ZeqouXTraining-0.2.0.dmg",
          "size": 108159203,
          "sha256": "1c8024f358c39ee8c7403095bf3f75968778a03364d35f7eace5370f2b72e438"
        },
        {
          "name": "ZeqouXTraining.0.2.0.exe",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.2.0/ZeqouXTraining.0.2.0.exe",
          "size": 84625636,
          "sha256": "c227ca8f5744685c83484b044a65d4a219cb22e0c4fd4ea9fb89ba681acc2d07"
        },
        {
          "name": "ZeqouXTraining.Setup.0.2.0.exe",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.2.0/ZeqouXTraining.Setup.0.2.0.exe",
          "size": 84782341,
          "sha256": "34be58a655747bbd3b940b7f9f2d4c50cbb1ef2ab0b234dde4cb335db962e07f"
        },
        {
          "name": "zeqouxtraining_0.2.0_amd64.deb",
          "url": "https://github.com/Mishaadevv/xtraining/releases/download/v0.2.0/zeqouxtraining_0.2.0_amd64.deb",
          "size": 76996852,
          "sha256": "58fceff1932d0e072f2f03680f3095fb81f59deba89316cd6d0129f0aefee0c2"
        }
      ]
    }
  ]
};
