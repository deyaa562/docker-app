import os
from flask import Flask, request, send_from_directory, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = './uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/creation')
def creation():
    creation_time = os.getenv('BUILD_TIME')
    return jsonify({'creation_time': creation_time})

@app.route('/dynamic')
def dynamic():
    dynamic_value = os.getenv('DYNAMIC_PARAM')
    return jsonify({'dynamic_value': dynamic_value})

@app.route('/dockerfile')
def dockerfile_content():
    return send_from_directory('./', 'Dockerfile')

@app.route('/')
def index():
    return send_from_directory(f'{os.getcwd()}/templates', 'index.html')

@app.route('/put', methods=['PUT'])
def put_file():
    if 'file' not in request.files:
        return 'No file part', 400

    file = request.files['file']
    if file.filename == '':
        return 'No selected file', 400

    if file:
        filename = file.filename
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
        file.save(file_path)
        return 'File uploaded', 200

@app.route('/get')
def get_file():
    filename = request.args.get('filename')
    if not filename:
        return 'No filename provided', 400
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    port = int(os.getenv('BACKEND_PORT', 5000))
    app.run(host='0.0.0.0', port=5000)
