[@iganoneko/shared](../README.md) › [Globals](../globals.md) › ["SStorage"](../modules/_sstorage_.md) › [SStorage](_sstorage_.sstorage.md)

# Class: SStorage

Input/Output to extended sessionStorage

## Hierarchy

* AbstractStorage

  ↳ **SStorage**

## Implements

* IStorage

## Index

### Accessors

* [length](_sstorage_.sstorage.md#length)

### Methods

* [clear](_sstorage_.sstorage.md#clear)
* [getBool](_sstorage_.sstorage.md#getbool)
* [getInt](_sstorage_.sstorage.md#getint)
* [getItem](_sstorage_.sstorage.md#getitem)
* [getNum](_sstorage_.sstorage.md#getnum)
* [getObj](_sstorage_.sstorage.md#getobj)
* [getStr](_sstorage_.sstorage.md#getstr)
* [hasItem](_sstorage_.sstorage.md#hasitem)
* [removeItem](_sstorage_.sstorage.md#removeitem)
* [removeItems](_sstorage_.sstorage.md#removeitems)
* [setItem](_sstorage_.sstorage.md#setitem)

## Accessors

###  length

• **get length**(): *number*

*Overrides void*

**Returns:** *number*

## Methods

###  clear

▸ **clear**(): *void*

*Overrides void*

**Returns:** *void*

___

###  getBool

▸ **getBool**(`key`: string, `altValue?`: boolean): *boolean*

*Inherited from [CStorage](_cstorage_.cstorage.md).[getBool](_cstorage_.cstorage.md#getbool)*

Get value as boolean

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Key Name |
`altValue?` | boolean | Alternative value to be returned when acquisition fails  |

**Returns:** *boolean*

___

###  getInt

▸ **getInt**(`key`: string, `altValue?`: number): *number*

*Inherited from [CStorage](_cstorage_.cstorage.md).[getInt](_cstorage_.cstorage.md#getint)*

Get value as integer

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Key Name |
`altValue?` | number | Alternative value to be returned when acquisition fails  |

**Returns:** *number*

___

###  getItem

▸ **getItem**(`key`: string): *string*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string*

___

###  getNum

▸ **getNum**(`key`: string, `altValue?`: number): *number*

*Inherited from [CStorage](_cstorage_.cstorage.md).[getNum](_cstorage_.cstorage.md#getnum)*

Get value as number

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Key Name |
`altValue?` | number | Alternative value to be returned when acquisition fails  |

**Returns:** *number*

___

###  getObj

▸ **getObj**(`key`: string, `altValue`: any): *any*

*Inherited from [CStorage](_cstorage_.cstorage.md).[getObj](_cstorage_.cstorage.md#getobj)*

Get value as JavaScript Plain Object

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`key` | string | - | Key Name |
`altValue` | any | null | Alternative value to be returned when acquisition fails  |

**Returns:** *any*

___

###  getStr

▸ **getStr**(`key`: string, `altValue`: string): *string*

*Inherited from [CStorage](_cstorage_.cstorage.md).[getStr](_cstorage_.cstorage.md#getstr)*

Get value as string

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`key` | string | - | Key Name |
`altValue` | string | null | Alternative value to be returned when acquisition fails  |

**Returns:** *string*

___

###  hasItem

▸ **hasItem**(`key`: string): *boolean*

*Inherited from [CStorage](_cstorage_.cstorage.md).[hasItem](_cstorage_.cstorage.md#hasitem)*

Check if data exists

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | Key Name |

**Returns:** *boolean*

___

###  removeItem

▸ **removeItem**(`key`: string): *void*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *void*

___

###  removeItems

▸ **removeItems**(`keys`: string[]): *void*

*Inherited from [CStorage](_cstorage_.cstorage.md).[removeItems](_cstorage_.cstorage.md#removeitems)*

Delete multiple values from storage

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keys` | string[] | Key Name |

**Returns:** *void*

___

###  setItem

▸ **setItem**(`key`: string, `value`: any): *void*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*
