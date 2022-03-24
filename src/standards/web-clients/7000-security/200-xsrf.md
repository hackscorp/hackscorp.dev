# Cross-site request forgery (XSRF)

XSRF is primarily a concern for websites that implement cookie-based authentication.

In cookie-based authentication systems, when a user log in to the website, usually a server-side program records a new user session in a database and returns a unique ID for the session, which the client-side application stores in a cookie. The session cookie thereafter acts as a proxy for the user's username and password, so the user does not need to re-authenticate with every new request to the server.

Cookie-based authentications systems are vulnerable to man-in-the-middle (MITM), cross-site scripting (XSS) and cross-site request forgery (XSRF) vulnerabilities. Of these attack vectors, it is XSRF that is the hardest to protect against.

XSRF attacks occur when a malicious webpage links to a resource on another trusted website that a user is already logged in to. The trusted resource is typically loaded from an `<img>` tag embedded in the exploit page:

```html
<img src="http://trustedsite.com/vote?score=10&itemid=12345" 
  height="0" width="0" />
```

When the trusted resource is requested, the browser unwittingly sends along any cookies for the trusted domain, including session cookies. As a result, the trusted site will verify the request against the session cookie and perform an unwanted action.

This is why the convention has been established that `GET` and `HEAD` requests should never trigger any creative or destructive processes. However, APIs accessible via the `POST` method are susceptible to XSRF attacks, too. In this case, the request is made via an HTML form embedded in the exploit page.

And if a target website accepts requests from any origin and via any HTTP method, then no APIs will be safe from XSRF attacks. Here's how an exploit page may trigger a cross-origin `PUT` request:

```html
<script>
  function put () {
    var xhr = new XMLHttpRequest()
    xhr.open('PUT', 'http://trustedsite.com/vote', true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify({'score': 10, 'itemid': 12345}))
  }
</script>
<body onload="put()">
```

XSRF attacks are commonly used to hijack a verified user's account in order to post spam messages on forums, blogging services and comment feeds. In some cases XSRF attacks can be used to steal personal user data, too. Specifically, XSRF exploits can sometimes learn to read JSON data returned in the body of HTTP responses. Because JSON is a strict subset of JavaScript, JSON data can be stripped from HTTP responses and loaded into script tags and executed. The data can thus be parsed and forwarded on to the attacker.

XSRF attacks can be partially prevented by checking a request's `Origin` header and allowing only requests that originate from the same base URL as the web application. No modern browser (IE9+) allows `Origin` headers to be modified by JavaScript, giving you a high degree of confidence that `Origin` information is valid. But it's not a perfect safeguard. A combination of browser plugins and redirects can still allow attackers to forge `Origin` headers. And this solution doesn't help web services that are designed to accept cross-origin requests.

Effective mechanisms to counter XSRF attacks work by requiring anti-forgery tokens to be embedded into requests, allowing server-side applications to detect requests from unauthorized locations.

There are two main anti-forgery mechanisms.

The first is a **synchronizer token**. The server-side application generates a secret and unique value for each request. This value is embedded by the server-side application in a hidden field in all HTML forms. The value is verified on the server when a form is submitted.

```html
<input type="hidden" name="token"
  value="Y6y00DFoXkggaSAFdHOfBHFSKq5GraKZzfbH0wt6" />
```

The second mechanism is something called a **double-submit token**. This is more useful for securing single-page applications and web APIs — anything where client-side JavaScript is making HTTP requests. Again, the server generates a unique value, which this time is delivered to the browser as a cookie.

```txt
Set-Cookie: xsrf-token=Y6y00DFoXkggaSAFdHOfBHFSKq5GraKZzfbH0wt6"; expires=Thu, 29-Oct-2015 21:25:13 GMT; Max-Age=31449600; Path=/
```

The next request is expected to return the value, which is copied by JavaScript from the cookie into an HTTP header.

```txt
X-XSRF-Token: Y6y00DFoXkggaSAFdHOfBHFSKq5GraKZzfbH0wt6
```

The security of this technique is based on the fact that only a JavaScript program served from the same origin can read the cookie's value. JavaScript running from a rogue webpage hosted elsewhere will not be able to read the cookie. The token cookie will be sent to the server automatically with every request, but that's okay because the server will be looking for a valid token _header_ and will pay no attention to the token _cookie_.

XSRF token cookies must not use the `HttpOnly` flag, since this will lock out JavaScript from accessing the cookies.

In both these anti-forgery mechanisms, short-lived one-time-use tokens are the best. But this can introduce usability problems, for example when a user opens a website in multiple tabs. And it doesn't work so well in web applications that make heavy use of asynchronous requests. Many developers compromise a little on security by issuing anti-forgery tokens that last for whole sessions rather than until the next request.

JSON responses can be protected by pre-pending JSON strings with code that makes it non-executable. For example, you could put in a statement that throws an exception. Putting the whole JSON string in a comment block works, too. JSON obfuscation is easiest to apply as a blanket policy across all server-side and client-side components that transmit and parse JSON. In effect, you develop a unique and proprietary wrapper for all JSON strings served by your application.

Letting sessions expire after short periods of inactivity offers further protection against XSRF exploits, since it narrows a hacker's window of opportunity. And demanding that users resupply their login credentials to confirm any state-changing operations is the ultimate defence against XSRF.
