from selenium import webdriver
from selenium.webdriver.firefox.options import Options

def configuration():
    options = Options()
    options.headless = False
    driver = webdriver.Firefox(executable_path="../geckodriver/geckodriver.exe",options=options)
    return driver

def login(email,password,driver):
    userInput = driver.find_element_by_id("username")
    userInput.send_keys(email)

    passwordInput = driver.find_element_by_id("password")
    passwordInput.send_keys(password)

    button = driver.find_element_by_name("submit")
    button.click()


    return driver
