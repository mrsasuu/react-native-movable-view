﻿# React Native Movable View

Simple component that make your views movable.

Component is using PanResponder, so it is **performance friendly :)**

---

**react-native-movable-view** is proudly sponsored by

<a href="https://nativeforms.com/?utm_source=GitHub&utm_campaign=react-native-movable-view" rel="nofollow" target="_blank">
  <img src="https://raw.githubusercontent.com/venits/native-forms/master/assets/sponsor.png" width="350"><br />
  NativeForms - Build forms, surveys and polls for React Native apps.
</a>

---

### Demo
![Demo](https://raw.githubusercontent.com/venits/react-native-router-flux/master/demo.gif)

### Installation
```javascript
npm install react-native-movable-view --save
```

### Usage
1. Import:
```javascript
import MovableView from 'react-native-movable-view'
```
2.  Wrap your views:
```javascript
<MovableView>
    {views_you_want_to_be_movable}
</MovableView>
```
3. **Specify the spawn location**. Use the props **X** and **Y** to edit where the view will spawn.
```javascript
<MovableView X={'75%'} Y={'20%'}>
    {views_you_want_to_be_movable}
</MovableView>
```

4. **That's all**. Now you can restart your app and enjoy movable views ;) 

*Example:*
```javascript
<MovableView>
     <View style={{
	width: 60, height: 60,
        backgroundColor:'red',
        borderRadius: 30 }} 
     />
</MovableView>
```

### Callbacks

**MovableView** contains 3 basic callbacks so you can have move control about what is happening.

*Example of getting x and y coordinates of our view:*
```javascript
 <MovableView
   onMove={ values => console.warn(values) } > 
   ...
 </MovableView>
```

*Table of all available callbacks:*

|Name|Note|
|---|---|
| onDragStart | Executed when user starts dragging object around | 
| onDragEnd | Executed when user stops dragging. | 
| onMove | Executed when user is dragging view. **Returns current position of view.**  | 

### Advanced Usage #1

You can control if the view can be movable using **disabled** prop.

*Example (this will make view **unmovable**):*
```javascript
 <MovableView disabled={true}>
 ...
 </MovableView>
```
*Default value is **false***.

You can change disabled status any time using **changeDisableStatus()** method.

*For this first of all you need to create reference to your MovableView*:

*Example:*
```javascript
 <MovableView ref={ref => this.move = ref}>
 ...
 </MovableView>
```

Having this reference you can change disabled status like this:
```javascript
 this.move.changeDisableStatus();
```

### Original creator support
In case of any problem or more custom solution, you can email me at:
 
tomasz.przybyl.it@gmail.com

**I hope you will find this module useful. Happy Coding :)**

