module.exports = {
    productName: "workflow",
    copyright: "Copyright © 2020 ${productName}",
    appId: "com.github.GuanWeihua.${productName}",
    directories: {
        "output": "./packaged"
      },
    appId: "github.com.GuanWeihua.workflow",
    files: [
        "index.js", 
        "dist/", 
        "node_modules/", 
        "package.json",
        "index.html",
        "assets/"
    ],
    win: {
        target: [
            { target: "nsis", arch: [ "x64" ] }
        ],
        icon: "assets/icons/win/icon.ico"
    },
    nsis: {
        shortcutName: "workflow",
        oneClick: false,
        allowToChangeInstallationDirectory: true,
        createDesktopShortcut: true,
        createStartMenuShortcut: true,
        artifactName: "${productName}-x64-${version}.${ext}",
    },
    publish: [
        {
            owner: "GuanWeihua",
            repo: "workflow",
            provider: "github",
            releaseType: "release"
        }
    ]
  }