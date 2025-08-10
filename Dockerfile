# Start from an official Python image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the working directory
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all the project files into the container
COPY . .

# Tell the container which port to expose
EXPOSE 5000

# Tell the container what command to run when it starts
CMD ["python", "app.py"]
