import random

def get_words_from_file(file_path):
    with open(file_path, "r") as file:
        content = file.read()
        words = content.split()
    return words
def get_random_sentence(length):
    words = get_words_from_file("words.txt")
    sentence_words = []

    for i in range(length):
        sentence_words.append(random.choice(words))

    sentence = " ".join(sentence_words).lower()
    return sentence
def main():
    print("This program generates a random sentence.")

    try:
        length = int(input("Enter sentence length (2–20): "))

        if length < 2 or length > 20:
            print("Error: Length must be between 2 and 20.")
            return

        sentence = get_random_sentence(length)
        print("Random sentence:")
        print(sentence)

    except ValueError:
        print("Error: Please enter a valid number.")

main()
 #exacise2
import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Load JSON string
data = json.loads(sampleJson)

# Access nested salary
salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

# Add birth_date
data["company"]["employee"]["birth_date"] = "1995-06-15"

# Save to file
with open("employee.json", "w") as file:
    json.dump(data, file, indent=4)