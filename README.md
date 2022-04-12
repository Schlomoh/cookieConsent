# React-cookieConsent

## This cookie consent react component aims to provide a fully customizable banner or modal

##### Currently the modal is the only available type.
#

![Downloads](https://img.shields.io/npm/v/@schlomoh/react-cookieconsent)

[![NPM](https://nodei.co/npm-dl/@schlomoh/react-cookiConsent.png?months=1)](https://nodei.co/npm/@schlomoh/react-cookieConsent/)


## Installation 
```shell
npm install @schlomoh/react-cookieConsent
```

## Usage

```jsx
import {CookieConsent} from '@schlomoh/react-cookieConsent'

const MyApp = () => (
    <>
    <CookieConsent type='modal'>
    <MyPage />
    </>
)
```

You can choose to give the option of customizing cookie preferences by enabling the 'managementView' by setting the property ```enableManagement = {true}```.

## Appearance
### Default
![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/cookieBannerExample.png?raw=true)
