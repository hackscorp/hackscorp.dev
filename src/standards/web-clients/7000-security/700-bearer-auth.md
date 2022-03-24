# Security consideration for token-based authentication systems

Token-based authentication systems (aka bearer auth) are convenient and scalable. Unlike cookie-based authentication, tokens do not need to be managed on a central server because they are verified with a digital signature rather than a database lookup.

But it's not all good news. Token-based authentication systems introduce new security concerns.

Tokens are like cash. If you receive a valid token, you can only assume that the bearer is its rightful owner. You can't tell if a token is stolen. That is why we call them "bearer tokens", because all that is needed to gain access to a secure application is the presentation of a non-expired token.

It is this implicit trust that makes it so imperative that tokens be stored securely within client-side web applications.

Token-based authentication systems are actually less vulnerable to cross-site request forgery (XSRF) hacks than cookie-based one. That's because browsers don't automatically attach token `Authorization` headers to relevant HTTP requests, as they do with session cookies. But tokens are still susceptible to theft via man-in-the-middle (MITM) attacks, and the risks associated with cross-site scripting (XSS) hacks are far greater with token-based authentication systems than with traditional session cookies.

The remainder of this section sets out best practices for securing authentication tokens.

## Limited data

Tokens should store only essential data that is required for the correct functioning of the application, and this data must be encrypted. Tokens should be transmitted over HTTPS and signed by their originating server with a strong private key. These features should be treated as mandatory.

## Expiry and revocation

Tokens should have relatively short expiry times. You might consider using refresh tokens. This is where you have a long-lived token that triggers the regeneration of a shorter-lived token every so often. The trade-off for the extra demands on your authentication system is that users don't go so long without having their credentials re-verified.

You might also put in place a system that allows you to revoke tokens, in the event that you suspect a token to be compromised. This will require all generated tokens to be logged elsewhere, which obviously puts an additional burden on your system.

## Storage

In an ideal world, tokens should never be stored locally. The safest place for a token is in memory, referenced via a JavaScript variable. Of course, this is not always practical. The user only needs to refresh the web page to be logged out. So, in most applications, tokens will need to be stored somewhere locally so that sessions can persist from one page to another.

The best two options for the secure storage of tokens are cookies and session/local storage.

Cookies are preferred medium for the storage of tokens because of the extra defences they provide. Token cookies can be restricted to the domain and path of the webapp and they can be restricted to communication over secure networks only.

For the ultimate in security, we can set token cookies to `HttpOnly`. This locks out the JavaScript environment from reading the cookie, so protecting the session from being hijacked in the event of a Cross-Site Scripting (XSS) hack. Unfortunately, many web applications require JavaScript to read token values. In applications where JavaScript needs to access tokens, an alternative storage medium is session storage. Session storage persists only for a long as the application remains open in a browser tab, so hackers have a narrower window of opportunity to steal stuff from session storage.

Local storage is probably the most convenient medium for storage of tokens. Data is available in all browsing contexts (ie all browser tabs) and is not automatically discarded when a browsing context (eg tab) is closed. But local storage is also the least secure storage medium, for the same reasons that it is convenient.

## XSS vulnerabilities

Because modern single-page applications tend to require JavaScript to access authentication tokens, the risks associated with XSS exploits are magnified.

If malicious code makes it through to your application's JavaScript environment, the hacker will be able to do much more than just deface your webpages. He will be able to steal your user's authentication tokens and benefit from all of the extra access privileges they implicitly grant.

Obviously, web applications that adopt token-based authentication systems must be immunized against XSS. That means validating and sanitizing all user input. And it means escaping all text content that is injected into a webpage.

It also means loading JavaScript programs only from sources that you trust. Avoid loading generic libraries like jQuery and Chartist over content delivery networks (CDNs) that you do not control. And be judicious in your choice of third-party web services, things like web analytics and social sharing widgets. If any one of these external services is compromised, your application's JavaScript environment will be exposed, too. And that will put all active user sessions at risk of hijack.

It is also a good idea to ask your users to re-enter their passwords prior to understanding any creative and destructive actions, such as making changes to their user profile or buying something. This process of re-authentication is much more important in token-based authentication systems than with cookie-based ones.

## API proxies

For the ultimate in XSS security, you could proxy cross-origin API calls from your web application via a same-origin server-side component. It would work like this: API calls from the local web application get sent to a proxy web service that is served from the same hostname as the web application. The proxy service forwards the requests on to the remote, other-origin web services. The proxy service generates normal, encrypted session cookies in place of the tokens returned by the remote services. Because the session cookies will be automatically attached by the browser to all relevant HTTP requests — even "ajax" ones — there is no need for the local JavaScript environment to have access to session IDs. Session cookies — acting as proxies for the remote-origin authentication tokens — can thus be locked out from XSS exploits by application of the `HttpOnly` flag.

Developing and maintaining a proxy service for all remote API calls is, obviously, a lot of effort. And, while this approach reduces an application's susceptibility to XSS hacks, it increases exposure to XSRF exploits, because of the dependency on session cookies. The truth is it is relatively easy to protect against XSS, while it is relatively difficult to protect against XSRF. For these reasons, you don't tend to see client-side web applications being backed by same-origin HTTP APIs. It's just too costly and messy.

## Summary

Token-based authentication systems provide a convenient and scalable system for cross-domain authentication in exchange for shifting more responsibility for application security onto application developers.

The optimum balance between security on the one hand and convenience and scalability on the other, will vary from application to application.

In most cases, advanced security measures such as API proxies add much complexity for little reward, and they rather negate the benefits of statelessness than token-based authentication provides in the first place. But if you follow best practices for token management and if you lock down your wider system architecture from common exploits, then you should be able to sleep reasonably peacefully.
