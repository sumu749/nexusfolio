#!/usr/bin/env python3
"""
To use your background-removed image:
1. Go to https://www.remove.bg
2. Upload your photo
3. Download the PNG with transparent background
4. Save it as public/images/profile.png

Or, replace this placeholder with your actual image.
"""

from PIL import Image, ImageDraw
import os

# Create public/images directory if it doesn't exist
os.makedirs('public/images', exist_ok=True)

# Create a professional placeholder image (400x500)
img = Image.new('RGBA', (400, 500), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Add a subtle placeholder border
draw.rectangle([10, 10, 390, 490], outline=(100, 100, 100, 50), width=2)
draw.text((200, 250), "Add your\nprofile image\n\nUse remove.bg to\nremove background",
          fill=(100, 100, 100, 100), anchor="mm")

img.save('public/images/profile.png')
print("✓ Placeholder image created at public/images/profile.png")
print("📸 To use your actual photo:")
print("  1. Go to https://www.remove.bg")
print("  2. Upload the photo and download the PNG")
print("  3. Replace public/images/profile.png with the downloaded file")
