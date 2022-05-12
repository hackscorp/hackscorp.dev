# Unit test style

Whatever the level of abstraction of the test, unit tests SHOULD be written in a [behavior-oriented style](/standards/testing/runtime/style/bdd) where practical. Use the same basic style as you do for [acceptance tests](/standards/testing/runtime/levels/acceptance). Example: 

```txt
EditTableCellValueModal
  Given the user has entered a value that is out-of-range
    When the user clicks the OK button
      √ Then the edit field is marked as invalid
    When the user clicks the Cancel button
      √ Then the modal is closed
  Given the user has entered a value that is within the accepted range
    When the user clicks the OK button
      √ Then a confirm event broadcasts the value
      √ And the modal is closed
    When the user clicks the Cancel button
      √ Then the modal is closed
```

See the section on [BDD in unit tests](/standards/testing/runtime/style/bdd/unit) for more guidance on this.
