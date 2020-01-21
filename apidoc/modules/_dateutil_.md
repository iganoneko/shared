[@iganoneko/shared](../README.md) › [Globals](../globals.md) › ["DateUtil"](_dateutil_.md)

# External module: "DateUtil"

Compact date library

## Index

### Interfaces

* [IFromNowResult](../interfaces/_dateutil_.ifromnowresult.md)

### Functions

* [addDay](_dateutil_.md#addday)
* [addHours](_dateutil_.md#addhours)
* [addMinutes](_dateutil_.md#addminutes)
* [addMonth](_dateutil_.md#addmonth)
* [addSeconds](_dateutil_.md#addseconds)
* [addYear](_dateutil_.md#addyear)
* [clearTime](_dateutil_.md#cleartime)
* [clone](_dateutil_.md#clone)
* [eachDays](_dateutil_.md#eachdays)
* [format](_dateutil_.md#format)
* [fromNow](_dateutil_.md#fromnow)
* [getDateOfMonth](_dateutil_.md#getdateofmonth)
* [getTimePerMonth](_dateutil_.md#gettimepermonth)
* [getYearTime](_dateutil_.md#getyeartime)
* [isAfter](_dateutil_.md#isafter)
* [isAfterDay](_dateutil_.md#isafterday)
* [isBefore](_dateutil_.md#isbefore)
* [isBeforeDay](_dateutil_.md#isbeforeday)
* [isEqual](_dateutil_.md#isequal)
* [isEqualDay](_dateutil_.md#isequalday)
* [isLeapYear](_dateutil_.md#isleapyear)
* [validDate](_dateutil_.md#validdate)
* [validHour](_dateutil_.md#validhour)
* [validMinute](_dateutil_.md#validminute)
* [validMonth](_dateutil_.md#validmonth)
* [validSecond](_dateutil_.md#validsecond)
* [validYear](_dateutil_.md#validyear)

## Functions

###  addDay

▸ **addDay**(`date`: Date, `value`: number): *Date*

Add a day

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date | - |
`value` | number |   |

**Returns:** *Date*

___

###  addHours

▸ **addHours**(`date`: Date, `value`: number): *Date*

Add a hours

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date | - |
`value` | number |   |

**Returns:** *Date*

___

###  addMinutes

▸ **addMinutes**(`date`: Date, `value`: number): *Date*

Add a minutes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date | - |
`value` | number |   |

**Returns:** *Date*

___

###  addMonth

▸ **addMonth**(`date`: Date, `value`: number): *Date*

Add a month

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date | - |
`value` | number |   |

**Returns:** *Date*

___

###  addSeconds

▸ **addSeconds**(`date`: Date, `value`: number): *Date*

Add a seconds

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date | - |
`value` | number |   |

**Returns:** *Date*

___

###  addYear

▸ **addYear**(`date`: Date, `value`: number): *Date*

Add a year

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date | - |
`value` | number |   |

**Returns:** *Date*

___

###  clearTime

▸ **clearTime**(`date`: Date): *Date*

Clear time field

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date |   |

**Returns:** *Date*

___

###  clone

▸ **clone**(`date`: Date): *Date*

Clone Date Object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date |   |

**Returns:** *Date*

___

###  eachDays

▸ **eachDays**(`from`: Date, `to`: Date, `callback`: Function): *void*

**Parameters:**

Name | Type |
------ | ------ |
`from` | Date |
`to` | Date |
`callback` | Function |

**Returns:** *void*

___

###  format

▸ **format**(`date`: Date, `format`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |
`format` | string |

**Returns:** *string*

___

###  fromNow

▸ **fromNow**(`from`: Date, `now`: Date): *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`from` | Date | - |
`now` | Date | new Date() |

**Returns:** *object*

* **num**: *number* = Math.floor(diffTime / div)

* **unit**: *any*

___

###  getDateOfMonth

▸ **getDateOfMonth**(`date`: Date): *29 | 28 | 30 | 31*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *29 | 28 | 30 | 31*

___

###  getTimePerMonth

▸ **getTimePerMonth**(`date`: Date): *number*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *number*

___

###  getYearTime

▸ **getYearTime**(`date`: Date): *number*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *number*

___

###  isAfter

▸ **isAfter**(`date1`: Date, `date2`: Date): *boolean*

Is Date1 later than Date2

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date1` | Date | - |
`date2` | Date |   |

**Returns:** *boolean*

___

###  isAfterDay

▸ **isAfterDay**(`date1`: Date, `date2`: Date): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`date1` | Date |
`date2` | Date |

**Returns:** *boolean*

___

###  isBefore

▸ **isBefore**(`date1`: Date, `date2`: Date): *boolean*

Is Date1 before Date2

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date1` | Date | - |
`date2` | Date |   |

**Returns:** *boolean*

___

###  isBeforeDay

▸ **isBeforeDay**(`date1`: Date, `date2`: Date): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`date1` | Date |
`date2` | Date |

**Returns:** *boolean*

___

###  isEqual

▸ **isEqual**(`date1`: Date, `date2`: Date): *boolean*

Is Date1 equal to Date2

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date1` | Date | - |
`date2` | Date |   |

**Returns:** *boolean*

___

###  isEqualDay

▸ **isEqualDay**(`date1`: Date, `date2`: Date): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`date1` | Date |
`date2` | Date |

**Returns:** *boolean*

___

###  isLeapYear

▸ **isLeapYear**(`year`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *boolean*

___

###  validDate

▸ **validDate**(`value`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *boolean*

___

###  validHour

▸ **validHour**(`value`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *boolean*

___

###  validMinute

▸ **validMinute**(`value`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *boolean*

___

###  validMonth

▸ **validMonth**(`value`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *boolean*

___

###  validSecond

▸ **validSecond**(`value`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *boolean*

___

###  validYear

▸ **validYear**(`value`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *boolean*
