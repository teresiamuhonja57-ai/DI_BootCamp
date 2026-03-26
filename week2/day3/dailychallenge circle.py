import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self._radius = radius
        elif diameter is not None:
            self._radius = diameter / 2
        else:
            self._radius = 0

    # Decorator for radius
    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        self._radius = value

    # Decorator for diameter
    @property
    def diameter(self):
        return self._radius * 2

    @diameter.setter
    def diameter(self, value):
        self._radius = value / 2

    # Compute area
    def area(self):
        return math.pi * self._radius ** 2

    # Print circle
    def __str__(self):
        return f"Circle with radius {self._radius}"

    # Add two circles
    def __add__(self, other):
        return Circle(radius=self._radius + other._radius)

    # Greater than
    def __gt__(self, other):
        return self._radius > other._radius

    # Equal
    def __eq__(self, other):
        return self._radius == other._radius

    # Less than (for sorting)
    def __lt__(self, other):
        return self._radius < other._radius