[@iganoneko/shared](../README.md) › [Globals](../globals.md) › ["Obj"](_obj_.md)

# External module: "Obj"

Object useful features

## Index

### Functions

* [clone](_obj_.md#clone)
* [cloneDeep](_obj_.md#clonedeep)
* [compact](_obj_.md#compact)
* [sortByKeys](_obj_.md#sortbykeys)

## Functions

###  clone

▸ **clone**(`value`: any): *any*

Clone Object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | Object  |

**Returns:** *any*

___

###  cloneDeep

▸ **cloneDeep**(`src`: any): *any*

Clone deep

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`src` | any |   |

**Returns:** *any*

___

###  compact

▸ **compact**<**T**>(`object`: T): *T*

Delete keys without values to make them compact

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | Object  |

**Returns:** *T*

___

###  sortByKeys

▸ **sortByKeys**(`json`: any, `reverse`: boolean): *any*

Sort by keys

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`json` | any | - | JSON Object |
`reverse` | boolean | false | Reverse  |

**Returns:** *any*
