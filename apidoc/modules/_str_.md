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
* [isIPAddress](_str_.md#const-isipaddress)
* [isImageFileName](_str_.md#const-isimagefilename)
* [isNumeric](_str_.md#const-isnumeric)
* [isURLDomain](_str_.md#const-isurldomain)
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

The character string is an email address

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isEmailLike

▸ **isEmailLike**(`value`: any): *boolean*

A character string close to the email address

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isHttpURL

▸ **isHttpURL**(`value`: any): *boolean*

The string is an HTTP URL

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isIPAddress

▸ **isIPAddress**(`value`: any): *boolean*

IP Address

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isImageFileName

▸ **isImageFileName**(`value`: any): *boolean*

String is internet image file name

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

### `Const` isURLDomain

▸ **isURLDomain**(`value`: any): *boolean*

Is the domain of the URL

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any |   |

**Returns:** *boolean*

___

### `Const` isUUID

▸ **isUUID**(`value`: string): *boolean*

The string is a UUID

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
