#-*-coding=utf-8-*-
from flask.globals import request
from flask.templating import render_template
from me import app

@app.route('/', methods=['GET'])
def g_index():
    user_agent = request.headers.get('User-Agent')
    if 'Mobile' in user_agent:
        return render_template('mobile-index.html')
    else:
        return render_template('index.html')