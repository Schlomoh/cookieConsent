
# React-cookieConsent

This react cookie consent library provides you with a fully customizable banner or modal


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![Downloads](https://img.shields.io/npm/v/@schlomoh/react-cookieconsent)


- [Installation 🧑🏽‍💻](#installation)
- [Features ✨](#features)
- [Preview 👀](#preview)
- [Usage / Examples ✏️](#usageexamples)
    - [Cookie modal 💚](#cookie-modal)
    - [Cookie banner 💙](#cookie-banner)
    - [Customizing 📐](#customized)
    - [Cookie Preferences 🔧](#enabling-cookie-preferences)
    - [Callbacks 👉🏼](#callbacks)
- [Type reference 🔎](#reference)

## Installation 🧑🏽‍💻

Install the component library using:

```zsh
  npm install @schlomoh/react-cookieConsent
```
    
## Features ✨

- Two seperate components (modal and banner)
- Fully customizable via css
- Define custom text to inform the user
- Pass in callbacks for denial and acception
- Enable or disable cookie preferences


## Preview 👀

 Default cookie banner

![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/cookieBanner.jpg?raw=true)

Default cookie Modal

![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/cookieModal.jpg?raw=true)

## Usage / Examples ✏️

You can either use the components right out of the box without setting any properties or completely customize either one of the consent components in your own taste.  

### Cookie modal 💚
#### Basic
```jsx
import { CookieModal } from '@schlomoh/react-cookieConsent'

const MyApp = () => (
    <>
        <CookieBanner > // above the rest of the page
        <MyPage />
    </>
)
```
### Cookie banner 💙
#### Basic

```jsx
import { CookieBanner } from '@schlomoh/react-cookieConsent'

const MyApp = () => (
    <>
        <CookieModal > // above the rest of the page
        <MyPage />
    </>
)
```
#### Customized 📐

*(All properties work for both modal and banner)*

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

... it then looks like this (*dont mind the text👀 earlier screenshot*): 

![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/customBanner.jpg?raw=true)

### Enabling cookie preferences 🔧

To let a visitor select their cookie preferences the property `enableManagement` has to be set to `true`.

You can then set an array of cookie categories which the user can select from. There is always the category "Necessary" predefined and set to `true` and `disabled` by default.

When `enableManagement` is set you can also override the default text of the button by setting `managementButtonText='whatever'`. This button is a secondary button.

For example
```jsx
<>
    <CookieBanner
        enableManagement
        managementButtonText='manage cookie preferences'
        cookieCategories={['analytics', 'advertisement']}
    />
</>
```

<br>

![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/managementView.jpg?raw=true)




### Callbacks 👉🏼

You can define callbacks which are called on either accept or decline. Simply pass a function into the ```onAccept``` or ```onDecline``` property which is executed accordingly.

The `onAccept` event can pass an object with the selected cookies as `ICookieObject` into your accept callback. 

```jsx
const onAccept = (cookies : ICookieObject) => {
    console.log(cookies);
};

const onDecline = () => {
    console.log('declined');
}


// inside your app
const MyApp = () => (
    <>
        <CookieBanner
        onAccept={onAccept} 
        onDecline={onDecline}
        />
    <>
)
```

## Reference 🔎

The `ICookieObject`:
```ts
interface ICookieObject {
  [key: string]: boolean;
}
```

Example: 
```ts
{ "advertisement": false, "analytics": true }
```

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
