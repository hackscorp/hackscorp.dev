# Forms

## Form submissions

On **successful** submission of forms, the following rules apply:

- The original form MUST be either hidden or rendered non-interactively, and a prominent message MUST be display to indicate the successful completion of the operation.

On **unsuccessful** submission of forms, the following rules apply

- You MUST preserve as much of the user's input as you can. Let users fix the errors by modifying their original action. Do not make them start over from scratch. For example, searches that return no results MUST persist the user's original search query parameters, so users can quickly make adjustments, for example by broadening their search criteria.

- You SHOULD try as much as practically possible to reduce the work required by the user to fix the problem. For example, can you guess the correct action and let the user select it from a list of possible remedies? For example, if the error is that the "city and zip code don't match", can you let the user click a button that changes the selected city so it matches the zip code?
