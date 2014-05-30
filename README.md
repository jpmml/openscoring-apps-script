Openscoring client library for the Google Apps platform

# Installation and Usage #

1. Start the script editor by clicking **Tools -> Script Editor...** (spreadsheet window)
2. Create a blank script project.
3. Create a new script file by clicking **File -> New -> Script file** (script editor window).
4. Copy and paste the contents of the [Openscoring.gs file] (https://github.com/jpmml/openscoring-apps-script/blob/master/Openscoring.gs) to this newly created script file.
5. Open the default script file "Code.gs". Write a wrapper function for every model that you want to use in your spreadsheet application. Close the script editor when done.
6. Reference wrapper functions by name in your spreadsheet application.

### Wrapper functions ###

Typical responsibilities of a wrapper function:
1. Documentation ([JSDoc] (http://usejsdoc.org/) data format).
2. Encapsulating the URL of the model.
3. Binding input cell values to active field values.
4. Binding the target field value to the output cell value.

Defining a wrapper function for the `DecisionTreeIris.pmml` model: 
```javascript
/**
 * @param sepalLength The length of sepals, in centimetres
 * @param sepalWidth The width of sepals, in centimetres
 * @param petalLength The length of petals, in centimetres
 * @param petalWidth The width of petals, in centimetres
 *
 * @return {string} The species of Iris
 */
function decisionTreeIris(sepalLength, sepalWidth, petalLength, petalWidth){
  // A map containing active fields
  var arguments = {
    "Sepal.Length" : sepalLength,
    "Sepal.Width" : sepalWidth,
    "Petal.Length" : petalLength,
    "Petal.Width" : petalWidth
  };

  // A map containing target and output fields
  var result = evaluate("http://mycompany.com/openscoring/model/DecisionTreeIris", arguments);

  return result["Species"];
}
```

Referencing this wrapper function:
```
=decisionTreeIris(A2, B2, C2, D2)
```

# License #

Openscoring is dual-licensed under the [GNU Affero General Public License (AGPL) version 3.0] (http://www.gnu.org/licenses/agpl-3.0.html) and a commercial license.

# Additional information #

Please contact [info@openscoring.io] (mailto:info@openscoring.io)