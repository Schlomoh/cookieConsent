# cookieConsent

## This cookie consent react component aims to provide a fully customizable banner or modal to be displayed once your site is visited

##### Currently the modal is the only available type.
#

## Usage

```
import {CookieConsent} from '@schlomoh/react-cookieConsent'

const MyApp = () => (
    <>
    <CookieConsent type='modal'>
    <MyPage />
    </>
)
```

You can choose to give the option of customizing cookie preferences by enabling the 'managementView' by setting the property ```enableManagement = {true}```.

### Example
![example](https://github.com/schlomoh/cookieConsent/blob/main/doc-assets/cookieBannerExample.png?raw=true)
