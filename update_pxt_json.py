import os
import json

# Define the directory to scan and the JSON file to update
locales_dir = "_locales"
json_file_path = "pxt.json"

# --- 1. Find all file paths in the _locales directory ---
found_file_paths = []
print(f"Scanning for files in '{locales_dir}'...")

# os.walk recursively goes through all subdirectories
for dirpath, dirnames, filenames in os.walk(locales_dir):
    for filename in filenames:
        # Create the full path (e.g., _locales/en/strings.json)
        full_path = os.path.join(dirpath, filename)
        
        # Normalize path separators to forward slashes (/) for consistency in JSON
        normalized_path = full_path.replace(os.sep, '/')
        
        found_file_paths.append(normalized_path)

if not found_file_paths:
    print(f"No files found in '{locales_dir}'. Exiting.")
    exit()

print(f"Found {len(found_file_paths)} files.")

# --- 2. Read the pxt.json file ---
try:
    with open(json_file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
except FileNotFoundError:
    print(f"Error: '{json_file_path}' not found.")
    print("Please run this script in the same directory as your pxt.json file.")
    exit()
except json.JSONDecodeError:
    print(f"Error: Could not decode JSON from '{json_file_path}'.")
    exit()

# --- 3. Add new file paths to the "files" list ---

# Ensure the 'files' key exists and is a list
if 'files' not in data or not isinstance(data.get('files'), list):
    data['files'] = []

# Use a set for efficient checking of existing files
existing_files = set(data['files'])
added_count = 0

for file_path in found_file_paths:
    if file_path not in existing_files:
        data['files'].append(file_path)
        added_count += 1
        print(f"  + Added: {file_path}")

if added_count == 0:
    print("All _locales files are already in pxt.json.")
else:
    print(f"Added {added_count} new file paths to the list.")

# --- 4. Write the updated data back to pxt.json ---
try:
    with open(json_file_path, 'w', encoding='utf-8') as f:
        # Dump the modified data back into the file with pretty-printing
        json.dump(data, f, indent=4)
    
    print(f"\nSuccessfully updated '{json_file_path}'.")

except IOError as e:
    print(f"Error writing to '{json_file_path}': {e}")