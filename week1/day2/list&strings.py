#challenge1
# Ask for input
number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

# Create empty list
multiples = []

# Generate multiples
for i in range(1, length + 1):
    multiples.append(number * i)

# Print result
print(multiples)
#challenge2
# Ask for input
word = input("Enter a word: ")

# Start with first character
result = word[0]

# Loop through the rest of the string
for i in range(1, len(word)):
    if word[i] != word[i - 1]:
        result += word[i]

# Print result
print(result)
