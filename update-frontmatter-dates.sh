#!/usr/bin/env bash
# Updates the 'updated' frontmatter field in markdown files based on git commit dates
# This ensures dates remain stable across rebuilds and redeploys

set -e

# Find all markdown files in content directory
find content -name "*.md" -type f | while read -r file; do
  # Get the last commit date for this file in ISO 8601 format
  last_commit_date=$(git log -1 --format="%aI" -- "$file" 2>/dev/null || echo "")

  # Skip if file is not tracked or has no commits
  if [ -z "$last_commit_date" ]; then
    continue
  fi

  # Detect frontmatter type
  first_line=$(head -n 1 "$file")

  # Handle TOML frontmatter (starts with +++)
  if echo "$first_line" | grep -q "^+++"; then
    # Check if 'updated' field exists in frontmatter
    if grep -q "^updated = " "$file"; then
      # Update existing 'updated' field
      sed -i "s|^updated = .*|updated = $last_commit_date|" "$file"
    else
      # Add 'updated' field after 'date' field if it exists, or after first line
      if grep -q "^date = " "$file"; then
        sed -i "/^date = /a updated = $last_commit_date" "$file"
      else
        # Insert after opening +++
        sed -i "1 a updated = $last_commit_date" "$file"
      fi
    fi
  # Handle YAML frontmatter (starts with ---)
  elif echo "$first_line" | grep -q "^---"; then
    # Check if 'updated' field exists in frontmatter
    if grep -q "^updated:" "$file"; then
      # Update existing 'updated' field
      sed -i "s|^updated:.*|updated: $last_commit_date|" "$file"
    else
      # Add 'updated' field after 'date' field if it exists, or after first line
      if grep -q "^date:" "$file"; then
        sed -i "/^date:/a updated: $last_commit_date" "$file"
      else
        # Insert after opening ---
        sed -i "1 a updated: $last_commit_date" "$file"
      fi
    fi
  fi
done

echo "✓ Updated frontmatter dates from git history"
