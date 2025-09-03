when we hardcode sample output in the code it can detect wheater that the player can or cannot reach an enemy and output yes or no based on that if player can reach all yes otherwise no.

This is the initial version of out map validator when we hardcode the output we want to chack here 
output = '''{\"level\": {\"name\": 6, \"difficulty\": 4, \"time\": 600, ........''' 
it will validate the output and check weather it is correct 

How to run hardcode th eoutput u want to check to output = '''{\"level\": {\"name\": 6, \"difficulty\": 4, \"time\": 600, ........''' and run python map_validator.py it will output the status in the terminal as fail or pass

## Map Validator — Initial Version (Hardcoded Input)

Validate a **single map output** by hardcoding it into the script and running the validator.  
This mode is meant for quick checks while developing—no file I/O required.

---

### 🔧 What this does
- Reads the JSON you place in the `output` string.
- Validates the structure/rules of the map.
- Prints **PASS** if valid, otherwise **FAIL** (with details in the terminal).

---

### 🚀 How to Run (Hardcoded Mode)

1. Open `map_validator.py`.
2. Set the `output` variable to the map JSON you want to check (as a triple-quoted string):

   ```python
   # Replace "..." with the rest of your JSON
   output = '''{\"level\": {\"name\": 6, \"difficulty\": 4, \"time\": 600, ...}, 
               \"walls\": [...],
               \"small_obstacles\": [...],
               \"enemies\": [...],
               \"player_pos\": {\"x\": 4, \"y\": 6}}'''

3.Save the file.
4.Run the script:

   ```python
   python map_validator.py
      
