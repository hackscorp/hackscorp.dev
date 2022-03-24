# Man-in-the-middle (MITM) vulnerabilities

A man-in-the-middle attack is when someone listens in to the traffic between a web browser and server. The middleman grabs data from the HTTP requests and returns seemingly legitimate responses. The user is none-the-wiser that his interactions with the web service are being intercepted.

Encrypting all communications by using HTTPS resolves most MITM attacks. If passwords and other sensitive information are posted over standard HTTP, they are effectively delivered in the clear and anyone with the right bit of software can listen in and hijack a users' session and any other personal data that is sent over the wire.

In cookie-based authentication systems, it is a good idea to set the `Secure` flag on the session cookies, too. This stops browsers from transmitting the cookies over un-encrypted connections and thus acts as a fail-safe in the event that a secure connection gets unexpectedly downgraded to standard HTTP. 

Be careful also where you save log files, database dumps and backups. These often contain private data including session IDs, so must not be stored in publicly-accessible places.
