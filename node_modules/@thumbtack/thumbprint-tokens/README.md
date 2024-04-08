# Thumbprint Tokens

> Design variables that power Thumbtack’s UI.

Thumbprint Tokens are published as JavaScript, SCSS, Swift, and Kotlin.

| Platform | Languages | Package |
| --- | --- | --- |
| Web | React & SCSS | [![npm](https://img.shields.io/npm/v/@thumbtack/thumbprint-tokens)](https://www.npmjs.com/package/@thumbtack/thumbprint-tokens) |
| iOS | Swift | [![CocoaPods](https://img.shields.io/cocoapods/v/ThumbprintTokens)](https://cocoapods.org/pods/ThumbprintTokens) |
| Android | Kotlin | [![JitPack](https://img.shields.io/jitpack/v/github/thumbtack/thumbprint-tokens)](https://jitpack.io/#thumbtack/thumbprint-tokens) |

## API

You can use the [Thumbprint Tokens GraphQL server](https://thumbprint-tokens.netlify.com/) to query tokens and view the schema.

## Releasing

1. **Pull latest changes:** Run `git checkout master && git pull` to grab the latest changes rom GitHub.
2. **Update the `package.json` and changelog:** Edit the version in the `package.json` and then open the `CHANGELOG.md` file and look at the unreleased changes. Add the new version number ([following SemVer](https://semver.org/)) and date as a heading under the `## Unreleased` heading.
3. **Commit the changelog changes**: Commit the changes on `master` with `git add CHANGELOG.md package.json && git commit -m "Preparing for release."`
4. **Create a Git tag:** Run `git tag vX.Y.Z`, replacing `X.Y.Z` with the new version number.
5. **Release to NPM**: Run `yarn install && yarn release`.
6. **Push to GitHub:** Run `git push --tags` to push the changes to GitHub.
7. **Publish to CocoaPods:** Run `pod trunk push` to publish this to CocoaPods.
8. **Publish to JitPack:** Visit `https://jitpack.io/com/github/thumbtack/thumbprint-tokens/v12.1.1/build.log` but replace `12.1.1` with the new version number. This will kick off a build in JitPack which will be indicated [on the JitPack Thumbprint Tokens page](https://jitpack.io/#thumbtack/thumbprint-tokens/).
