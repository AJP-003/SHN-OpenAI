
import cv2
import pytesseract

path = r'Backend\image.png'
image = cv2.imread(path)
text = pytesseract.image_to_string(image)
print(text)
#hello