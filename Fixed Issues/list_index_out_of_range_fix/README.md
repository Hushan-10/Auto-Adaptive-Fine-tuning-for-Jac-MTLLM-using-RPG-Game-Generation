
# List Index Out of Range — Fix Report

> **TL;DR**  
> Rendering the map could crash with **`list index out of range`** when any wall/obstacle/enemy/player coordinates fell outside the level bounds.  
> The fix adds **bounds checks** before writing into `map_tiles`, preventing invalid indexing.

---

## 📸 Error Screenshot

<!-- 🔽 HOW TO ADD YOUR IMAGE 🔽 -->
1. Create an `images/` folder inside this issue directory (`list_index_out_of_range_fix/`).
2. Upload your screenshot into that folder. For example: `list_index_out_of_range.png`.
3. Update the path below if you use a different name.

<img width="1211" height="354" alt="Screenshot 2025-08-23 165008" src="https://github.com/user-attachments/assets/71345979-e3d6-4e83-982a-f843a79afb17" />
