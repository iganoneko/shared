[@iganoneko/shared](../README.md) › [Globals](../globals.md) › ["PromiseUtil"](_promiseutil_.md)

# External module: "PromiseUtil"

Promise useful features

## Index

### Functions

* [series](_promiseutil_.md#series)
* [timeout](_promiseutil_.md#timeout)

## Functions

###  series

▸ **series**<**T**>(`list`: any): *Promise‹T›*

Execute promises serially

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | any | Promise  |

**Returns:** *Promise‹T›*

___

###  timeout

▸ **timeout**(`time`: number): *Promise‹unknown›*

Promise version of timeout

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`time` | number | 0 | time (msec)  |

**Returns:** *Promise‹unknown›*
