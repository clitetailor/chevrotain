var Cursor = cursornext.Cursor;

function parse(source) {
  const cursor = Cursor.from(source);

  return parseJson(cursor);
}

function skipWhitespace(cursor) {
  var execArr = cursor.exec(/[ \t\n\r]+/gy);
  if (execArr) {
    cursor.next(execArr[0].length);
  }
}

function parseJson(cursor) {
  skipWhitespace(cursor);

  const value = parseObject(cursor) || parseArray(cursor);
  if (!value) {
    return;
  }

  skipWhitespace(cursor);

  return {
    type: "Root",
    value: value
  };
}

function parseValue(cursor) {
  return (
    parseObject(cursor) ||
    parseArray(cursor) ||
    parseString(cursor) ||
    parseNumber(cursor) ||
    parseBoolean(cursor) ||
    parseNull(cursor)
  );
}

function parseObject(cursor) {
  var marker = cursor.clone();

  if (!cursor.startsWith("{")) {
    return;
  }
  cursor.next(1);

  skipWhitespace(cursor);

  var fields = [];
  while (!cursor.startsWith("}") && !cursor.isEof()) {
    skipWhitespace(cursor);

    var key = parseKey(cursor);
    if (!key) {
      cursor.moveTo(marker);
      delete marker;
      return;
    }

    skipWhitespace(cursor);

    if (!cursor.startsWith(":")) {
      cursor.moveTo(marker);
      delete marker;
      return;
    }
    cursor.next(1);

    skipWhitespace(cursor);

    var value = parseValue(cursor);
    if (!value) {
      cursor.moveTo(marker);
      delete marker;
      return;
    }

    skipWhitespace(cursor);

    if (cursor.startsWith(",")) {
      cursor.next(1);

      if (cursor.startsWith("}")) {
        cursor.moveTo(marker);
        delete marker;
        return;
      }
    }

    fields.push({
      type: "Field",
      key: key,
      value: value
    });

    skipWhitespace(cursor);
  }

  if (!cursor.startsWith("}")) {
    cursor.moveTo(marker);
    delete marker;
    return;
  }
  cursor.next(1);
  delete marker;

  return {
    type: "Object",
    fields: fields
  };
}

function parseKey(cursor) {
  var token = parseString(cursor);
  if (token) {
    return {
      type: "Key",
      value: token.value
    };
  }
}

function parseArray(cursor) {
  var marker = cursor.clone();

  if (!cursor.startsWith("[")) {
    return;
  }
  cursor.next(1);

  skipWhitespace(cursor);

  var value = [];
  while (!cursor.startsWith("]") && !cursor.isEof()) {
    skipWhitespace(cursor);

    var item = parseValue(cursor);
    if (!item) {
      cursor.moveTo(marker);
      delete marker;
      return;
    }
    value.push(item);

    skipWhitespace(cursor);

    if (cursor.startsWith(",")) {
      cursor.next(1);

      if (cursor.startsWith("]")) {
        cursor.moveTo(marker);
        delete marker;
        return;
      }
    }
  }

  if (!cursor.startsWith("]")) {
    cursor.moveTo(marker);
    delete marker;
    return;
  }
  cursor.next(1);
  delete marker;

  return {
    type: "Array",
    value: value
  };
}

function parseNumber(cursor) {
  var execArr = cursor.exec(/-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/gy);
  if (execArr) {
    cursor.next(execArr[0].length);

    return {
      type: "Number",
      value: execArr[0]
    };
  }
}

function parseNull(cursor) {
  if (cursor.exec(/null/gy)) {
    cursor.next(4);

    return {
      type: "Null"
    };
  }
}

function parseBoolean(cursor) {
  var execArr = cursor.exec(/true|false/gy);
  if (execArr) {
    cursor.next(execArr[0].length);

    return {
      type: "Boolean",
      value: execArr[0] === "true"
    };
  }
}

function parseString(cursor) {
  var execArr = cursor.exec(/"(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/gy);

  if (execArr) {
    cursor.next(execArr[0].length);

    return {
      type: "String",
      value: execArr[0]
    };
  }
}