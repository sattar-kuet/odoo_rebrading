# -*- coding: utf-8 -*-

import json
from odoo import http
from odoo.http import request

class Main(http.Controller):

    @http.route('/brand_color', auth='public', type='json')
    def track_order(self):
        color = {'color': 'red'}
        return json.dumps(color)