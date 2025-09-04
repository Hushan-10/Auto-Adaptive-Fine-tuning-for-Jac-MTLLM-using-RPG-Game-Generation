
## Dataset Arrangement for Fine-Tuning

After generating and validating maps, the selected outputs are stored in a `.jsonl` file.  
Before using this data for fine-tuning a model, we perform some preprocessing and arrangement steps.

### Process

1. **Data Source**  
   - Maps are generated from different difficulty level scripts (e.g., `Difficulty_Level_3.py`).
   - Each generated set has **18 lines** (representing the input/output for a single map).

2. **Example**  
   - If there are **10,000 sets**, then:  
     ```
     10,000 sets × 18 lines = 180,000 total lines
     ```
   - These 180,000 lines correspond to:  
     - **10,000 lines** of Level-01 level generation (input/output pairs)  
     - **10,000 lines** of Level-01 map generation (input/output pairs)  
     - **...** continuing for higher levels  

3. **Balancing Data**  
   - We **choose fewer samples from lower levels** and  
   - **more samples from higher levels**  
   - This ensures the model is exposed to more complex examples during training while still retaining diversity from simpler maps.

4. **Sorting and Selection**  
   - Similar map types are grouped together.  
   - Data is rearranged so that examples of the same type are brought closer, improving training consistency.
  
### How to Run

   Run this is the Terminal
   ```
     python selector.py good_data.jsonl sliced_output.jsonl
   ```
   Them it will save the new arranged data to sliced_output.jsonl
   
### Why This Matters

- **Low levels**: Easier, less diverse → fewer samples needed.  
- **High levels**: More complex, varied → more samples needed.  
- **Final dataset**: Balanced, sorted, and structured for efficient model fine-tuning.
