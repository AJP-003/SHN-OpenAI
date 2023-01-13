
import cv2
import pytesseract

path = r'SHN-OpenAi\image.png'
image = cv2.imread(path)
text = pytesseract.image_to_string(image)
print(text)
