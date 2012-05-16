#-*-coding=utf-8-*-
from flask.templating import render_template
from me import app

@app.route('/', methods=['GET'])
def g_index():
    return render_template('index.html')