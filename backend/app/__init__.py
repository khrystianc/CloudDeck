from flask import Flask
from app.routes import templates, github, deploy

def create_app():
  app = Flask(__name__)

  # register blueprints
  app.register_blueprint(templates.bp)
  app.register_blueprint(github.bp)
  app.register_blueprint(deploy.bp)

  return app
