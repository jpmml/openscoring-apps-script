/*
 * Copyright (c) 2014 Villu Ruusmann
 *
 * This file is part of Openscoring
 *
 * Openscoring is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Openscoring is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Openscoring.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Performs model evaluation.
 */
function evaluate(url, arguments){
  var request = {
    "arguments" : arguments
  };

  var params = {
    "method" : "POST",
    "contentType" : "application/json",
    "payload" : JSON.stringify(request)
  };

  var httpResponse = UrlFetchApp.fetch(url, params);

  var response = JSON.parse(httpResponse.getContentText());

  return response["result"];
}

function createArguments(activeFields, values){

  if(values.length != 1){
    throw "Expected 1 data row, but got " + values.length + " data rows";
  } // End if

  if(values[0].length != activeFields.length){
    throw "Expected " + activeFields.length + " data columns, but got " + values[0].length + " data columns";
  }

  var arguments = {};

  for(var column = 0; column < activeFields.length; column++){
    arguments[activeFields[column]] = values[0][column];
  }

  return arguments;
}