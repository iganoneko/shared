[@iganoneko/shared](../README.md) › [Globals](../globals.md) › ["Win"](_win_.md)

# External module: "Win"

Window object support

## Index

### Functions

* [getOrientation](_win_.md#getorientation)
* [off](_win_.md#off)
* [on](_win_.md#on)
* [scrollLock](_win_.md#scrolllock)

### Object literals

* [ScreenOrientation](_win_.md#const-screenorientation)

## Functions

###  getOrientation

▸ **getOrientation**(): *string*

Get Orientation

**`see`** ScreenOrientation

**Returns:** *string*

___

###  off

▸ **off**(`eventType`: WindowEventType, `listener`: any): *void*

window.addEventListener Wrapper

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`eventType` | WindowEventType | - |
`listener` | any |   |

**Returns:** *void*

___

###  on

▸ **on**(`eventType`: WindowEventType, `listener`: any, `options?`: any): *void*

window.addEventListener Wrapper

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`eventType` | WindowEventType | - |
`listener` | any | - |
`options?` | any |   |

**Returns:** *void*

___

###  scrollLock

▸ **scrollLock**(`lock`: boolean): *void*

Scroll lock

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lock` | boolean | true=lock  |

**Returns:** *void*

## Object literals

### `Const` ScreenOrientation

### ▪ **ScreenOrientation**: *object*

Screen Orientation Type
checkOrientation() return value definition

###  LANDSCAPE

• **LANDSCAPE**: *string* = "landscape"

###  PORTRAIT

• **PORTRAIT**: *string* = "portrait"
