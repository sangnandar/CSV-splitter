# CSV Splitter

## Overview
Managing large CSV files can be challenging. This simple Google Apps Script solution helps by splitting large CSV files into smaller, more manageable chunks, while preserving headers and line breaks.

This is a standalone Google Apps Script that runs entirely within Google Drive.

## Key Features
- **Preserves Original Formatting**: Retains the new line character used in the original file.
- **Header Row Duplication**: Ensures each chunk includes the header row for independent usability.

## How It Works
1. The CSV file is stored in Google Drive.
2. The Apps Script:
    - Reads the file.
    - Splits it into chunks of N records (customizable).

## Usage
1. Open the Google Apps Script editor.
2. Copy and paste the script into the editor.
3. Save and authorize the script as needed.
4. Specify the input CSV file and desired chunk size in the script.
5. Run the script to generate the chunks, which will be saved in your Google Drive.
