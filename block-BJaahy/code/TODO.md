# More about class

- Create a class named `Rectangle` which accepts `width` and `height` as parameter. If there is no parameter default to `300` and `200`.

- Add a method name `description` that will alert a message saying `The rectangle is ${width} x ${height}`

- Create a method inside the class named `calcArea` that will return the area of the rectangle.

- Create a `area` getter method using which we can get the area of the rectangle

- Create a static method named `isSquare` which returns true if the width and height of the rectangle is same. Otherwise return false. This method should only be called on the class not on the instance of the class.

- Create two instance of the `Rectangle` class

- Check the `area` getter method on both rectangle

- Check the `isSquare` method on both rectangle

## User Class

- Create a `User` class that accepts `firstName` and `lastName` property

- Create a getter method named `fullName` that will return the full name of the person.

- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`

- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

- Create two instance of the `User` class

- Check by using the `fullName` setter method with name bigger than 5 characters.

- Check by using the `fullName` setter method with name less than 5 characters.

- Check the `fullName` using getter

- Check the `nameContains` method
