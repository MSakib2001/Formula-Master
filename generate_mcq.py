#Terminal print::  python generate_mcq.py

import random

# Define the number of MCQ options you want to generate (between 20 and 30).
num_questions = random.randint(20, 30)

# Define the options.
options = ['option1', 'option2', 'option3', 'option4']

# Define possible patterns.
patterns = ['rhythmic', 'serial', 'symmetric', 'fully_random']

# Generate and print the MCQ options with an automatically chosen pattern.
for _ in range(num_questions):
    chosen_pattern = random.choice(patterns)  # Choose a pattern randomly.
    random.shuffle(options)  # Shuffle the options randomly.

    if chosen_pattern == 'rhythmic':
        for i in range(len(options)):
            print(options[i])
        print()
    elif chosen_pattern == 'serial':
        for i in range(len(options)):
            print(options[i])
            print()
    elif chosen_pattern == 'symmetric':
        for i in range(len(options) // 2):
            print(options[i])
            print(options[-(i + 1)])
        print()
    else:  # fully_random
        for option in options:
            print(option)
        print()
