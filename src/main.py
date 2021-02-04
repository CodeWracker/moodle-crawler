from dotenv import load_dotenv
import os

from configs import *


if __name__ == "__main__":
    load_dotenv()
    driver = configuration()
    driver.get("https://sistemas.ufsc.br/login?service=https%3A%2F%2Fmoodle.ufsc.br%2Flogin%2Findex.php")
    email = os.getenv("EMAIL")
    senha = os.getenv("SENHA")
    driver = login(email,senha,driver)