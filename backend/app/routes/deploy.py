from flask import Blueprint

bp = Blueprint('deploy', __name__. url_prefix='/api/deploy')
# Placeholder for deployment logic
@bp.route('/', methods=['POST'])
def trigger_deploy():
  data = request.get_json()
  repo_url = data.get("repo_url")

  if not repo_url:
    return jsonify({"error": "Repository URL is required"}), 400

  # placeholder logic
  return jsonify({
    "message": "Deploy triggered",
    "status": "pending",
    "repo": repo_url
  }), 200
