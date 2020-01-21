[@iganoneko/shared](../README.md) › [Globals](../globals.md) › ["Str"](_str_.md)

# External module: "Str"

String useful features

## Index

### Functions

* [countBytes](_str_.md#countbytes)
* [escapeRegExp](_str_.md#const-escaperegexp)
* [isAlnum](_str_.md#const-isalnum)
* [isAlpha](_str_.md#const-isalpha)
* [isAlphaLower](_str_.md#const-isalphalower)
* [isAlphaUpper](_str_.md#const-isalphaupper)
* [isDigit](_str_.md#const-isdigit)
* [isEmail](_str_.md#const-isemail)
* [isEmailLike](_str_.md#const-isemaillike)
* [isHttpURL](_str_.md#const-ishttpurl)
* [isImageFileName](_str_.md#const-isimagefilename)
* [isNumeric](_str_.md#const-isnumeric)
* [isUUID](_str_.md#const-isuuid)
* [uuid](_str_.md#uuid)

## Functions

###  countBytes

▸ **countBytes**(`str`: string): *number*

Count bytes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string |   |

**Returns:** *number*

___

### `Const` escapeRegExp

▸ **escapeRegExp**(`str`: string): *string*

Escape regexp pattern string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string |   |

**Returns:** *string*

___

### `Const` isAlnum

▸ **isAlnum**(`value`: any): *boolean*

Is the string alphanumeric

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isAlpha

▸ **isAlpha**(`value`: any): *boolean*

Is the string a letter

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isAlphaLower

▸ **isAlphaLower**(`value`: any): *boolean*

Is the string lowercase

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isAlphaUpper

▸ **isAlphaUpper**(`value`: any): *boolean*

Is the string uppercase

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isDigit

▸ **isDigit**(`value`: any): *boolean*

Is the string digit character

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | string value  |

**Returns:** *boolean*

___

### `Const` isEmail

▸ **isEmail**(`value`: any): *boolean*

Is the string an email address

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isEmailLike

▸ **isEmailLike**(`value`: any): *boolean*

Is the string like an email address

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isHttpURL

▸ **isHttpURL**(`value`: any): *boolean*

Is the string an HTTP URL

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isImageFileName

▸ **isImageFileName**(`value`: any): *boolean*

String is image file name

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isNumeric

▸ **isNumeric**(`value`: any): *boolean*

Is the string numeric

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isUUID

▸ **isUUID**(`value`: string): *boolean*

Is the string a UUID

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  uuid

▸ **uuid**(): *string*

generate uuid

**Returns:** *string*
