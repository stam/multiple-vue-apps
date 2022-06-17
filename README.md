Based on https://github.com/PheelaV/MultipleVueRootAppsMultipleEntryFilesSameStore

## Getting started

```
npm i;
npm run serve;
open ./index.html
```

## The problem

We have 2 vue bundles, they share their VueX store using window.globalStore, but when you press count++ only one app is updated.

## The background

The obvious fix would be to just use 1 vue bundle.
However this doesn't work in my company's usecase:
We are gradually migrating from a legacy server side rendered application to a SPA.
Small parts of the application are being converted to Vue, where the legacy application loads the specific Vue bundles on demand.
However multiple Vue bundles can live on the same page, and we want to share some state as we don't want to duplicate API calls.
