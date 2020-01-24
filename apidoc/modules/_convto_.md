[@iganoneko/shared](../README.md) › [Globals](../globals.md) › ["ConvTo"](_convto_.md)

# External module: "ConvTo"

Type conversion module

## Index

### Functions

* [bool](_convto_.md#bool)
* [inte](_convto_.md#inte)
* [num](_convto_.md#num)
* [obj](_convto_.md#obj)
* [str](_convto_.md#str)

## Functions

###  bool

▸ **bool**(`value`: any, `altValue?`: boolean): *boolean*

Convert to boolean

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | Value |
`altValue?` | boolean | Alternative value to be returned when conversion fails  |

**Returns:** *boolean*

___

###  inte

▸ **inte**(`value`: any, `altValue`: number): *number*

Converts to an integer

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | any | - | Value |
`altValue` | number | 0 | Alternative value to be returned when conversion fails  |

**Returns:** *number*

___

###  num

▸ **num**(`value`: any, `altValue`: number): *number*

Convert to a number

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | any | - | Value |
`altValue` | number | 0 | Alternative value to be returned when conversion fails  |

**Returns:** *number*

___

###  obj

▸ **obj**(`value`: any, `altValue`: Object): *Object*

Convert to object

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | any | - | Value |
`altValue` | Object | null | Alternative value to be returned when conversion fails  |

**Returns:** *Object*

___

###  str

▸ **str**(`value`: any, `altValue?`: string): *string*

Converts to a string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | Value |
`altValue?` | string | Alternative value to be returned when conversion fails  |

**Returns:** *string*
