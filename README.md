# React-cookieConsent

## This cookie consent react library provides you with a fully customizable banner or modal

<br><br>

![Downloads](https://img.shields.io/npm/v/@schlomoh/react-cookieconsent)

[![NPM](https://nodei.co/npm-dl/@schlomoh/react-cookiConsent.png?months=1)](https://nodei.co/npm/@schlomoh/react-cookieConsent/)


## Installation 
```shell
npm install @schlomoh/react-cookieConsent
```
<br><br>

## Appearance

### Default cookie banner
![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/cookieBanner.jpg?raw=true)

<br>

### Default cookie Modal
![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/cookieModal.jpg?raw=true)

<br><br>

## Usage

You can either use the Banner right out of the box without setting any properties or completely customize either one of the consent components in your own taste.  
<br>

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
<br>

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
<br>

#### Customized 
<strong>(all properties work for both modal and banner)</strong>
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
<br>

### Preview
![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/customBanner.jpg?raw=true)

<br><br>

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

<br>

### Preview of the management view
![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/managementView.jpg?raw=true)

<br><br>

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

<br><br>

## Properties

<table>
    <tr>
        <th>Prop</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>onAccept</td>
        <td>function(cookies?: ICookieObject){}</td>
        <td>()=>{}</td>
        <td>Function called when user clicks "accept"</td>
    </tr>
    <tr>
        <td>onDecline</td>
        <td>function(){}</td>
        <td>()=>{}</td>
        <td>Function called when user clicks "decline"</td>
    </tr>
    <tr>
        <td>infoContent</td>
        <td>JSX.Element</td>
        <td>-</td>
        <td>A JSX component that should contain the heading and paragraph of the greeting view</td>
    </tr>
    <tr>
        <td>managementContent</td>
        <td>JSX.Element</td>
        <td>-</td>
        <td>A JSX component rendered in the management view above the cookie checkboxes best containing heading and paragraph text.</td>
    </tr>
    <tr>
        <td>acceptButtonText</td>
        <td>string</td>
        <td>"Accept"</td>
        <td>String displayed in the accept button</td>
    </tr>
    <tr>
        <td>declineButtonText</td>
        <td>string</td>
        <td>"Decline"</td>
        <td>String displayed in the decline button</td>
    </tr>
    <tr>
        <td>managementButtonText</td>
        <td>string</td>
        <td>"Manage Cookies"</td>
        <td>String displayed in the management toggle button</td>
    </tr>
    <tr>
        <td>enableManagement</td>
        <td>boolean</td>
        <td>false</td>
        <td>Set to true to display the third button which toggles the management view (where visitors select their cookie preferences). </td>
    </tr>
    <tr>
        <td>cookieCategories</td>
        <td>string[] (array of strings)</td>
        <td>[]</td>
        <td>An array listing the available cookie preferences to choose from.</td>
    </tr>
    <tr>
        <td>accentColor</td>
        <td>string (React.CSSProperties.backgroundColor)</td>
        <td>'coral'</td>
        <td>The accent color used for the primary butttons</td>
    </tr>
    <tr>
        <td>headingColor</td>
        <td>string (React.CSSProperties.color)</td>
        <td>'black'</td>
        <td>The color applied to h1, h2, h3, h4 elements inside the views</td>
    </tr>
    <tr>
        <td>paragraphColor</td>
        <td>string (React.CSSProperties.color)</td>
        <td>'grey'</td>
        <td>The color applied to p elements inside the views</td>
    </tr>
    <tr>
        <td>containerStyle</td>
        <td>object (React.CSSProperties)</td>
        <td>-</td>
        <td>Style object overriding the banner or modal style</td>
    </tr>
    <tr>
        <td>primaryButtonStyle</td>
        <td>object (React.CSSProperties)</td>
        <td>-</td>
        <td>Style object overriding the primary buttons' style</td>
    </tr>
    <tr>
        <td>secondaryButtonStyle</td>
        <td>object (React.CSSProperties)</td>
        <td>-</td>
        <td>Style object overriding the secondary buttons' style</td>
    </tr>

</table>