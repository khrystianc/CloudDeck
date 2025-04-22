from flask import Blueprint, jsonify
from app.utils.templates import get_available_templates

bp = Blueprint('templates', __name__, url_prefix='/api/templates')

@bp.route('/', methods=['GET'])
def list_templates():
  templates = get_available_templates()
  return jsonify({"templates": templates})
