#-*-coding=utf-8-*-
from me import app

@app.route('/', methods=['GET'])
def g_index():
    return 'Hello World'