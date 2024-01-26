from odoo import fields, models, api


class BrandSetting(models.TransientModel):
    _inherit = 'res.config.settings'

    custom_brand_color = fields.Char(string="Brand Color",config_parameter='odoo_rebranding.custom_brand_color')
