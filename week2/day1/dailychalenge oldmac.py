class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        output = f"{self.name}'s farm\n\n"
        
        for animal, count in self.animals.items():
            output += f"{animal} : {count}\n"
        
        output += "\n\tE-I-E-I-0!"
        return output

    # Bonus Step 6
    def get_animal_types(self):
        return sorted(self.animals.keys())

    # Bonus Step 7
    def get_short_info(self):
        animal_list = self.get_animal_types()
        plural_animals = []

        for animal in animal_list:
            if self.animals[animal] > 1:
                plural_animals.append(animal + "s")
            else:
                plural_animals.append(animal)

        animals_string = ", ".join(plural_animals[:-1])
        animals_string += " and " + plural_animals[-1]

        return f"{self.name}'s farm has {animals_string}."

    # Bonus Step 8 (kwargs version)
    def add_animals(self, **kwargs):
        for animal, count in kwargs.items():
            if animal in self.animals:
                self.animals[animal] += count
            else:
                self.animals[animal] = count