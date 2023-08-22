# Importing Libraries
from flask import Flask, request, jsonify
import requests

# Defining the flask app
app = Flask(__name__)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

# Defining the routes
@app.route('/numbers', methods=['GET'])
def get_numbers():
    urls = request.args.getlist('url')

    result = []

    # Function for fetching data from url
    for url in urls:
        try:
            response = requests.get(url)
            data = response.json()
            numbers = data.get('numbers', [])
            result.extend(numbers)
        except Exception as e:
            print(f"Error fetching data from URL {url}: {e}")

    # Returning as a response with formatting
    return jsonify({'numbers': list(set(result))})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8008)