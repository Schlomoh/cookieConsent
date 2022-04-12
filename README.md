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

## Appearance

### Default cookie banner
![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/cookieBanner.jpg?raw=true)

### Default cookie Modal
![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/cookieModal.jpg?raw=true)

## Usage

You can either use the Banner right out of the box without setting any properties or completely customize either one of the consent components in your own taste.

### Cookie modal
#### Basic
```jsx
import {CookieModal} from '@schlomoh/react-cookieConsent'

const MyApp = () => (
    <>
        <CookieBanner > // above the rest of the page
        <MyPage />
    </>
)
```

### Cookie banner
#### Basic
```jsx
import {CookieBanner} from '@schlomoh/react-cookieConsent'

const MyApp = () => (
    <>
        <CookieModal > // above the rest of the page
        <MyPage />
    </>
)
```

#### Customized (all properties work for both modal and banner)
```jsx
...

const Content = () => (
    <>
        <h3>I'm using cookies on my site.</h3>
        <p>Bla Bla Bla this is my own informational text.</p>
    </>
)

const containerStyle = {backgroundColor: '#333'};
const buttonStyle = {borderRadius: 0}
const primaryButtonStyle={...buttonStyle, backgroundColoe:'red'}
const secondaryButtonStyle={...buttonStyle, backgroundColoe:'blue'}

const MyApp = () => (
    <>
        <CookieBanner 
            acceptButtonText='I want it'
            declineButtonText='Go away'
            headingColor='white'
            paragraphColor='grey'
            containerStyle={containerStyle}
            primaryButtonStyle={primaryButtonStyle}
            secondaryButtonStyle={secondaryButtonStyle}
            infoContent={<Content />}
        />
        <MyPage />
    </>
)

```
#### preview
![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/customBanner.jpg?raw=true)


## Management
### Selecting cookie preferences

To let a visitor select their cookie preferences the property ```enableManagement``` has to be set to ```true```.

You can then set an array of cookie categories which the user can select from. There is always the category "Necessary" predefined and set to ```true``` and ```disabled``` by default.

When ```enableManagement``` is set you can also override the default text of the button by setting ```managementButtonText='whatever'```. This button is a secondary button.

```jsx
<>
    <CookieBanner
        enableManagement
        managementButtonText='whatever'
        cookieCategories={['analytics', 'advertisement']}
    />
</>
```
#### preview of the management view
![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/managementView.jpg?raw=true)


## Callbacks
You can define the callbacks which are called on either accept or decline. Simply pass a function into the ```onAccept``` or ```onDecline``` property which gets executed accordingly.

The ```onAccept``` event can pass an object with the selected cookies as ```ICookieObject``` into your accept callback. 

```jsx

const onAccept = (cookies : ICookieObject) => {
    console.log(cookies);
};

const onDecline = () => {
    console.log('declined');
}

const App = () => (
    <>
        <CookieBanner
        onAccept={onAccept} 
        onDecline={onDecline}
        />
    <>
)
```