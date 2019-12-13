###Zendesk visitor authentication example

Demo https://zendesk-visitor-authentication.herokuapp.com/

1. Install and run app
`npm install`
`npm start` or `$ node server.js`

2. Open `http://localhost:3000`

3. Take value of `key` query parameter from the widget code on `https://<your-zendesk-domain>.zendesk.com/agent/admin/widget` in `Setup` tab

    Example:
    ```
    <!-- Start of <your-zendesk-domain> Zendesk Widget script -->
    <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=3409e332-c14f-4921-9e5b-7d4f2a2862a4"> </script>
    <!-- End of <your-zendesk-domain> Zendesk Widget script -->
    ```
    
4. Fill up `Widget key` field with key value (e.g. `3409e332-c14f-4921-9e5b-7d4f2a2862a4` - taken from previous step)

5. Turn on Chat on the page `https://<your-zendesk-domain>.zendesk.com/agent/admin/widget` in `Customization` tab

6. Take value of `Shared secret` from `Visitor authentication` section in `widget security` tab (e.g. `https://<your-zendesk-domain>.zendesk.com/chat/agent#widget/widget_security`).

7. Fill up `Chat widget visitor authentication shared secret` filed with `Shared secret` (e.g. `AF5FEFE052C375B05E1592AF3C1B2D02F31D240C8D5ABF36D8F5516FC6A2CD12`)

8. Click `Sign in` button (the page will be reloaded)

9. Open `https://<your-zendesk-domain>.zendesk.com/chat/agent#visitors/visitor_list/state`

10. Click on row with user (that was signed in on previous step)

11. Expect the user has a green checkmark in bottom-right corner of his avatar

12. Expect Chrome Dev Tools Console tab has not the error messages
