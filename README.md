# [react_native_sync_fusion](https://github.com/PratikshaInventam/react_native_sync_fusion/edit/main/README.md#react_native_sync_fusion)

```
root/
├── android/ # Android native code
├── ios/ # iOS native code
├── assets/ # Fonts and image assets
│ ├── fonts/
│ └── images/

├── src/ # App source code
│
│ ├── components/ # Reusable UI components (Shared UI components like buttons, headers)
│ │ ├── buttons/
│ │ │ └── index.tsx
│ │ ├── dashline/
│ │ │ └── index.tsx
│ │ └── index.tsx # Barrel file (optional)

│ ├── hooks/ # Custom reusable hooks (Custom hooks for reuse)
│ │ └── useToggle.tsx

│ ├── navigation/ # App navigation config (stack/tab)
│ │ ├── bottombar/
│ │ │ ├── index.tsx
│ │ ├── drawer/
│ │ │ └── index.tsx
│ │ ├── AppNavigator.tsx # Navigation setup

│ ├── screens/ # Screen-level UI (by feature)
│ │ ├── home/
│ │ │ ├── index.tsx
│ │ │ └── HomeHeader.tsx

│ ├── services/ # API requests and service logic
│ │ ├── index.ts # Axios/fetch setup
│ │ └── userService.ts

│ ├── store/ # State management (Redux, Zustand, etc.)
│ │ ├── actions/
│ │ │ └── index.tsx
│ │ ├── slice/
│ │ │ └── index.tsx
│ │ └── index.tsx # Store configuration

│ ├── utils/ # Utilities, constants, formatters, themes
│ │ ├── constant/
│ │ │ └── index.tsx
│ │ ├── helper/
│ │ │ └── formatDate.ts
│ │ ├── theme/ # app theme
│ │ │ ├── color.tsx
│ │ │ ├── font.tsx
│ │ │ └── index.tsx # Export colors/fonts together
│ │ ├── types/
│ │ ├── index.tsx # TypeScript types/interfaces
│ │ ├── regex.ts # All regex of app
│ └── schema.ts # Add validation schema

│ └── App.tsx # App entry point

├── **tests**/ # Unit tests
├── .gitignore # defines paths and files that should NOT be committed to Git.
├── app.json
├── babel.config.js
├── index.js # Root entry
├── jest.config.js
├── metro.config.js
├── package.json
├── tsconfig.json
└── README.md
```
