# Calculator Web App

A Flask built web app for a very simple and basic calculator.

## Features

- a calculator, nothing much else to say.
- for now it can only calculate 2 items at a time, so nothing like (a + b - c)

## Tech Stack

- Python
- Flask
- Gunicorn (for production)
- Docker (optional deployment)

## Setup (Local)

1. Clone the repo: `git clone https://github.com/ARlynky/calculator-webapp`
2. Install dependencies: `pip install -r requirements.txt` (venv is highly recommended)
3. Run: `flask run` (or `gunicorn --bind 0.0.0.0:5000 app:app` for production)
4. Visit the url something like: <http://localhost:5000>

## Setup (Docker)

1. Build: `docker build -t calculator-app .`
2. Run: `docker run -d -p 5000:5000 --name calculator-app calculator-app`
3. Visit the url something like: <http://localhost:5000>

## Why I Built This

To practice Flask, and Docker for backend and devops skills.
Built for my own learning experience in web dev, not really for general use

## Future Plans

- make it able to have multi operations (not just 2 variables like right now)
- Deploy to a VPS
